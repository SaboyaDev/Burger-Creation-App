// Submit Button
// =================================================
$(".submit-btn").on("click", (event) => {
  event.preventDefault();
  collectBurgerName();
});

// Devour Button
// =================================================
$(".devour-btn").on("click", (event)=>{
  event.preventDefault();
  let state = false;
  update(state);
});

// Bring Back Button
// =================================================
$(".bring-back-btn").on("click", (event) => {
  event.preventDefault();
  let state = true;
  update(state);
});

// Function Definitions
// =================================================
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
    // console.log(data);
    location.reload();
  }) 
}

var update = (state) => {
  var burger_Id = {
    id: $("[name='burger-name']:checked").val(),
    state: state
  };
  console.log({
      id: burger_Id.id,
      state: burger_Id.state
    });
  $.ajax({
    method: "PUT",
    url: "/burgers/update",
    data: burger_Id
  }).then((data) => {
    location.reload();
  });
}