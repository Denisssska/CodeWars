function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    
    var newArray = birds.filter(function(f) {
        if (geese.includes(f) == false) {
            return f;
        }
    })
    return newArray;
};