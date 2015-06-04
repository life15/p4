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
    },
    responsive_images: {
      target: {
        options: {
          sizes: [{
            width: 100,
            name: "small"
          }]
        },
        files: [{
          expand: true,
          src: ['views/images/pizzeria.jpg']
        }]
      }
    }
  });

  // Load tasks.
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-responsive-images');

  // Register tasks.
  grunt.registerTask('default', ['cssmin', 'htmlmin']);
  grunt.registerTask('images', ['responsive_images']);
};