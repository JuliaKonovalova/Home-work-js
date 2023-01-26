async function getStarWars(type){
let data = await fetch (`https://swapi.dev/api/${type}`,{
    method: 'GET',
    headers:{
        'Content-type': 'application/json; charset=UTF-8',
      },
});
try{
    let body = await data.json();
        console.log(body);
    } catch (error) {
        console.log('error');
    } finally {
        console.log('finally');
}
}

//getStarWars('people');
//getStarWars('films');
//getStarWars('planets');



    