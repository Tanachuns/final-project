<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Orders;
use App\Models\User;
use Barryvdh\DomPDF\Facade\Pdf;


class Util extends Controller
{
    public static function downloadPDF($id){
        $data= Orders::find($id);
        $pdf = Pdf::loadView('pdf.index',[
            "data"=>$data,
        ]);
        return $pdf->download('invoice.pdf');
    }



}
