<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Orders;
use App\Models\User;


class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(
            [
                "status"=>"success",
                "data"=>Orders::all()
            ]);
    }

    public function store(Request $request)
    {
        $data = $request->all();
        $order=Orders::create($data);
        return response()->json([
            "data"=>$order
        ],200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return response()->json([
            "data"=>Orders::find($id)
        ],200);
    }

    public function update(Request $request, string $id)
    {
        $order = Orders::find($id);
        if($order){
            $order->update($request->all());
            return response()->json([
            "data"=>$order,
        ]
        ,200);
        }
        return response()->json([
            "error"=>"Not Found",
        ]
        ,404);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
         $order = Orders::find($id);
        if($order){
            $order->delete($id);
            return response()->json([
            "data"=>$order,
        ]
        ,200);
        }
        return response()->json([
            "error"=>"Not Found",
        ]
        ,404);
    }
}
