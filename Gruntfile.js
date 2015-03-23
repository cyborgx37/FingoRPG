var debug = true;

module.exports = function(grunt) {
    grunt.initConfig({

        jshint: {
            build: {
                files: [{
                    expand: true,
                    cwd: 'js',
                    src: ['**/*.js', '!libs/**']
                }]
            }
        },

        uglify: {
            build: {
                files: [{
                    expand: true, 
                    cwd: 'js', 
                    src: ['**/*.js', '!libs/**'], 
                    dest: 'compiled/js/',
                    ext: '.js'
                }],
                options: {
                    beautify: debug,
                    preserveComments: !debug,
                    mangle: !debug,
                    banner:
                        '/* FingoRPG 0.0.1' + '\n' +
                        ' * http://craftyjs.com/' + '\n' +
                        ' *' + '\n' +
                        ' * Copyright 2015, JD Bell' + '\n' +
                        ' * Licensed under MIT license (http://opensource.org/licenses/MIT).' + '\n' +
                        ' */' + '\n'

                }
            }
        },

        less: {
            build: {
                files: [{
                    expand: true,
                    cwd: 'css',
                    src: ['*.less'],
                    dest: 'compiled/css/',
                    ext: '.css'
                }],
                options: {
                    compress: !debug
                }
            }
        },

        cssmin: {
            build: {
                files: [{
                    expand: true,
                    cwd: 'css',
                    src: ['*.css'],
                    dest: 'compiled/css',
                    ext: '.min.css'
                }],
                keepBreaks: debug
            }
        },

        copy: {
            build: {
                files: [
                    {expand: true, cwd: 'html', src: ['**'], dest: 'compiled/'},
                    {expand: true, cwd: 'img', src: ['**'], dest: 'compiled/img/'},
                    {expand: true, cwd: 'fonts', src: ['**'], dest: 'compiled/fonts/'},
                    {expand: true, cwd: 'css/libs', src: ['**/*.css'], dest: 'compiled/css/'},
                    {expand: true, cwd: 'js/libs', src: ['**/*.js'], dest: 'compiled/js/libs/'}
                ]
            }
        },

        ftpush: {
            build: {
                auth: grunt.file.readJSON(".ftpauth"),
                src: 'compiled',
                dest: '/fingorpg/',
                exclusions: ['compiled/**/.DS_Store', 'compiled/**/Thumbs.db', 'compiled/tmp', 'compiled/sftp-config.json'],
                keep: ['400.shtml', '401.shtml', '403.shtml', '404.shtml', '500.shtml', '500.php']
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-ftpush');

    // Default task(s).
    var buildTasks = ['jshint', 'uglify', 'less', 'cssmin', 'copy'],
            deployTasks = ['ftpush'];

    grunt.registerTask('_build', buildTasks);
    grunt.registerTask('_deploy', deployTasks);
    grunt.registerTask('__build_and_deploy', [].concat( buildTasks, deployTasks ));

};
