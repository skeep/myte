/**
 * Created by Suman on 25/03/14.
 */

Parse.initialize('I6s7DAsWtsGKuQfXoFFWdxIH0sWlExyq6PrQtJ57', 'jyWtVPQHL6x76sbB2kJOgVehlNMiMyhG26u0VlaK');

Parse.Cloud.run('hello', {}, {
  success: function(result) {
    console.log(result);
  },
  error: function(error) {
  }
});


var myInput = document.getElementById('myFileInput');

function sendPic() {
  var file = myInput.files[0];

  alert('file sent');
  // Send file here either by adding it to a `FormData` object
  // and sending that via XHR, or by simply passing the file into
  // the `send` method of an XHR instance.
}

myInput.addEventListener('change', sendPic, false);