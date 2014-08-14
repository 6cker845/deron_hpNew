httpObj = new XMLHttpRequest();
httpObj.open("get", "../js/json/images.json", true);
httpObj.onload = function(){
var myData = JSON.parse(this.responseText);
var rijfImg = "";

for (var i=0; i<myData.rijf.length; i++){
	console.log(myData.rijf[i].image);
	rijfImg = rijfImg + "<img src='" + myData.rijf[i].image + "' width='100'>";
}

/* document.getElementById("liveInfo").innerHTML = rijfImg; */
}
httpObj.send(null);


/* <img src="../images/rijf1.png" width="100"> */