<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Session;
use App\Models\ReservationService;
use App\Models\Service;

use Illuminate\Http\Request;

class ReservationServicesController extends Controller
{
    public function saveReservationService(Request $request)
    {
        // Validate the request data here if needed
        $reservation_id = Session::get('reservation_id');

        $services = $request->input('services');

        foreach ($services as $service) {
            if ($service['chosen'] === 'Yes') {
            $reservationService = new ReservationService();
            $reservationService->reservation_id = $reservation_id;
            $reservationService->service_id = $service['service_id'];
            $reservationService->quantity = $service['quantity'];
            $reservationService->total_prices = $service['total_price'];
            // $reservationService->remarks = $service['remarks'];
             // Handle remarks data here
             $remarks = isset($service['additionalRequest']) ? (string) $service['additionalRequest'] : null;
             $reservationService->remarks = $remarks;


            // Save the reservation service
            $reservationService->save();
        }
    }
        return response()->json(['message' => 'Reservation services created successfully'], 201);
    }
}
