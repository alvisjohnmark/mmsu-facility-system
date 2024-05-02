<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    protected $table = 'facility_reviews';

    protected $fillable = ['reviewName', 'rating', 'comment', 'facility_id', ];

    protected $dates = ['created_at'];
}