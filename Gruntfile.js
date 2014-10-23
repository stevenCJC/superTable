/*
 * GraceJS
 * https://github.com/stevenCJC/GraceJS
 *
 * Copyright (c) 2014 Steven
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

	function readOptionalJSON( filepath ) {
		var data = {};
		try {
			data = grunt.file.readJSON( filepath );
		} catch ( e ) {}
		return data;
	}

	var gzip = require( "gzip-js" ),
		srcHintOptions = readOptionalJSON( ".jshintrc" );

	// The concatenated file won't pass onevar
	// But our modules can
	delete srcHintOptions.onevar;

	grunt.initConfig({
		pkg: grunt.file.readJSON( "package.json" ),
		dst: readOptionalJSON( "dist/.destination.json" ),
		
		built: {
			superTable: {
				dest: "dist/superTable.js",
				minimum: [
					"superTable",
				],
				removeWith: {
					//css: [ "effects", "dimensions", "offset" ],
				},
				config:{
					baseUrl: "src",
					name: "BL",
					out: "dist/superTable.js",
					wrap: {
						startFile: "src/wrap/intro.js",
						endFile: "src/wrap/outro.js"
					},
					paths: {
						$:'BL/Blink/$',
						blk:'BL/Blink',
					},
				}
			},
			
		},
		
		jshint: {
			dist: {
				//src: "dist/grace.js",
				//options: srcHintOptions
			}
		},
		
		watch: {
			files: "src/**/*.js",
			tasks: "dev"
		},
		
	});

	// Load grunt tasks from NPM packages
	require( "load-grunt-tasks" )( grunt );

	// Integrate grace specific tasks
	grunt.loadTasks( "built" );

	// Short list as a high frequency watch task
	grunt.registerTask( "dev", [ "built:*:*" /*,'jshint'*/ ] );

	// Default grunt
	grunt.registerTask( "default", [  "dev" ,"watch"] );
  

};
