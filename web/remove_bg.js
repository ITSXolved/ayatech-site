const Jimp = require('jimp');

Jimp.read('c:/Users/ASUS/Downloads/ayatech-site-main/ayatech-site-main/web/public/logo_v3.png')
  .then(image => {
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
      var red = this.bitmap.data[idx + 0];
      var green = this.bitmap.data[idx + 1];
      var blue = this.bitmap.data[idx + 2];
      
      // If color is close to white
      if (red > 235 && green > 235 && blue > 235) {
        this.bitmap.data[idx + 3] = 0; // Make transparent
      }
    });
    image.write('c:/Users/ASUS/Downloads/ayatech-site-main/ayatech-site-main/web/public/logo_v3_transparent.png');
    console.log("Logo updated");
  })
  .catch(err => {
    console.error(err);
  });
