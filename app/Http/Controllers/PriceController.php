<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PriceController extends Controller
{
    public function store(Request $request)
    {
        $prices = $request->input('prices'); // Assuming prices is an array in the request

            foreach ($prices as $priceData) {
                $price = new FacilityPrice();
                $price->facility_id = $priceData['facility_id']; // This is the foreign key
                $price->amount = $priceData['amount'];
                $price->timePeriod = $priceData['timePeriod'];
                $price->monthFrom = $priceData['monthFrom'];
                $price->monthTo = $priceData['monthTo'];
                $price->hours = $priceData['hours'];
                $price->save();
            }

            return response()->json(['message' => 'Prices saved successfully']);
    }

}
