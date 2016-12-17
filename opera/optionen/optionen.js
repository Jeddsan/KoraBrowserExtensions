function switchFrame(url){
  document.getElementById("main").setAttribute('src',url);
}

$('#konto').click(function(){
    switchFrame('https://www.jeddsan.ch/login/mobile.php');
});
$('#store').click(function(){
    switchFrame('https://www.jeddsan.ch/assistent/store/');
});
