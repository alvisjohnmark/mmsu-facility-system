<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class FacilityReviews extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('facility_reviews', function (Blueprint $table) {
            $table->id();
            $table->foreignId('facility_id')->constrained('facility')->cascadeOnDelete();
            $table->string('review_name',255)->nullable();
            $table->tinyInteger('rating');
            $table->text('comment');
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
        Schema::dropIfExists('facility_reviews');
    }
}
