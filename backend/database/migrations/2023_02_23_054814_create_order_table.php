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
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->string("title")->nullable();
            $table->string("firstname")->nullable();
            $table->string("lastname")->nullable();
            $table->string("birth_date")->nullable();
            $table->string("citizen_id");
            $table->string("email");
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
            $table->string("health_condition")->nullable();
            $table->integer("plan_id")->unsigned();
            $table->foreign("plan_id")->references('id')->on('plan')->onDelete('cascade');
            $table->date("cover_start_date")->nullable();
            $table->date("cover_end_date")->nullable();
            $table->string( "beneficiary_firstname")->nullable();
            $table->string(  "beneficiary_lastname")->nullable();
            $table->string("beneficiary_relation")->nullable();
            $table->string(  "beneficiary_title")->nullable();
            $table->integer("agent_id")->unsigned()->nullable();
            $table->foreign("agent_id")->references('id')->on('users')->onDelete('cascade');
            $table->string( "status")->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
