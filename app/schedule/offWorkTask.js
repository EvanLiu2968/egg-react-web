module.exports = {
  schedule: {
    // interval: '10m', // 10 分钟间隔
    // cron: '0 0 */3 * * *', // 每3小时准点执行一次
    cron: '0 0 18 * * 1,2,3,4,5,6', // 每天18:00准点执行一次
    type: 'worker', // all | worker
    disable: false,
    immediate: false
  },
  async task(ctx) {
    const key = '96fc75d5-4456-44a4-b013-04ad58386279'
    const url = `https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=${key}`
    const axios = require('axios')

    const { getLastSaturdayDate } = ctx.service.utils
    const today = new Date()
    const weekDay = today.getDay()
    const lastSaturdayDate = getLastSaturdayDate()

    if (weekDay == 6 && lastSaturdayDate !== (today.getDate()+1) ) return

    await axios({
      method: 'post',
      url,
      data: {
        msgtype: 'text',
        text: {
          mentioned_list: ["@all"],
          content: '部门小伙伴们抽空写一下日报、更新Teambition任务状态，18:40前完成~'
        }
      }
    })
    await axios({
      method: 'post',
      url,
      data: {
        msgtype: 'markdown',
        markdown: {
          content: '[星火在线1对1项目日报](https://docs.qq.com/sheet/DUFV3cGVPTHBhUWpL)\n[Teambition项目迭代](https://www.teambition.com/project/5e061d4a3c30e63a61ff9c92/story/section/all)'
        }
      }
    })

    if (weekDay == 5 && lastSaturdayDate === today.getDate()) {
      await axios({
        method: 'post',
        url,
        data: {
          msgtype: 'news',
          news: {
            articles: [
              {
                title: "温馨提示",
                description: "明天是本月最后一个周六，明天记得来上班哦~",
                url: "https://xhvip100.com",
                picurl: "https://image-cdn.xhvip100.com/prod/feedback/5e7471dcef1c290001a0e16b/5e7471e22538dacd649290b6.jpg"
              }
            ]
          }
        }
      })
    }
  },
}
