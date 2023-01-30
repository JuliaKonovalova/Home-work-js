
    async function getWeather(){
        let data = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=37.129&lon=-84.0833&appid=c48af9e13b39e7ba74e1b5d5d6eba1b2',
        {
            method: 'GET',
            headers:{
                'Content-type': 'application/json; charset=UTF-8',
              },
        });

        try {
            let body = await data.json();
            console.log(body);
        } catch (error) {
        console.error ('error');
        }finally {
            console.log('finally');
    }
    }
    getWeather();
    
