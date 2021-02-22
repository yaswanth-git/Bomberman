let random = [];

function randomize(){
	while(random.length < 10){
	    const r = Math.floor(Math.random() * 100) + 1;
	    if(random.indexOf(r) === -1 && r < 82) random.push(r);
	}
}
randomize();

function isInrandomay(id){
	for(let i = 0;i<10;i++){
		if(('cell_'+random[i]) == id){
			return true;
		}
	}
	return false;
}

function show(){
	for(let i = 0;i<10;i++){
		let magic = "cell_"+random[i];
		document.getElementById(magic).style.borderColor = "red";
		document.getElementById(magic).style.backgroundImage = "url('https://img.icons8.com/emoji/48/000000/bomb-emoji.png')";
	}
}

let score = 0;
document.getElementById('gameScore').innerHTML = `Score = ${score}`;

function check(id){
	if(document.getElementById(id).style.backgroundColor == "" && document.getElementById('resultDisplay').textContent == ""){
		if(!isInrandomay(id)){
			score += 1;
			document.getElementById('gameScore').innerHTML = `Score = ${score}`;
			document.getElementById(id).style.backgroundColor = "green";
			if(score == 71){
				show();
				document.getElementById('resultDisplay').textContent = "win";
			}
		}
		else{
			show();
			document.getElementById('resultDisplay').textContent = "game over";
		}
	}
}

function reset(){
	score = 0;
	document.getElementById('gameScore').innerHTML = `Score = ${score}`;
	document.getElementById('resultDisplay').textContent = "";
	random = [];
	randomize();
	for(let j = 1;j<82;j++){
		let i="cell_"+j;
		let node = document.getElementById(i);
		node.style.borderColor = "black";
		node.style.backgroundImage = "";
		node.style.backgroundColor = "";
	}
}