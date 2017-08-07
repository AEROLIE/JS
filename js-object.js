// JavaScript Document
//获取当前对象长度
var myarray=new Array(5);
var mynum=myarray.length;
document.write('数组的长度是：'+mynum+'<br>'+'<br>');

//获得年份
var mydate=new Date();
document.write(mydate+'<br>');
var myyear=mydate.getFullYear();
document.write('当前年份：'+myyear+'<br>');
//改变年份
mydate.setFullYear(1970);
var myyear1=mydate.getFullYear();
document.write(mydate+'<br>'+myyear1+'<br>'+'<br>');
//返回日期
var myweek=new Date();
var weekday=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var num=myweek.getDay();
document.write(myweek.getDay());
document.write('今天是：'+weekday[num]+'<br>'+'<br>');
//返回/设置时间
var mytime=new Date();
document.write('当前时间：'+mytime+'<br>');
mytime.setTime(mytime.getTime()+2*60*60*1000);
document.write('推迟两个小时时间：'+mytime+'<br>');
//string字符串对象
var message='I Love Javascript';
var mychar=message.toLowerCase();
document.write('字符串'+mychar);
document.write('<br>'+'<br>');
//返回指定位置的字符
var mystr='Hello World!';
document.write(mystr.length+'&nbsp');
document.write(mystr.charAt(mystr.length-1));
document.write('<br>'+'<br>');
//返回指定的字符串首次出现的位置
document.write(mystr.indexOf('H')+'<br>');
document.write(mystr.indexOf('W',5)+'<br>'+'<br>');
//查询第二个o出现的位置
var j=0;
for(var i=0;i<mystr.length;i++)
	{
		if(mystr.charAt(i)=='o')
			{	
				j++;
				if(j==2)
					{
						document.write(mystr.indexOf(mystr.charAt(i),i));
					}
			}
	}
document.write('<br>'+'<br>');
//字符串分割
document.write(mystr.split('',6));
document.write('<br>'+'<br>');
//substring() 提取字符串
document.write(mystr.substring(6,9));
document.write('<br>'+'<br>');


//jsobject 编程联系
var nowdate=new Date();
var newweekday=nowdate.getDay();
var newweek=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var scoreStr = "小明:87;小花:81;小红:97;小天:76;小张:74;小小:94;小西:90;小伍:76;小迪:64;小曼:76";

