function loadImage(url) {
  return new Promise(resolve=>{
    const image=new Image();
    image.addEventListener('load',()=>{
      resolve(image);
    });
  image.src=url
});
}
class SpriteSheet {
  constructor(image,width,height) {
    this.width=width;
    this.image=image;
    this.height=height;

  }
  define(name,x,y){


  }
}
const canvas=document.getElementById('screen')
const context=canvas.getContext('2d')
context.fillRect(0,0,640,500);
loadImage('/img/tileset.png')
.then(image =>{
  const sprites=new SpriteSheet(image);
  sprites.define('gournd',0,0);
  sprites.draw('ground',context,64,55);
context.drawImage(image,
  0,0,
  16,16,
  0,0,100,200
);

})
