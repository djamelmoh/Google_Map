// when page is ready, initialize the map!

function setInfoMarker(place,marker){//recupere element datapersonnality

 
    var namePlace       = place["namePlace"];//declaration
    var commentaire     = place["commentaire"];
    var url_photo       = place["photo"];

    const contentString =//comment dans les exos de cours pour afficher les informations 
        '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeading" class="firstHeading">' + namePlace + '</h1>' +
        '<div id="bodyContent">' +
        '<p>' + commentaire + '</p>' +
        '<img src="' + url_photo + '" width=300em heigth=300em> ' +
        '</div>' +
        '<br/>' +
        '</div>';

    const infowindow = new google.maps.InfoWindow({
        content: contentString,
    });

    marker.addListener("mouseover", () => {// pour survoler
        infowindow.open(this.map, marker);//affiche info marqueur
    });

    marker.addListener("mouseout",()=>{//ext zone
        infowindow.close(this.map,marker);//info marqueur plus affiché
    })

}



//-----------------------------------------------------------------------------------

function mapPersonnality(email){//appele fonction
    console.log(email);

    $.ajax({//ajax comme étudié en cours
        url:	"getPersonne.php",
        data: {emailPersonne:email},
		method:     "GET",
        dataType: "json",
        success: function(personne) {

            console.log(personne.markers);//recupération donnée

            places = personne.markers;

            var options = {//comment va être centre la carte
                center:  new google.maps.LatLng(10, 10),
                zoom: 2.5,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };

    
            var map = new google.maps.Map(document.getElementById("map"), options);

            //  latLng Array of JSON  [{lat,lng},{},...{}]
            let latLng = Array();
            for(let i=0; i<places.length;i++){
                for(donner in places[i]){
                    if(donner == "latLng") latLng.push(places[i][donner]);
                }
            }


            
            for (let i = 0; i < latLng.length; i++) {//boucle qui va servir pour l'affichage
                setInfoMarker(places[i],new google.maps.Marker({
									
                                                                position: latLng[i],
                                                                map: map
                                                                
                }));
            }
        }
    });

}