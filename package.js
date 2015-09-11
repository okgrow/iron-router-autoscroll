Package.describe({
  name: 'okgrow:iron-router-autoscroll',
  version: '0.0.11',
  summary: 'Deprecated - pulls in okgrow:router-autoscroll',
  git: 'https://github.com/okgrow/iron-router-autoscroll',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');
  api.use('iron:router@1.0.7', 'client', {weak: true});
  api.use('kadira:flow-router@2.4.0', 'client', {weak: true});
  api.use('okgrow:router-autoscroll@0.0.12');
  // the constant RouterAutoScroll is exported
  api.imply('okgrow:router-autoscroll');
  api.addFiles('iron-router-autoscroll-deprecated.js');
  // also RouterAutoScroll is aliased to IronRouterAutoscroll and exported
  api.export('IronRouterAutoscroll');
});
