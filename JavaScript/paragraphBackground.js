window.addEventListener("unload", function(){
  let count = parseInt(localStorage.getItem('counter') || 0);

  localStorage.setItem('counter', ++count)
}, false);

if (localStorage.getItem('counter')%5 == 0) {
  let paragraphBackgroundBox =  document.getElementById('reloadParagraph');
  paragraphBackgroundBox.style.backgroundColor = "green";
}


