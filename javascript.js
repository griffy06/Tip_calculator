function calculateTip()
{
    var bill_amount=document.getElementById("bill_amount").value;
    var service_quality=document.getElementById("service_quality").value;
    var no_people=document.getElementById("no_people").value;


if(bill_amount=="" || service_quality==0)
{
    alert("Please enter values");
    return;
}
if(no_people=="" || no_people<=1)
{
    no_people=1;


document.getElementById("each").style.display="none";
}
else
{
    document.getElementById("each").style.display = "block";
    document.getElementById("each").innerHTML= "each";
}

var ans=(bill_amount*service_quality)/no_people;
//round off to two decimal places
ans=Math.round(ans*100)/100;
//next line allows us to always have two digits after decimal point
ans = ans.toFixed(2);

document.getElementById("answer").style.display = "block";
document.getElementById("tip").innerHTML = ans;
}

//before calling the function, hide the tip amount

document.getElementById("answer").style.display = "none";
document.getElementById("each").innerHTML = "none";

document.getElementById("calculate").onclick=function(){
    calculateTip();
};