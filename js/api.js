$(document).ready(function(){
   const url = 'http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=c0694e269150453d93928541a7fbaf03';
   const apiKey = 'c0694e269150453d93928541a7fbaf03';
   
   fetch(`${url}`)
     .then(response => response.json())
     .then(data => {
       console.log(data);
       
       const name = data[0].name;
       const state = data[0].state;
       const lat = data[0].lat;
            
       $('.content').html(`The city name is ${name}, ${state}`);
     });
     
     
     $('.button-generate-info').on('click', ()=> {
        $('.informations').toggleClass('active');
     });

});