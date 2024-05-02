<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Image;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;

class ImageController extends Controller
{
    public function store(Request $request)
    {
        
        $file = $request->image;
        $originalFileName = $file->getClientOriginalName();
        $ext = $file->getClientOriginalExtension();
        $filename = md5(explode('.', $originalFileName)[0]) . '.' . $ext;

        Storage::disk('public')->put('/images/' . $filename, File::get($file));

        $imageModel = new Image();
        $imageModel->filename = $filename;
        $imageModel->facility_id = $request->facilityId;
        $imageModel->save();

        return 1;
    }

    public function imageList(Request $request)
    {
        $facilityId = $request->input('facilityId'); // Update to get 'facilityId' from the request

        $images = Image::select('images.*', 'images.filename')
            ->where('facility_id', $facilityId) // Assuming there is a 'facility_id' column in your images table
            ->latest('created_at')
            ->get();

        $images->transform(function ($image) {
            $image->url = url('/storage/images/' . $image->filename);
            return $image;
        });

        return $images;
    }

    public function deleteImage($id)
    {
        $res = Image::where('id', $id)->delete();
        return 1;
    }

    public function getFacilityImages($facilityId)
    {
        $facilityImages = Image::where('facility_id', $facilityId)->get();
        return response()->json(['images' => $facilityImages]);
    }

}
