<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Customer;
use App\Models\Insurance;

class InsuranceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json([
            "data"=>Insurance::all(),
            "count"=>Insurance::count()
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
        $customer = Customer::where("citizenId",$request->citizenId)->first();
        $data = $request->all();
        if (!$customer) {
             app(RegisterController::class)->store($request);
             $customer = Customer::where("citizenId",$request->citizenId)->first();
        }

        $data['customer_id'] = $customer->id;
        $ins=Insurance::create($data);
        return response()->json([
            "data"=>$ins
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
        $ins = Insurance::find($id);
        $ins->plan;
        return response()->json([
            "data"=>$ins,
        ]
        ,200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
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
        $ins = Insurance::find($id);
        if($ins){
            $ins->update($request->all());
            return response()->json([
            "data"=>$ins,
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
    $ins = Insurance::find($id);
        if($ins){
            $ins->delete($id);
            return response()->json([
            "data"=>$ins,
        ]
        ,200);
        }
        return response()->json([
            "data"=>null,
        ]
        ,400);
    }
}
