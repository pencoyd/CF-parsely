module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        meta: {
            banner: '/*! <%= pkg.name %> - v<%= pkg.version %> */\n'
        },
        jshint: {
            files: [
                'src/parsely.js'
            ]
        },
        uglify: {
            "parsely.min.js": {
                options: {
                    banner: '<%= meta.banner %>'
                },
                src: ['src/parsely.js'],
                dest: 'dist/parsely.min.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['jshint', 'uglify']);
};
