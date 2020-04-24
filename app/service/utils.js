const Service = require('egg').Service
const htmlToPDF = require('../../scripts/htmlToPDF')

module.exports = class UtilsService extends Service {
  async htmlToPDF(url) {
    const { ctx, config, model } = this
    const res = await htmlToPDF(url, {
      shouldWait: false,
      key_path: 'pdf',
      env: 'dev'
    })
    return res
  }
  // 最后一个星期六上班
  async getLastSaturdayDate() {
    const today = new Date();
    const lastMonthDay = new Date(today.getFullYear(), today.getMonth() + 1, 0, 23);
    const date = lastMonthDay.getDate() - (lastMonthDay.getDay() + 1);
    return date
  }
}
