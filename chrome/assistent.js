var lat, lon;
window.onload = function() {
  var x = document.getElementById("output");
  document.getElementById("input").focus();
  getLocation();

  function getLocation() {
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
      } else {
          x.innerHTML = "Unavailable.";
      }
  }
  function showPosition(position) {
    lat = position.coords.latitude;
    lon = position.coords.longitude;
  }

  $(document).keypress(function (e) {
      if (e.which == 13) {
          runText();
      }
  });
  function runText(){
    var y = document.getElementById("input");
    var text = encodeURI($(y).val());
    $(y).val('');
    document.getElementById("frame").setAttribute('src',"https://www.jeddsan.ch/assistent/verify.php?hideBar=true&text="+text+"&lat="+lat+"&lon="+lon);
  }
};

    /*$(".assistent").hide();
    $(".me").hide();
    $(document).ready(function(){
      windowWidth = $(window).width();
      if(windowWidth>=768){
        $(".assistent").each(function(index) {
            $(this).show("slide", { direction: "left" }, 500);;
        });
        $(".me").each(function(index) {
            $(this).show("slide", { direction: "right" }, 1000);;
        });
      }else{
        $(".assistent").show();
        $(".me").show();
      }
    });*/
    $(document).ready(function() {
      function reloadInput(){
        var txt_random = ["Wetter in Berlin",
        "Aktien von Google",
        "Sonnenaufgang in Genf",
        "Wie spät ist es?",
        "Währungsrechner 1 Euro in Franken",
        "Von Baden nach Zürich",
        "Distanz von Berlin nach Sitten",
        "Film Independence Day",
        "45 + 6 / 57",
        "Restaurants in Baden",
        "255 im Hexadezimalsystem",
        "Track Wherever I Go",
        "Zufallszahl von 1 bis 500"];
        var random_number = Math.floor((Math.random() * txt_random.length) + 0);
        var txt = decode_utf8(txt_random[random_number]);
        var timeOut;
        var txtLen = txt.length;
        var char = 0;
        $('#input').attr('placeholder', '|');
        (function typeIt() {
            var humanize = Math.round(Math.random() * (150 - 30)) + 10;
            timeOut = setTimeout(function () {
                char++;
                var type = txt.substring(0, char);
                $('#input').attr('placeholder', type + '|');
                typeIt();

                if (char == txtLen) {
                    $('#input').attr('placeholder', $('#input').attr('placeholder').slice(0, -1)) // remove the '|'
                    clearTimeout(timeOut);
                }

            }, humanize);
        }());
      }
      //Start
      reloadInput();
      var interval = setInterval(reloadInput, 5000);
    });
    $(function() {

        var $body = $(document);
        $body.bind('scroll', function() {
            // "Disable" the horizontal scroll.
            if ($body.scrollLeft() !== 0) {
                $body.scrollLeft(0);
            }
        });

    });

function encode_utf8(s) {
  return unescape(encodeURIComponent(s));
}

function decode_utf8(s) {
  return decodeURIComponent(escape(s));
}

//Android function
/*var Android = {
  setAlarm : function (hour, minutes, name){
    $("#output").text("setAlarm um"+hour+":"+minutes);
  }
};*/
