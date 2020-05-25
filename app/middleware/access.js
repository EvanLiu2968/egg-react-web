const path = require('path');
const util = require('util');

module.exports = (options) => {
  const skipExt = [ '.png', '.jpeg', '.jpg', '.ico', '.gif' ];
  return async function (ctx,next) {
    const start = new Date().getTime();

    await next()

    const rs = Math.ceil(new Date().getTime() - start);

    ctx.set('X-Response-Time', rs);

    const ext = path.extname(ctx.url).toLocaleLowerCase();
    const isSkip = skipExt.indexOf(ext) !== -1 && ctx.status < 400;

    if (!isSkip) {
      const ip = ctx.get('X-Real-IP') || ctx.ip;
      const port = ctx.get('X-Real-Port');
      const method = ctx.method;
      const url = ctx.url;
      const status = ctx.status;
      const length = ((ctx.length || 0)/1000).toFixed(1);
      // const ua = ctx.get('user-agent') || '-';
      const message = util.format('response IP:%s %s status:%s %skb %s', ip, method, status, length, url);
      console.log(message);
      ctx.logger.info(message);
    }
  };
};
