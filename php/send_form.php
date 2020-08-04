<?php
$token = "1075686909:AAERuG4YvzxCjg3ChV_vI0LCNhCKDP5cDrI"; 
$chat_id = "-424143553";

  $to = "matvienkoigor956@gmail.com, manager@dreamwork.kiev.ua";
  $subject = "Заявка с сайта";
  $headers = "From: dreamwork@example.com";

    
  $name = trim($_POST["name"]);
  $phone = trim($_POST["email"]);  
  $email = trim($_POST["tel"]);  
  $message = trim($_POST["txt"]);  

  $result = array(
    'Имя: ' => $name,
    'Телефон: ' => $phone,
    'Email: ' => $email,
    'Сообщение: ' => $message
  ); 

  foreach($result as $key => $value) {
    $txt_for_tg .= "<b>" . $key . "</b> " . $value . "%0A";
    $txt_for_mail .= $key . $value . "\r\n";
  };

  echo json_encode($result);

  $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt_for_tg}","r");

  mail($to, $subject, $txt_for_mail, $headers);
?>