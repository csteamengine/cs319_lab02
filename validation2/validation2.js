/**
 * Created by Charlie on 9/9/16.
 */



document.getElementById('validation2_form').addEventListener('submit',function(event){
    var email = document.getElementById('email');
    var phone = document.getElementById('phone');
    var address = document.getElementById('address');
    // var phone2 = phone.value.split('-').join('');
    var valid = true;
    if(!validateEmail(email.value) || email.value == ""){
        valid = false;
        document.getElementById('email_wrong').style.display = "inline";
        document.getElementById('email_right').style.display = "none";
        console.log("Email not valid");
    }else{
        document.getElementById('email_wrong').style.display = "none";
        document.getElementById('email_right').style.display = "inline";
    }

    if(!validate_phone(phone.value) && phone.value != ""){
        valid = false;
        document.getElementById('phone_wrong').style.display = "inline";
        document.getElementById('phone_right').style.display = "none";
        console.log("Phone not valid");
    }else{
        document.getElementById('phone_wrong').style.display = "none";
        document.getElementById('phone_right').style.display = "inline";
    }

    if(!validate_address(address.value) || address.value == ""){
        valid = false;
        document.getElementById('address_wrong').style.display = "inline";
        document.getElementById('address_right').style.display = "none";
        console.log('Address invalid');
    }else{
        document.getElementById('address_wrong').style.display = "none";
        document.getElementById('address_right').style.display = "inline";
    }


    if(!valid){
        event.preventDefault();
    }else{
        event.preventDefault();
        localStorage.setItem('address',address.value);
        document.cookie = 'state=; expires=Thu, 01 Jan 1970 00:00:00 UTC';
        window.location = '../maps.html';
    }


});


function validateEmail(email) {

    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validate_phone(p) {
    var phoneRe = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
    var digits = p.replace(/\D/g, "");
    return (digits.match(phoneRe) !== null);
}

function validate_address(address){
    var string = address.split(',');
    if(string.length < 2 || string.length > 2){
        return false;
    }

    var city = string[0];
    var state = string[1];

    if(!/^[a-zA-Z]/.test(city)){
        return false;
    }

    if(!/^[a-zA-Z\s]*$/.test(state) && state.length == 3){
        return false;
    }else if(!/^[a-zA-Z]/.test(state) && state.length == 2){
        return false;
    }
    return true;
}