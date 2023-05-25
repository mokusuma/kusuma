<?php

// Fungsi untuk mendapatkan kata yang diganti berdasarkan kunci
function getTranslatedWord($key, $data)
{
    return isset($data[$key]) ? $data[$key] : "";
}

// Mendapatkan kata-kata yang diganti
$en = [
    "home" => "Home",
    "about_us" => "About us",
    "contact_us" => "Contact us",
    "register" => "Register",
    "login" => "Login"
];

// Mengecek apakah tombol Ubah Bahasa diklik
if (isset($_POST['lang'])) {
    $lang = $_POST['lang'];
    $jsonFile = $lang . ".json";

    if (file_exists($jsonFile)) {
        $jsonData = file_get_contents($jsonFile);

        if ($jsonData !== false) {
            $data = json_decode($jsonData, true);

            $home = getTranslatedWord("home", $data);
            $aboutUs = getTranslatedWord("about_us", $data);
            $contactUs = getTranslatedWord("contact_us", $data);
            $register = getTranslatedWord("register", $data);
            $login = getTranslatedWord("login", $data);
        } else {
            // Jika gagal membaca file JSON, menggunakan nilai default dalam bahasa Inggris
            $home = $en["home"];
            $aboutUs = $en["about_us"];
            $contactUs = $en["contact_us"];
            $register = $en["register"];
            $login = $en["login"];
        }
    } else {
        // Jika file JSON tidak ditemukan, menggunakan nilai default dalam bahasa Inggris
        $home = $en["home"];
        $aboutUs = $en["about_us"];
        $contactUs = $en["contact_us"];
        $register = $en["register"];
        $login = $en["login"];
    }
} else {
    // Default menggunakan bahasa Inggris
    $home = $en["home"];
    $aboutUs = $en["about_us"];
    $contactUs = $en["contact_us"];
    $register = $en["register"];
    $login = $en["login"];
}

?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>I18N</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <nav class="navbar">
      <div class="container">
        <div class="logo">
          <h1>I18N</h1>
        </div>
        <ul>
          <li><a href="#"><?php echo $home ?></a></li>
          <li><a href="#"><?php echo $aboutUs ?></a></li>
          <li><a href="#"><?php echo $contactUs ?></a></li>
          <li><a href="#"><?php echo $register ?></a></li>
          <li><a href="#"><?php echo $login ?></a></li>
          <li class="language-form">
            <form id="langForm" action="" method="post">
              <select name="lang" id="lang" onchange="document.getElementById('langForm').submit()">
                <option <?php if (!isset($_POST['lang']) || $_POST['lang'] === 'en') echo "selected" ?>>English</option>
                <option value="id_ID" <?php if (isset($_POST['lang']) && $_POST['lang'] === 'id_ID') echo "selected" ?>>Indonesia</option>
                <option value="nl_NL" <?php if (isset($_POST['lang']) && $_POST['lang'] === 'nl_NL') echo "selected" ?>>Dutch</option>
              </select>
            </form>
          </li>
        </ul>
      </div>
    </nav>
  </body>
</html>
