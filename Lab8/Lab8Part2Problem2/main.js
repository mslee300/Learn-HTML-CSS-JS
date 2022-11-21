var answer = prompt("Would you like to learn some fun facts about CHINCHILLA? If yes, put 'yes'. If no, put 'no'.");

if (answer.toLowerCase() === 'yes'){
	alert("You answered " + answer + ". Enjoy the funfacts about CHINCHILLA!");
	document.getElementById("funfacts").style.visibility="visible";
}

else if (answer.toLowerCase() === 'no'){
	alert("You answered " + answer + ". It seems you know all the funfacts about them! Please let us know too!!!");
	document.getElementById("funfacts").style.visibility="hidden";
}