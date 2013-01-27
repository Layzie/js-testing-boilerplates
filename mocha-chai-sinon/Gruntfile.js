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

    mocha: {
      all: {
        src: 'test/index.html',
        run: true
      }
    },

    watch: {
      test: {
        files: ['test/*'],
        tasks: 'test'
      }
    }

  });

  // Load plugin
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-mocha');

  // Default task
  grunt.registerTask('default', ['connect', 'watch', 'mocha']);
  grunt.registerTask('test', ['mocha']);

};
