class Food {
    
  constructor(x,y,width,height){
   var Foodstock;
   var lastFed;

   this.body = Bodies.rectangle(x,y,width,height);
   this.width=width;
   this.height=height;
   this.image=loadImage('Milk.png');  

   World.add(world,this.body);
  }
  

   getFoodStock(){
    var foodStockRef = database.ref('Food');
    foodStockRef.on("value",function(data){
         foodStockRef = data.val();
    })
   }
   update(){
       database.ref('/').update({
           Food:stock
       })
  }

display(){
 var x=80,y=100;

 imageMode(CENTER);
 image(this.image,70,70,70,70);

  if(this.foodStockRef!=0){
    for(var i=0;i<this.foodStock;i++){
      if(i%10==0){
        x=80;
        y=y+50;
      }
      this.image(this.image,x,y,50,50);
      x=x+30;
    } 
  }   
}

}