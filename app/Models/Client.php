<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    use HasFactory;

    protected $fillable = [

        'fname',
        'mname',
        'lname',
        'address',
        'email',
        'phone',
        'mmsu_affiliated',
        'university_id',
        'college',
        'department',
        'officeAgency',
    ];

    // Define relationships
    public function reservations()
    {
        return $this->hasMany(Reservation::class);
    }

}
