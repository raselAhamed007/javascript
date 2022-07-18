const paymentSuccess = true;
const marks = 80;

function enroll(callback){

	console.log("Coursse enrollment is in process...");

	setTimeout(function(){
		if(paymentSuccess){
			callback();
		}else{
			console.log("Payment Failed");
		}
	}, 2000);
	
}

function progress(callback){
	console.log("Coursse in process...");

	setTimeout(function(){
		if(marks >= 80){
			callback();
		}else{
			console.log("You could not enough marks to get the certificate");
		}
	}, 3000);
}

function getCertificate(){
	console.log("Prepearing your certificate...");

	setTimeout(function(){
		console.log("Congrats! You Got the certificate.");
	}, 1000);
}


enroll(function(){
	progress(getCertificate);
});




