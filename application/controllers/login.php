<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Login extends CI_Controller 
{

	// public function __construct()
	// {
	// 	parent::__construct();
	// 	$this->load->library('form_validation')
	// }

	public function index()
	{
		$data['title'] = 'Login to Tinderbox Volunteer';
		$this->load->helper(
			array('url', 'html')
		);
		$this->load->view('header_view', $data);
		$this->load->view('index_view');
		$this->load->view('footer_view');
	}

	// public function test()
	// {
	// 	$q = $this->db->get_where('users', ['id' => 1]);
	// 	print_r($q->result());
	// }


 }


