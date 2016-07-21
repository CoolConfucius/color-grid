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


// setInterval(function(){ 
//   alert("Hello"); 
// }, 3000);

function pickRand(){
  var rand = Math.floor(Math.random() * 16 ); 
  console.log(rand);
  if (grid[rand].isNew) {
    grid[rand].isNew = false; 
    changeColor(rand); 
  } else {
    if (checkSecondsPassedSinceColorChange(rand)) {
      changeColor(rand); 
      grid[rand].secondsPassedSinceColorChange = 0; 
    } else {
      pickRand(); 
    }
  }

};

function changeColor(tileNumber){
  document.getElementById("t"+tileNumber).style.backgroundColor = makeRGB();
};

function makeRGB(){
	var hexString = (Math.floor(Math.random() * (parseInt('0xFFFFFF', 16) + 1))).toString(16);
	return "#" + ('00000' + hexString).slice(-6);
};

function checkSecondsPassedSinceColorChange (tileNumber){
  if (grid[tileNumber].secondsPassedSinceColorChange > 2) {
    return true; 
  } else {
    return false; 
  }

  
  
};

// makeGrid(); 
// alert(grid);