require('datatables.net-bs5');

$(document).ready( function () {
    $('#players').DataTable({
        "pageLength": 4,        // set rows for pagination
        "bInfo": false,         // Hide show columns select
        "bLengthChange": false,  // Hide bInfo 1 of n shown
        "oLanguage": {
            "sSearch": "",
            "sSearchPlaceholder": "Search players..."
        }
    });

    $('#players_filter').addClass('d-flex justify-content-end me-3') // Add classes to search box
} );