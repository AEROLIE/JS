// JavaScript Document
function openwin()
{				window.open('http://www.imooc.com','_blank','height=600,width=400,top=100,toolbar=no,left=0,menu=no,scrollbars=no,status=no');
}

function info()
{
	confirm('请输入姓名后，再点击确认');
}

function message()
{
	alert('不要移开，点击后进行慕课网！');
}

var a=0;
function message1()
{
	if(a==0)
	{
		alert('请选择职业');
		a+=1;
	}
}

function message2()
{
	alert('请确定输入密码后，在移开！');
}

function message3()
{
	alert('你触发了选中事件');
}

function message4()
{
	alert('您改变了文本内容');
}