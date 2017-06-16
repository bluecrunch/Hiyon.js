//  _   _ ___ __   ___ ________ _______ __   _ _______ _______ 
// | | | |_  |. | /_  |.  ___  |.  __  |. | | |.  __  |____   |
// | |_| | | || |   | || |   | || |  | || | // | |  | |    | | 
// |  _  | | || |___| || |___| || | _| || |//  | |  | |    | | 
// |_| |_| | ||_______||_______||_||___|| |    |_|  |_|    |_| 
//         |_|                          |_|                    
//   _     _                                         _     
//  | |__ | |_   _  ___    ___ _ __ _   _ _ __   ___| |__  
//  | '_ \| | | | |/ _ \  / __| '__| | | | '_ \ / __| '_ \ 
//  | |_) | | |_| |  __/ | (__| |  | |_| | | | | (__| | | |
//  |_.__/|_|\__,_|\___|  \___|_|   \__,_|_| |_|\___|_| |_|
                                                        
//Hiyon.js by bluecrunch




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
  var tme = Date();    
  var user=getCookie("username");
  var block0 = "";
  var block1 = "";
  var block2 = "";
  var possible = "abcdefghijklmnopqrstuvwxyz0123456789";

  for( var i=0; i < 4; i++ )
      block0 += possible.charAt(Math.floor(Math.random() * possible.length));

  for( var i=0; i < 4; i++ )
      block1 += possible.charAt(Math.floor(Math.random() * possible.length));  
  
  for( var i=0; i < 4; i++ )
      block2 += possible.charAt(Math.floor(Math.random() * possible.length));
  
  if (user != "") {
      console.log(user);
  } else {
     user = block0 + ":" + block1 + ":" + block2;;
     if (user != "" && user != null) {
         setCookie("username", user, 30);
     }
     console.log(user);
  }
}


//user writing
$('body').keyup(function(event) {
  var user=getCookie("username");
  var tme = Date();
  var eltag = event.target.tagName; 
  var idel = event.target.id;
  //var idel = $(this).attr('id');
  console.log(user + "/TYPING/" + eltag + "/" + tme + "/"+ idel)
});





$('body').click(function(event){
  var user=getCookie("username");
  var tme = Date();
  var eltag = event.target.tagName; 
  var idel = event.target.id;
  var coords = "X:" + event.clientX + ";Y:" + event.clientY;


  console.log( user + "/" + eltag + "/" + tme + "/" + coords + "/" + idel)
});


