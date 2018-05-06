
function myFunction() {
    var x = document.getElementById("b");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

var current_image = document.getElementById('current_image');
var button = document.getElementById('button');

button.addEventListener('click', cyclePictures);

var my_pictures = ['p0.png', 'p1.png', 'p2.png'];
var picture_number = 0;

function cyclePictures() {

  if (picture_number === my_pictures.length) {
    picture_number = 0;
  }

  current_image.src = 'p/' + my_pictures[picture_number];

  console.log(my_pictures[picture_number]);

  picture_number++;

}
