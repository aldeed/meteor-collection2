/* global Package */

Package.describe({
  name: "aldeed:collection2",
  summary: "Automatic validation of Meteor Mongo insert and update operations on the client and server",
  version: "3.2.1",
  documentation: "../../README.md",
  git: "https://github.com/aldeed/meteor-collection2.git"
});

Npm.depends({
  clone: '2.1.2',
  'lodash.isempty': '4.4.0',
  'lodash.isequal': '4.5.0',
  'lodash.isobject': '3.0.2',
});

Package.onUse(function(api) {
  api.use('mongo@1.10.0');
  api.imply('mongo');
  api.use('minimongo@1.6.0');
  api.use('ejson@1.1.1');
  api.use('raix:eventemitter@0.1.3 || 1.0.0');
  api.use('ecmascript@0.14.3');
  api.use('tmeasday:check-npm-versions@0.3.2');

  // Allow us to detect 'insecure'.
  api.use('insecure@1.0.7', {weak: true});

  api.mainModule('collection2.js');

  api.export('Collection2');
});
