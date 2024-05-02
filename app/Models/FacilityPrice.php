<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FacilityPrice extends Model
{
    protected $fillable = ['facility_id', 'amount', 'monthFrom', 'monthTo', 'hours', 'timePeriod'];

    protected $table = 'facility_prices';

    public function facility()
    {
        return $this->belongsTo(Facility::class, 'facility_id');
    }
}