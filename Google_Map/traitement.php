<?php
$mail=$_GET["email"];//Récupération variable email 
$motDePasse=$_GET["password"];//Récupération variable password 

//(site : https://oseox.fr/php/traitement-fichier.html)


$Email=false;//verifier mail
$PASSWORD=false;//verifier mot de passe

$ajout = 0; // compteur de ajout
$csv = fopen("accounts.csv", "a+");//csv nom dossier


while($tab=fgetcsv($csv,1024,';'))
{
  $champs = count($tab);//nombre de champ dans la ajout en question (2)
  $ajout ++;

  if ($tab[0]==$mail)//si le mail est le même que le dossier:
    {
      $Email=true;//Alors le mail est vraie
	  
      if ($tab[1]==$motDePasse)//si  le mot de passe est le même que le dossier:
        {
          $PASSWORD=true;//alors le mot de passe est vraie
        }elseif ($tab[1]!=$motDePasse)//si le mot de passe n'est pas le même que le dossier:
          {
            $PASSWORD=false;//Alors le mot de passe est faux
          }
    }
}


//--------------------------------------------------------------------------------------------------------------



	if ($Email==false)//Si le mail est nouveaux(ne se trouve pas dans le dossier)
		{
			echo ('Bienvenue. Vous avez un compte.');//on affiche la phrase
		}

	if ($Email==true && $PASSWORD==true)//Si le mail est déjà sauvegardé.
		{
			echo ('Vous avez un compte!!!');//Alors on affiche cette phrase
		}

	if ($Email==true && $PASSWORD==false)//si le mail est dans le dossier mais le mot de passe est mauvais
		{			
			echo ('Mot de passe incorrecte');//Alors on affiche cette phrase
		}

//enregistrer les données

			$tableau=array($mail,$motDePasse);//Nouvelle information noté sur le formulaire.

	if ($Email==false)//Si le mail n'est pas dans le dossier.
		{
			fputcsv($csv,$tableau,";");//Alors on l'enregistre
			fclose($csv);//Le dossier est sauvegardé est fermé.

			//message par mail
			$msg='message de vérification';
			//mail('Vérification');//L'adresse email a reçu un mail.
};
?>
