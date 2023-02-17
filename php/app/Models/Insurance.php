<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Insurance extends Model
{

    use HasFactory;
     public $timestamps = true;
     public function plan()
    {
        return $this->belongsTo(Plan::class);
    }
    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }


    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'insurance';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        "customer_id",
        "plan_id",
        "cover_start_date",
        "cover_end_date",
    ];
}
