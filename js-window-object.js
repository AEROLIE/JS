// JavaScript Document
var attime;
function clock()
{
	var time = new Date();
	attime = time.getHours()+':'+time.getMinutes()+':'+time.getSeconds();
	document.getElementById('clock').value=attime;
}
var int = setInterval('clock()',1000);