console.log("Hello World!");

var client = contentful.createClient({
    space: 'jhroq6kjrsy4',
    accessToken: 'r_i6Lec9-NUf3NH6-Y10KjWIcsbOE6R4PSPubYCa0kY',
  });

  //Comment

  console.log(client);

  //   client is helper to connect to contentful
  //   getEntries is a method to get all entries from contentful
  //   entries is an object that contains all the entries
    client.getEntries().then(function (entries) {
      console.log(entries);
      // for each entry run the function
      entries.items.forEach(function (entry) {
          //  fields are the fields we named in contentful
        if (entry.fields.name) {
          console.log("entry name: " + entry.fields.name);
        }
      });
    });
  
  
  var cars = [{type:"Fiat", model:"500", color:"white"}, 
              {type:"Volvo", model:"XC90", color:"black"}]
  // console.log(cars[0]); // to get all info on first car
  // console.log(cars[0].type); // to get type of first car
  // console.log(cars[1].model);
  
  cars.forEach (function (car) {
      console.log("Car Type is " + car.type);
  });
  
