document.onreadystatechange = function () {
  if (document.readyState !== 'interactive'){
    init();
  } else {
    document.addEventListener('DOMContentLoaded', init);  
  }
}


function init(){
  var pauseButton = document.getElementById("pause");
  pauseButton.addEventListener("click", function(){
    pause = !pause; 
    pauseButton.textContent = pause ? "Play" : "Pause"; 
  });
  var pause = false; 
  var grid = []; 

  function makeGrid(){
    for(let i = 0; i < 16; i++){
      var tile = {
        tileId: "t"+i,
        hex: "#ffffff",
        isNew: true, 
        secondsPassedSinceColorChange: 0
      }
      grid.push(tile);    
    }
  };

  makeGrid(); 

  setInterval(function(){
    if(!pause){
      for(let i in grid){
        grid[i].secondsPassedSinceColorChange += 0.25;    
      }
      pickRand(); 
    }
  }, 250);

  function pickRand(){
    var rand = Math.floor(Math.random() * 16 ); 
    if (grid[rand].isNew) {
      grid[rand].isNew = false; 
      changeColor(rand); 
    } else {
      if (checkSecondsPassedSinceColorChange(rand)) {
        changeColor(rand);       
      } else {
        pickRand(); 
      }
    }

  };

  function changeColor(tileNumber){
    document.getElementById("t"+tileNumber).style.backgroundColor = makeRGB();
    grid[tileNumber].secondsPassedSinceColorChange = 0; 
  };

  function makeRGB(){
    var hexString = (Math.floor(Math.random() * (parseInt('0xFFFFFF', 16) + 1))).toString(16);
    return "#" + ('00000' + hexString).slice(-6);
  };

  function checkSecondsPassedSinceColorChange (tileNumber){
    if (grid[tileNumber].secondsPassedSinceColorChange >= 2) {
      console.log("true");
      return true; 
    } else {
      console.log("false");
      return false; 
    }  
  };

  function pause(){
    pause = true; 
  }



}
