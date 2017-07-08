[javascript] 
"use strict"; 
function changecolor(){
	var a=document.getElementById('txt');
	a.style.color='blue';
}// JavaScript Docum

function changesize(){
	var b=document.getElementById('txt');
	b.style.width='100px';
}

function hidetxt(){
	var c=document.getElementById('txt');
	c.style.display='none';
}

function showtxt(){
	var d=document.getElementById('txt');
	d.style.display='block';
}

function canclesetting(){
	var e=confirm('确定取消吗？');
	if(e==true){
		var f=document.getElementById('txt');
	//	f.style.display='block';
		f.style='';
	}
}