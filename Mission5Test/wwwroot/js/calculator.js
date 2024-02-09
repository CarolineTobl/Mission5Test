$(document).ready(function () {
    $('#calculateButton').on('click', function () {
        var hours = parseInt($('#hoursInput').val(), 10);
        var rate = parseFloat($('#ratePerHour').val());

        if (isNaN(hours) || hours < 1) {
            $('#validationMessage').text('Please enter a whole positive number for the hours.');
            $('#totalOutput').val('');
        } else {
            var total = hours * rate;
            $('#totalOutput').val(total.toFixed(2));
        }
    });
});
