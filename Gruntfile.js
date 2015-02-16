// Generated on 2014-09-18 using generator-jekyllrb 1.2.1
'use strict';

// Directory reference:
//   css: css
//   compass: _scss
//   javascript: js
//   images: img
//   fonts: fonts

module.exports = function (grunt) {
  // Show elapsed time after tasks run
  require('time-grunt')(grunt);
  // Load all Grunt tasks
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    // Configurable paths
    yeoman: {
      app: 'app',
      dist: 'dist'
    },
    watch: {
      compass: {
        files: ['<%= yeoman.app %>/_scss/**/*.{scss,sass}'],
        tasks: ['compass:server', 'autoprefixer:server']
      },
      autoprefixer: {
        files: ['<%= yeoman.app %>/css/**/*.css'],
        tasks: ['copy:stageCss', 'autoprefixer:server']
      },
      jekyll: {
        files: [
          '<%= yeoman.app %>/**/*.{html,yml,md,mkd,markdown}',
          '!<%= yeoman.app %>/_bower_components/**/*'
        ],
        tasks: ['jekyll:server', 'replace:server']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '.jekyll/**/*.html',
          '.tmp/css/**/*.css',
          '{.tmp,<%= yeoman.app %>}/<%= js %>/**/*.js',
          '<%= yeoman.app %>/img/**/*.{gif,jpg,jpeg,png,svg,webp}'
        ]
      }
    },
    connect: {
      options: {
        port: 9000,
        livereload: 35729,
        // change this to '0.0.0.0' to access the server from outside
        //hostname: 'localhost'
        hostname: '0.0.0.0'
      },
      livereload: {
        options: {
          open: true,
          base: [
            '.tmp',
            '.jekyll',
            '<%= yeoman.app %>'
          ]
        }
      },
      dist: {
        options: {
          open: true,
          base: [
            '<%= yeoman.dist %>'
          ]
        }
      },
      test: {
        options: {
          base: [
            '.tmp',
            '.jekyll',
            'test',
            '<%= yeoman.app %>'
          ]
        }
      }
    },
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '<%= yeoman.dist %>/*',
            // Running Jekyll also cleans the target directory.  Exclude any
            // non-standard `keep_files` here (e.g., the generated files
            // directory from Jekyll Picture Tag).
            '!<%= yeoman.dist %>/.git*'
          ]
        }]
      },
      server: [
        '.tmp',
        '.jekyll'
      ]
    },
    compass: {
      options: {
        // If you're using global Sass gems, require them here.
        // require: ['singularity', 'jacket'],
        bundleExec: true,
        require: ['susy','breakpoint'],
        sassDir: '<%= yeoman.app %>/_scss',
        cssDir: '.tmp/css',
        imagesDir: '<%= yeoman.app %>/img',
        javascriptsDir: '<%= yeoman.app %>/js',
        relativeAssets: false,
        httpImagesPath: '/img',
        httpGeneratedImagesPath: '/img/generated',
        outputStyle: 'expanded',
        raw: 'extensions_dir = "<%= yeoman.app %>/_bower_components"\n'
      },
      dist: {
        options: {
          generatedImagesDir: '<%= yeoman.dist %>/img/generated'
        }
      },
      server: {
        options: {
          debugInfo: true,
          generatedImagesDir: '.tmp/img/generated'
        }
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 2 versions']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>/css',
          src: '**/*.css',
          dest: '<%= yeoman.dist %>/css'
        }]
      },
      server: {
        files: [{
          expand: true,
          cwd: '.tmp/css',
          src: '**/*.css',
          dest: '.tmp/css'
        }]
      }
    },
    jekyll: {
      options: {
        bundleExec: true,
        config: '_config.yml,_config.build.yml',
        src: '<%= yeoman.app %>'
      },
      dist: {
        options: {
          dest: '<%= yeoman.dist %>',
        }
      },
      server: {
        options: {
          config: '_config.yml',
          dest: '.jekyll'
        }
      },
      check: {
        options: {
          doctor: true
        }
      }
    },
    useminPrepare: {
      options: {
        dest: '<%= yeoman.dist %>'
      },
      html: '<%= yeoman.dist %>/index.html'
    },
    usemin: {
      options: {
        assetsDirs: '<%= yeoman.dist %>',
      },
      html: ['<%= yeoman.dist %>/**/*.html'],
      css: ['<%= yeoman.dist %>/css/**/*.css']
    },
    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeAttributeQuotes: true,
          removeRedundantAttributes: true
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: '**/*.html',
          dest: '<%= yeoman.dist %>'
        }]
      }
    },
    // Usemin adds files to concat
    concat: {},
    // Usemin adds files to uglify
    uglify: {},
    // Usemin adds files to cssmin
    cssmin: {
      dist: {
        options: {
          check: 'gzip'
        }
      }
    },
    imagemin: {
      dist: {
        options: {
          progressive: true
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: '**/*.{jpg,jpeg,png}',
          dest: '<%= yeoman.dist %>'
        }]
      }
    },
    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: '**/*.svg',
          dest: '<%= yeoman.dist %>'
        }]
      }
    },
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          src: [
            // Jekyll processes and moves HTML and text files.
            // Usemin moves CSS and javascript inside of Usemin blocks.
            // Copy moves asset files and directories.
            'img/**/*',
            'fonts/**/*',
            // Like Jekyll, exclude files & folders prefixed with an underscore.
            '!**/_*{,/**}',
            // Explicitly add any files your site needs for distribution here.
            '_bower_components/jquery/jquery.js',
            'favicon.ico',
            'apple-touch*.png',
            'email/**/*'
          ],
          dest: '<%= yeoman.dist %>'
        },{
          expand: true,
          cwd: '<%= yeoman.app %>',
          src: '_bower_components/imagelightbox/img/*.png',
          dest: '<%= yeoman.dist %>/img/',
          flatten: true
        }]
      },
      // Copy CSS into .tmp directory for Autoprefixer processing
      stageCss: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>/css',
          src: '**/*.css',
          dest: '.tmp/css'
        }]
      },
      // Copy original images to img dir
      originalImages: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>/_img',
          src: '**/*.*',
          dest: '<%= yeoman.app %>/img'
        }]
      }
    },
    filerev: {
      options: {
        length: 4
      },
      dist: {
        files: [{
          src: [
            '<%= yeoman.dist %>/js/**/*.js',
            '<%= yeoman.dist %>/css/**/*.css',
            '<%= yeoman.dist %>/img/**/*.{gif,jpg,jpeg,png,svg,webp}',
            '<%= yeoman.dist %>/fonts/**/*.{eot*,otf,svg,ttf,woff}'
          ]
        }]
      }
    },
    buildcontrol: {
      dist: {
        options: {
          remote: 'git@github.com:happycollision/dondentonactor.com.git',
          branch: 'gh-pages',
          commit: true,
          push: true
        }
      }
    },
    
    // Find certain keywords in certain files and replace them
    replace: {
      server: {
        options: {
          variables: {
            testCss: '<link rel="stylesheet" href="/css/testing.css">',
            testJs: '<script src="/js/testing.js"></script>'
          }
        },
        files: [{
          expand: true,
          dot: true,
          cwd: '.jekyll',
          src: '**/*.{html,md}',
          dest: '.jekyll'
        }]
      },
      dist: {
        options: {
          variables: {
            testCss: '',
            testJs: ''
          }
        },
        files: [{
          expand: true,
          dot: true,
          cwd: 'dist',
          src: '**/*.{html,md}',
          dest: 'dist'
        }]
      }
    },
    
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        'Gruntfile.js',
        '<%= yeoman.app %>/js/**/*.js',
        'test/spec/**/*.js'
      ]
    },
    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      check: {
        src: [
          '<%= yeoman.app %>/css/**/*.css',
          '<%= yeoman.app %>/_scss/**/*.scss'
        ]
      }
    },
    concurrent: {
      server: [
        'compass:server',
        'copy:stageCss',
        'jekyll:server'
      ],
      dist: [
        'compass:dist',
        'copy:dist'
      ]
    },
    ri_sizes: {
      thumbnail: {
        name: 'thumbnail',
        width: 150,
        height: 150,
        aspectRatio: false
      },
      small: {
        name: 'small',
        width: 320
      },
      medium: {
        name: 'medium',
        width: 640
      },
      large: {
        name: 'large',
        width: 1024
      }
    },
    responsive_images: {
      options: {
        newFilesOnly: true,
        sizes: [
          '<%= ri_sizes.thumbnail %>',
          '<%= ri_sizes.large %>',
          '<%= ri_sizes.medium %>',
          '<%= ri_sizes.small %>',
        ]
      },
      // all: {
      //   files: [{
      //     expand: true,
      //     src: ['**/*.{jpg,gif,png}'],
      //     cwd: '<%= yeoman.app %>/_img',
      //     custom_dest: '<%= yeoman.app %>/img/{%= path %}/alt/{%= name %}/'
      //   }]
      // }
      headshots: {
        options: {
          sizes: [
            '<%= ri_sizes.thumbnail %>',
            '<%= ri_sizes.large %>',
            '<%= ri_sizes.medium %>',
            '<%= ri_sizes.small %>',
          ]
        },
        files: [{
          expand: true,
          src: ['headshots/*.{jpg,gif,png}'],
          cwd: '<%= yeoman.app %>/_img',
          custom_dest: '<%= yeoman.app %>/img/{%= path %}/alt/{%= name %}/'
        }]
      },
      shows: {
        options: {
          sizes: [
            '<%= ri_sizes.thumbnail %>',
          ]
        },
        files: [{
          expand: true,
          src: ['shows/*.{jpg,gif,png}'],
          cwd: '<%= yeoman.app %>/_img',
          custom_dest: '<%= yeoman.app %>/img/{%= path %}/alt/{%= name %}/'
        }]
      },
      problem_show_thumbs: {
        options: {
          gravity: 'North',
          newFilesOnly: false,
          sizes: [
            '<%= ri_sizes.thumbnail %>',
          ]
        },
        files: [{
          expand: true,
          src: [
            'shows/SoundOfMusic-04.jpg',
            'shows/SoundOfMusic-01.jpg',
            'shows/NineToFive-01.jpg',
            'shows/ForeverPlaid-05.jpg'
          ],
          cwd: '<%= yeoman.app %>/_img',
          custom_dest: '<%= yeoman.app %>/img/{%= path %}/alt/{%= name %}/'
        }]
      }
    }
  });

  // Define Tasks
  grunt.registerTask('serve', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'imageFactory',
      'concurrent:server',
      'replace:server',
      'autoprefixer:server',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('server', function () {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve']);
  });

  // No real tests yet. Add your own.
  grunt.registerTask('test', [
  //   'clean:server',
  //   'concurrent:test',
  //   'connect:test'
  ]);

  grunt.registerTask('imageFactory', [
    'newer:copy:originalImages',
    'responsive_images'
  ]);

  grunt.registerTask('check', [
    'clean:server',
    'jekyll:check',
    'compass:server',
    'jshint:all',
    /*'csslint:check'*/
  ]);

  grunt.registerTask('build', [
    'clean',
    // Jekyll cleans files from the target directory, so must run first
    'jekyll:dist',
    'imageFactory',
    'concurrent:dist',
    'replace:dist',
    'useminPrepare',
    'concat',
    'autoprefixer:dist',
    'cssmin',
    'uglify',
    'imagemin',
    'svgmin',
    //'filerev',
    'usemin',
    'htmlmin'
    ]);

  grunt.registerTask('deploy', [
    'check',
    'test',
    'build',
    'buildcontrol'
    ]);

  grunt.registerTask('default', [
    'check',
    'test',
    'build'
  ]);
};
