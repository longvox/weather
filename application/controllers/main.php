<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class main extends MY_Controller {

    public function __construct() {
        parent::__construct();
    }
    public function index() {
        $this->load->view('main_view');
    }
}
