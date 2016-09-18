$(document).ready(function() {

	$('#login-enter').click(function() {

		var username = $("[aria-describedby='username-addon']").val();
		if(username == 'dr.mario'){
			window.location.href = '../hospital-page/index.html';
		}
		else if(username == 'alisha.castillo'){
			window.location.href = '../patient-profile/index.html';
		}
		else{
			window.location.href = '../Village People/index.html';
		}
		
	});

});