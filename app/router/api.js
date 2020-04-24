module.exports = app => {
  const { router, controller, config, middleware } = app;
  
  // local apis
  router.post('/api/photos', controller.api.photos);
  router.post('/api/articles', controller.api.articles);
  router.post('/api/articles/:id', controller.api.articles);
  router.post('/api/subscription/:category', controller.api.subscription);
  router.post('/api/visitorInfo', controller.api.visitorInfo);
  router.post('/api/serverInfo', controller.api.serverInfo);
  router.post('/api/setVisitorInfo', controller.api.setVisitorInfo);
  router.post('/api/htmlToPDF', controller.api.htmlToPDF);

  // proxy apis
  // router.get('/proxy(/.+)?', controller.proxy.api);

  // open apis (ignore security)
  router.post('/cloverHook', controller.api.cloverHook);
  router.post('/wxRobotHook', controller.api.wxRobotHook);
};