'use strict';
module.exports = app => {
  return class ApiController extends app.Controller {
    async photos() {
      const { ctx, service } = this;
      try{
        let data = await service.md.getPhoto();
        this.success(data)
      }catch(e){
        this.error(e)
      }
    }
    async articles() {
      const { ctx, service } = this;
      try{
        let data = {};
        if(ctx.params.id){
          data = await service.md.getMarkdown(ctx.params.id);
        }
        else if(ctx.request.body.file){
          data = await service.md.getMarkdown(ctx.request.body.file);
        }
        else{
          data = await service.md.getBlog();
        }
        this.success(data)
      }catch(e){
        this.error(e)
      }
    }
    async subscription() {
      const { ctx, service } = this;
      const { category, id } = ctx.params
      try{
        let data = {};
        if(category == 'zhihu'){
          data = await service.spider.zhihu(id)
        }
        else if(category == 'music'){
          data = await service.spider.music(id)
        }
        this.success(data)
      }catch(e){
        this.error(e)
      }
    }
    async dynamic() {
      const { ctx, service } = this;
      const { category, id } = ctx.params
      try{
        let data = {};
        if(category == 'zhihu'){
          data = await service.spider.zhihu(id)
        }
        else if(category == 'music'){
          data = await service.spider.music(id)
        }
        this.success(data)
      }catch(e){
        this.error(e)
      }
    }
    async visitorInfo() {
      const { ctx, service } = this;
      try{
        let data = await service.statistic.getVisitor()
        this.success(data)
      }catch(e){
        this.error(e)
      }
    }
    async setVisitorInfo() {
      const { ctx, service } = this;
      try{
        let data = await service.statistic.setVisitor()
        this.success(data)
      }catch(e){
        this.error(e)
      }
    }
    async serverInfo() {
      const { ctx, service } = this;
      try{
        let data = await service.statistic.getServer()
        this.success(data)
      }catch(e){
        this.error(e)
      }
    }
    async cloverHook() {
      const { ctx, service } = this;
      try{
        service.md.cloverHook()
        this.success('hello, github!')
      }catch(e){
        this.response('01')
        console.log(e.stack)
        this.logger.error(e.stack);
      }
    }
    async htmlToPDF() {
      const { ctx, service } = this;
      const { url } = ctx.request.body
      try {
        const res = await service.utils.htmlToPDF(url)
        this.success(res)
      } catch (e){
        this.response('01')
        console.log(e.stack)
        this.logger.error(e.stack);
      }
    }
    // 企业微信机器人
    async wxRobotHook() {
      const { ctx, service } = this;
      const { key = '7bb460f8-7029-4ac0-a7f4-bec87cb11586' } = ctx.query
      const moment = require('moment')
      const hookData = ctx.request.body
       const pushMessage = hookData.commits.map(v => {
        return `> <font color=\"comment\">${v.author.name} ${v.author.email} ${moment(v.timestamp).format('YYYY/MM/DD h:mm:ss')}</font> \n ${v.message.replace(/#/g, ' ')}\n`
      })
      const data = {
        msgtype: 'markdown', // text markdown image news
        markdown: {
          content:
`
来自 Gitlab Repository <font color=\"warning\">${hookData.repository.name}</font> 消息，请相关同事注意。\n
> events: <font color=\"info\">${hookData.event_name}  ${hookData.ref}</font>
> author: <font color=\"info\">${hookData.user_name}(${hookData.user_username})</font>
> commits: <font color=\"info\">${hookData.total_commits_count}</font>\n
**commits message**：\n
${pushMessage.join('\n')}
`
        }
      }
      const axios = require('axios')
      await axios({
        method: 'post',
        url: `https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=${key}`,
        data
      })

      this.ctx.status = 200;
      this.ctx.body = data;
    }
  };
};