
var button = document.getElementById('submit-btn');
var result = document.getElementById('result');

var fir = document.getElementById('first');
var sec = document.getElementById('second');


button.addEventListener("click", function(){

first.value = first.value.toLowerCase();
second.value = second.value.toLowerCase();

    if(fir.value==""||sec.value==""){
        result.innerHTML = "Please add valid name";
        return;
    }else if(sec.value=="yogesh"&&first.value=="sonakshi"){
        result.innerHTML = "Your Love is "+100+" % strong";
        return 
    }else if(first.value=="yogesh"&&second.value=="sonakshi"){
        result.innerHTML = "Your Love is "+100+" % strong";
        return 
    }else if(first.value=="sonakshi"&&second.value!="yogesh"){
        result.innerHTML = "Your Love is "+Math.round((Math.random()*40))+" % strong";
        return 
    }
    let a = Math.random();
    a = a*100;
    a=Math.round(a);
    result.innerHTML = "Your Love is "+a+" % strong";
});

