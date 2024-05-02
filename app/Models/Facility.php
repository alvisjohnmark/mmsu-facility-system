<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Facility extends Model
{
    use HasFactory;
    protected $table = 'facility'; // table name

    public function admin()
    {
        return $this->belongsTo(Admin::class);
    }

    public function prices()
    {
        return $this->hasMany(Price::class);
    }


    protected $fillable = ['admin_id', 'facility_name', 'description', 'location', 'capacity', 'amount', 'hours', 'shortdes', 'tags' ];

    public function facilityPrices()
    {
        return $this->hasMany(FacilityPrice::class, 'facility_id');
    }
}
