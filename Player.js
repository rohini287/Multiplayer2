class Player{
    constructor(){
        this.index=0
        this.distance=0
        this.name=null;

    }
    getCount(){
        var getCountref=database.ref('playerCount');
        getCountref.on("value",(data)=> {
         playerCount=data.val();    
    })
    
}
update(){
    var playerIndex="Players/Player"+this.index
    database.ref(playerIndex).update({
        'name': this.name,
        'distance':this.distance

    })
}
 updateCount(count){
    database.ref("/").update({
        'playerCount': count

    })
 }
 static getPlayerInfo(){
     var playerInfoRef=database.ref('Players');
     playerInfoRef.on("value",(data)=>{
     allPlayers=data.val();
    
     })

     
 }
}