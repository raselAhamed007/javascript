const paymentSuccess = true;
const marks = 80;

function enroll(callback){

	console.log("Coursse enrollment is in process...");

	const promise = new Promise(function(resolve, reject){
		setTimeout(function(){
			if(paymentSuccess){
				resolve();
			}else{
				reject("Payment Failed");
			}
		}, 2000);
	});

	return promise;	
}

function progress(callback){
	console.log("Coursse in process...");

	const promise = new Promise(function(resolve, reject){
		setTimeout(function(){
			if(marks >= 80){
				resolve();
			}else{
				reject("You could not enough marks to get the certificate");
			}
		}, 3000);
	});

	return promise;
}

function getCertificate(){
	console.log("Prepearing your certificate...");

	const promise = new Promise(function(resolve){
		setTimeout(function(){
			resolve("Congrats! You Got the certificate.");
		}, 1000);
	});

	return promise;
}


enroll()
	.then(progress)
	.then(getCertificate)
	.then(function(val){
		console.log(val);
	})
	.catch(function(err){
		console.log(err);
	});

