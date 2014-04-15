module.exports = function(grunt) {
    'use strict';
    // show elapsed time at the end
    require('time-grunt')(grunt);
    // load all grunt tasks
    require('load-grunt-tasks')(grunt);
    var yeomanConfig = {
        themeRoot: 'website/wp-content/themes',
        themeName: 'mykrobe',
        dist: 'dist'
    };
    var databaseConfig = {
        localDataRoot: 'data/sql',
        local: {
            server: 'localhost',
            username: 'mykrobe_com',
            password: 'tkavxcUZmpWB4dsjp7AT',
            database: 'mykrobe_com_wordpress'
        },
        staging: {},
        production: {}
    };
    grunt.initConfig({
        yeomanConfig: yeomanConfig,
        databaseConfig: databaseConfig,
        exec: {
            'backup-local-db': {
               command: '/Applications/MAMP/Library/bin/mysqldump -u <%= databaseConfig.local.username %> -p<%= databaseConfig.local.password %> <%= databaseConfig.local.database %> > <%= databaseConfig.localDataRoot %>/<%= databaseConfig.local.database %>.sql'
            },
            'import-local-db': {
               command: 'echo "/Applications/MAMP/Library/bin/mysql -u <%= databaseConfig.local.username %> -p<%= databaseConfig.local.password %> <%= databaseConfig.local.database %> < <%= databaseConfig.localDataRoot %>/<%= databaseConfig.local.database %>.sql"'
            },
        },
        watch: {
            compass: {
                files: ['<%= yeomanConfig.themeRoot %>/<%= yeomanConfig.themeName %>/css/{,*/}*.{scss,sass}'],
                tasks: ['compass:server', 'autoprefixer']
            },
            gruntfile: {
                files: ['Gruntfile.js']
            },
            styles: {
                files: ['<%= yeomanConfig.themeRoot %>/<%= yeomanConfig.themeName %>/css/{,*/}*.css'],
                tasks: ['copy:styles', 'autoprefixer']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: ['<%= yeomanConfig.themeRoot %>/<%= yeomanConfig.themeName %>/*.php', '<%= yeomanConfig.themeRoot %>/<%= yeomanConfig.themeName %>/*.css', '<%= yeomanConfig.themeRoot %>/<%= yeomanConfig.themeName %>/js/*.js', '<%= yeomanConfig.themeRoot %>/<%= yeomanConfig.themeName %>/images/*']
            }
        },
        connect: {
            options: {
                port: 9000,
                livereload: 35729,
                // change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    open: true,
                    base: ['.tmp', '<%= yeomanConfig.themeRoot %>/<%= yeomanConfig.themeName %>']
                }
            },
            dist: {
                options: {
                    open: true,
                    base: yeomanConfig.dist
                }
            }
        },
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: ['.tmp', '<%= yeomanConfig.dist %>/*', '!<%= yeomanConfig.dist %>/.git*']
                }]
            },
            server: '.tmp'
        },
        compass: {
            options: {
                sassDir: '<%= yeomanConfig.themeRoot %>/<%= yeomanConfig.themeName %>/css',
                cssDir: '<%= yeomanConfig.themeRoot %>/<%= yeomanConfig.themeName %>/css',
                generatedImagesDir: '<%= yeomanConfig.themeRoot %>/<%= yeomanConfig.themeName %>/img',
                imagesDir: '<%= yeomanConfig.themeRoot %>/<%= yeomanConfig.themeName %>/img',
                javascriptsDir: '<%= yeomanConfig.themeRoot %>/<%= yeomanConfig.themeName %>/js',
                fontsDir: '<%= yeomanConfig.themeRoot %>/<%= yeomanConfig.themeName %>/css/fonts',
                httpImagesPath: '/wp-content/themes/<%= yeomanConfig.themeName %>/img',
                httpGeneratedImagesPath: '/wp-content/themes/<%= yeomanConfig.themeName %>/img',
                httpFontsPath: '/wp-content/themes/<%= yeomanConfig.themeName %>/fonts',
                relativeAssets: false
            },
            dist: {
                options: {
                    generatedImagesDir: '<%= yeomanConfig.dist %>/img/generated'
                }
            },
            server: {
                options: {
                    debugInfo: true
                }
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 1 version']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/css/',
                    src: '{,*/}*.css',
                    dest: '.tmp/css/'
                }]
            }
        },
        // Automatically inject Bower components into the HTML file
        'bower-install': {
            app: {
                html: '<%= yeomanConfig.themeRoot %>/<%= yeomanConfig.themeName %>/footer.php',
                ignorePath: '<%= yeomanConfig.themeRoot %>/<%= yeomanConfig.themeName %>/'
            }
        },
        rev: {
            dist: {
                files: {
                    src: ['<%= yeomanConfig.dist %>/scripts/{,*/}*.js', '<%= yeomanConfig.dist %>/css/{,*/}*.css', '<%= yeomanConfig.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp}', '<%= yeomanConfig.dist %>/css/fonts/{,*/}*.*']
                }
            }
        },
        // useminPrepare: {
        //     options: {
        //         dest: '<%= yeomanConfig.dist %>'
        //     },
        //     html: '<%= yeomanConfig.themeRoot %>/<%= yeomanConfig.themeName %>/index.html'
        // },
        // usemin: {
        //     options: {
        //         dirs: ['<%= yeomanConfig.dist %>']
        //     },
        //     html: ['<%= yeomanConfig.dist %>/{,*/}*.html'],
        //     css: ['<%= yeomanConfig.dist %>/css/{,*/}*.css']
        // },
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeomanConfig.themeRoot %>/<%= yeomanConfig.themeName %>/images',
                    src: '{,*/}*.{png,jpg,jpeg}',
                    dest: '<%= yeomanConfig.dist %>/images'
                }]
            }
        },
        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeomanConfig.themeRoot %>/<%= yeomanConfig.themeName %>/images',
                    src: '{,*/}*.svg',
                    dest: '<%= yeomanConfig.dist %>/images'
                }]
            }
        },
        cssmin: {
            // This task is pre-configured if you do not wish to use Usemin
            // blocks for your CSS. By default, the Usemin block from your
            // `index.html` will take care of minification, e.g.
            //
            //     <!-- build:css({.tmp,app}) styles/main.css -->
            //
            // dist: {
            //     files: {
            //         '<%= yeomanConfig.themeRoot %>/<%= yeomanConfig.themeName %>/style.css': [
            //             '.tmp/css/{,*/}*.css',
            //             '<%= yeomanConfig.themeRoot %>/<%= yeomanConfig.themeName %>/css/{,*/}*.css'
            //         ]
            //     }
            // }
        },
        htmlmin: {
            dist: {
                options: {
                    /*removeCommentsFromCDATA: true,
                // https://github.com/yeoman/grunt-usemin/issues/44
                //collapseWhitespace: true,
                collapseBooleanAttributes: true,
                removeAttributeQuotes: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeOptionalTags: true*/
                },
                files: [{
                    expand: true,
                    cwd: '<%= yeomanConfig.themeRoot %>/<%= yeomanConfig.themeName %>',
                    src: '*.html',
                    dest: '<%= yeomanConfig.dist %>'
                }]
            }
        },
        // Put files not handled in other tasks here
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeomanConfig.themeRoot %>/<%= yeomanConfig.themeName %>',
                    dest: '<%= yeomanConfig.dist %>',
                    src: ['*.{ico,png,txt}', '.htaccess', 'images/{,*/}*.{webp,gif}', 'styles/fonts/{,*/}*.*', 'bower_components/sass-bootstrap/fonts/*.*']
                }]
            },
            styles: {
                expand: true,
                dot: true,
                cwd: '<%= yeomanConfig.themeRoot %>/<%= yeomanConfig.themeName %>/styles',
                dest: '.tmp/css/',
                src: '{,*/}*.css'
            }
        },
        modernizr: {
            devFile: '<%= yeomanConfig.themeRoot %>/<%= yeomanConfig.themeName %>/bower_components/modernizr/modernizr.js',
            outputFile: '<%= yeomanConfig.dist %>/bower_components/modernizr/modernizr.js',
            files: ['<%= yeomanConfig.dist %>/scripts/{,*/}*.js', '<%= yeomanConfig.dist %>/css/{,*/}*.css', '!<%= yeomanConfig.dist %>/scripts/vendor/*'],
            uglify: true
        },
        concurrent: {
            server: ['compass', 'copy:styles'],
            dist: ['compass', 'copy:styles', 'imagemin', 'svgmin', 'htmlmin']
        },
        bower: {
            options: {
                exclude: ['modernizr']
            },
            all: {
                rjsConfig: '<%= yeomanConfig.themeRoot %>/<%= yeomanConfig.themeName %>/scripts/main.js'
            }
        }
    });
    grunt.registerTask('server', function(target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'connect:dist:keepalive']);
        }
        grunt.task.run(['clean:server', 'concurrent:server', 'autoprefixer', 'connect:livereload', 'watch']);
    });
    grunt.registerTask('test', ['clean:server', 'concurrent:test', 'autoprefixer', 'connect:test', 'mocha']);
    grunt.registerTask('build', ['clean:dist', 'concurrent:dist', 'autoprefixer', 'modernizr', 'copy:dist']);
    grunt.registerTask('default', ['build']);
    grunt.registerTask('backup-local-db', ['exec:backup-local-db']);
    grunt.registerTask('import-local-db', ['exec:import-local-db']);
};