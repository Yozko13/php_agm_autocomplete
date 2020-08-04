<?php

include_once('../Models/Markers.php');

class MarkersController {
	public function getMarkers() {
		$data = new Markers();
		
		return json_encode($data->getData());
	}
}