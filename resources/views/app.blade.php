<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MMSU Facilities</title>
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css"/> <script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
    <script src="https://cdn.lordicon.com/lordicon.js"></script>

 
  
</head>
<body>
    <div id="app">
    <h1>Twst</h1>
        @if(auth()->check())
            <AdminDashboard />
        @else
            <App />
            @endif

    </div>
    
    <script>
        window.authenticated = @json(auth()->check());
    </script>
    <script src="{{ mix('js/app.js') }}"></script>
    
</body>
</html>