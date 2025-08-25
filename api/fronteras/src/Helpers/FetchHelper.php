<?php

namespace Fronteras\Helpers;

class FetchHelper {

  public static function FetchAll($query) {
    if ($query) {
      $query->execute();
      $result = $query->get_result();

      $dbObjects = array();

      while ($row = $result->fetch_assoc()) {
        $dbObjects[] = $row;
      }
      return $dbObjects;
    }
  }

  public static function FetchOne($query) {
    if ($query) {
      $query->execute();
      $result = $query->get_result();

      return $result->fetch_assoc();
    }
  }
}
