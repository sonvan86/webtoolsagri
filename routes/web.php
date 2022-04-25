<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [\App\Http\Controllers\Auth\LoginController::class, 'showLoginForm']);

Auth::routes();

Route::get('/authorize', [\App\Http\Controllers\HomeController::class, 'getAuthorize'])->name('authorize');
Route::get('/home', [\App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('/user', [\App\Http\Controllers\UserController::class, 'index'])->name('user');
Route::get('/users', [\App\Http\Controllers\UserController::class, 'searchUser'])->name('search-user');
Route::post('/users', [\App\Http\Controllers\UserController::class, 'createUser'])->name('create-user');

Route::get('/organisation', [\App\Http\Controllers\OrganisationController::class, 'index'])->name('organisation');
Route::get('/organisations', [\App\Http\Controllers\OrganisationController::class, 'getList'])->name('get-organisation');
Route::post('/organisation', [\App\Http\Controllers\OrganisationController::class, 'createOrganisation'])->name('create-organisation');
