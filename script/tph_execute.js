function executeModern(code){	//Executes the Modern code. It creates a new function and runs that.
	(new Function(code))()	//Modern is much quicker to run than legacy functions
	console.log("Ran an external function - Modern")
}

function executeLegacy(code){	//Executes the Legacy code. It runs the code snippet.
	eval(code);	//Legacy is more compatible with older browsers than modern functions.
	console.log("Ran an external function - Legacy")
}