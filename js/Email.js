class Email{
  constructor(x, y, image){
    this.x = x;
    this.y = y;
    this.image = image;
    this.size = 50;
  }

  update(){
    this.interact();
    this.display();
  }

  interact(){
    // let a = createA('angelcenerini@gmail.com', '');
    // a.position(this.x, this.y);
    // // Email Icon
    // // let img;
    // // let img = image(this.image, this.x, this.y, this.size, this.size);
    // // img=createImg('assets/images/emailIcon.png','assets/images/emailIcon.png')
    // // createImg(img).parent(a);
    // let img = createImg('assets/images/emailIcon.png', 'email icon').parent(a);
    // // img.position(-150, 0);
    // img.size(this.size,this.size);

    // Email Icon
    // image(this.image, this.x, this.y, this.size, this.size);
  }

  display(){

  }
}
