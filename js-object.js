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