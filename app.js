window.addEventListener('load',()=>{
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');

    let temperatureDegree = document.querySelector('.temperature-degree');

    let locationTimezone = document.querySelector('.location-timezone');

    let degreeSection = document.querySelector('.temperature')

    const temperatureSpan = document.querySelector('.temperature span')

    let imageFrame = document.querySelector('.imageFrame')

    let access_key = keys.access_key
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
              console.log(position)  
              long = position.coords.longitude;
              lat = position.coords.latitude;
              const proxy = 'https://cors-anywhere.herokuapp.com/';
              console.log(access_key)
              const api = `http://api.weatherstack.com/current?access_key=${access_key}&query=${lat},${long}`;                
              fetch(api)
              .then(response => {
                  return response.json()
              })
              .then(data => {
                  console.log(data)
                  const {temperature,observation_time,weather_descriptions,weather_icons} = data.current;
                  const timezone = data.location.timezone_id

                  img = document.createElement('img');
                  img.src = weather_icons;
                // document.body.appendChild(img);

                // imageFrame.innerHTML = `<img src=${weather_icons}>`
                  imageFrame.src = weather_icons   
                  //Set DOM elements from the API
                  temperatureDegree.textContent = temperature
                  temperatureDescription.textContent = weather_descriptions[0]
                  locationTimezone.textContent = timezone

                  //Formula for celsius
                  let celsius = (temperature * 1.8 + 32);
                  //Change temperature to Celsisus Fahrenheit
                  degreeSection.addEventListener('click',()=>{
                    if (temperatureSpan.textContent === 'F') {
                        temperatureSpan.textContent = 'C'    
                        temperatureDegree.textContent = temperature;
                    }                      
                    else {
                        temperatureSpan.textContent = 'F'                 
                        temperatureDegree.textContent =  Math.floor(celsius);
                    }
                  })
              })      
        });

    }else{
        h1.textContent = "Hey , please enable your location"
    }
});