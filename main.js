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
    header.innerHTML = "Oh no! Starbuck is trapped in the " + dining_room.name.toLowerCase();
    var div1 = document.getElementById("div-dining-room");
    div1.remove();
    var div3 = document.createElement("div");
    document.getElementsByClassName("options")[0].appendChild(div3);
    div3.id = "div-" + dining_room.exits[0];
    var span1 = document.createElement("span");
    div3.appendChild(span1);
    span1.innerHTML = "Run towards the " + dining_room.exits[0].toLowerCase();
    span1.id = "run-" + dining_room.exits[0].toLowerCase();
    var span2 = document.createElement("span");
    div3.appendChild(span2);
    span2.innerHTML = " Look at the " + dining_room.exits[0].toLowerCase();
    span2.id = dining_room.exits[0].toLowerCase();

    var div2 = document.getElementById("div-living-room");
    div2.remove();
    var div4 = document.createElement("div");
    document.getElementsByClassName("options")[0].appendChild(div4);
    div4.id = "div-" + dining_room.exits[1];
    var span3 = document.createElement("span");
    div4.appendChild(span3);
    span3.innerHTML = "Run towards the " + dining_room.exits[1].toLowerCase();
    span3.id = "run-" + dining_room.exits[1].toLowerCase();
    var span4 = document.createElement("span");
    div4.appendChild(span4);
    span4.innerHTML = " Look at the " + dining_room.exits[1].toLowerCase();
    span4.id = dining_room.exits[1].toLowerCase();
  });

    $("#dining-room").click(function() {
      alert( dining_room.getDescription() );
    });

    $("#living-room").click(function() {
      alert( living_room.getDescription() );
    });

    $("#kitchen").click(function() {
      alert( kitchen.getDescription() );
    });
    // Add more!
  // }
});
