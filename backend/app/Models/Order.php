<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;
   public function plan()
    {
        return $this->belongsTo(Plan::class);
    }
    public function user()
    {
        return $this->user(Customer::class);
    }
    protected $fillable = [
        "user_citizen_id",
        "plan_id",
        "cover_start_date",
        "cover_end_date",
        "beneficiary_firstname",
        "beneficiary_lastname",
        "beneficiary_relation",
        "beneficiary_title",
        "agent_id",
        "agnet_id",
        "status",
    ];
}
