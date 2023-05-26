var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

var vc = document.getElementById('video-container');


vc.addEventListener("click", function(e) {
  e.preventDefault();
  document.getElementById("overlay").style.display = "block";
  console.log("hello")
});



var closeButtons = document.getElementsByClassName("closeBtn");
    for (var i = 0; i < closeButtons.length; i++) {
      closeButtons[i].addEventListener("click", function() {
        document.getElementById("overlay").style.display = "none";
      });
    }