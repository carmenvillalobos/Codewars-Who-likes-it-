//Solution 1
function likes(names) {
    if (names.length === 0){
      return "no one likes this"
    }
    else if (names.length === 1){
      return `${names[0]} likes this`
    }
    else if (names.length === 2){
      return `${names[0]} and ${names[1]} like this`
      }
    else if (names.length === 3){
      return `${names[0]}, ${names[1]} and ${names[2]} like this`
    }
    else {
        let diff = names.length - 2
        return `${names[0]}, ${names[1]} and ${diff} others like this`
  }
}


//Psuedocode
//Note: names is the name of an array
//e.g., names = ["Bob", "Martha"]
// function likes(names) {
//     if (names == ''){
        // console.log("no one likes this")
    // }
    //if else (names == 'Peter'){console.log(`$name` likes this)}
    //if else (names > 1) {console.log(`$name1` and `$name2` like this)}
    //if else (names > 2) {console.log(`$name1`, `$name2` and `name3` like this)}
    //if else (names > 3) {console.log(`$name1`, `$name2` and 2 others like this)}
    //if else (names >= 4) {console.log(`$name1`, `$name2` and (names.length-2) others like this)}
//   }