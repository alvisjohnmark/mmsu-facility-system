<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    protected $table = 'services'; // Replace 'services' with your actual table name if different

    protected $fillable = [
        'service_name',
        'type',
        'fee',
        'unit',
        'note',
        'monthFrom',
        'monthTo'
    ];

    // Define the relationship - a service can have many reservation services
    public function reservationServices()
    {
        return $this->hasMany(ReservationService::class);
    }
}
