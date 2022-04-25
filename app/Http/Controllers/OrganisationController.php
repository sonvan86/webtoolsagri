<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\Organisation;
use App\Models\User;
use App\Repositories\OrganisationRepository;
use Illuminate\Support\Facades\Auth;

class OrganisationController extends Controller
{
    private $organisationRepository;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(OrganisationRepository $organisationRepository)
    {
        $this->middleware('auth');
        $this->organisationRepository = $organisationRepository;
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('organisation');
    }

    /**
     * Get all Organisation.
     *
     * @return Symfony\Component\HttpFoundation\Response
     */
    public function getList()
    {
        try {
            $session = Auth::user();
            if ($session->type != User::ADMIN_USER) {
                return response('HTTP FORBIDDEN', Response::HTTP_FORBIDDEN);
            }
            $organisation = $this->organisationRepository->all();
            return response($organisation, Response::HTTP_OK);
        } catch(Exception $e) {
            return response('Server Error', Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * Create new Organisation.
     *
     * @return Symfony\Component\HttpFoundation\Response
     */
    public function createOrganisation(Request $request)
    {
        try {
            $session = Auth::user();
            if ($session->type != User::ADMIN_USER) {
                return response('HTTP FORBIDDEN', Response::HTTP_FORBIDDEN);
            }
            $data = $request->all();
            $user = $this->organisationRepository->add($data);
            return response($user, Response::HTTP_OK);
        } catch(Exception $e) {
            return response('Server Error', Response::HTTP_BAD_REQUEST);
        }
    }
}
