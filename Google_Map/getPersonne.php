<?php




$file =  "dataPersonnality.json";//nom fichier

$emailPersonne = isset($_GET['emailPersonne'])? $_GET['emailPersonne']: NULL;//email du formulaire


 getPersonne( $file, $emailPersonne);//appele de la fonction getPersonne avec nom du fichier + l'email form



function getPersonne( $file_name, $email){


	$json=json_decode(file_get_contents($file_name));//recuperation+convertion données en tableau


    
    for($i=0;$i<count($json);$i++)// tableau porcouru 
{
	
	if($json[$i]->email==$email)//recherche email 
	{

		echo(json_encode($json[$i]));// email envoyé à map.js
	}
}
	//envoyé dossier map.js	
}
?>