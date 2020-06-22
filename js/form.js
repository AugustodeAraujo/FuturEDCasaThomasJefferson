// Google Sheets

$.fn.serializeObject = function()
{
   var o = {};
   var a = this.serializeArray();
   $.each(a, function() {
       if (o[this.name]) {
           if (!o[this.name].push) {
               o[this.name] = [o[this.name]];
           }
           o[this.name].push(this.value || '');
       } else {
           o[this.name] = this.value || '';
       }
   });
   return o;
};

var $form = $('form#formgoogle'),
    url = 'https://script.google.com/macros/s/AKfycbzeUz20NJEFkgSRAuhIRnFubO8XV6NhmdaA3nAKbK0mup876jsB/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  })
})

// Google Sheets

//AlertaForm

$(document).ready(function(){
    $('#submit-form').click(function(){
        $('.alert').show()
    }) 
  });
  
  //FimAlertaForm