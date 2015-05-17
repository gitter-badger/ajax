'use strict';

var gulp = require( 'gulp' );
var karma = require( 'karma' ).server;
var jshint = require( 'gulp-jshint' );
var uglify = require( 'gulp-uglify' );
var plato = require( 'plato' );
var exec = require( 'child_process' ).exec;

var coreFiles = 'src/**/*.js';
var allFiles = '{test/src}/**/*.js';

gulp.task( 'lint', function() {
  gulp.src( allFiles )
    .pipe( jshint() )
    .pipe( jshint.reporter( 'default' ) );
});

gulp.task( 'test', [ 'lint' ], function( done ) {
  karma.start({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done );
});

gulp.task( 'webserver', function( done ) {
  require( './api/app' );
  exec( 'python -m SimpleHTTPServer 9001', function() {
    console.log( 'Server listen on port 9001' );
    done();
  });
});

gulp.task( 'watch', [ 'test' ], function() {
  gulp.watch( '{test,src}/**/*.js', [ 'test' ]);
});

gulp.task( 'plato', function( done ) {
  var files = [ coreFiles ];
  var outputDir = './plato';
  var options = { title: '#Ajax' };
  function callback( report ) { done(); };
  plato.inspect( files, outputDir, options, callback );
});

gulp.task( 'deploy', function( done ) {
  console.log( 'Deploying...' );
  var date = new Date( Date.now() );
  var commands = [
    'gulp plato',
    'rm -rf .tmp',
    'mkdir .tmp',
    'cd .tmp',
    'git clone git@github.com:reportz/ajax.git ./',
    'cp -R ../coverage ../plato ./',
    'git add -A',
    'git commit -m "Update reports at ' + date + ' "',
    'git push origin gh-pages',
    'cd ../',
    'rm -rf .tmp'
  ];
  exec( commands.join( ' && ' ), function( err, stdout, stderr ) {
    console.log( 'Done!' );
    process.exit(1);
    done();
  });
});

gulp.task( 'default', [ 'webserver', 'watch' ]);