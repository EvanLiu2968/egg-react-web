'use strict';
const fs = require('fs');

module.exports = app => {
  return class PageController extends app.Controller {
    async index() {
      const { ctx, config, service } = this;
      await ctx.render('index/index.js', {
        title: `首页 - ${config.siteName}`,
        keywords: `首页,EvanLiu,evanliu2968,捕风捉影`,
        description: '捕风捉影的首页',
        state: {
          title: `首页 - ${config.siteName}`,
          keywords: `首页,EvanLiu,evanliu2968,捕风捉影`,
          description: '捕风捉影的首页',
          initialState: true,
          isMobile: ctx.helper.isMobile.apply(ctx)
        }
      })
    }
    async photo() {
      const { ctx, config, service } = this;
      let res = await service.md.getPhoto();
      await ctx.render('photo/index.js', {
        title: `照片 - ${config.siteName}`,
        keywords: `照片,EvanLiu,evanliu2968,捕风捉影`,
        description: `捕风捉影的照片`,
        photos: res.photoList,
        isMobile: ctx.helper.isMobile.apply(ctx)
      })
    }
    async article() {
      const { ctx, config, service } = this;
      let res = await service.md.getBlog();
      let article;
      if(!ctx.params.category){
        ctx.redirect('/article/learning')
        return;
      }
      let title = '文章';
      res.category.forEach((item)=>{
        if(item.category === ctx.params.category){
          title = item.title
        }
      })
      if(ctx.params.title){
        let file = `${ctx.params.category}/${ctx.params.title}`
        title = decodeURIComponent(ctx.params.title)
        try{
          article = await service.md.getMarkdown(file);
        }catch(e){
          this.logger.error(e)
        }
      }
      await ctx.render('article/index.js', {
        title:`${title} - ${config.siteName}`,
        keywords: `${title},EvanLiu,evanliu2968,捕风捉影`,
        description: title,
        categoryName: ctx.params.category,
        category: res.category,
        article: article
      })
    }
    async error() {
      const { ctx, config, service } = this;
      let errorType = ctx.params.errorType || '404';
      await ctx.render('error/index.js', {
        title: `${errorType} - ${config.siteName}`,
        keywords: `${errorType}`,
        description: `${errorType}`,
        errorType: errorType
      })
    }
    async about() {
      const { ctx, config, service } = this;
      await ctx.renderClient('about/index.js', {
        ctx,
        title: `网站介绍 - ${config.siteName}`,
        keywords: `网站介绍,捕风捉影`,
        description: `捕风捉影的网站介绍`
      })
    }
    async list() {
      const { ctx, config, service } = this;
      await ctx.render('list/index.js', {
        title: `应用 - ${config.siteName}`,
        keywords: `应用`,
        description: `应用列表 for www.evanliu2968.com.cn.`
      })
    }
    async doc() {
      const { ctx, config, service } = this;
      let markdown = fs.readFileSync(config.baseDir + '/docs/API.md','utf-8')
      await ctx.render('doc/index.js', {
        title: `API文档 - ${config.siteName}`,
        keywords: `API文档,APIs,docs`,
        description: `Web APIs docs.`,
        markdown: ctx.helper.markdown.render(markdown)
      })
    }
    async chart() {
      const { ctx, config, service } = this;
      await ctx.render('chart/index.js', {
        title: `话题关系图 - ${config.siteName}`,
        keywords: `知乎话题关系图,chart,echarts`,
        description: `Big Data Show with echarts.`
      })
    }
    async subscription() {
      const { ctx, config, service } = this;
      await ctx.render('subscription/index.js', {
        title: `RSS订阅 - ${config.siteName}`,
        keywords: `RSS订阅,subscription,spider`,
        description: `My RSS subscription from my spider.`,
        url: ctx.url,
        isMobile: ctx.helper.isMobile.apply(ctx)
      })
    }
    async metaphysics() {
      const { ctx, config, service } = this;
      await ctx.render('metaphysics/index.js', {
        title: `小程序 - ${config.siteName}`,
        keywords: `小程序,玄学调优,Metaphysics,Calculator`,
        description: `Metaphysics Calculator.`,
        url: ctx.url,
        isMobile: ctx.helper.isMobile.apply(ctx)
      })
    }
    async qrcode() {
      const { ctx, config, service } = this;
      await ctx.render('qrcode/index.js', {
        title: `二维码生成器 - ${config.siteName}`,
        keywords: `二维码生成器,qrcode`,
        description: `二维码生成器`,
        isMobile: ctx.helper.isMobile.apply(ctx)
      })
    }
    async search() {
      const { ctx, config, service } = this;
      const res = await service.spider.search(ctx.query)
      await ctx.render('search/index.js', {
        title: `搜索 - ${config.siteName}`,
        keywords: `搜索,search`,
        description: `搜索,search`,
        isMobile: ctx.helper.isMobile.apply(ctx),
        query: ctx.query,
        result: res
      })
    }
    async pdf() {
      const { ctx, config, service } = this;
      await ctx.render('pdf/index.js', {
        title: `PDF生成 - ${config.siteName}`,
        keywords: `PDF生成`,
        description: `PDF生成`,
        isMobile: ctx.helper.isMobile.apply(ctx),
      })
    }
  };
};