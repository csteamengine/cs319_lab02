/**
 * Created by Charlie on 9/9/16.
 */
var f_name = document.getElementById('f_name');
var l_name = document.getElementById('l_name');
var gender = document.getElementById('gender');
var state = document.getElementById('state');



document.getElementById('validation_form').addEventListener('submit',function(event){
    var valid = true;
    if(/[^a-zA-Z0-9]/.test(f_name.value) || f_name.value == ''){
        valid = false;
        document.getElementById('f_name_wrong').style.display = "inline";
        document.getElementById('f_name_right').style.display = "none";
    }else{
        document.getElementById('f_name_right').style.display = "inline";
        document.getElementById('f_name_wrong').style.display = "none";
    }

    if(/[^a-zA-Z0-9]/.test(l_name.value) || l_name.value == ''){
        valid = false;
        document.getElementById('l_name_wrong').style.display = "inline";
        document.getElementById('l_name_right').style.display = "none";
    }else{
        document.getElementById('l_name_right').style.display = "inline";
        document.getElementById('l_name_wrong').style.display = "none";
    }

    if(gender.value == " "){
        valid = false;
        document.getElementById('gender_wrong').style.display = "inline";
        document.getElementById('gender_right').style.display = "none";
    }else{
        document.getElementById('gender_right').style.display = "inline";
        document.getElementById('gender_wrong').style.display = "none";
    }

    if(state.value == " "){
        valid = false;
        document.getElementById('state_wrong').style.display = "inline";
        document.getElementById('state_right').style.display = "none";
    }else{
        document.getElementById('state_right').style.display = "inline";
        document.getElementById('state_wrong').style.display = "none";
    }

    if(valid){
        document.cookie = 'state='+state.value;
    }else{
        event.preventDefault();
    }
});

