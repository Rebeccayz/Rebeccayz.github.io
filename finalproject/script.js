
function myFunction() {
    var x = document.getElementById("b");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

var current_image = document.getElementById('current_image');
var button        = document.getElementById('button');
var buttonTwo     = document.getElementById('bu');

button.addEventListener('click', cyclePictures);
buttonTwo.addEventListener('click', cyclePicturesTwo);

var my_pictures = ['p0.png', 'p1.png', 'p2.png'];
var my_pictures_two = ['i0.png', 'i1.png', 'i2.png'];
var picture_number = 0;


function cyclePictures() {

  if (picture_number === my_pictures.length) {
    picture_number = 0;
  }

  current_image.src = 'p/' + my_pictures[picture_number];

  console.log(my_pictures[picture_number]);

  picture_number++;

}

function cyclePicturesTwo() {

  if (picture_number === my_pictures_two.length) {
    picture_number = 0;
  }

  current_image_two.src = 'i/' + my_pictures_two[picture_number];

  console.log(my_pictures_two[picture_number]);

  picture_number++;

}
