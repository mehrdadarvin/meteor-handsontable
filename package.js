Package.describe({
  name: 'mearvin:handsontable',
  version: '0.14.1',
  // Brief, one-line summary of the package.
  summary: 'Handsontable is a minimalistic approach to Excel-like table editor in HTML & jQuery',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/mehrdadarvin/meteor-handsontable.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  if (api.versionsFrom) {
    api.versionsFrom('0.9.0');
  }
  api.use('jquery', 'client');
  api.addFiles([
    'lib/handsontable.full.min.js',
    'lib/handsontable.full.css'
  ],'client');
  api.export(['Handsontable'], 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('mearvin:handsontable');
  api.addFiles('handsontable-tests.js');
});
