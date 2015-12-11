Package.describe({
  name: 'smoiz:lastfm-api',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'A Meteor package wrapper for the node package lastfm.',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles('lastfm-api.js');
  api.export('LastFmNode', 'server');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('smoiz:lastfm-api');
  api.addFiles('tests/lastfm-api-tests.js', 'server');
});

Npm.depends({
  lastfm: "0.9.2"
});
