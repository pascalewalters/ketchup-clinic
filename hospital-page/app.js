$(document).ready(function() {

	var names = localStorage.getItem("names");
	var namesArr = null;

	if(names != null){
		namesArr = names.split(";");
	}

	if(namesArr != null){
		for(var i = 0; i < namesArr.length; i++){
			var element = "<option href=\"#\">" + namesArr[i] + "</option>";
			$('#patient-dropdown').append(element);
		}
	}

	$('#patient-dropdown').change(function() {
		var chosenName = $('#patient-dropdown').val();
		var dates = localStorage.getItem(chosenName);

		if(dates != null){
			var datesArr = dates.split(";");
			var dataArr = [];

			for(var i = 0; i < datesArr.length; i++){
				var key = chosenName + datesArr[i];
				dataArr.push("");
				dataArr[i] = localStorage.getItem(key);
			}
		}

		//hard-coded to use the first element of dataArr for now
		var valsArr = dataArr[0].split(";");
		var startIndex = 0;
		var val;
		var idArr = [
			"#patient-name", 
			"#patient-age",
			"#patient-gender",
			"#patient-id",
			"#patient-hr",
			"#patient-bp",
			"#patient-temp",
			"#patient-notes"];

		for(var i = 0; i < idArr.length; i+= 1){
			startIndex = valsArr[i].indexOf("=");
			startIndex += 1;
			var val = valsArr[i].substring(startIndex, valsArr[i].length);
			
			switch(i){
				case 4:
					val += " BPM";
					break;
				case 5:
					val += " mmHg";
					break;
				case 6:
					val += " \xB0C";
					break;
				default:
					break;
			}

			$(idArr[i]).text(val);
		}
		
		$('.instance-list').css("display", "inline");
		
	});

	$('.instance-list td').click(function() {
		$('.session-info').css("display", "inline");
	});

	$('#submit-button').click(function() {
		$('#submit-button').text("Submitted");

		//hard-coded to use today's profile for now
		var name = $('#patient-dropdown').val();
		var d = new Date();
		var date = d.toDateString();

		var key = name + date;
		var value = localStorage.getItem(key);
		var response = $("#doctor-response").val();

		var startIndex = value.indexOf("Response=");
		value = value.substring(0,startIndex);
		value = value + "Response=" + response;

		localStorage.setItem(key, value);
	});

});