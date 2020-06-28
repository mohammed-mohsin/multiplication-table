let btn = document.querySelector(".btn");
btn.addEventListener('click',function(){

    let msg = document.querySelector(".msg") ;
    


    for (i = 1; i<=10 ; i++) {
        document.write( msg.value +" X " +  i + " = " + (msg.value * i) + "<br>");
    }



})