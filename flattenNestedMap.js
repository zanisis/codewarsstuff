// Flattens an hierarchical map into a single level
function flattenMap(map) {
  var result = {};

  var traverse = function(keyBuiltUp, takeFrom){
    if (!(typeof takeFrom === "object" && takeFrom !== null && !Array.isArray(takeFrom))){
      result[keyBuiltUp.join('/')] = takeFrom;
      return;
    }

    for (var key in takeFrom){
      keyBuiltUp.push(key);
      traverse(keyBuiltUp, takeFrom[key]);
      keyBuiltUp.pop();
    }
  }

  traverse([], map);
  return result;
}

var test = {
  'a': {
    'b': {
      'c': 12,
      'd': 'Hello World'
    },
    'e': [1,2,3]
  }
};

flattenMap(test);