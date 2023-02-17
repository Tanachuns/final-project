<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Plan;

class PlanController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json([
            "data"=>Plan::all(),
            "count"=>Plan::count()
        ]
        ,200);
    }



    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->all();
        $plan=Plan::create($data);
        return response()->json([
            "data"=>$plan
        ],200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $plan=Plan::find($id);
        return response()->json([
            "data"=>$plan
        ],200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
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

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
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
