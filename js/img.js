var img = document.getElementsByClassName("image");
var i;
var links = ["http://www.amania.org/Images/125_007.jpg",
"http://parnikiteplicy.ru/wp-content/uploads/2013/09/torf-ydobrenie.jpg",
"http://luxfon.com/images/201203/luxfon.com_8662.jpg",
"http://www.blokpesok.ru/images/torf2.jpg",
"http://img-news.vl.ru/i/news/add_files/big14645720160417160128_img_0331.JPG",
"http://evro-marka.ru/wp-content/uploads/2015/04/Plodorodnyj-grunt.jpeg",
"http://ic1.static.km.ru/sites/default/files/illustrations/old_images/116902/00.jpg",
"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR9PMn_rmLvaMgnWq_u5WKWwEX8yhmuMS-OaYt6-SPK8HmInKd-QJJmC98",
 "http://transnerud.com/%D0%B3%D1%80%D1%83%D0%BD%D1%82.jpg",
"http://4put.ru/pictures/max/648/1990850.jpg",
"https://staticdelivery.nexusmods.com/mods/1704/images/thumbnails/15796/15796-1520982662-1621190144.png",
"https://www.brentwoodmaterial.com/wp-content/uploads/Double-Ground-Mulch1-1.png",
"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQjcKkk5vhTn88FTCFI_5xYK6PDONvwe_yjyiz4TddbFEXmytqp"];
function general(){

  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
  links = shuffle(links);
  for(i = 0; i < img.length; i++){
    img[i].style.backgroundImage = "url("+links[i]+")";
  }

}

general();

setInterval(general,7500);
