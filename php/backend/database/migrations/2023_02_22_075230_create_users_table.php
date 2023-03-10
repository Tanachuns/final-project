<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string("title")->nullable();
            $table->string("firstname")->nullable();
            $table->string("lastname")->nullable();
            $table->string("birth_date")->nullable();
            $table->string("citizen_id")->unique();
            $table->string("email")->unique();
            $table->string("phone_number")->nullable();
            $table->string("address_house_number")->nullable();
            $table->string("address_moo")->nullable();
            $table->string("address_village")->nullable();
            $table->string("address_soi")->nullable();
            $table->string("address_road")->nullable();
            $table->string("address_amphur")->nullable();
            $table->string("address_tumbon")->nullable();
            $table->string("address_province")->nullable();
            $table->string("address_zipcode")->nullable();
            $table->string("password");
            $table->string("health_condition")->nullable();
            $table->string("license_number")->nullable();
            $table->string("license_exp_date")->nullable();
            $table->string("type")->nullable();
            $table->string("reg_id")->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
