/*============================ typing animation =========*/
var typed =new Typed(".typing",{
    strings:["","Web Developer","Web Designer","Full Stack Developer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})
function data()
{
var a=document.getElementById("n1").value;
var b=document.getElementById("n2").value;
var c=document.getElementById("n3").value;
var d=document.getElementById("n4").value;
var e=document.getElementById("n5").value;
if(a==""||b==""||c==""||d==""||e=="")
{
    alert("All Fields are Mendatory")
}
}