function callApi() {
    $.ajax({
      url: 'https://fakestoreapi.com/products',
      type: 'GET',
      success: function (data) {
        for (let i = 0; i < data.length; i++) {
        var imgage = document.createElement('img');
          imgage.src = data[i].image;
          document.getElementById('image-container').appendChild(imgage);
        }
      },
      error: function (err) {
        console.log(err);
      },
    });
  }
  $('#btn').on('click', function () {
    callApi();
  });
  