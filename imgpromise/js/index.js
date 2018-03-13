// require.config({
//   　　　　paths: {
//   　　　　　　"jquery": "jquery"
//   　　　　}
//   　　});

require(['imageCenter'], function (imageCenter) {
  var imageWrapList = document.querySelectorAll('.img-wrap');
  imageCenter(imageWrapList);
});
