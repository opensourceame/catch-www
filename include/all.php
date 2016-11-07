<?php

header('Content-Type: text/javascript; charset=utf-8');


$yaml_config  	= yaml_parse_file('compile_js.yaml');

foreach ($yaml_config as $file){
    echo ";/**\n *$file\n */\n";
    require_once('../js/'.$file);
}