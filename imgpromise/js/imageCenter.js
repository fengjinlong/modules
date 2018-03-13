define(function() {
  var imageLoad = function (img) {
    return new Promise(function (resolve, reject) {
      if (img.complete) {
        resolve()
      } else {
        img.onload = function (e) {
          resolve(e)
        }
        img.onerror = function(err) {
          reject(err);
        }
      }
    })
  }
  var imageCenter = function (list) {
    list.forEach(function (item) {
      var img = item.children[0]
      var itemW = item.offsetWidth;
      var itemH = item.offsetHeight;
      var itemR = itemW / itemH;
      imageLoad(img).then(function() {
        var imgW = img.naturalWidth;
        var imgH = img.naturalHeight;
        var imgR = imgW / imgH;

        var resultMode = null;
        resultMode = itemR > imgR ? 'aspectFill-x' : 'aspectFill-y'
        $(img).addClass(resultMode);
      })
    })
  }
  return imageCenter;
});