<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class FacilityPrices extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('facility_prices', function (Blueprint $table) {
            $table->id();
            $table->foreignId('facility_id')->constrained('facility')->cascadeOnDelete();
            $table->decimal('amount',10)->default(0);
            $table->integer('hours');
            $table->tinyInteger('timePeriod');
            $table->tinyInteger('monthFrom');
            $table->tinyInteger('monthTo');
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
        Schema::dropIfExists('facility_prices');
    }
}
