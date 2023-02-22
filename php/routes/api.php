<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\v1\RegisterController;
use App\Http\Controllers\API\v1\PlanController;
use App\Http\Controllers\API\v1\InsuranceController;



/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::resource('/register', RegisterController::class);
Route::resource('/plan', PlanController::class);
Route::resource('/insurance', InsuranceController::class);
Route::get('user/insurance/{id}',[InsuranceController::class, 'findByUser']);
Route::post('/send-email', [RegisterController::class, 'sendEmail']);
Route::post('/login', [RegisterController::class, 'checkLogin']);
Route::get('/pdf/{id}', [RegisterController::class, 'loadPDF']);
Route::put('/changepassword/{id}', [RegisterController::class, 'changePw']);
Route::get('/pdfemail', [RegisterController::class, 'sendEmailPDF']);


