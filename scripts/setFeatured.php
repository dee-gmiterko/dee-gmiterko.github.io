<?php

$featured = ["girl-in-park", "minecraft-scarecrows", "minecraft-bulldozer", "forest", "ee-antic", "map-london", "icons-extractor", "wordpress-farny", "wordpress-ped", "life-of-snow", "slenderman", "less-sass-color-difference-calculator", "20-4-89-or-50", "efil-fo-emag", "hexaflexagon", "processing-sketches", "processing-ponyo", "trainwreck", "open-gl-forest", "samos", "sheep-simulation", "waterfull", "tower-town-visuals"];

$en = json_decode(file_get_contents("../public/projects/en.json"), true);
$sk = json_decode(file_get_contents("../public/projects/sk.json"), true);

function setFeatured(&$projects, $featured) {
  for($i = 0; $i<count($projects); $i++) {
    $projects[$i]["featured"] = in_array($projects[$i]['slug'], $featured);
  }
}

setFeatured($en, $featured);
setFeatured($sk, $featured);

file_put_contents("../public/projects/en.json", json_encode($en, JSON_PRETTY_PRINT));
file_put_contents("../public/projects/sk.json", json_encode($sk, JSON_PRETTY_PRINT));
