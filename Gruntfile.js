module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    qunit: {
      files: ['test/**/*.html']
    },

    jshint: {
      // define the files to lint
      files: ['Gruntfile.js', 'src/**/*.js'],
      // configure JSHint (documented at http://www.jshint.com/docs/)
      options: {
        jshintrc: '.jshintrc'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');

  grunt.registerTask('test', ['qunit']);

  // Default task.
  grunt.registerTask('default', ['jshint', 'qunit']);
};