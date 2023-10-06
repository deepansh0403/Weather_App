const apiKey = "de2632cfbf25e0270b89a541984c936d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const img = document.querySelector(".weather-icon");

async function  checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
    if(response.status == 404){
        document.querySelector(".error").style.display= "block";
        document.querySelector(".weather").style.display= "none";
    }else{
        document.querySelector(".city").innerHTML= data.name;
        document.querySelector(".temp").innerHTML= data.main.temp + "°c";
        document.querySelector(".humidity").innerHTML= data.main.humidity + "%";
        document.querySelector(".wind").innerHTML= data.wind.speed + "Km/h ";
        document.querySelector(".error").style.display= "none";
    }
   

    if(data.weather[0].main == "Clouds"){
        img.src="https://cdn-icons-png.flaticon.com/128/1146/1146869.png";
    }else if(data.weather[0].main == "Clear"){
        img.src="https://cdn-icons-png.flaticon.com/128/869/869869.png";
    }else if(data.weather[0].main == "Rain"){
        img.src="https://cdn-icons-png.flaticon.com/128/5903/5903809.png";
    }else if(data.weather[0].main == "Drizzle"){
        img.src="https://cdn-icons-png.flaticon.com/128/2412/2412727.png";
    }else if(data.weather[0].main == "Mist"){
        img.src="https://cdn-icons-png.flaticon.com/128/2930/2930095.png";
    }else if(data.weather[0].main == "Haze"){
        img.src = "https://cdn-icons-png.flaticon.com/128/4151/4151022.png";
    }
    document.querySelector(".weather").style.display = "block";
}
 searchbtn.addEventListener("click", ()=>{
    checkWeather(searchbox.value);
 });


    var a = document.querySelector("#main");
    var c = document.querySelector(".luli");
    a.addEventListener("mousemove", function(Dets){
        console.log(Dets);
        c.style.left = Dets.x+"px";
        c.style.top = Dets.y+"px";
        c.style.display = "block";
    });
