window.onload = function() {
    getWeather();

    function getWeather() {
        let result = [];
        fetch(
                "http://api.openweathermap.org/data/2.5/weather?id=3104499&units=metric&cnt=7&appid=d10592a36cf9ae829e46c8a108b10619"
            )
            .then(function(resp) {
                return resp.json();
            })
            .then(function(data) {
                console.log(data);
                console.log(data.name);
                console.log(data.main.temp_max);
                console.log(data.main.temp_min);
                console.log(data.main.feels_like);
                console.log(data.main.humidity);
                console.log(data.main.pressure);
            })
            .catch(function() {});
    }
};