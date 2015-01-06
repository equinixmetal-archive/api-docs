module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    aglio: {
      packet: {
        files: {
          './dist/index.html': [ './docs/*.apib' ]
        },
        theme: 'flatly-multi',
        seperator: "\n"
      }
    },

    connect: {
      packet: {
        options: {
          base: './dist'
        }
      }
    },

    watch: {
      docs: {
        files: ['docs/**/*.apib'],
        tasks: ['compile']
      }
    }
  });

  grunt.loadNpmTasks('grunt-aglio');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('ensure-directory', 'Creates the "dist" directory', function() {
    grunt.file.mkdir('./dist');
  });
  grunt.registerTask('compile', ['ensure-directory', 'aglio:packet']);

  grunt.registerTask('default', ['compile', 'connect:packet', 'watch']);
};
