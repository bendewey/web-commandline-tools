module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-copy');
  
	// Project configuration.
	grunt.initConfig({
	  pkg: grunt.file.readJSON('package.json'),
	  copy: {
		  main: {
			expand: true,
			src: 'app.css',
			dest: 'dist/',
		  },
	   },
	});
  
	grunt.registerTask('default', ['copy']);

};