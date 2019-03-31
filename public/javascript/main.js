// Submit Button
// =================================================
$(".submit-btn").on("click", (event) => {
  event.preventDefault();
  collectBurgerName();
});

var collectBurgerName = () => {
  var burgerName = {
    burger_name: $("#burger-name").val()
  };
  console.log(burgerName);
  $("#burger-name").val("");
  postBurgerCreation(burgerName);
}

var postBurgerCreation = (burgerName) => {
  $.post("/burgers/create", burgerName, (data) => {
    console.log(data);
    location.reload();
  }) 
}

// Devour Button
// =================================================
$(".devour-btn").on("click", (event)=>{
  event.preventDefault();
  var burger_Id = {
    id: $("[name='burger-name']:checked").val()
  };
  console.log(burger_Id.id);
  $.ajax({
    method: "PUT",
    url: "/burgers/update",
    data: burger_Id
  }).then((data) => {
    location.reload();
  });
});