var grid = []; 

function makeGrid(){
  for(let i = 0; i < 16; i++){
    var tile = {
      tileId: "t"+i,
      hex: "#ffffff",
      secondsPassedSinceColorChange: 0
    }
    grid.push(tile);    
  }
};


// setInterval(function(){ 
//   alert("Hello"); 
// }, 3000);

function pickRand(){
  
};

function changeColor(){
  
};

function makeRGB(){
	var hexString = (Math.floor(Math.random() * (parseInt('0xFFFFFF', 16) + 1))).toString(16);
	return "#" + ('00000' + hexString).slice(-6);
};

function checkSecondsPassedSinceColorChange (){
  
};

makeGrid(); 
alert(grid);