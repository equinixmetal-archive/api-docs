module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    aglio: {
      'public': {
        files: {
          './dist/index.html': [ './docs/public/*.apib' ]
        },
        theme: 'flatly-multi',
        seperator: "\n"
      },
      'private': {
        files: {
          './dist/private/index.html': [ './docs/private/*.apib' ]
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
    grunt.file.mkdir('./dist/private');
  });
  grunt.registerTask('compile', ['ensure-directory', 'aglio:public', 'aglio:private']);

  grunt.registerTask('default', ['compile', 'connect:packet', 'watch']);
};
