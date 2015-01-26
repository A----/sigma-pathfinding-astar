module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    filename: 'sigma.pathfinding.astar',

    clean: {
      dist: 'dist',
      example: 'example/lib'
    },

    uglify: {
      dist: {
        options: {
          sourceMap: true,
          sourceMapName: 'dist/<%= filename %>.min.js.map',
          banner: "/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today('yyyy-mm-dd') %>\n" +
            "<%= pkg.license %>, <%= pkg.homepage %> */"
        },
        files: {
          'dist/<%= filename %>.min.js': ['./<%= filename %>.js']
        }
      }
    },

    copy: {
      dist: {
        src: '<%= filename %>.js',
        dest: 'dist/'
      },
      "example-sigma": {
        expand: true,
        cwd: 'node_modules/sigma/build',
        src: 'sigma.min.js',
        dest: 'example/lib/'
      },
      "example-plugin": {
        expand: true,
        cwd: 'dist/',
        src: '<%= filename %>.min.*',
        dest: 'example/'
      }
    },

    watch: {
      scripts: {
        files: ['./<%= filename %>.js'],
          tasks: ['default'],
          options: {
            spawn: false
          }
      }
    }

	/*copy: {
		jquery: {
			expand: true,
			cwd: 'node_modules/jquery/dist',
			src: 'jquery*',
			dest: 'dist/lib/jquery/'
		},
		"bootstrap-js": {
			expand: true,
			cwd: 'node_modules/bootstrap/dist/js/',
			src: 'bootstrap*',
			dest: 'dist/lib/bootstrap/'
		},
		"bootstrap-glyphicon": {
			expand: true,
			cwd: 'node_modules/bootstrap/dist/fonts/',
			src: '*',
			dest: 'dist/fonts/glyphicon/'
		},
		"bootstrap-datepicker": {
			expand: true,
			cwd: 'node_modules/bootstrap-datepicker/js/',
			src: 'bootstrap-datepicker*',
			dest: 'dist/lib/bootstrap-datepicker/'
		},
		"highlight-js": {
			expand: true,
			cwd: 'lib/highlight.js/',
			src: 'highlight*',
			dest: 'dist/lib/highlight.js/'
		},
		"highlight-css": {
			expand: true,
			cwd: 'lib/highlight.js/styles/',
			src: 'default.css',
			dest: 'dist/lib/highlight.js/'
		},
		"font-awesome": {
			expand: true,
			cwd: 'node_modules/font-awesome/fonts/',
			src: '*',
			dest: 'dist/fonts/font-awesome/'
		},
		"sg-bootstrap-js": {
			expand: true,
			cwd: 'js/',
			src: '*',
			dest: 'dist/js/'
		}
	}*/


  });

  grunt.registerTask('default', ['clean', 'uglify', 'copy']);
};
