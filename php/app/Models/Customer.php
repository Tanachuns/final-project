<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;
    public $timestamps = true;
    public function insurance()
    {
        return $this->hasMany(Insurance::class);
    }
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
        "password",
    ];

    protected $hidden = [
        'password',

    ];
}
