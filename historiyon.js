                                                                                        
 _   _ ___ _________   __________ ______ ___ __   ___ ________ _______ __   _   _ ____  
| | | |_  |____   \ \ / |.  ___  |____  |_  |. | /_  |.  ___  |.  __  |. | | | | / ___| 
| |_| | | |    | ||  V / | |   | |    | | | || |   | || |   | || |  | || | /_  | \___ \ 
|  _  | | |    | || |\ \ | |___| |    | | | || |___| || |___| || | _| || |/| |_| |___) |
|_| |_| | |    |_||_| \_\|_______|    |_| | ||_______||_______||_||___|| |  \___/|____/ 
        |_|                               |_|                          |_|              

  _     _                                         _     
 | |__ | |_   _  ___    ___ _ __ _   _ _ __   ___| |__  
 | '_ \| | | | |/ _ \  / __| '__| | | | '_ \ / __| '_ \ 
 | |_) | | |_| |  __/ | (__| |  | |_| | | | | (__| | | |
 |_.__/|_|\__,_|\___|  \___|_|   \__,_|_| |_|\___|_| |_|
                                                        
Historiyon.js by bluecrunch
var x = 1;

function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user=getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
       user = prompt("Please enter your name:","");
       if (user != "" && user != null) {
           setCookie("username", user, 30);
       }
    }
}



//GET ELEMENT ON CLICK
$( "body" ).click(function( event ) {
  var user=getCookie("username");
  var tme = Date();
  
  console.log(user + " click " + event.target.nodeName + " " +  tme);
});

//user writing
$( "body" ).keyup(function( event ) {
  var user=getCookie("username");
  console.log(user + " writing ");
});



//counts click
function clickCounter() {
  var user=getCookie("username");
  var buttonsignup = document.getElementById("signups");
  var tme = Date();
  buttonsignup.value = x;
  x++;
  console.log("Button clicked " + x)
  console.log("Button clicked/" + x + "/" + user + "/" + tme)
  console.log(x)  
  console.log(navigator.appCodeName)

}



var inputs = document.getElementsByTagName('input','button');

for(var i = 0; i < inputs.length; i++) {
    if(inputs[i].type.toLowerCase() == 'text') {
        alert(inputs[i].value);
    }
}

//get coordinate on click
function printMousePos(event) {
   var coords =
    "clientX: " + event.clientX +
    " / clientY: " + event.clientY;
  console.log(coords + " " + Date());

}
var timing = Date();
console.log(addEventListener("click", printMousePos) + timing);


