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
  });

  grunt.registerTask('default', ['clean', 'uglify', 'copy']);
};
