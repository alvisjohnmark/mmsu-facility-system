<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Freservations extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('freservations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('client_id')->constrained('clients')->cascadeOnDelete();
            $table->foreignId('facility_id')->constrained('facility')->cascadeOnDelete();
            $table->string('purpose',255);
            $table->string('event_name',255);
            $table->integer('participants');
            $table->date('eventDateFrom');
            $table->date('eventDateTo');
            $table->date('startTime');
            $table->date('endTime');
            $table->integer('total');
            $table->tinyInteger('status');
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
        Schema::dropIfExists('freservations');
    }
}
