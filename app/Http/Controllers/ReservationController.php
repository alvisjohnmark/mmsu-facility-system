<?php

namespace App\Http\Controllers;
use App\Models\Reservation;
use App\Models\ReservationService;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Auth;
use DB;

use Illuminate\Http\Request;

class ReservationController extends Controller
{
   
    public function saveReservation(Request $request)
    {

        $client_id = Session::get('client_id');

        $reservation = new Reservation();
        $reservation->client_id = $client_id;
        $reservation->facility_id = $request->facilityId;
        $reservation->purpose = $request->purpose;
        $reservation->event_name = $request->event_name;
        $reservation->participants = $request->participants;
        $reservation->eventDateFrom = $request->eventDateFrom;
        $reservation->eventDateTo = $request->eventDateTo;
        $reservation->startTime = $request->startTime;
        $reservation->endTime = $request->endTime;
        $reservation->total = $request->totalPrice;
  
        $reservation->save();

        Session::put('reservation_id', $reservation['id']);

        return response()->json(['message' => 'Reservation created successfully', 'reservation' => $reservation], 201);
    }


    public function checkConflict(Request $request)
    {
        $eventDateFrom = $request->input('eventDateFrom');
        $eventDateTo = $request->input('eventDateTo');
        $startTime = $request->input('startTime');
        $endTime = $request->input('endTime');

        $conflictingReservations = Reservation::where('eventDateFrom', '=', $eventDateFrom)
            ->where('eventDateTo', '=', $eventDateTo)
            ->where(function ($query) use ($startTime, $endTime) {
                $query->where(function ($q) use ($startTime, $endTime) {
                    $q->where('startTime', '>=', $startTime)
                        ->where('startTime', '<', $endTime);
                })->orWhere(function ($q) use ($startTime, $endTime) {
                    $q->where('endTime', '>', $startTime)
                        ->where('endTime', '<=', $endTime);
                });
            })
            ->where('status', '=', 1) // Assuming 1 is an approved reservation status
            ->get();

        $hasConflict = count($conflictingReservations) > 0;

        return response()->json(['hasConflict' => $hasConflict]);
    }





    //---------------------reservation----------------------------//
        public function approveReservation($id)
        {
            $approval = Reservation::find($id);
            $approval->status = 1; // Update the status to 1 for approval
            $approval->save();

            return $approval;
        }

        public function cancelReservation($id)
        {
            $cancellation = Reservation::find($id);
            $cancellation->status = 3; // Update the status to 3 for cancellation
            $cancellation->save();
        
            return $cancellation;
        }
        
    public function index()
    {

        $adminId = Auth::id();

        // Retrieve reservations
        $reservationsData = Reservation::select('*', DB::raw("reservations.id as reservation_id"))
            ->join('facility', 'reservations.facility_id', '=', 'facility.id')
            ->join('clients', 'reservations.client_id', '=', 'clients.id')
            ->where('admin_id', $adminId)
            ->get();

        // Initialize an empty array to store the result
        $reservations = [];

        // Loop through each reservation and fetch associated services
        foreach ($reservationsData as $reservation) {
            $reservationId = $reservation->reservation_id;

            // Retrieve services for the current reservation
            $services = ReservationService::select('*', DB::raw("reservation_services.id as reservation_service_id"))
                ->join('services', 'reservation_services.service_id', '=', 'services.id')
                ->where('reservation_id', $reservationId)
                ->get();

                    
            // Add the reservation and its associated services to the result array
            $reservations[] = [
                'reservation_details' => $reservation,
                'services_details' => $services,
                
            ];
        }

        // Return the result as JSON
        return response()->json($reservations);

    }


    public function getAdminReservationCount()
            {
                $adminId = Auth::id();

                $reservationCount = Reservation::join('facility', 'reservations.facility_id', '=', 'facility.id')
                ->where('facility.admin_id', $adminId)
                ->count();

                return response()->json(['reservation_count' => $reservationCount]);
            }


    public function rescheduleReservation(Request $request, $id)
        {
            $reservation = Reservation::find($id);

            $reservation->update([
                'eventDateFrom' => $request->input('eventDateFrom'),
                'eventDateTo' => $request->input('eventDateTo'),
                'startTime' => $request->input('startTime'),
                'endTime' => $request->input('endTime'),
            ]);

            return $reservation;
        }



        //---------------------------------------EXPERIMENT LANG, APPROVED ONLY HERE BESHY-----------------//

        public function getApprovedReservations()
        {
            $adminId = Auth::id();

            $approvedReservations = Reservation::select('*', DB::raw("reservations.id as reservation_id"))
                ->join('facility', 'reservations.facility_id', '=', 'facility.id')
                ->join('clients', 'reservations.client_id', '=', 'clients.id')
                ->where('admin_id', $adminId)
                ->where('status', 1) // Fetch only approved reservations
                ->get();

            return response()->json($approvedReservations);
        }

}