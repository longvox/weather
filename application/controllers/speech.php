<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class speech extends MY_Controller
{

    public function __construct()
    {
        parent::__construct();
    }

    public function index()
    {
        $this->load->view('speech');
    }
}
