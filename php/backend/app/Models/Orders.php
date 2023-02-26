<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Orders extends Model
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
        "title",
        "firstname",
        "lastname",
        "birth_date",
        "citizen_id",
        "email",
        "phone_number",
        "address_house_number",
        "address_moo",
        "address_village",
        "address_soi",
        "address_road",
        "address_amphur",
        "address_tumbon",
        "address_province",
        "address_zipcode",
        "plan_id",
        "cover_start_date",
        "cover_end_date",
        "beneficiary_firstname",
        "beneficiary_lastname",
        "beneficiary_relation",
        "beneficiary_title",
        "agent_id",
        "status",
    ];
}
