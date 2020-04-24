module.exports = app => {
  const { router, controller, config, middleware } = app;
  
  // pages
  router.get('/', controller.page.index);
  router.get('/photo', controller.page.photo);
  router.get('/article', controller.page.article);
  router.get('/article/:category', controller.page.article);
  router.get('/article/:category/:title', controller.page.article);
  router.get('/admin(/.+)?', controller.system.home);
  router.get('/error/:errorType', controller.page.error);
  router.get('/list', controller.page.list);
  router.get('/about', controller.page.about);
  router.get('/doc', controller.page.doc);
  router.get('/chart', controller.page.chart);
  router.get('/subscription', controller.page.subscription);
  router.get('/metaphysics', controller.page.metaphysics);
  router.get('/qrcode', controller.page.qrcode);
  router.get('/search', controller.page.search);
  router.get('/pdf', controller.page.pdf);
};