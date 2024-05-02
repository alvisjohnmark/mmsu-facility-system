<?php

namespace App\Http\Controllers;
use App\Models\Service;

use Illuminate\Http\Request;

class ServicesController extends Controller
{
    public function fetchServices()
        {
            $services = Service::all();
                return response()->json($services);

        }

        public function index()
        {
            $services = Service::all();
            return response()->json($services);
        }
    
        public function store(Request $request)
        {
            $service = Service::create($request->all());
            return response()->json($service, 201);
        }
    
        public function destroy(Service $service)
        {
            $service->delete();
            return response()->json(null, 204);
        }

        public function saveServices(Request $request)
                {
                    $servicesData = $request->all(); // Retrieve all data sent from the frontend

                    foreach ($servicesData as $data) {
                        $service = new Service();
                        $service->service_name = $data['service_name'];
                        $service->type = $data['type'];
                        $service->fee = $data['fee'];
                        $service->unit = $data['unit'];
                        $service->note = $data['note'];
                        $service->monthFrom = $data['monthFrom'];
                        $service->monthTo = $data['monthTo'];

                        $service->save();
                    }

                    return response()->json(['message' => 'Services saved successfully']);
                }

            public function getServices()
            {
                $services = Service::all(); // Assuming 'Service' is your model name

                return response()->json($services);
            }

        public function getServiceById($id)
            {
                $service = Service::find($id); // Find the service by its ID

                if (!$service) {
                    return response()->json(['message' => 'Service not found'], 404);
                }

                return response()->json($service);
            }

            public function editService(Request $request, $id)
                {
                    $service = Service::find($id); // Find the service by its ID

                    if (!$service) {
                        return response()->json(['message' => 'Service not found'], 404);
                    }

                    // Update specific fields based on the request
                    $service->fill($request->only([
                        'service_name',
                        'type',
                        'fee',
                        'unit',
                        'note',
                        'monthFrom',
                        'monthTo'
                        // Add other fields as needed
                    ]));

                    // Save the updated service
                    $service->save();

                    return response()->json(['message' => 'Service updated successfully']);
                }


public function deleteService($id)
{
    $service = Service::find($id); // Find the service by its ID

    if (!$service) {
        return response()->json(['message' => 'Service not found'], 404);
    }

    // Delete the service
    $service->delete();

    return response()->json(['message' => 'Service deleted successfully']);
}





    
}