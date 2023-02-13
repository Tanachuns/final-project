<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;
    public $timestamps = true;

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'customer';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        "title",
        "firstname",
        "lastname",
        "citizenId",
        "email",
        "phone_number",
        "address_houseNumber",
        "address_moo",
        "address_village",
        "address_soi",
        "address_road",
        "address_amphur",
        "address_tumbon",
        "address_province",
        "address_zipcode",
    ];
}
