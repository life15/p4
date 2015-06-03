module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    cssmin: {
      target: {
        files: [{
          expand: true,
          src: ['css/*.css', '!*.min.css'],
          ext: '.min.css'
        }]
      }
    },
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          'index.html': 'index-source.html'
        }
      }
    }
  });

  // Load tasks.
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  // Register tasks.
  grunt.registerTask('default', ['cssmin', 'htmlmin']);

};