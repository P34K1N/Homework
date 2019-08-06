// JavaScript Document

function hide (element) {
	$(element).css("display", "none");
}

function show (element) {
	$(element).css("display", "inline");
}

function record (tag) {
	var field = "field";
	switch (tag)
		{
			case "names": field += '2'; break;
			case "date": field += '3'; break;
			case "status": field += '4'; break;
			case "about": field += '5'; break;
			default: break;
		}
	var text = document.getElementById(field);
	$("#" + tag + "_data").html(text.value);
	show_back();
}

function hide_except (tag) {
	hide('#names_data');
	hide('#date_data');
	hide('#status_data');
	hide('#about_data');
	if (tag != 'profile_pic') {
		hide('#the_picture');
		hide('#edit1');
	}
	else {
		$('#edit1').attr("value", "Изменить");
		$('#edit1').attr("onclick", "show_back()");
	}
	if (tag != 'names') {
		hide('#names_heading');
		hide('#edit2');
	}
	else {
		$('#edit2').attr("value", "Изменить");
		$('#edit2').attr("onclick", "record('names')");
		show('#field2');
	}
	if (tag != 'date') {
		hide('#date_heading');
		hide('#edit3');
	}
	else {
		$('#edit3').attr("value", "Изменить");
		$('#edit3').attr("onclick", "record('date')");
		show('#field3');
	}
	if (tag != 'status') {
		hide('#status_heading');
		hide('#edit4');
	}
	else {
		$('#edit4').attr("value", "Изменить");
		$('#edit4').attr("onclick", "record('status')");
		show('#field4');
	}
	if (tag != 'about') {
		hide('#about_heading');
		hide('#edit5');
	}
	else {
		$('#edit5').attr("value", "Вернуть");
		$('#edit5').attr("onclick", "record('about')");
		show('#field5');
	}
}

function show_back () {
	show('#the_picture');
	show('#edit1');
	$('#edit1').attr("value", "Править");
	$('#edit1').attr("onclick", "hide_except('profile_pic')");
	show('#names_heading');
	show('#names_data');
	show('#edit2');
	hide('#field2');
	$('#edit2').attr("value", "Править");
	$('#edit2').attr("onclick", "hide_except('names')");
	show('#date_heading');
	show('#date_data');
	show('#edit3');
	hide('#field3');
	$('#edit3').attr("value", "Править");
	$('#edit3').attr("onclick", "hide_except('date')");
	show('#status_heading');
	show('#status_data');
	show('#edit4');
	hide('#field4');
	$('#edit4').attr("value", "Править");
	$('#edit4').attr("onclick", "hide_except('status')");
	show('#about_heading');
	show('#about_data');
	show('#edit5');
	hide('#field5');
	$('#edit5').attr("value", "Править");
	$('#edit5').attr("onclick", "hide_except('about')");
}

