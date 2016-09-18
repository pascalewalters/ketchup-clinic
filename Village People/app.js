$(document).ready(function() {

	$('#submit-button').click(function() {

		var key = "";
		var value = "";

		var name = $("[aria-describedby='name-addon']").val();
		var age = $("[aria-describedby='age-addon']").val();
		var gender = $('input[name=gender]:checked').val();
		var hn = $("[aria-describedby='hn-addon']").val();
		var bp = $("[aria-describedby='blood-pressure-addon']").val();
		var hr = $("[aria-describedby='heart-rate-addon']").val();
		var temp = $("[aria-describedby='temperature-addon']").val();
		var notes = $("#patient-notes-input").val();

		var d = new Date();
		var date = d.toDateString();
		key = name + date;

		value = "Name="+name+";Age="+age+";Gender="+gender+";Id="+hn+
			";BloodPressure="+bp+";HeartRate="+hr+";Temperature="+temp+
			";Notes="+notes+";Response=";

		localStorage.setItem(key, value);


		var names = localStorage.getItem("names");
		if(names != null){
			if(!names.includes(name)){
				localStorage.setItem("names", names + ";" + name );
			}
		}
		else{
			localStorage.setItem("names", name);
		}

		var dates = localStorage.getItem(name);
		if(dates != null){
			localStorage.setItem(name, dates + ";" + date);
		}
		else{
			localStorage.setItem(name, date);
		}

		$('#submit-button').text("Submitted");

	});

});