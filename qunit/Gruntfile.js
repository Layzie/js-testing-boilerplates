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

    qunit: {
      all: ['spec/index.html']
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
  grunt.loadNpmTasks('grunt-contrib-qunit');
  // Default task
  grunt.registerTask('default', ['connect', 'watch', 'qunit']);
  grunt.registerTask('test', ['qunit']);

};
