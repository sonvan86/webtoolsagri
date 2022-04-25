<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\User;
use App\Repositories\UserRepository;

class UserController extends Controller
{
    
    private $userRepository;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(UserRepository $userRepository)
    {
        $this->middleware('auth');
        $this->userRepository = $userRepository;
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('user');
    }

    /**
     * Search users by param.
     *
     * @return Symfony\Component\HttpFoundation\Response
     */
    public function searchUser(Request $request)
    {
        try {
            $session = Auth::user();
            if ($session->type != User::ADMIN_USER) {
                return response('HTTP FORBIDDEN', Response::HTTP_FORBIDDEN);
            }
            $page = $request->input('page');
            $keyword = $request->input('keyword');
            $users = $this->userRepository->all($page, $keyword);
            return response($users, Response::HTTP_OK);
        } catch(Exception $e) {
            return response('Server Error', Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * Create new user.
     *
     * @return Symfony\Component\HttpFoundation\Response
     */
    public function createUser(Request $request)
    {
        try {
            $session = Auth::user();
            if ($session->type != User::ADMIN_USER) {
                return response('HTTP FORBIDDEN', Response::HTTP_FORBIDDEN);
            }
            $data = $request->all();
            $user = $this->userRepository->add($data);
            return response($user, Response::HTTP_OK);
        } catch(Exception $e) {
            return response('Server Error', Response::HTTP_BAD_REQUEST);
        }
    }
}
