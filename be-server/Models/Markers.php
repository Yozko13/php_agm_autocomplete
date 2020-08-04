<?php 

class Markers {
    private static $fPath = '../DataBases/markers.json';

    public static function getData() {
        $strData = file_get_contents(self::$fPath);
        
		return json_decode($strData, true);
    }

    public function addNewMarker($lat = 42, $lng = 24) {
        $data = self::getData();
        $fContent = '';

        $fContent .= '{';

        foreach($data as $id => $val) {
            $fContent .= '"'. $id .'": {"lat": '. $val['lat'] .', "lng": '. $val['lng'] .'}, ';
        }

        $fContent .= '"'. count($data) .'": {"lat": '. $lat .', "lng": '. $lng .'}';
        $fContent .= '}';

        $fp = fopen(self::$fPath, 'w');
		fwrite($fp, $fContent);
		fclose($fp);

        return json_encode(self::getData());
    }
}