<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Price extends Model
{
    use HasFactory;

    protected $table = 'facility_prices'; // Table name

    protected $fillable = ['facility_id', 'amount', 'hours', 'timePeriod', 'monthFrom', 'monthTo'];

    public function facility()
    {
        return $this->belongsTo(Facility::class);
    }
}
