
var sidenavbar = document.querySelector(".side-navbar")

function sidenav(){
    sidenavbar.style.left="0%"
}

function closebar(){
    sidenavbar.style.left="-60%"
}


function keyfun(){
    var a=document.getElementsByClassName('colls');

    for(var i=0; i<a.length; i++){
        var val=document.getElementById('inp').value.toLowerCase();

        if(a[i].innerHTML.toLowerCase().indexOf(val) != -1){
            a[i].style.display='block';
        }else{
            a[i].style.display='none';
        }

    }
}