<?php

    date_default_timezone_set('America/Sao_Paulo');

    $funcontrol = $_POST['funcontrol'];

    function format_int_decimal_br($numero){
        $numero = number_format($numero, 1, ',', '.');
        return $numero;
    }

    function get_client_ip() {
        $ipaddress = '';
        if (isset($_SERVER['HTTP_CLIENT_IP']))
            $ipaddress = $_SERVER['HTTP_CLIENT_IP'];
        else if(isset($_SERVER['HTTP_X_FORWARDED_FOR']))
            $ipaddress = $_SERVER['HTTP_X_FORWARDED_FOR'];
        else if(isset($_SERVER['HTTP_X_FORWARDED']))
            $ipaddress = $_SERVER['HTTP_X_FORWARDED'];
        else if(isset($_SERVER['HTTP_FORWARDED_FOR']))
            $ipaddress = $_SERVER['HTTP_FORWARDED_FOR'];
        else if(isset($_SERVER['HTTP_FORWARDED']))
            $ipaddress = $_SERVER['HTTP_FORWARDED'];
        else if(isset($_SERVER['REMOTE_ADDR']))
            $ipaddress = $_SERVER['REMOTE_ADDR'];
        else
            $ipaddress = 'UNKNOWN';
        return $ipaddress;
    }

    function log_file(){

        //*** LOG - gravado na pasta log
        date_default_timezone_set('America/Sao_Paulo');
        $datNow = date("Y-m-d-His");

        $strIp = get_client_ip();

        $partName = 'log';

        $strHtml = "$datNow - $strIp ";

        $arquivo = fopen("./log/".$partName."_".$datNow.'.txt','w');
        fwrite($arquivo, $strHtml);
        fclose($arquivo);

        echo "<br> | Retorno | ";
        //exit();
    }

    function funDatFormat($vType, $vData){
        $strDate = '';
        
        if($vType == 1){
            $data1 = explode(' ', $vData);
            $data = explode('-', $data1[0]);
            $strDate = $data[2] . '/' . $data[1] . '/' . $data[0];
        }
            
        
        return $strDate;

    }

    if($funcontrol == '1') {
        log_file();
    }