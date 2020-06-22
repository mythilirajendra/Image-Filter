var oimg = null;
var rimg = null;
var bimg = null;
var gimg = null;
var canvas = document.getElementById("cid");
function upload(){
  var f = document.getElementById("fid");
  oimg = new SimpleImage(f);
  rimg = new SimpleImage(f);
  bimg = new SimpleImage(f);
  gimg = new SimpleImage(f);
  oimg.drawTo(canvas);
}
function redf(){
  if (imageIsLoaded(rimg)) {
    for(var pix of rimg.values()){
      pix.setRed(255);
    }
    rimg.drawTo(canvas);
  }
}
function blurf(){
  if (imageIsLoaded(bimg)) {
    for (var pixel of bimg.values()) {
    var x = pixel.getX();
    var y = pixel.getY();
    if (Math.random() > 0.5) {
        var other = getPixelNearby(bimg, x, y, 10);
        bimg.setPixel(x, y, other);
    }
}
    bimg.drawTo(canvas);
  }
}
function ensureInImage (coordinate, size) {
    if (coordinate < 0) {
        return 0;
    }
    if (coordinate >= size) {
        return size - 1;
    }
    return coordinate;
}

function getPixelNearby (image, x, y, diameter) {
    var dx = Math.random()*diameter;
    var dy = Math.random()*diameter;
    var nx = ensureInImage(x + dx, image.getWidth());
    var ny = ensureInImage(y + dy, image.getHeight());
    return image.getPixel(nx, ny);
}
function grayf(){
  if(imageIsLoaded(gimg)){
    for(var pix of gimg.values()){
      var avg = (pix.getRed() + pix.getGreen() + pix.getBlue()) / 3;
      pix.setRed(avg);
      pix.setGreen(avg);
      pix.setBlue(avg);
    }
    gimg.drawTo(canvas);
  }
}
function resetf() {
  if (imageIsLoaded(oimg)) {
    oimg.drawTo(canvas);
    //gimg = new SimpleImage(oimg);
    //rimg = new SimpleImage(oimg);
  }
}
function imageIsLoaded(img) {
  if (img == null || !img.complete()) {
    alert("Please upload image first :B");
    return false;
  } 
  else {
    return true;
  }
}