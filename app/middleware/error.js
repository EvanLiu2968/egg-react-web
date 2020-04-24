
module.exports = (options) => {
  return async function (ctx,next) {
    const config = ctx.app.config
    const accept = ctx.get('Accept')
    
    try{
      await next()
    } catch(e) {
      console.error(e.stack);
      ctx.logger.info(e.stack)
      if(/^text\/html/.test(accept)){
        let errorType = '500';
        await ctx.render('error/index.js', {
          title: `${errorType} - ${config.siteName}`,
          keywords: `${errorType}`,
          description: `${errorType}`,
          errorType: errorType,
          errorStack: e.stack
        })
      }else if(/^application\/json/.test(accept)){
        ctx.status = 200;
        ctx.body = {
          code: '01',
          message: '服务异常',
          data: null
        };
      }
    }
    // await next()
    if (ctx.fresh) {
      ctx.status = 304;
      ctx.body = null;
    }
    if(ctx.status == 404){
      if(/^text\/html/.test(accept)){
        let errorType = '404';
        await ctx.render('error/index.js', {
          title: `${errorType} - ${config.siteName}`,
          keywords: `${errorType}`,
          description: `${errorType}`,
          errorType: errorType
        })
      }
    }
  };
};