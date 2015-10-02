module.exports = function(grunt, options) {
  return {
    dist: {
      src: '<%= paths.src.base %>/index.html',
      dest: '<%= paths.dist.base %>/index.html'
    }
  };
};
