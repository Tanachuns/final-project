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
        Schema::create('insurance', function (Blueprint $table) {
            $table->id();
            $table->integer("customer_id")->unsigned();
            $table->foreign("customer_id")->references('id')->on('customer')->onDelete('cascade');
            $table->integer("plan_id")->unsigned();
            $table->foreign("plan_id")->references('id')->on('plan')->onDelete('cascade');
            $table->date("cover_start_date");
            $table->date("cover_end_date");
            $table->string( "beneficiary_firstname")->nullable();
            $table->string(  "beneficiary_lastname")->nullable();
            $table->string("beneficiary_relation")->nullable();
            $table->string(  "beneficiary_title")->nullable();
            $table->timestamps();
        });
        {

}
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('insurance');
    }
};
