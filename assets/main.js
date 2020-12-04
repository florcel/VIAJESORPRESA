var cityInput;
var adultInput;
var childInput;
var priceInput;
var dateInput;
var checkboxInput;
var formSubmit;

function getNewTravelValue() {
    var checkboxInputValue = checkboxInput.is(':checked');
    if (checkboxInputValue == true) {
      $('#date-select').prop('disabled', true);
    }
    else {
      $('#date-select').prop('disabled', false);
    }
  }

function focusEvent(x) {
    x.style.background = "lightblue";
}

function buildTrips() {
  $.ajax({
    url: "assets/data2.json", 
    dataType: "json",
    success: function(response) {
    trips = new Trips();
    trips.buildList('all-trips', response);
        
      if (trips.buildList('all-trips', response) >= 1) {
        $('#p2').hide();
      return $('#p1').show();

    } else {
      $('#p1').hide();
      return $('#p2').show();
    }
      }
    })


  cityInput = $('#city-select').val();
  priceInput = $('#price-select').val();
  dateInput = $('#date-select').val();
  checkboxInput = $('#checkbox-input').is(':checked');
  localStorage.setItem("City", cityInput);
  localStorage.setItem("Price", priceInput);
  localStorage.setItem("Date", dateInput);
  localStorage.setItem("Check", checkboxInput);
}

$( document ).ready(function(){

  $('.single-item').slick({
    centerMode: true,
     dots: true,
    });
    
  $('#form-submit').click(function() {
    var element = document.getElementById("cont-p1");
    element.scrollIntoView(true);
  })

  cityInput =  $('#city-select');
  priceInput =  $('#price-select');
  dateInput =  $('#date-select');
  adultInput =  $('#adult-select');
  checkboxInput =  $('#checkbox-input');

  $( "a" ).hover( function (){ 
    $( this ).css( "color" , "lightblue" );
    },
    function () {
    $( this ).css( "color" , "white" );
    })    

    })

    function Descartar() {
      $('#remove').parent().parent().remove();
    }