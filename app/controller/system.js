'use strict';
module.exports = app => {
  return class SystemController extends app.Controller {
    async home() {
      const { ctx, config, service } = this;
      await ctx.renderClient('admin/index.js', {
        ctx,
        title: `管理系统 - ${config.siteName}`,
        keywords: `后台管理系统`,
        description: `后台管理系统`
      })
    }
  };
};