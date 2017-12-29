/**
 * Created by user on 28-12-2017.
 */
var i=0;
document.addEventListener("click",function(){
    // document.getElementsById("aa").classList.toggle("myclass");
    document.getElementById("aa").classList.toggle("myclass");
    if(i==0)
    {document.getElementById("ax").src+="?autoplay=1";i++;}
});