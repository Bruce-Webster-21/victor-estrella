<?php
// Moves uploaded file to a directory
for ($i = 0; $i < 5; $i++) {
  $inputName = "inpFile" . $i;
  $targetPath = "uploads/" . basename($_FILES[$inputName]["name"]);
  move_uploaded_file($_FILES[$inputName]["tmp_name"], $targetPath);
}
