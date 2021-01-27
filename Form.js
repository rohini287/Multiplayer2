class Form{
    constructor(){
        this.input=createInput();
        this.button=createButton("start");
        this.greeting=createElement('H3');

    }
    display(){
        var title=createElement('H1')
        title.html("Car racing game");
        title.position(150,200);
      
        this.input.position(150,160);
       
        this.button.position(250,200);
        
        this.button.mousePressed( ()=> {
            this.input.hide();
            this.button.hide();
             player.name=this.input.value();
            playerCount=playerCount+1
            player.index=playerCount;
            

         player.update();
         player.updateCount(playerCount);
         this.greeting.html("Welcome"+ player.name);
        this.greeting.position(130,160);
         
        })
        
        

    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
    
}