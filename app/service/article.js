const Service = require('egg').Service
const fs = require('fs')
const path = require('path')

module.exports = class ArticleService extends Service {
  async getArticle(id) {
    const { ctx, config, model } = this
    if(id) {
      return await ctx.model.Article.findOne({ articleId: id }).exec();
    } else {
      return await ctx.model.Article.find({ }).exec();
    }
  }
  async addArticle(form) {
    const { ctx, config, model } = this
    const message = ctx.model.Message();

    message.title = form.title;
    message.desc = form.desc;
    message.content = form.content;

    return message.save();
  }
  async updateArticle(id) {
    const { ctx, config, model } = this
    const query = { articleId: id };
    const update = { starCount: 1 };
    return this.ctx.model.Article.findByIdAndUpdate(query, update).exec();
  }
  async deleteArticle(userId, articleId) {
    const { ctx, config, model } = this
    const query = { userId: userId, articleId: articleId };
    return this.ctx.model.ArticleCollect.remove(query).exec();
  }
}