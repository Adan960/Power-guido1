class Game {
  constructor() {
    this.resetTitle = createElement("h2");
    this.resetButton = createButton("");
    this.leaderBoardTitle = createElement("h2");
    this.leader1 = createElement("h2");
    this.leader2 = createElement("h2");
  }

  getState(){
    var gameStateRef = dataBase.ref("gameState");
    gameStateRef.on("value",function(data){gameState = data.val();});
  }
  update(){

  }
  start() {
    form = new Form();
    form.display();
    player = new Player();
  }
  handleElements(){

  }
  play(){

  }
  handlePlayersControl(){
    
  }
}
