class Fly {
   constructor(boardNumb, flightNum, engine, fuelConsumption, fuelVolume, speed, height, duration) {
      this.boardNumb = boardNumb;
      this.flightNum = flightNum;
      this.engine = engine;
      this.fuelConsumption = fuelConsumption;
      this.fuelVolume = fuelVolume;
      this.speed = speed;
      this.height = height;
      this.duration = duration;

   }
   getConsumption() {
      return (this.fuelConsumption * this.engine.length) * this.duration;
   }
   getFaultEngine() {
      let totalEngineVolume = this.engine.reduce((a, b) => a + b, 0);
      if (totalEngineVolume < 50) {
         this.speed = this.speed / totalEngineVolume;
         this.height = this.height / totalEngineVolume;
      }
      return `'Speed'; ${this.speed}, 'Height': ${this.height}`;
   }

   getSpeedy(plane) {
      return this.speed > plane.speed ? this : plane;

   }
   static getMostFast(plane1, plane2, plane3) {
      return plane1.speed > plane2.speed && plane1.speed > plane3.speed
      ? plane1
      : plane2.speed > plane3.speed && plane2.speed > plane1.speed
      ? plane2
      : plane3;
   }
}


const plane1 = new Fly('FR 1805', 737, [9080, 9080, 9080, 9080], 2600, 23830, 795, 11300, 4)
const plane2 = new Fly('FR 1805', 747, [28600, 28600, 28600, 28600], 8460, 204340, 920, 13750, 4)
const plane3 = new Fly('FR 1805', 745, 28600, 8460, 204340, 920, 13750, 4)


//console.log(plane1);
//console.log(plane1.getConsumption());
//console.log(Fly.getMostFast(plane1, plane2, plane3));
//console.log(plane1.getSpeedy(plane2));


class Hotel {
   constructor(name, address, tenants, price, totalRooms,filledRooms, filledRoomsPercent){
      this.name = name;
      this.address = address;
      this.tenants = tenants;
      this.price = price;
      this.totalRooms = totalRooms;
      this.filledRooms = filledRooms;
      this.filledRoomsPercent = filledRoomsPercent;
      
   }
   getProfit(){
      return this.price * this.filledRooms;
   }
   
   getDropInProfitability(){
      return this.filledRoomsPercent < 50 ? this.price - 20 : this.price;
    /* if(this.filledRoomsPercent < 50){
      return this.price - 20;
   }else{
      return this.price;
   }*/
}

   getProfitability(hotel){
     /* if (hotel.filledRooms > hotel.filledRooms) {
			return true;
		}
		else {
			return false;
		}*/

      return this.filledRoomsPercent > hotel.filledRoomsPercent ? true : false;

   }
   static getMostProfitability(hotel1, hotel2, hotel3){
      return hotel1.filledRooms > hotel2.filledRooms && hotel1.filledRooms > hotel3.filledRooms ? hotel1 : hotel2.filledRooms > hotel3.filledRooms && hotel2.filledRooms > hotel1.filledRooms? hotel2 : hotel3;

   }
   }
    

const hotel1 = new Hotel('Mayfair House Hotel', 'Florida Avenue, Coconut Grove, Miami', [2,4,6], 173, 500, 150, 30);
const hotel2 = new Hotel('The Guild Downtown ', '30 NE 4th St, Miami, FL 33132', [1,2,4,6], 76, 200, 80, 40);
const hotel3 = new Hotel('Lofts of Aventura ', 'Northeast 26th Avenue, Miami, FL 33180', [1,2,4,6,8,12],450,400, 360,90);

//console.log(hotel1.getProfit());
//console.log(hotel3.getDropInProfitability());
//console.log(hotel1.getProfitability(hotel1));
//console.log(Hotel.getMostProfitability(hotel1, hotel2, hotel3));