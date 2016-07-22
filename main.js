// document.onreadystatechange = function () {
//   if (document.readyState !== 'interactive'){
//     init();
//   } else {
//     document.addEventListener('DOMContentLoaded', init);  
//   }
// }

init(); 

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
        isNew: true, 
        secondsPassedSinceColorChange: 0
      }
      grid.push(tile);    
    }
  };

  makeGrid(); 

  

  function pickRand(){
    changeColor(recursion()); 
  };

  function recursion(){
    let rand = Math.floor(Math.random() * 16 );
    if (grid[rand].isNew) {
      grid[rand].isNew = false; 
      return rand; 
    } else if (checkSecondsPassedSinceColorChange(rand)){
      return rand; 
    } else {
      return recursion(); 
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

  setInterval(function(){
    if(!pause){
      for(let tile of grid){
        tile.secondsPassedSinceColorChange += 1;    
      }
      pickRand(); 
    }
  }, 1000);
}
