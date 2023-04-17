alert("Bonjour!")


var ajout = 0;//Variable qui sert à faire avancer le champs de verification
var inputs=document.getElementsByClassName('form-check-input');//donne nom variable au checkBox
var labels=document.getElementsByTagName('label'); //donne nom variable label
var envoyer=document.getElementsByTagName('button');//donne nom variable button par rapport envoie
var verifier = document.getElementsByTagName('input');//donne nom variable input
var phrase_erreur = document.getElementById('erreur');



envoyer[0].addEventListener("click",()=>{ // En cas d'evenement (clique lien fonction: https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener)

    for(i=0;i<3;i++){//Verification des champs 
        
		if (verifier[i].value==""){
            verifier[i].style.borderColor="red";//bordure en rouge
           	ajout=0;//Variable reste à 0
			
        }
		
		
		else{
            verifier[i].style.borderColor="green";//bordure en vert
            ajout++;//Variable reçoit un +1
        }
		
		
		if (!verifier[1].value && !verifier[2].value){//si mdp 1 est différent de mdp2 alors :
			verifier[1].style.borderColor="red";//bordure en rouge
			verifier[2].style.borderColor="red";//bordure en rouge
		}
		
		else if (verifier[1].value != verifier[2].value){//si mdp 1 n'egale pas mdp2 alors :
			verifier[1].style.borderColor="red";//bordure en rouge
			verifier[2].style.borderColor="red";//bordure en rouge
			 phrase_erreur.style.display="block";
		}
		
		else if (verifier[1].value == verifier[2].value){//si mdp 1 egale mdp2 alors :
			verifier[1].style.borderColor="green";//bordure en vert
			verifier[2].style.borderColor="green";//bordure en vert
			ajout++;
		}

		
	       
		
    }
    //Lorsque la boucle se finit :

    if(inputs[0].checked==true){
        labels[0].style.color="green";//bordure en vert
		ajout++;//Variable reçoit un +1
		
	  if(ajout>3){//Si ajout est supèéieur à 3, alors le type 'button' du HTML se change en 'submit'. 
            envoyer[0].type=SubmitEvent;
			//loadDoc();
        }
    }
 

	else{
        labels[0].style.color="red";//bordure en rouge
		}
		
}
)


//-----------------------------------------------------------------------------------------------------

//code json qui est mis en relations avec le php (site: https://www.w3schools.com/js/js_json_php.asp) 


function loadDoc() {
	  var xhttp = new XMLHttpRequest();
	  xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {//Pour qu'il soit fonctionnel doit être à 4 ou 200
			var msg = JSON.parse(this.responseText)

			/*switch (message.status_id){ // communique avec

			case "1"://si compte existe deja
			document.querySelector("h2.text-center").innerHTML="Compte déjà existant";
			verif[0].style.borderColor="red";//coleur en rouge pour empecher utilisatur se connecter
			break;

			case "0":
			document.querySelector("h2.text-center").innerHTML="Creation du compte, un mail a été envoyer";//compte existe pas envoie mail
			break;
			//document.querySelector("h2.text-center").innerHTML = this.responseText; (autre fonction)
			}*/
		}
	  };
  xhttp.open("GET", "traitement.php"+"?"+verifier[0].name +"="+verifier[0].value+"&"+ verifier[1].name +"="+verifier[1].value +"&"+ verifier[2].name +"="+ verifier[2].value, true);
  xhttp.send();//envoie
}





