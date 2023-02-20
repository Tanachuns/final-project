<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Models\Customer;
use App\Models\Insurance;
use App\Mail\RegisterSendEmail;
use Illuminate\Support\Facades\Mail;
use Barryvdh\DomPDF\Facade\Pdf;
class RegisterController extends Controller
{
    public function sendEmail($email,$password)
    {

        Mail::to($email)->send(new RegisterSendEmail($email,$password));
            return new JsonResponse(
                [
                    'success' => $email,
                    'message' => "Thank you for register to our website, please check your inbox"
                ], 200
            );
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $registers = Customer::all();
        $count = Customer::count();
        return response()->json([
            "data"=>$registers,
            "count"=>$count
        ]
        ,200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $password = substr(str_shuffle(str_repeat('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', 5)), 0, 16);
        $data = $request->all();
        $data['password'] = bcrypt($password);
        $register=Customer::create($data);
        if ($register) {
           $this->sendEmail($data['email'],$password);
        }
        return response()->json([
            "data"=>$register
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
        $registers = Customer::find($id);
        return response()->json([
            "user"=>$registers,
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
        $registers = Customer::find($id);
        if($registers){
            if ($request->password) {
                $request['password'] = bcrypt($request['password']);
            }
            $registers->update($request->all());

            return response()->json([
            "data"=>$registers,
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
        $registers = Customer::find($id);
        if($registers){
            $registers->delete($id);
            return response()->json([
            "data"=>$registers,
        ]
        ,200);
        }
        return response()->json([
            "data"=>null,
        ]
        ,400);
    }

    public function  checkLogin(Request $request){
        $password = $request->password;
        $email = $request->email;
        $register = Customer::where("email",$email)->first();
        if ($register) {
            if(\Hash::check($password, $register->password)){
                unset($register['password']);
                 return response()->json([
                    "data"=>$register,
                ]
                ,200);
            }else{
                 return response()->json([
                    "data"=>"smt wrong",
                ]
                ,401);
            }
        }else {
             return response()->json([
            "data"=>"not found",
        ]
        ,401);
        }
    }

    public function loadPDF($id){
        $data= Insurance::find($id);
        $user = Customer::find($data->customer_id);
        $pdf = Pdf::loadView('pdf.index',[
            "data"=>$data,
            "user"=>$user
        ]);
        return $pdf->download('invoice.pdf');
    }

    public function changePw(Request $request,$id){
        $user = Customer::find($id);
        if (\Hash::check($request['current_password'], $user->password)) {
           $request['password'] = bcrypt($request['password']);
            $user->update($request->all());
            return response()->json([
                    "data"=>$user,
                ]
                ,200);
        }
        return response()->json([
                    "data"=>null,
                ]
                ,404);
    }


}
