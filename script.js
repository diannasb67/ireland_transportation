var myOptions = {
   val1 : 'Allston',
   val2 : 'Beverly',
   val3 : 'Boston',
   val4 : 'Brighton',
   val5 : 'Brookline',
   val6 : 'Brookline Village',
   val7 : 'Cambridge',
   val8 : 'Charlestown',
   val9 :  'Chelsea',
   val10 : 'Danvers',
   val11 : 'Everett',
   val12 : 'Hathorne',
   val13 : 'Lynn',
   val14 : 'Lynnfield',
   val15:  'Malden',
   val16 : 'Manchester',
   val17 : 'Marblehead',
   val18 : 'Mattapan',
   val19 : 'Medford',
   val20 : 'Melrose',
   val21 : 'Middleton',
   val22 : 'Nahant',
   val23 : 'North Reading',
   val24 : 'Peabody',
   val25 : 'Prides Crossing',
   val26 : 'Reading',
   val27 : 'Revere',
   val28 : 'Roxbury',
   val29 : 'Salem',
   val30 : 'Saugus',
   val31 : 'Somerville',
   val32 : 'Stoneham',
   val33 : 'Swampscott',
   val34 : 'Wakefield',
   val35 : 'Wenham',
   val36 : 'West Medford',
   val37 : 'Winthrop',
   val38 : 'Woburn'
};
var mySelect = $('#myTown');
$.each(myOptions, function(val, text) {
   mySelect.append(
       $('<option></option>').val(val).html(text)
   );
});

$("button").click(function(){
   $(".logoHeader").hide();
 })