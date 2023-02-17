<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('customer', function (Blueprint $table) {
            $table->id();
            $table->string("title")->nullable();
            $table->string("firstname")->nullable();
            $table->string("lastname")->nullable();
            $table->string("citizenId")->unique();
            $table->string("email")->unique();
            $table->string("phone_number")->nullable();
            $table->string("address_houseNumber")->nullable();
            $table->string("address_moo")->nullable();
            $table->string("address_village")->nullable();
            $table->string("address_soi")->nullable();
            $table->string("address_road")->nullable();
            $table->string("address_amphur")->nullable();
            $table->string("address_tumbon")->nullable();
            $table->string("address_province")->nullable();
            $table->string("address_zipcode")->nullable();
            $table->string("password");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('customer');
    }
};
