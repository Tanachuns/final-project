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
            $table->string("title");
            $table->string("firstname");
            $table->string("lastname");
            $table->string("birth_date");
            $table->string("citizen_id")->unique();
            $table->string("email")->unique();
            $table->string("phone_number")->nullable();
            $table->string("address_houseNumber");
            $table->string("address_moo");
            $table->string("address_village");
            $table->string("address_soi");
            $table->string("address_road");
            $table->string("address_amphur");
            $table->string("address_tumbon");
            $table->string("address_province");
            $table->string("address_zipcode");
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
