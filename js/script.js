(function () {
    "use strict";

    // Assign applicationId and adUnitId to test values. Replace these values with live values 
    // from Dev Center before you submit your app to the Store.
    var interstitialAd = null;
    var applicationId = "d25517cb-12d4-4699-8bdc-52040c712cab";
    var adUnitId = "test";

    window.startInterstitial = function () {
        writeText("<br>Interstitial ads in JavaScript UWP apps");
        registerButtonEvents();

        // Initialize the InterstitialAd object and set up event handlers for it.
        prepareInterstitial();

        writeText("Press the buttons to request and show an interstitial ad.");
    };

    var registerButtonEvents = function () {
        requestAdButton.addEventListener("click", requestAdButtonClick);
        showAdButton.addEventListener("click", showAdButtonClick);
    };

    // This example requests an interstitial ad when the "Request ad" button is clicked. In a real app, 
    // you should request the interstitial ad close to when you think it will be shown, but with 
    // enough advance time to make the request and prepare the ad (say 30 seconds to a few minutes).
    // To show an interstitial banner ad instead of an interstitial video ad, replace InterstitialAdType.video 
    // with InterstitialAdType.display.
    var requestAdButtonClick = function (evt) {
        if (interstitialAd) {
            interstitialAd.requestAd(MicrosoftNSJS.Advertising.InterstitialAdType.video, applicationId, adUnitId);
        }
    }

    // This example attempts to show the interstitial ad when the "Show ad" button is clicked.
    var showAdButtonClick = function (evt) {
        if (interstitialAd && interstitialAd.state !== MicrosoftNSJS.Advertising.InterstitialAdState.showing) {
            showInterstitial();
        }
    }

    var restart = function () {
        if (interstitialAd) {
            interstitialAd.dispose();
        }
        interstitialAd = null;
        window.startInterstitial();
    };

    var clearText = function (msg) {
        description.innerHTML = "";
    };

    var writeText = function (msg) {
        description.innerHTML = description.innerHTML + msg + "<br>";
        description.scrollTop = description.scrollHeight;
    };

    var prepareInterstitial = function () {
        if (!interstitialAd) {
            interstitialAd = new MicrosoftNSJS.Advertising.InterstitialAd();
            interstitialAd.onErrorOccurred = errorOccurredHandler;
            interstitialAd.onAdReady = adReadyHandler;
            interstitialAd.onCancelled = cancelledHandler;
            interstitialAd.onCompleted = completedHandler;
        }
    };

    var showInterstitial = function () {
        if (interstitialAd && interstitialAd.state === MicrosoftNSJS.Advertising.InterstitialAdState.ready) {
            interstitialAd.show();
        } else {
            // No ad is available to show. Allow user to try again anyway
            clearText();
            writeText("<br>Unable to show an ad. Check the error log. You can try again.");
            restart();
        }
    };

    var errorOccurredHandler = function (sender, args) {
        console.log("error: " + args.errorMessage + " (" + args.errorCode + ")");
        if (!isPlaying) {
            clearText();
            writeText("<br>Unable to show an ad. Check the error log. You can try again.");
            restart();
        }
    };

    var adReadyHandler = function (sender) {
        console.log("Ad ready");
    };

    var cancelledHandler = function (sender) {
        console.log("Ad cancelled");
        writeText("<br>You must watch the entire ad to continue. <b>Press the button to watch the ad.</b>");
        interstitialAd.dispose();
        interstitialAd = null;
        prepareInterstitial();
    };

    var completedHandler = function (sender) {
        console.log("Ad complete");
        clearText();
        writeText("<br>Thanks for watching the ad! You can try again!");
        restart();
    };

    var elem = document.getElementById('elem');
    elem.addEventListener('click',function(){
    anime({
        targets: elem,
        translateX: 250,
        backgroundColor:"#000",
        borderRadius:"50px"
    })              
})

})();

jQuery.easing.quart = function (x, t, b, c, d) {
    return -c * ((t=t/d-1)*t*t*t - 1) + b;
};

$(function(){

    jQuery('.scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var $target = jQuery(this.hash);
            $target = $target.length && $target || jQuery('[name=' + this.hash.slice(1) +']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                jQuery('html,body').animate({ scrollTop: targetOffset }, 1200, 'quart');
                return false;
            }
        }
    });

});

//2.�}�E�X�I�[�o�[���̉摜�؂�ւ�
$(function(){
	$('a img').hover(function(){
	$(this).attr('src', $(this).attr('src').replace('_off', '_on'));
	}, function(){
		if (!$(this).hasClass('currentPage')) {
		$(this).attr('src', $(this).attr('src').replace('_on', '_off'));
		}
	});
});

//3.�}�E�X�I�[�o�[���̉摜�̓����x�ύX
$(function(){
	$(".oc").hover(function(){
		$(this).fadeTo("normal", 0.6); // �}�E�X�I�[�o�[�œ����x��60%�ɂ���
		},function(){
		$(this).fadeTo("normal", 1.0); // �}�E�X�A�E�g�œ����x��100%�ɖ߂�
	});
});


//3.�A�R�[�f�B�I�����j���[
$(function() {
   $('#accordion dd').hide();
   $('#accordion dt a').click(function(){
       $('#accordion dd').slideUp();
       $(this).parent().next().slideDown();
       return false;
   });
});

$(function(){
     $(".open").click(function(){
      $("#slideBox").slideToggle("slow");
     });
});

$(function(){
	$(".panel:not(:first)").hide();
	$("#tabs a").click(function() {
		$(".panel").hide();
		$(".panel").filter(this.hash).show();
		$("#tabs a").removeClass("selected");
		$(this).addClass("selected");
		return false;	
	}).filter(":first").click();

});

$(function(){
     $("#thumb a").click(function(){
     $("#main img").attr("src",$(this).attr("href"));
     return false;
     });
});

$(function(){
     $("#thumb02 a").click(function(){
	 	var thumbSrc = $(this).attr("href")
    	 $("#main02 img").fadeTo("slow", 0.1 ,function() {
			$(this).attr("src",thumbSrc).fadeTo("normal",1);
		});
     return false;
     });
});

$(function(){
	$("#carouselInner").css("width",470*$("#carouselInner ul.column").size()+"px");
	$("#carouselInner ul.column:last").prependTo("#carouselInner");
	$("#carouselInner").css("margin-left","-470px");
	$("#carouselPrev").click(function(){
		$("#carouselNext,#carouselPrev").hide();
		$("#carouselInner").animate({
			marginLeft : parseInt($("#carouselInner").css("margin-left"))+470+"px"
		},"normal","swing" , 
		function(){
			$("#carouselInner").css("margin-left","-470px");
			$("#carouselInner ul.column:last").prependTo("#carouselInner");
			$("#carouselNext,#carouselPrev").show();
		});
	});

	$("#carouselNext").click(function(){
		$("#carouselNext,#carouselPrev").hide();
		$("#carouselInner").animate({
			marginLeft : parseInt($("#carouselInner").css("margin-left"))-470+"px"
		},"normal","swing" , 
		function(){
			$("#carouselInner").css("margin-left","-470px");
			$("#carouselInner ul.column:first").appendTo("#carouselInner");
			$("#carouselNext,#carouselPrev").show();
		});
	});
});

//@.���܂��@������x�X�N���[��������A�y�[�W�̐擪�֖߂�{�^����\��������
$(document).ready(function(){

	// hide #back-top first
	$("#back-top").hide();
	
	// fade in #back-top
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});

		// scroll body to 0px on click
		$('#back-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});

});
