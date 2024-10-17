let name="Hello there"
console.log(name)
/*name="haha"

let areas=Math.pow(5,2);

const person={
  name: "Lerato",
  surname: "Msholozi",
}
//Function
printName:() =>  {
  console.log("I'm a function")
  
} */
  
//console.log(person)

function someFunction(){
    // Get the image element you want to clone
    let image = document.getElementById('imageToClone');

    // Clone the image element (true for deep cloning)
    let otherImage = image.cloneNode(true);

    // Optional: Remove the id from the cloned image to avoid duplicate IDs
    otherImage.id = '';

    // Append the cloned image to a container or somewhere in the DOM
    document.getElementById('clonedImagesContainer').appendChild(otherImage);
}



