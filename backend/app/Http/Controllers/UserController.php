<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['index']]);
    }
    public function index()
    {
        return response()->json(
            [
                "status"=>"success",
                "data"=>User::all()
            ]);
    }

    public function show(string $id,Request $request)
    {
             return response()->json(User::find($id));
    }

    public function update(Request $request, string $id)
    {
        $user = User::find($id);
        if($user){
            if ($request->password) {
                $request['password'] = bcrypt($request['password']);
            }
            $user->update($request->all());

            return response()->json([
                "status"=>"success",
                "data"=>$user
            ],200);
        }
        return response()->json([
            "error"=>"Bad Request",
        ]
        ,400);
    }

    public function destroy(string $id)
    {
        $user = User::find($id);
        if($user){
            $user->delete($id);
            return response()->json([
            "status"=>"success",
       ]
        ,200);
        }
        return response()->json([
            "status"=>"User Not Found",

        ]
        ,404);
    }
}
