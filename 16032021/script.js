var name="BELLO";
alert("Hello " + name);

var name = "Lee";
var age = "21";
var isBoy ="true";
var fruits = ["Banana","apple","peach"]

alert(name);
alert(age);
alert(isBoy);
alert(fruits[1])

function addition(num){
	return num+10;
}
var age = 21;
var trueage= addition(age);
alert(trueage);//"31"

var age2 = 31;
var trueage2 = addition(age2);
alert(trueage2);//"41"

function test(){
a = 123;
var b = 456;
if (a == 123) 
	var c = 789;
}

document.getElementById("byid").innerHTML="我來自火星";
document.getElementById("byid").style.color= "orange";

document.getElementsByClassName("byclass")[0].innerHTML = "我來自class";
document.getElementsByClassName("byclass")[0].style.fontSize = "30px";


document.getElementsByTagName("p")[0].innerHTML = "我來自火星";
document.getElementsByTagName("p")[0].style.fontSize = "30px";
document.getElementsByTagName("p")[0].style.color = "red";