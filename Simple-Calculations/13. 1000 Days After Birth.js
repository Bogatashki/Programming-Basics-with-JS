function daysAfter ([data]){
var splitData = data.split("-");
  var mirorDate = splitData[2]+"-"+splitData[1]+"-"+splitData[0];
  var result = new Date(mirorDate);
  result.setDate(result.getDate() + 999);
  var result2 = result.toLocaleDateString();
  var result3 = result2.split("/");

if (result3[1]<10){
	result3[1] = 0 + result3.slice(1, 2).toString();

}
if (result3[0]<10){

	result3[0] = 0 + result3.slice(0, 1).toString();

}

var newparts1 = result3[1]+"-"+result3[0]+"-"+result3[2];
console.log(newparts1);
} 
