// Burger control
document.querySelector('.burger').addEventListener('click', function () {
    document.querySelector('.burger span').classList.toggle('active');
    // Nav toggle class "active"
    document.querySelector('nav').classList.toggle("active");
        // Maine section toggle class "active"
    document.querySelector('section').classList.toggle("disactive");
})

// low-scroll

$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

  // multylanguages script
function mTsetLang(e) {
  var t=e["mainLang"];
  var n=e["LangCookieName"];
  if(!getCookie(n)){setCookie(n,t,365)
}
  var r="lang-"+getCookie(n);
  $(document).ready(function() {
    $(".mTsetLang").click(function() {
      var e=$(this).attr("setlang");
      setCookie(n,e,365);
      window.location.reload()});
      $(".mTsetLang").each(function(e,t) {
        var n=$(this).attr("setlang");
          if ("lang-" + n != r) { $(".lang-" + n).remove() }
      })
  })
}
        // get cookie script
function setCookie(name, value, days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		var expires = "; expires=" + date.toGMTString();
	}
	else var expires = "";
	document.cookie = name + "=" + value + expires + "; path=/";
}
function getCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
	}
	return null;
}
function eraseCookie(name) {
	setCookie(name, "", -1);
}


    // Start leng rus
mTsetLang({ 
mainLang:'rus',
LangCookieName:'SiteLanguage'
})