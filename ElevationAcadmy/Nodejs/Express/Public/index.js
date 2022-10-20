function data(){
    var data = JSON.stringify({
        "name": "Naveen"
      });
      
      var config = {
        method: 'post',
        url: 'http://localhost:4000/post',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
      
}
