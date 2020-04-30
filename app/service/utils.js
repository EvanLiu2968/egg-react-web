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
  async isVacationDate() {
    const vacations = [
      '05-01', '05-02', '05-03', '05-10', '05-17', '05-24', '05-31',
      '06-07', '06-14', '06-21', '06-28', 
    ]
    const format = val => val > 9 ? val : '0' + val
    const now = new Date()
    const date = `${format(now.getMonth()+1)}-${format(now.getDate())}`
    return vacations.includes(date)
  }
}
