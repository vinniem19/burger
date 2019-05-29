// Inside `burger.js`, import `orm.js` into `burger.js`
// * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.
// * Export at the end of the `burger.js` file.
var orm = require("../config/orm.js");

var burger = {
all: function (cb) {
    orm.all("burgers", function(res) {
        cb(res);
    });
},

create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(res) {
        cb(res);
    });
},
update: function(id, cb) {
    orm.update("burgers", id, cb, function(res) {
        cb(res);
        });
    }
    // need a devour function similar to the rest here
};
module.exports = burger;
// $(function() {
//     $("#addburger").on("submit", function(event) {
//         // we are going to prevent page from refreshing
//         event.preventDefault();
//         var newBurger = {
//             burger: $("#addburger[name=burger]").val().trim()
//         };
//         // send the post request
//         $.ajax("/burgers/", {
//             type: "POST",
//             data: newBurger
//         }).then(function() {
//             console.log("added new burger");
//             // reload the page to get the updated list
//             location.reload();
//         });
//         });
    
//             //    changing burger name
//         $("#editburger").on("submit", function(event) {
//             // preventDefault again bc submit event.
//             event.preventDefault();
    
//             var id = $("[name=id]").val().trim();
    
//             var editedBurger = {
//                 burger: $("editedburger[name=burger").val().trim()
//             };
    
//             // sending a put request
    
//             $.ajax("/burgers/" + id, {
//                 type: "PUT",
//                 data: editedBurger
//             }).then( function() {
//                 console.log("updated id", id);
//                 // again, I' reloading the page
//                 location.reload();
//             });
//         });
//     // devour burger
//         $("#devourburger").on("submit", function(event) {
//             // preventDefault again bc submit event.
//             event.preventDefault();
    
//             var id = $("[name=id]").val().trim();
    
//             var devouredBurger = {
//                 burger: $("#devouredburger[name=burger").val().trim()
//             };
    
//              sending a put request
    
//             $.ajax("/burgers/" + id, {
//                 type: "PUT",
//                 data: devouredBurger
//             }).then( function() {
//                 console.log("devoured id", id);
//                 // again, I' reloading the page
//                 location.reload();
//             });
//         });
//     });

