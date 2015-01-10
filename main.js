var Cat = function (new_name, new_color) {
  this.name = new_name;
  this.color = new_color;
};

var Room = function (new_name, new_description, new_exits, new_points) {
  this.name = new_name;
  this.description = new_description;
  this.exits = new_exits;
  this.points = new_points;
  this.getDescription = function(){
    return this.name + ": " + this.description;
  };
};

//
// Begin fixture data!
//
var kitchen = new Room(
  "Kitchen",
  "A nice roomy kitchen. Not very safe. There may be dogs nearby.",
  ["Living Room", "Dining Room"],
  0
);

var living_room = new Room(
  "Living Room",
  "Lots of perches, but frequently full of dogs. Kind of safe, but not a good spot for naps!",
  ["Kitchen"],
  2
);

var dining_room = new Room(
  "Dining Room",
  "There's a big table and some chairs and OH NO IT'S A DOG",
  ["Kitchen", "Bedroom"],
  -4
);

var bedroom = new Room(
  "Bedroom",
  "YAY! We finally found the nice toasty warm sunbeam!",
  ["Stairs"],
  20
);

//
// End fixture data!
//
var starbuck = new Cat("Starbuck", "black");

$(document).ready(function(){
  // should be replaced with your beginning/end game logic
  // while (true) {

  $("#run-dining-room").click(function() {
    var header = document.getElementById("header");
    header.innerHTML = "Oh no! Starbuck is trapped in the" + dining_room.name;
    var span1 = document.getElementById("run-dining-room");
    span1.id = "run-" + dining_room.exits[0];
    span1.innerHTML = "Run towards the kitchen.";
    var span2 = document.getElementById("dining-room");
    span2.id = dining_room.exits[0];
    span2.innerHTML = "Look at the kitchen.";
    //div2.id = ""
    //var div2 = document.getElement
    //console.log($(event.target).parent().data("room-name"));
  //change the h1 text
  //change the room ids //);
  });

    $("#dining-room").click(function() {
      alert( dining_room.getDescription() );
    });

    $("#living-room").click(function() {
      alert( living_room.getDescription() );
    });
    // Add more!
  // }
});
