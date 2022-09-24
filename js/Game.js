class Game{

     constructor()
    {
        this.gameState = 0
        this.player = new Jugador(displayWidth-1150, displayHeight-300)
        
    }
    play(){
        console.log(this.player);
    this.player.handelControl();



    //moving the player up and down and making the game mobile compatible using touches



    //release bullets and change the image of shooter to shooting position when space is pressed
    if(keyWentDown("space")){

    this.player.shoot()

    }

    //player goes back to original standing image once we stop pressing the space bar
    else if(keyWentUp("space")){
    this.player.noShoot()
    }

   
    }
}