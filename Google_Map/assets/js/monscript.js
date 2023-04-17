alert("Bonjour!")//voir si js fonctionne


//verifie index.html

function login(){
 
    console.log('fonction','login!');   // check formulaire de log In !

    let isFill = true;
    inputs = document.querySelectorAll('input[class=form-control]');
    for(let i=0; i<inputs.length; i++){
        if(inputs[i].value ==  ""){
            inputs[i].style.borderColor='red'
            isFill = false;
        }
    }


    let email    = inputs[0].value;  // formulaire envoyé à login.php + map.html
    let password = inputs[1].value;
    // info operation
    let p        = document.querySelector('#pInfo');//index.html

    if(isFill)
        $.ajax({//code ajax comme étudié en cours
            url: "login.php",
            method: "GET",
            data: {"email": email, "password": password},
            dataType: "json",
            success: function (response) {
                console.log(response);
                switch (response.status) {

                    case "nok": //si pas email=nok
                       
                        p.className = "alert-danger";
                        p.textContent = "invalid password or email";
                        p.style.visibility = "visible";
                        p.style.text_title = "center";
                        break;

                    case "ok":
                        // email ok
                        // normalement ouverture login.php
                       
                        window.location.replace("map.php?"+"email="+response.email);
                        break;
                }
            }
        });



}

