class Zombie{

    constructor()
    {
        var random = Math.round(random(5,10));
        this.zombieImg= loadAnimation("assets/zombie1.png","assets/zombie2.png");
        this.zombie = createSprite(width+30,random,50,50);
        this.zombie.addAnimation("walking", this.zombieImg);
        this.zombie.scale = 0.15;
        this.zombie.velocityX= -10;
    }
    

}