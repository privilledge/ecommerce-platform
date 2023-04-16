// Validating Empty Field


//Function To Display Popup
function div_show() {
    document.getElementById('footer').style.display = "none";
    document.getElementById('header').style.display = "none";
    if (document.getElementById('ecocash').checked) {

        document.getElementById('abc').style.display = "block";

        document.getElementById('second-form').style.display = "none";
        document.getElementById('third-form').style.display = "none";

    } else if (document.getElementById('onemoney').checked) {
        document.getElementById('efg').style.display = "block";
        document.getElementById("onemoney-first-form").style.display = "block";
        document.getElementById("onemoney-second-form").style.display = "none";
        document.getElementById("onemoney-third-form").style.display = "none";
    } else if (document.getElementById('visa').checked) {
        document.getElementById('hij').style.display = "block";

    } else {

        alert("Select payment method");
    }
}
//Function to Hide Popup
function div_hide() {
    document.getElementById('abc').style.display = "none";
    document.getElementById('efg').style.display = "none";
    document.getElementById('hij').style.display = "none";
    document.getElementById('footer').style.display = "block";
    document.getElementById('header').style.display = "block";
}
// Ecocash

function div_first() {
    document.getElementById('second-form').style.display = "none";
    document.getElementById('first-form').style.display = "block";
    document.getElementById('third-form').style.display = "none";
}

function div_second() {
    var mobileNumber = document.getElementById("account").value;
    if (mobileNumber == "") {
        alert("Enter mobile number");
    } else {
        document.getElementById('second-form').style.display = "block";
        document.getElementById('first-form').style.display = "none";
        document.getElementById('third-form').style.display = "none";
    }
}

function div_third() {

    document.getElementById('first-form').style.display = "none";
    document.getElementById('second-form').style.display = "none";
    document.getElementById('third-form').style.display = "block";
}
// Onemoney
function div_onemoney() {
    var mobileNumber = document.getElementById("account").value;
    if (mobileNumber == " ") {
        alert("Enter mobile number");
    } else {
        document.getElementById('onemoney-second-form').style.display = "block";
        document.getElementById('onemoney-first-form').style.display = "none";
        document.getElementById('onemoney-third-form').style.display = "none";
    }
}

function div_onemoney2() {

    document.getElementById('onemoney-first-form').style.display = "none";
    document.getElementById('onemoney-second-form').style.display = "none";
    document.getElementById('onemoney-third-form').style.display = "block";
}

function div_onemoney3() {
    document.getElementById('onemoney-first-form').style.display = "block";
    document.getElementById('onemoney-second-form').style.display = "none";
    document.getElementById('onemoney-third-form').style.display = "none";

}

function user_profile() {

    document.getElementById('footer').style.display = "none";
    document.getElementById('header').style.display = "none";
    document.getElementById('abc').style.display = "block";

}

function div_hideprofile() {
    document.getElementById('abc').style.display = "none";
    document.getElementById('footer').style.display = "block";
    document.getElementById('header').style.display = "block";
}
