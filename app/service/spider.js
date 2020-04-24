const Service = require('egg').Service
const fs = require('fs')
const path = require('path')
const axios = require('axios')
const cheerio = require('cheerio')


module.exports = class SpiderService extends Service {
  async zhihu() {
    const { ctx, config, model } = this
    const url = `https://www.yanshuo.me/r/zhihuhot/hot`
    
    let res = await axios.get(url)
    let $ = cheerio.load(res.data);
    let list = [];
    $('.zhihuhot').each(function(){
      var $self = $(this);
      list.push({
        id: $self.attr('id'),
        url: $self.find('.summary .title>a').attr('href'),
        title: $self.find('.summary .title>a').text(),
        description: $self.find('.summary .excerpt').text(),
        voteCount: $self.find('.post-vote .vote-count').text().replace(/[^0-9]/g,''),
        coverImg: 'http:'+$self.find('.post-img img').attr('data-original'), //图片cdn的https做了域名限制
        timeAgo: $self.find('.summary .askDate').text(),
      })
    })
    return { hotList: list }
  }
  async music() {
    const { ctx, config, model } = this
    const url = `http://music.163.com/playlist?id=492217853`
    
    let res = await axios.get(url)
    let $ = cheerio.load(res.data);
    let list = [];
    $('.m-table tbody>tr').each(function(){
      var $self = $(this);
      list.push({
        id: $self.attr('id'),
        name: $self.find('.ttc>.txt>a>b').attr("title"),
        songUrl: 'http://music.163.com' + $self.find('.ttc>.txt>a').attr("href"),
        lrcUrl: '',
        cover: '',
        singer: $self.find('>td:nth-child(4)>.text').attr('title'),
        singerUrl: 'http://music.163.com' + $self.find('>td:nth-child(4)>.text a').attr('href'),
        album: $self.find('>td:nth-child(5)>.text a').attr('title'),
        albumUrl: 'http://music.163.com' + $self.find('>td:nth-child(5)>.text a').attr('href'),
        duration: $self.find('.s-fc3>.u-dur').text(),
      })
    })
    let htmlList = $('ul.f-hide').html()
    htmlList = htmlList.replace(/href="\//g,'target="_blank" href="http://music.163.com/')
    return { 
      playlist: list,
      htmlList: htmlList
    }
  }
  async search(query) {
    const url = `http://www.baidu.com/s?wd=${encodeURIComponent(query.wd)}`
    let res = await axios.get(url)
    let $ = cheerio.load(res.data);
    let html = '';
    $('#content_left .result').each(function(){
      var $self = $(this);
      html += `<div class="search_item">${$self.html()}</div>`
    })
    return html
  }
}