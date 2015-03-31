module.exports = function(grunt) {
    'use strict';
    // show elapsed time at the end
    require('time-grunt')(grunt);
    // load all grunt tasks
    require('load-grunt-tasks')(grunt);
    var yeomanConfig = {
        themeRoot: 'website/wp-content/themes',
        themeName: 'mykrobe',
        dist: 'dist/wp-content/themes/mykrobe'
    };
    var wordpressConfig = {
        wordpressRoot: 'website',
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
        wordpressConfig: wordpressConfig,
        databaseConfig: databaseConfig,
        exec: {
            'backup-local-db': {
               command: '/Applications/MAMP/Library/bin/mysqldump -u <%= databaseConfig.local.username %> -p<%= databaseConfig.local.password %> <%= databaseConfig.local.database %> > <%= databaseConfig.localDataRoot %>/<%= databaseConfig.local.database %>.sql'
            },
            'import-local-db': {
               command: '/Applications/MAMP/Library/bin/mysql -u <%= databaseConfig.local.username %> -p<%= databaseConfig.local.password %> <%= databaseConfig.local.database %> < <%= databaseConfig.localDataRoot %>/<%= databaseConfig.local.database %>.sql'
            },
        },
        watch: {
            // compass: {
            //     files: ['<%= yeomanConfig.themeRoot %>/<%= yeomanConfig.themeName %>/css/{,*/}*.{scss,sass}'],
            //     tasks: ['compass:server', 'autoprefixer']
            // },
            sass: {
                files: ['<%= yeomanConfig.themeRoot %>/<%= yeomanConfig.themeName %>/css/{,*/}*.{scss,sass}'],
                tasks: ['sass']
            },
            gruntfile: {
                files: ['Gruntfile.js']
            },
            svg: {
                files: ['<%= yeomanConfig.themeRoot %>/<%= yeomanConfig.themeName %>/img/{,*/}*.svg'],
                tasks: ['svg2png']
            },
            styles: {
                files: ['<%= yeomanConfig.themeRoot %>/<%= yeomanConfig.themeName %>/css/{,*/}*.css'],
                tasks: ['copy:styles', 'autoprefixer']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: ['<%= yeomanConfig.themeRoot %>/<%= yeomanConfig.themeName %>/*.php', '<%= yeomanConfig.themeRoot %>/<%= yeomanConfig.themeName %>/css/*.css', '<%= yeomanConfig.themeRoot %>/<%= yeomanConfig.themeName %>/js/*.js', '<%= yeomanConfig.themeRoot %>/<%= yeomanConfig.themeName %>/img/*']
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
            // options: {
            //     sassDir: '<%= yeomanConfig.themeRoot %>/<%= yeomanConfig.themeName %>/css',
            //     cssDir: '<%= yeomanConfig.themeRoot %>/<%= yeomanConfig.themeName %>/css',
            //     generatedImagesDir: '<%= yeomanConfig.themeRoot %>/<%= yeomanConfig.themeName %>/img',
            //     imagesDir: '<%= yeomanConfig.themeRoot %>/<%= yeomanConfig.themeName %>/img',
            //     javascriptsDir: '<%= yeomanConfig.themeRoot %>/<%= yeomanConfig.themeName %>/js',
            //     fontsDir: '<%= yeomanConfig.themeRoot %>/<%= yeomanConfig.themeName %>/css/fonts',
            //     httpImagesPath: '/wp-content/themes/<%= yeomanConfig.themeName %>/img',
            //     httpGeneratedImagesPath: '/wp-content/themes/<%= yeomanConfig.themeName %>/img',
            //     httpFontsPath: '/wp-content/themes/<%= yeomanConfig.themeName %>/fonts',
            //     relativeAssets: false
            // },
            // dist: {
            //     options: {
            //         generatedImagesDir: '<%= yeomanConfig.dist %>/img/generated'
            //     }
            // },
            // server: {
            //     options: {
            //         debugInfo: true
            //     }
            // }
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
        // 'bower-install': {
        //     app: {
        //         html: '<%= yeomanConfig.themeRoot %>/<%= yeomanConfig.themeName %>/footer.php',
        //         ignorePath: '<%= yeomanConfig.themeRoot %>/<%= yeomanConfig.themeName %>/'
        //     }
        // },
        // rev: {
        //     dist: {
        //         files: {
        //             src: ['<%= yeomanConfig.dist %>/scripts/{,*/}*.js', '<%= yeomanConfig.dist %>/css/{,*/}*.css', '<%= yeomanConfig.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp}', '<%= yeomanConfig.dist %>/css/fonts/{,*/}*.*']
        //         }
        //     }
        // },
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
        sass: {
            options: {
                // sassDir: '<%= yeoman.app %>/styles',
                // cssDir: '.tmp/styles',
                // generatedImagesDir: '.tmp/images/generated',
                // imagesDir: '<%= yeoman.app %>/images',
                // javascriptsDir: '<%= yeoman.app %>/scripts',
                // fontsDir: '<%= yeoman.app %>/styles/fonts',
                // importPath: '<%= yeoman.app %>/bower_components',
                // httpImagesPath: '/images',
                // httpGeneratedImagesPath: '/images/generated',
                // httpFontsPath: '/styles/fonts',
                // relativeAssets: false,
                // assetCacheBuster: false
                // expand: true
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeomanConfig.themeRoot %>/<%= yeomanConfig.themeName %>/css/',
                    // src: '{,*/}*.scss',
                    src: 'main.scss',
                    dest: '<%= yeomanConfig.dist %>/css/',
                    ext: '.min.css'
                }]
            },
            server: {
                files: [{
                    expand: true,
                    cwd: '<%= yeomanConfig.themeRoot %>/<%= yeomanConfig.themeName %>/css/',
                    // src: '{,*/}*.scss',
                    src: 'main.scss',
                    dest: '<%= yeomanConfig.themeRoot %>/<%= yeomanConfig.themeName %>/css/',
                    ext: '.css'
                }]
            }
        },
        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeomanConfig.themeRoot %>/<%= yeomanConfig.themeName %>/img',
                    src: '{,*/}*.svg',
                    dest: '<%= yeomanConfig.dist %>/img'
                }]
            }
        },
        svg2png: {
            all: {
                files: [
                    { 
                        src: ['<%= yeomanConfig.themeRoot %>/<%= yeomanConfig.themeName %>/img/**/*.svg'] 
                    }
                ]
            }
        },        
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeomanConfig.themeRoot %>/<%= yeomanConfig.themeName %>/img',
                    src: '{,*/}*.{png,jpg,jpeg}',
                    dest: '<%= yeomanConfig.dist %>/img'
                }]
            }
        },
        concat: {
            options: {
                separator: ';',
            },
            dist: {
                // the files to concatenate
                src: [
                    '<%= yeomanConfig.themeRoot %>/<%= yeomanConfig.themeName %>/js/vendor/jquery.smooth-scroll.min.js',
                    '<%= yeomanConfig.themeRoot %>/<%= yeomanConfig.themeName %>/js/vendor/fastclick.js',
                    '<%= yeomanConfig.themeRoot %>/<%= yeomanConfig.themeName %>/js/vendor/jquery.modal.js',
                    '<%= yeomanConfig.themeRoot %>/<%= yeomanConfig.themeName %>/js/plugins.js',
                    '<%= yeomanConfig.themeRoot %>/<%= yeomanConfig.themeName %>/js/mykrobe/*.js',                    
                    '<%= yeomanConfig.themeRoot %>/<%= yeomanConfig.themeName %>/js/script.js'
                ],
                // the location of the resulting JS file
                dest: '<%= yeomanConfig.dist %>/js/script.min.js'
            }
        },
        uglify: {
            options: {
                compress: {
                    'drop_console':true
                },
                beautify : {
                    'ascii_only' : true
                }  
            },
            dist: {
                files: {
                    '<%= yeomanConfig.dist %>/js/script.min.js': [
                        '<%= yeomanConfig.dist %>/js/script.min.js'
                    ]
                }
            }
        },
        cssmin: {
            // This task is pre-configured if you do not wish to use Usemin
            // blocks for your CSS. By default, the Usemin block from your
            // `index.html` will take care of minification, e.g.
            //
            //     <!-- build:css({.tmp,app}) styles/main.css -->
            //
            dist: {
                files: {
                    '<%= yeomanConfig.dist %>/css/main.min.css': [
                        '<%= yeomanConfig.dist %>/css/main.min.css'
                    ]
                }
            }
        },
        htmlmin: {
            // dist: {
            //     options: {
            //         removeCommentsFromCDATA: true,
            //     // https://github.com/yeoman/grunt-usemin/issues/44
            //     //collapseWhitespace: true,
            //     collapseBooleanAttributes: true,
            //     removeAttributeQuotes: true,
            //     removeRedundantAttributes: true,
            //     useShortDoctype: true,
            //     removeEmptyAttributes: true,
            //     removeOptionalTags: true
            //     },
            //     files: [{
            //         expand: true,
            //         cwd: '<%= yeomanConfig.themeRoot %>/<%= yeomanConfig.themeName %>',
            //         src: '*.html',
            //         dest: '<%= yeomanConfig.dist %>'
            //     }]xx§
            // }
        },
        // Put files not handled in other tasks here
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= wordpressConfig.wordpressRoot %>',
                    dest: '<%= wordpressConfig.dist %>',
                    src:[
                        'wp-admin/**/*.*',
                        'wp-includes/**/*.*',
                        'wp-content/languages/**/*.*',
                        'wp-content/plugins/**/*.*',
                        'wp-content/uploads/**/*.*',
                        'wp-content/themes/index.php',
                        'wp-content/index.php',
                        '*.*'
                    ]
                },
                {
                    expand: true,
                    dot: true,
                    cwd: '<%= yeomanConfig.themeRoot %>/<%= yeomanConfig.themeName %>',
                    dest: '<%= yeomanConfig.dist %>',
                    src: [
                        '*.{css,ico,png,txt,svg}', 
                        '.htaccess',
                        '{,*/}*.html',
                        '{,*/}*.php',
                        'img/*.{png,jpg,svg,gif}', 
                        'css/webfonts/{,*/}*.*',
                        'css/font-awesome/{,*/}*.*',
                        'scripts/**',
                        'js/vendor/modernizr.custom.62260.js',
                        'js/vendor/respond.min.js'
                    ]
                }]
            },
            styles: {
                expand: true,
                dot: true,
                cwd: '<%= yeomanConfig.themeRoot %>/<%= yeomanConfig.themeName %>/css',
                dest: '.tmp/css/',
                src: '{,*/}*.css'
            }
        },
        // modernizr: {
            // devFile: '<%= yeomanConfig.themeRoot %>/<%= yeomanConfig.themeName %>/bower_components/modernizr/modernizr.js',
            // outputFile: '<%= yeomanConfig.dist %>/bower_components/modernizr/modernizr.js',
            // files: ['<%= yeomanConfig.dist %>/scripts/{,*/}*.js', '<%= yeomanConfig.dist %>/css/{,*/}*.css', '!<%= yeomanConfig.dist %>/scripts/vendor/*'],
            // uglify: true
        // },
        concurrent: {
            server: ['sass', 'copy:styles'],
            dist: ['sass', 'copy:styles', 'svg2png', 'imagemin', 'svgmin']
        },
        rsync: {
            'deploy-stage-theme': {
                options: {
                    src: '<%= yeomanConfig.dist %>/',
                    dest: '~/clients.simonheys.com/mykrobe/wp-content/themes/mykrobe',
                    host: 'simonheys@spica.dreamhost.com',
                    args: ['-arvuz', '--delete', '-e "ssh"', '--exclude=.DS_Store', '--exclude=.htaccess']
                }
            },
            'deploy-stage-wp': {
                options: {
                    src: 'website/',
                    dest: '~/clients.simonheys.com/mykrobe/',
                    host: 'simonheys@spica.dreamhost.com',
                    args: ['-arvuz', '--delete', '-e "ssh"', '--exclude=.DS_Store', '--exclude=.htaccess', '--exclude=wp-content/themes/mykrobe']
                }
            },
            'deploy-production-wp': {
                options: {
                    src: 'website/',
                    dest: '~/mykrobe.com/',
                    host: 'mykrobe_com_simonheys@tranquility.dreamhost.com',
                    args: ['-arvuz', '--delete', '-e "ssh"', '--exclude=.DS_Store', '--exclude=.htaccess', '--exclude=wp-content/themes/mykrobe']
                }
            },
            'deploy-production-theme': {
                options: {
                    src: '<%= yeomanConfig.dist %>',
                    dest: '~/mykrobe.com/wp-content/themes/mykrobe',
                    host: 'mykrobe_com_simonheys@tranquility.dreamhost.com',
                    args: ['-arvuz', '--delete', '-e "ssh"', '--exclude=.DS_Store', '--exclude=.htaccess']
                }
            }
        },
        wordpressdeploy: {
            options: {
                backup_dir: "backups/",
                rsync_args: ['--verbose', '--progress', '-rlpt', '--compress', '--omit-dir-times'],
                exclusions: ['Gruntfile.js', '.git/', 'tmp/*', 'backups/', /*'wp-config.php',*/ 'composer.json', 'composer.lock', 'README.md', '.gitignore', 'package.json', 'node_modules','.htaccess']
            },
            local: {
                // deploy to local machine
                "title": "local",
                "database": "mykrobe_com_wordpress",
                "user": "mykrobe_com",
                "pass": "tkavxcUZmpWB4dsjp7AT",
                "host": "localhost",
                "url": "http://telemachus.local/mykrobe/website",
                "path": "dist/*"
            },
            production: {
                // deploy to mykrobe.com
                "title": "production",
                "database": "mykrobe_wordpress",
                "user": "mykrobe",
                "pass": "tkavxcUZmpWB4dsjp7AT",
                "host": "mysql.mykrobe.com",
                "url": "http://www.mykrobe.com/",
                "path": "~/mykrobe.com",
                "ssh_host": "mykrobe_com_simonheys@tranquility.dreamhost.com"
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
    grunt.registerTask('build', ['clean:dist', 'concurrent:dist', 'autoprefixer', 'concat', 'uglify', 'cssmin', 'copy']);
    grunt.registerTask('default', ['build']);
    grunt.registerTask('backup-local-db', ['exec:backup-local-db']);
    grunt.registerTask('import-local-db', ['exec:import-local-db']);
    grunt.registerTask('deploy-stage-theme', ['rsync:deploy-stage-theme']);
};