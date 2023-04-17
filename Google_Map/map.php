<?php
// grace au javascript les comptes son re-orienté
 

$file =  "dataPersonnality.json";//dossier dataPersonnality.json annalysé
$email = isset($_GET['email'])? $_GET['email']: NULL; //echange information

?>



<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <title>Projet web</title>
    
	<link rel="stylesheet" href="assets/css/text.css">
	<link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:400,400i,700,700i,600,600i">
    <link rel="stylesheet" href="assets/fonts/simple-line-icons.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.10.0/baguetteBox.min.css">
    <link rel="stylesheet" href="assets/css/smoothproducts.css">

</head>

<body>
<div  class="map-clean">
    <div class="container">
        <div class="intro">
            <h3 class="text-center"> <?php echo $email?> </h3>
            <p class="text-center">Voici nos marqueurs </p>

        </div>
    </div>
</div>
<div id="map"></div>

<style type="text/css">
    #map {
        height: 100%;
    }
</style>





<script src="assets/js/jquery.min.js"></script>
<script src="assets/bootstrap/js/bootstrap.min.js"></script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA7Y32T_PJHZxYcK3BJYJFNwSl6cuvLXpo"></script>
<script src="assets/js/map.js"></script>

<script>
    //L'email entré va être afficher 
    google.maps.event.addDomListener(window, 'load', mapPersonnality(<?php echo '"'.$email.'"';?>));
</script>

</body>

</html>