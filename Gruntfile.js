/*
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {

  grunt.initConfig({
          responsive_images: {
              dev: {
                  options: {

                      sizes: [{

                          width: 500,
                          suffix: "_md",
                          quality: 80

                      }]
                  },

                  /*
                  You don't need to change this part if you don't change
                  the directory structure.
                  */
                  files: [{
                      expand: true,
                      src: ['*.{gif,jpg,png}'],
                      cwd: 'img/',
                      dest: 'img_resp'
                  }]
              }
          },
          concat: {
              dist: {
                  src: [
                      'js/*.js' // Все JS в папке libs
                  ],
                  dest: 'js/build/production.js',
              }

          },
        uglify: {
            build: {
                src: 'js/build/production.js',
                dest: 'js/build/production.min.js'
          }
      }
      }
  );

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['responsive_images', 'concat', 'uglify']);
};
