// JavaScript Document

function is_empty(str)
{
	return (str === null) || (str.length == 0) || (str === " ");
}

function clean_red ()
{
	$("#login").removeClass("red");
	$("#password").removeClass("red");
	$("#login").addClass("normal");
	$("#password").addClass("normal");
	$('#error').html("");
}

function check ()
{
	clean_red();
	var correct_login = "Bochkaryov";
	var correct_password = "DanilovHui1488";
	var login = document.getElementById("login").value;
	var password = document.getElementById("password").value;
	if (is_empty(login)) {no_login();  return;}
	if (is_empty(password)) {no_password(); return;}
	if (login != correct_login || password != correct_password) {incorrect(); return;}
	$.ajax ({
		success: function() {
			return location.href = "Authorize.html";
		},
		error: function() {
			alert("Возникла ошибка");
		}
	})
}

function no_login ()
{
	$("#login").addClass("red");
	$('#error').html("Введите логин");
}

function no_password ()
{
	$("#password").addClass("red");
	$('#error').html("Введите пароль");
}

function incorrect ()
{
	$("#login").addClass("red");
	$("#password").addClass("red");
	$('#error').html("Неправильный логин/пароль");
}