const Service = require('egg').Service
const fs = require('fs')
const _ = require('lodash')
const axios = require('axios')
const os = require("os")
const useragent = require("useragent")

let visitorData

module.exports = class StatisticService extends Service {
  async setVisitor() {
    const { ctx, config, model } = this
    const url = `https://www.yanshuo.me/r/zhihuhot/hot`;
    let ip = ctx.req.headers['x-real-ip'] || ctx.request.ip;
    let res = await axios.get(`http://ip.taobao.com/service/getIpInfo.php?ip=${ip}`);
    if(!res.data.code == 0) return;
    if(!fs.existsSync(config.localDataDir)){
      fs.mkdirSync(config.localDataDir)
    }
    if(!visitorData && fs.existsSync(config.localDataDir + 'visitor.json')){
      const text = await fs.readFileSync(config.localDataDir + 'visitor.json')
      visitorData = JSON.parse(text)
    } else {
      visitorData = {}
    }
    if(visitorData[ip]){
      visitorData[ip] = _.merge({}, visitorData[ip], res.data.data)
    }else{
      visitorData[ip] = res.data.data || {}
    }
    visitorData[ip]['visitTime'] = new Date().getTime()
    visitorData[ip]['pv'] = visitorData[ip]['pv'] ? (visitorData[ip]['pv']+1) : 1
    visitorData[ip]['userAgent'] = useragent.parse(ctx.get('user-agent')).toString();
    fs.writeFile(config.localDataDir + 'visitor.json', JSON.stringify(visitorData),  (err) => {
      if (err) {
        ctx.logger.error(err)
      }
    });
  }
  async getVisitor() {
    const { ctx, config, model } = this
    let list =[]
    if(fs.existsSync(config.localDataDir + 'visitor.json')){
      var visitorData = await fs.readFileSync(config.localDataDir + 'visitor.json')
      visitorData = JSON.parse(visitorData)
      Object.keys(visitorData).forEach((key)=>{
        list.push(visitorData[key])
      })
      list.sort((a, b) => b.visitTime - a.visitTime)
    }
    return {
      visitorList: list
    }
  }
  async addVisitor(vistor) {
    const db = this.app.mysql;
    let data = {
      ip: vistor.ip,
      visitTime: vistor.visitTime,
      pv: 0,
      userAgent: 0
    };

    const result = await db.insert('visitor', data);
    const insertSuccess = result.affectedRows === 1;
    if (insertSuccess) {
      return Object.assign({
        id: insertSuccess.insertId,
      }, data);
    }
  }
  async getServer() {
    const { ctx, config, model } = this
    return {
      platform: os.platform(),
      totalmem: os.totalmem(),
      freemem: os.freemem(),
      cpus: os.cpus()
    }
  }
}