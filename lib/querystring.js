module.exports = function (input) {
  if (input == null) {
    return {};
  };

  var empty = {};
  var input = input.split("?")[1];
  var obj = input.split("&");

  for (var i = 0; i < obj.length; i++) {
    var pair = obj[i].split("=");
    empty[pair[0]] = pair[1];
    };
      return empty;
    };
