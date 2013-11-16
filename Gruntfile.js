module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')

  , sass: {
    dist: {
      options: {
        style: 'compressed'
      }
    , files: {
        'css/main.css': 'src/css/main.scss'
      }
    }
  }

  , watch: {
    files: ['src/css/**/*']
  , tasks: ['sass']
  }
  })

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', ['sass', 'watch'])
}