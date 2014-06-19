module.exports = function(grunt) {
	grunt.initConfig({
		concat: {
			dist: {
				src: ['/*.less'],
				dest: ['/bootstrap.less']
			}
		},
		uglify: {
			options: {
				banner: '/* Created by Alen */'
			},
			files: {
				'/bootstrap.min.css': ['/bootstrap.css']
			}
		}


	});
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-coffee');
};