<?php


 //verification de email  dans le fichier json
 // si email present : ok
                       
 // sinon: nok


class response{
 
    public function setStatus($status)
    {
        $this->status = $status;
        return $this;
    }
   
    public function setEmail($email)
    {
        $this->email = $email;
        return $this;
    }
   
    public $status;
    public $email;
}


function isNotExist_in_Json_File($file, $email){//$file = fichier json
    
     
     // $email =  email issue du formulaire de connexion
     // return = renvoie True si $email n'existe pas dans $file, sinon False sinon
     

    // string json: issue du fichier json
    $jsonString = file_get_contents($file);

   
    $accounts = json_decode($jsonString);

    
    foreach($accounts as $account){
        foreach ($account as $key => $value){
            if($value == $email) return false;
        }
    }
    return true;
}


$file_name =  "accounts.json";
$email = isset($_GET['email'])? $_GET['email']: NULL;
$password = isset($_GET['password'])? $_GET['password']: NULL;

define('_STATUS_DATA_OK_',"ok");
define('_STATUS_DATA_NOK_',"nok");

if($email && $password){
    
    if(isNotExist_in_Json_File($file_name, $email)){
        $message = new response();
        $message->setStatus(_STATUS_DATA_NOK_);
        $message->setEmail($email);
        $myJSON = json_encode($message);
        echo $myJSON;
    }
  
    else{
        $message = new response();
        $message->setStatus(_STATUS_DATA_OK_);
        $message->setEmail($email);
        $myJSON = json_encode($message);
        echo $myJSON;
    }
}
else{
    $message = new response();
    $message->set_statusId(_STATUS_DATA_NOK_);
    $message->set_email($email);
    $myJSON = json_encode($message);
    echo $myJSON;
}
?>