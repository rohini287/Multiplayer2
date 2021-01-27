class Game{
   constructor(){

   }
   getState(){
       var gameStateref=database.ref('gameState');
       gameStateref.on("value",function(data) {
        gameState=data.val();   
       })
   }
   update(state){
       database.ref("/").update({
           'gameState': state

       })
   }
   async start(){
       if (gameState===0){
           player=new Player();
           var playercountRef=await database.ref('playerCount').once("value")
           if(playercountRef.exists()){
              playerCount=playercountRef.val();
              player.getCount();
           }
         
           form=new Form()
           form.display();
       }
   }
   play(){
       form.hide();
       text("game start",120,100);
       Player.getPlayerInfo();
       console.log(allPlayers);
       if(allPlayers!==undefined){
           var pos=130
           for (var plr in allPlayers){
               console.log("for")
               if(plr==='Player'+player.index){
                  fill("red");
               }
               else{
                   fill("black");
               }
            textSize()
            text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,pos)
            pos=pos+20
           }
         
       }
       if (keyIsDown(UP_ARROW)&& player.index!==null){
           player.distance+=50
           player.update();
       }
   }
       
   
}