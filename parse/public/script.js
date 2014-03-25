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