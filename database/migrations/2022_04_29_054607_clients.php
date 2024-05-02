<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Clients extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('clients', function (Blueprint $table) {
            $table->id();
            $table->string('fname',255);
            $table->string('mname',255);
            $table->string('lname',255);
            $table->text('address');
            $table->string('email',255);
            $table->string('phone',10);
            $table->tinyInteger('mmsu_affiliated');
            $table->string('university_id',255);
            $table->string('college',255);
            $table->string('department',255);
            $table->string('officeAgency',255);
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
        Schema::dropIfExists('clients');
    }
}
