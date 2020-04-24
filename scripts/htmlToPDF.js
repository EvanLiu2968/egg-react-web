const path = require('path')
const puppeteer = require('puppeteer')

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = async function htmlToPDF(url, options = {}) {
  if (!url) {
    throw new Error('require a page url.');
  }
  const startTime = new Date().getTime()
  const filename = options.filename || require('crypto').createHash('md5').update(url + new Date().getTime()).digest('hex') + '.pdf'
  const filePath = path.join(__dirname, './pdfFile/', filename)

  const browser = await puppeteer.launch({
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage'
    ]
  })
  try {
    const page = await browser.newPage();
    await page.goto(url, {waitUntil: 'networkidle2'});
    // 单页异步生成的内容时
    if (options.shouldWait){
      await page.waitForSelector('#pdf-done', {timeout: 60000}) // 等待spa应用渲染
    } else {
      await sleep(500)
    }

    await page.pdf({path: filePath, format: 'A4', scale: 1, printBackground: true});
    await page.close();
    browser.disconnect();
    await browser.close();
  } catch (error) {
    console.log(error)
  }
}
