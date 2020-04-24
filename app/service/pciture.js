const Service = require('egg').Service
const fs = require('fs')
const path = require('path')

module.exports = class PictureService extends Service {
  async getPicture(id) {
    const { ctx, config, model } = this
    if(id) {
      return await ctx.model.Picture.findOne({ pictureId: id }).exec();
    } else {
      return await ctx.model.Picture.find({ }).exec();
    }
  }
  async addPicture(form) {
    const { ctx, config, model } = this
    const message = ctx.model.Message();

    message.title = form.title;
    message.desc = form.desc;
    message.url = form.url;

    return message.save();
  }
  async updatePicture(id) {
    const { ctx, config, model } = this
    const query = { pictureId: id };
    const update = { starCount: 1 };
    return this.ctx.model.Picture.findByIdAndUpdate(query, update).exec();
  }
  async deletePicture(userId, pictureId) {
    const { ctx, config, model } = this
    const query = { userId: userId, pictureId: pictureId };
    return this.ctx.model.PictureCollect.remove(query).exec();
  }
}