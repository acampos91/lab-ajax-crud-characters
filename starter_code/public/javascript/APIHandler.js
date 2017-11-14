class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    $.ajax({
      url: "http://ih-crud-api.herokuapp.com/characters",
      method: "GET",
      success: function (response) {
        console.log(response)
      $('.character-info').remove();
      for(let i = 0; i < response.length; i++){
        $(".characters-container").append(
          "<div class='character-info'>" +
              "<div class='name'>Name: " + response[i].name + "</div>" +
              "<div class='occupation'>Occupation: " + response[i].occupation + "</div>" +
              "<div class='debt'>Debt: " + response[i].debt + "</div>" +
              "<div class='weapon'>Weapon: " + response[i].weapon + "</div>" +
          "</div>"
      )}
      },
      error: function (err) {
      console.log(err)
      },
    })
  }

  getOneRegister (id) {
    $.ajax({
      url: "http://ih-crud-api.herokuapp.com/characters/"+id,
      method: "GET",
      success: function (response) {
        $('.character-info').remove();
        $(".characters-container").append(
          "<div class='character-info'>" +
              "<div class='name'>Name: " + response.name + "</div>" +
              "<div class='occupation'>Occupation: " + response.occupation + "</div>" +
              "<div class='debt'>Debt: " + response.debt + "</div>" +
              "<div class='weapon'>Weapon: " + response.weapon + "</div>" +
          "</div>"
      )
      },
      error: function (err) {
      console.log(err)
      },
    })
  }

  createOneRegister () {

  }

  updateOneRegister () {

  }

  deleteOneRegister (id) {
    $.ajax({
      url: "http://ih-crud-api.herokuapp.com/characters/"+id,
      method: "DELETE",
      success: function (response) {
        id.val("");
        console.log("DEBERIA BORRAR");
        console.log(response);
      },
      error: function (err) {
      console.log(err)
      },
    })
  }
}
