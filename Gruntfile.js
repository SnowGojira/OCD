module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      dist: {
        src: [
          'js/*.js', // All JS in the libs folder
        ],
        dest: 'js/build/production.js',
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'js/manifest.js',
        dest: 'js/manifest.min.js'
      }
    },

    cssmin:{
      options:{
        stripBanners:true, //合并时允许输出头部信息
        banner:'/*!<%= pkg.name %> - <%= pkg.version %>-'+'<%=grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build:{
        src:'css/main.css',//压缩是要压缩合并了的
        dest:'css/main.min.css' //是目的地输出
      }
    },

    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'img/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'img/'
        }]
      }
    },
   //quality:1-100
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            name: 'small',
            width: '30%',
            suffix: '_small',
            quality: 20
          },{
            name: 'large',
            width: '50%',
            suffix: '_large',
            quality: 40
          }]
        },
        files: [{
          expand: true,
          src: ['**/*.{gif,jpg,png}'],
          cwd: 'img/',
          dest: 'img/tmp'
        }]
      }
    },

  });



  // 加载包含 "uglify" 任务的插件。
  // grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  // grunt.loadNpmTasks('grunt-responsive-images');
  // grunt.loadNpmTasks('grunt-contrib-imagemin');

  // 默认被执行的任务列表。
  grunt.registerTask('default', ['uglify','cssmin']);

};