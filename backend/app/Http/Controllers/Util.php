<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Orders;
use App\Models\User;

class Util extends Controller
{
    public function downloadPDF($id){
        $data= Order::find($id);
        $pdf = Pdf::loadView('pdf.index',[
            "data"=>$data,
        ]);
        return $pdf->download('invoice.pdf');
    }


    public function emailPDF($id)
    {
        $data= Insurance::find($id);
        $pdf = Pdf::loadView('pdf.index',[
            "data"=>"$data",
            "user"=>"$user"
        ]);
        $email = $data->email ;
        Mail::send('emails.RegisterSendEmail', ["test"=>"test"], function($message)use($data, $pdf) {
            $message->to("tanarak.chuns@gmail.com","tanarak.chuns@gmail.com" )
                    ->subject("title")
                    ->attachData($pdf->output(), "text.pdf");
        });
            return new JsonResponse(
                [
                    'success' => "ok",
                    'message' => "Thank you for register to our website, please check your inbox"
                ], 200
            );
    }

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
}
