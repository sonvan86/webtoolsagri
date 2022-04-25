<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('home');
    }

    /**
     * Return logined user
     * 
     * @return Symfony\Component\HttpFoundation\Response
     */
    public function getAuthorize()
    {
        $user = Auth::user();

        return response([
            'username' => $user->name,
            'usertype' => $user->type
        ], Response::HTTP_OK);
    }
}
