module.exports = function() {
  return {
    options: {
      browserifyOptions: {
        debug: true
      }
    },

    dist: {
      options: {
        transform: [
          'hbsfy',
          'babelify'
        ]
      },

      files: {
        '<%= paths.dist.base %>/bundle.js': [
          '<%= paths.src.base %>/**/*.js'
        ]
      }
    }
  };
};
