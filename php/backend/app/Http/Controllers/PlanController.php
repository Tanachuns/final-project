<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Plan;


class PlanController extends Controller
{
    public function index()
    {
        return response()->json(
            [
                "status"=>"success",
                "data"=>Plan::all()
            ]);
    }

    public function store(Request $request)
    {
        $data = $request->all();
        $plan=Plan::create($data);
        return response()->json([
            "data"=>$plan
        ],200);
    }

    public function show(string $id)
    {
         $plan=Plan::find($id);
        return response()->json([
            "data"=>$plan
        ],200);
    }
    public function update(Request $request, string $id)
    {
         $plan = Plan::find($id);
        if($plan){
            $plan->update($request->all());
            return response()->json([
            "data"=>$plan,
        ]
        ,200);
        }
        return response()->json([
            "data"=>null,
        ]
        ,400);
    }

    public function destroy(string $id)
    {
        $plan = Plan::find($id);
        if($plan){
            $plan->delete($id);
            return response()->json([
            "data"=>"deleted",
        ]
        ,200);
        }
        return response()->json([
            "data"=>null,
        ]
        ,400);
    }
}
