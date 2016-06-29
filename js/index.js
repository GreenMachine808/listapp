var colors = [
	"red",
	"orange",
	"yellow",
	"green",
	"blue",
	"indigo",
	"violet"
];


var count = 0;


var cycle = function(array) {
	// console.log(array[count]);
	if (count == array.length-1) {
		count = 0;
	} else {
		count++;
	};


};


var show2 = function() {
	document.body.style.backgroundColor = colors[count];
	document.getElementById("colorspace").innerHTML=colors[count];
	cycle(colors);

}

var 


}


var listall = function(array) {
	for (var i = 0; i < array.length; i++) {
		document.getElementById('colorspace').innerHTML +=
		"<li>" + array[i] + "</li>";
	}
}
