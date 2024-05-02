<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{
    use HasFactory;

    protected $fillable = [
        'client_id',
        'facility_id',
        'event_name',
        'purpose',
        'eventDateFrom',
        'eventDateTo',
        'startTime',
        'endTime',
        'participants',
        'total',
        'status'

    ];

   // In a controller, e.g., ReservationController.php
public function getReservations() {
    $reservations = Reservation::all(); // Assuming Reservation is your model
    return response()->json($reservations);
}

// Define relationships
public function services()
{
    return $this->hasMany(ReservationService::class);
}

public function facility()
{
    return $this->belongsTo(Facility::class);
}

public function client()
{
    return $this->belongsTo(Client::class);
}

}
