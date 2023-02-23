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
        Schema::create('order', function (Blueprint $table) {
            $table->id();
            $table->string("user_citizen_id")->unsigned();
            $table->foreign("user_citizen_id")->references('citizen_id')->on('users')->onDelete('cascade');
            $table->integer("plan_id")->unsigned();
            $table->foreign("plan_id")->references('id')->on('plan')->onDelete('cascade');
            $table->date("cover_start_date");
            $table->date("cover_end_date");
            $table->string( "beneficiary_firstname")->nullable();
            $table->string(  "beneficiary_lastname")->nullable();
            $table->string("beneficiary_relation")->nullable();
            $table->string(  "beneficiary_title")->nullable();
            $table->integer("agent_id")->unsigned()->nullable();
            $table->foreign("agent_id")->references('id')->on('users')->onDelete('cascade');
            $table->string( "type")->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('order');
    }
};
