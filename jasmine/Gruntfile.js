module.exports = function (grunt) {

  grunt.initConfig({

    connect: {
      server: {
        options: {
          port: 8000,
          base: '.'
        }
      }
    },

    jasmine: {
      src: ['app/**/*.js'],
      options: {
        specs: ['spec/**/*.js']
      }
    },

    watch: {
      test: {
        files: ['spec/*'],
        tasks: 'test'
      }
    }

  });

  // Load plugin
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  // Default task
  grunt.registerTask('default', ['connect', 'watch', 'jasmine']);
  grunt.registerTask('test', ['jasmine']);

};
