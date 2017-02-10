<?php

$en = json_decode(file_get_contents("../public/projects/en.json"), true);
$sk = json_decode(file_get_contents("../public/projects/sk.json"), true);

$sortProjects = function($p1, $p2) {
	return $p1['startedAt'] > $p2['startedAt'];
};

usort($en, $sortProjects);
usort($sk, $sortProjects);

if(count($sk) != count($en)) {
	throw new Exception("Not same count");
}

for($i = 0; $i<count($en); $i++) {

	$sameFields = ['slug', 'startedAt', 'finishedAt'];
	$copyFieldsSk = [];
	$copyFieldsEn = ['tags'];

	foreach($sameFields as $field) {
		if($sk[$i][$field] != $en[$i][$field]) {
			throw new Exception("Not same field ".$field.': '.$sk[$i][$field].' != '.$en[$i][$field]);
		}
	}

	foreach($copyFieldsSk as $field) {
		$en[$i][$field] = $sk[$i][$field];
	}

	foreach($copyFieldsEn as $field) {
		$sk[$i][$field] = $en[$i][$field];
	}
}

file_put_contents("../public/projects/en.json", json_encode($en, JSON_PRETTY_PRINT));
file_put_contents("../public/projects/sk.json", json_encode($sk, JSON_PRETTY_PRINT));