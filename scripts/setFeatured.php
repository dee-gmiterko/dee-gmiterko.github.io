<?php

$featured = ["girl-in-park", "map-london", "ee-antic", "icons-extractor", "20-4-89-or-50", "samos", "efil-fo-emag", "hexaflexagon", "processing-sketches", "processing-ponyo", "trainwreck", "open-gl-forest", "sheep-simulation", "waterfull", "tower-town-visuals", "tmsei", "kreativator", "py-2049", "percy-s-tower", "2d-color-picker"];

$en = json_decode(file_get_contents("../public/projects/en.json"), true);
$sk = json_decode(file_get_contents("../public/projects/sk.json"), true);

function setFeatured(&$projects, $featured) {
  for($i = 0; $i<count($projects); $i++) {
    $slug = $projects[$i]['slug'];
    $before = $projects[$i]["featured"];
    $projects[$i]["featured"] = in_array($slug, $featured);
    if($projects[$i]["featured"] != $before) {
      if($before) {
        echo "$slug UNfeatured \n";
      } else {
        echo "$slug featured \n";
      }
    }
  }
}

setFeatured($en, $featured);
setFeatured($sk, $featured);

file_put_contents("../public/projects/en.json", json_encode($en, JSON_PRETTY_PRINT));
file_put_contents("../public/projects/sk.json", json_encode($sk, JSON_PRETTY_PRINT));
