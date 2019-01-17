<?php

$en = json_decode(file_get_contents("../public/projects/en.json"), true);
$sk = json_decode(file_get_contents("../public/projects/sk.json"), true);

function fillKeywords(&$lang) {
	for($i = 0; $i<count($lang); $i++) {

		if(!$lang[$i]['keywords']) {
			$lang[$i]['keywords'] = implode(", ", $lang[$i]['tags']);
		}

	}
}

fillKeywords($en);
fillKeywords($sk);

file_put_contents("../public/projects/en.json", json_encode($en, JSON_PRETTY_PRINT));
file_put_contents("../public/projects/sk.json", json_encode($sk, JSON_PRETTY_PRINT));
