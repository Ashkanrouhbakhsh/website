var image1;
var image2;
var image3;
var image4;
var canvas5 = document.getElementById("canvas5");

function change() {
  var canvas1 = document.getElementById("canvas1");
  var canvas2 = document.getElementById("canvas2");
  canvas1.style.backgroundColor = "grey";
  canvas2.style.backgroundColor = "lightblue";
}

function changeback() {
  canvas2.style.backgroundColor = "grey";
  canvas1.style.backgroundColor = "lightblue";
}

function docolor() {
  var dd1 = document.getElementById("canvas3");
  var colorinput = document.getElementById("clr");
  var color = colorinput.value;
  dd1.style.backgroundColor = color;
}

function square() {
  var c = document.getElementById("canvas4");
  var co = document.getElementById("slider");
  var size = co.value;
  var context = c.getContext("2d");
  context.clearRect(0, 0, c.width, c.height);
  context.fillStyle = "yellow";
  context.fillRect(10, 10, size, size);
}

function upload() {
  var f = document.getElementById("foto");
  image = new SimpleImage(f);
  image.drawTo(canvas5);
  image2 = new SimpleImage(f);
  image2.drawTo(canvas6);
}

function clearcanvas() {
  var ctx = canvas5.getContext("2d");
  ctx.clearRect(0, 0, canvas5.width, canvas5.height);
  image1 = null;
}

function clearcanvas5and6() {
  resetfilterfile();
  var ctx = canvas5.getContext("2d");
  ctx.clearRect(0, 0, canvas5.width, canvas5.height);
  image1 = null;
  var ctx = canvas6.getContext("2d");
  ctx.clearRect(0, 0, canvas6.width, canvas6.height);
  image2 = null;
}

function resetimage() {
  clearcanvas();
  image1 = new SimpleImage(image2);
  image1.drawTo(canvas5);
}

function resetfilterfile() {
  $("#resetfilterfile");
  var $el = $("#foto");
  $el.wrap("<form>").closest("form").get(0).reset();
  $el.unwrap();
}

function greyscale() {
  resetimage();
  for (var pixel of image1.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  image1.drawTo(canvas5);
}

function grey() {
  for (var pixel of image1.values()) {
    var average = (pixel.getGreen() + pixel.getRed() + pixel.getBlue()) / 3;
      pixel.setRed(average);
      pixel.setGreen(average);
      pixel.setBlue(average);
    }
  }


function makeallgrey() {
  resetimage();
  grey();
  for (var pixel of image1.values()) {
if(pixel.getRed()+pixel.getBlue()+pixel.getGreen()>690){
    pixel.setRed(pixel.getRed()*0.5);
    pixel.setGreen(pixel.getGreen()*0.5)
  pixel.setBlue(pixel.getBlue()*0.5);
  }
  }
  image1.drawTo(canvas5);
}

function redmaking() {
    for (var pixel of image1.values()) {
   var b = pixel.getBlue();
   var r =pixel.getRed();
   var g = pixel.getGreen();
 if (r+b+g > 690){
   pixel.setGreen(0) ;
   pixel.setBlue(0);
   pixel.setRed(255);
   }
 else{
   pixel.setGreen(g*0.4 );
   pixel.setBlue(b*0.4 );
   pixel.setRed(255);
 }
 }
}

function makered() {
  resetimage();
  for (var pixel of image1.values()) {
    pixel.setRed(255);
  }
  image1.drawTo(canvas5);
}

function makeallred() {
  resetimage();
  grey();
  redmaking();
  image1.drawTo(canvas5); 
}

function makegreen() {
  resetimage();
  for (var pixel of image1.values()) {
    pixel.setGreen(255);
  }
  image1.drawTo(canvas5);
}

function greenmaking(){
  for (var pixel of image1.values()) {
   var b = pixel.getBlue();
   var r =pixel.getRed();
   var g = pixel.getGreen();
 if (r+b+g > 690){
   pixel.setGreen(140) ;
   pixel.setBlue(0);
   pixel.setRed(0);
   }
 else{
   pixel.setGreen(140);
   pixel.setBlue(b*0.57 );
   pixel.setRed(r*0.57);
 } 
 }
}

function makeallgreen() {
 resetimage();
  grey();
  greenmaking();
  image1.drawTo(canvas5); 
}

function makeblue() {
  resetimage();
  for (var pixel of image1.values()) {
    pixel.setBlue(255);
  }

  image1.drawTo(canvas5);
}

function bluemaking(){
    for (var pixel of image1.values()) {
   var b = pixel.getBlue();
   var r =pixel.getRed();
   var g = pixel.getGreen();
 if (r+b+g > 690){
   pixel.setGreen(0) ;
   pixel.setBlue(255);
   pixel.setRed(0);
   }
 else{
   pixel.setGreen(g*0.44);
   pixel.setBlue(255 );
   pixel.setRed(r*0.2);
 }
  }
}
function makeallblue() {
   resetimage();
  grey();
  bluemaking();
  image1.drawTo(canvas5); 
}

function makergb() {
  resetimage();
  for (var pixel of image1.values()) {
    if (pixel.getX() < image1.getWidth() / 3) {
      pixel.setRed(255);
    }
    if (
      pixel.getX() > image1.getWidth() / 3 &&
      pixel.getX() < (2 * image1.getWidth()) / 3
    ) {
      pixel.setGreen(255);
    }
    if (
      pixel.getX() > (2 * image1.getWidth()) / 3 &&
      pixel.getX() < (3 * image1.getWidth()) / 3
    ) {
      pixel.setBlue(255);
    }
  }
  image1.drawTo(canvas5);
}

function makeallrgb() {
  resetimage();
  grey();
  for (var pixel of image1.values()) {
      var b = pixel.getBlue();
   var r =pixel.getRed();
   var g = pixel.getGreen();
    if (pixel.getX() < image1.getWidth() / 3) {
 if (r+b+g > 690){
   pixel.setGreen(0) ;
   pixel.setBlue(0);
   pixel.setRed(255);
   }
 else{
   pixel.setGreen(g*0.4 );
   pixel.setBlue(b*0.4 );
   pixel.setRed(255);
 }
  }
    if(pixel.getX() > image1.getWidth() / 3 &&
      pixel.getX() < (2 * image1.getWidth()) / 3){
 if (r+b+g > 690){
   pixel.setGreen(140) ;
   pixel.setBlue(0);
   pixel.setRed(0);
   }
 else{
   pixel.setGreen(140);
   pixel.setBlue(b*0.57 );
   pixel.setRed(r*0.57);
 } 
    }
    if (
      pixel.getX() > (2 * image1.getWidth()) / 3 &&
      pixel.getX() < (3 * image1.getWidth()) / 3
    ) {
 if (r+b+g > 690){
   pixel.setGreen(0) ;
   pixel.setBlue(255);
   pixel.setRed(0);
   }
 else{
   pixel.setGreen(g*0.44);
   pixel.setBlue(255 );
   pixel.setRed(r*0.2);
 }
  }
    }
  
  image1.drawTo(canvas5);
}

function rainbow() {
  resetimage();
  for (var pixel of image1.values()) {
 var b = pixel.getBlue();
   var r =pixel.getRed();
   var g = pixel.getGreen();
    var h = image1.getHeight();
    var y = pixel.getY();
    var avg = ((r+g+b)/3);
    if (y < h / 7) {
      if (avg < 128) {
        pixel.setRed(avg * 2);
        pixel.setGreen(0);
        pixel.setBlue(0);
      } else {
        pixel.setRed(255);
        pixel.setGreen(avg * 2 - 255);
        pixel.setBlue(avg * 2 - 255);
      }
    }
    if ((y >= h / 7) & (y < (2 * h) / 7)) {
      if (avg < 128) {
        pixel.setRed(avg * 2);
        pixel.setGreen(0.8 * avg);
        pixel.setBlue(0);
      } else {
        pixel.setRed(255);
        pixel.setGreen(avg * 1.2 - 51);
        pixel.setBlue(avg * 2 - 255);
      }
    }
    if ((y >= (2 * h) / 7) & (y < (3 * h) / 7)) {
      if (avg < 128) {
        pixel.setRed(avg * 2);
        pixel.setGreen(avg * 2);
        pixel.setBlue(0);
      } else {
        pixel.setRed(255);
        pixel.setGreen(255);
        pixel.setBlue(avg * 2 - 255);
      }
    }
    if ((y >= (3 * h) / 7) & (y < (4 * h) / 7)) {
      if (avg < 128) {
        pixel.setRed(0);
        pixel.setGreen(avg * 2);
        pixel.setBlue(0);
      } else {
        pixel.setRed(avg * 2 - 255);
        pixel.setGreen(255);
        pixel.setBlue(avg * 2 - 255);
      }
    }
    if ((y >= (4 * h) / 7) & (y < (5 * h) / 7)) {
      if (avg < 128) {
        pixel.setRed(0);
        pixel.setGreen(0);
        pixel.setBlue(avg * 2);
      } else {
        pixel.setRed(avg * 2 - 255);
        pixel.setGreen(avg * 2 - 255);
        pixel.setBlue(255);
      }
    }
    if ((y >= (5 * h) / 7) & (y < (6 * h) / 7)) {
      if (avg < 128) {
        pixel.setRed(avg * 0.8);
        pixel.setGreen(0);
        pixel.setBlue(avg * 2);
      } else {
        pixel.setRed(1.2 * avg - 51);
        pixel.setGreen(avg * 2 - 255);
        pixel.setBlue(255);
      }
    }
    if (y >= (6 * h) / 7) {
      if (avg < 128) {
        pixel.setRed(avg * 1.6);
        pixel.setGreen(0);
        pixel.setBlue(avg * 1.6);
      } else {
        pixel.setRed(avg * 0.4 + 153);
        pixel.setGreen(avg * 2 - 255);
        pixel.setBlue(avg * 0.4 + 153);
      }
    }
  }
  image1.drawTo(canvas5);
}

function makeallrainbow() {
  resetimage();
  grey();
  for (var pixel of image1.values()) {
   var b = pixel.getBlue();
   var r =pixel.getRed();
   var g = pixel.getGreen();
    var h = image1.getHeight();
    var y = pixel.getY();
    var avg =r+g+b;
    if (y < h / 7) {
    if (avg > 690){
   pixel.setGreen(0) ;
   pixel.setBlue(0);
   pixel.setRed(255);
   }
 else{
   pixel.setGreen(g*0.4 );
   pixel.setBlue(b*0.4 );
   pixel.setRed(255);
 }
}
    if ((y >= h / 7) & (y < (2 * h) / 7)) {
    if (avg > 690){
   pixel.setGreen(90);
   pixel.setBlue(0);
   pixel.setRed(255);
    }
      else{
   pixel.setGreen(g*0.66);
        if(g<90){
          pixel.setGreen(90);
        if(g>150){
            pixel.setGreen(150);
          }
        }
   pixel.setBlue(b*0.22);
   pixel.setRed(255);
      }
      
    }
    if ((y >= (2 * h) / 7) & (y < (3 * h) / 7)) {
     if(avg>690){
   pixel.setGreen(238);
   pixel.setBlue(0);
   pixel.setRed(255);
     }
      else{
   pixel.setBlue(b*0.68);
   pixel.setRed(255);
        if(245>g){
          pixel.setGreen(245);
        }
        else{
          pixel.setGreen(g);
        }
      }
    }
    if ((y >= (3 * h) / 7) & (y < (4 * h) / 7)) {
      if (avg > 690){
   pixel.setGreen(140) ;
   pixel.setBlue(0);
   pixel.setRed(0);
   }
 else{
   pixel.setGreen(140);
   pixel.setBlue(b*0.57 );
   pixel.setRed(r*0.57);
 }   
    }
    if ((y >= (4 * h) / 7) & (y < (5 * h) / 7)) {
       if (avg > 690){
   pixel.setGreen(0) ;
   pixel.setBlue(255);
   pixel.setRed(0);
   }
 else{
   pixel.setGreen(g*0.44);
   pixel.setBlue(255 );
   pixel.setRed(r*0.2);
 }
   
}
    if ((y >= (5 * h) / 7) & (y < (6 * h) / 7)) {
         if (avg > 690){
   pixel.setGreen(0) ;
   pixel.setBlue(255);
   pixel.setRed(40);
   }
   else{
   pixel.setBlue(b*0.63);
   if(b<140){
     pixel.setBlue(140);
   }
   pixel.setGreen(g*0.1);
   pixel.setRed(r*0.23);
     if(r<25){
       pixel.setRed(25);
     }
}
      }
    if (y >= (6 * h) / 7) {
      if (avg > 690){
   pixel.setGreen(0) ;
   pixel.setBlue(255);
   pixel.setRed(140);
}
 else{
   pixel.setGreen(g*0.3);
   if(g<40){
     pixel.setGreen(40);
   }
pixel.setBlue(255);
   if(b<150){
     pixel.setBlue(150);
   }
   pixel.setRed(r*0.86)
   if(r<70){
     pixel.setRed(70);
   }
 }
  }
  }
  image1.drawTo(canvas5);
}

function uploadfirstimage() {
  var firstimg = document.getElementById("firstimage");
  var can7 = document.getElementById("canvas7");
  image3 = new SimpleImage(firstimg);
  image3.drawTo(can7);
}

function uploadsecondimage() {
  var secondimg = document.getElementById("secondimage");
  var can8 = document.getElementById("canvas8");
  image4 = new SimpleImage(secondimg);
  image4.drawTo(can8);
}

function composite() {
  image3.setSize(600, 400);
  image4.setSize(600, 400);
  var output = new SimpleImage(image3.getWidth(), image3.getHeight());
  for (var pixel of image3.values()) {
    var x = pixel.getX();
    var y = pixel.getY();
    if (pixel.getGreen() > pixel.getRed() + pixel.getBlue()) {
      var newpixel = image4.getPixel(x, y);
      output.setPixel(x, y, newpixel);
    } else {
      output.setPixel(x, y, pixel);
    }
  }

  var displayfinalimagetocanvas = document.getElementById("canvas7");
  output.drawTo(displayfinalimagetocanvas);
  var deletecan8 = document.getElementById("canvas8");
  var canvascontext = deletecan8.getContext("2d");
  canvascontext.clearRect(0, 0, deletecan8.width, deletecan8.height);
}

function clearcanvas7and8() {
  reset();
  reset2();
  var ctx = canvas7.getContext("2d");
  ctx.clearRect(0, 0, canvas7.width, canvas7.height);
  image3 = null;
  var ctx = canvas8.getContext("2d");
  ctx.clearRect(0, 0, canvas8.width, canvas8.height);
  image4 = null;
}

function reset() {
  $("#button-reset");
  var $el = $("#firstimage");
  $el.wrap("<form>").closest("form").get(0).reset();
  $el.unwrap();
}

function reset2() {
  $("#button-reset2");
  var $el = $("#secondimage");
  $el.wrap("<form>").closest("form").get(0).reset();
  $el.unwrap();
}

function changesize() {
  image3.setSize(600, 400);
}