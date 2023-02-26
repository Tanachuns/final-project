<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Controller\Util;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Mail\RegisterSendEmail;
use Illuminate\Support\Facades\Mail;


class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
        $user = User::where('email', $request->email)->get()->first();
        if ($user) {
            if(\Hash::check($request->password, $user->password)){
                if (!$token = auth()->claims(['user' => $user])->login($user)) {
                    return response()->json(['error' => 'Unauthorized'], 401);
                }
                return $this->respondWithToken($token);
            }
             return response()->json([
            'error'=>"Bad Request",
        ],400);
        }
        return response()->json([
            'error'=>"Not Found",
        ],404);
    }

    public function register(Request $request){
        // $validator = Validator::make(
        //     $request->all(),
        //     [
        //         'email'    => 'required|email',
        //         'citizen_id'    => 'required',
        //     ]
        // );
        // if ($validator->fails()) {
        //     return response()->json($validator->errors(), 400);
        // }
        // $password = $request->password;
        $password = substr(str_shuffle(str_repeat('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', 5)), 0, 16);
        $data = $request->all();
        $data['password'] = bcrypt($password);
        $user=User::create($data);
        if ($user) {
            Mail::to($user->email)->send(new RegisterSendEmail($user->email,$password));
        }
        return response()->json([
            "status"=>"success",
        ],200);
    }

    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',

            'expires_in' => auth()->factory()->getTTL() * 60
        ]);
    }
}
