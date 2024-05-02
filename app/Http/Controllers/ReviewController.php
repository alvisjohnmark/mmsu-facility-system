<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Review;

class ReviewController extends Controller
{
    public function uploadReview(Request $request)
    {
        // Validate the incoming request data
        $validatedData = $request->validate([
            'name' => 'required',
            'rating' => 'required|numeric|min:1|max:5',
            'comment' => 'required',
            'facility_id' => 'required|exists:facility,id', // Validate existence of the facility ID in facilities table
        ]);

        // Create a new review instance and save it to the database
        $review = new Review();
        $review->reviewName = $validatedData['name'];
        $review->rating = $validatedData['rating'];
        $review->comment = $validatedData['comment'];
        $review->facility_id = $validatedData['facility_id'];
        $review->save();

        // Return a response indicating success or failure
        return response()->json(['message' => 'Review saved successfully']);
    }

    public function getFacilityReviews($facility_id)
        {
            $reviews = Review::where('facility_id', $facility_id)
                            ->orderBy('rating', 'desc') // Sort by highest rating first
                            ->get();

            return response()->json(['reviews' => $reviews]);
        }

 
}
