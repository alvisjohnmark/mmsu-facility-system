<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ReservationService extends Model
{
    use HasFactory;



    // Define the relationship - a reservation service belongs to a reservation
    public function reservation()
    {
        return $this->belongsTo(Reservation::class);
    }

    // Define the relationship - a reservation service belongs to a service
    public function service()
    {
        return $this->belongsTo(Services::class, 'service_id');
    }
}
