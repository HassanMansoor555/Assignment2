function getcube()
{
var number = document.getElementById("number").value;
if (number=="")
{
alert("empty");
}
else
{
alert(number*number*number);
}
console.log(number);
}