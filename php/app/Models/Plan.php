<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Plan extends Model
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
    protected $table = 'plan';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        "name",
        "desc",
        "price",
        "coverage",
    ];
}
