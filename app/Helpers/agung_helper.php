<?php

function notification($code = 200, $status = 'success', $message = 'Sukses menambahkan data', $data = null)
{
  $status = [
    'code'    => $code,
    'status'  => $status,
    'message' => $message,
    'data'    => $data,
  ];
  return $status;
}


function encodeEncrypt($string, $url_safe = TRUE)
{
  $encrypter = \Config\Services::encrypter();
  $ciphertext = $encrypter->encrypt($string);
  if ($url_safe) {
    $ciphertext = strtr(
      $ciphertext,
      array(
        '+' => '.',
        '=' => '-',
        '/' => '~'
      )
    );
  }
  return $ciphertext;
}

function decodeEncrypt($string)
{
  $string = strtr(
    $string,
    array(
      '.' => '+',
      '-' => '=',
      '~' => '/'
    )
  );
  $encrypter = \Config\Services::encrypter();
  $decode = $encrypter->decrypt($string);
  return $decode;
}
