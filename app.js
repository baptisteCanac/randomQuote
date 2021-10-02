let allquotes = [
		"To be, or not to be, that is the question - William Shakespeare", 
		"A musician must make music, an artist must paint, a poet must write, if he is to be ultimately at peace with himself. What a man can be, he must be - Abraham Maslow",
		"Protecting your mind, body and spirit from negativity is a sign of self-love. - Nitin Namdeo",
		"Nothing is impossible, the word itself says, “I’m possible!” - Audrey Hepburn",
		"Our lives begin to end the day we become silent about things that matter. - Martin Luther King Jr",
		"If you can dream it, you can achieve it. - Zig Ziglar",
		"It is never too late to be what you might have been. - George Eliot"
		];
function newRandomQuote(){
	let random = Math.floor((Math.random() * allquotes.length) + 0);
	let aRandomQuote = allquotes[random];
	let printQuote = document.getElementById("quoteTitle").innerHTML = aRandomQuote;
}