var container = document.querySelector('#container');
// menyimpan gambar
var panorama1 = new
PANOLENS.ImagePanorama('assets/1.jpg');
var panorama2 = new
PANOLENS.ImagePanorama('assets/2.jpg');
var panorama3 = new
PANOLENS.ImagePanorama('assets/3.jpg');
var viewer = new PANOLENS.Viewer({ container: container });
viewer.add(panorama1, panorama2, panorama3);

//menambahkan infospot
var infospot = new PANOLENS.Infospot(350, PANOLENS.DataImage.Info); //infospot gambar pertama
infospot.position.set(6000, -1600, 7000);
panorama1.add(infospot);

//infospot gambar kedua
var infospot2 = new PANOLENS.Infospot(350, PANOLENS.DataImage.Info); //infospot gambar pertama
infospot2.position.set(5000, -1600, -5000);
panorama2.add(infospot2);

//infospot gambar ketiga
var infospot3 = new PANOLENS.Infospot(350, PANOLENS.DataImage.Info); //infospot gambar pertama
infospot3.position.set(0, -2000, -5000);
panorama3.add(infospot3);


//progress bar
var bar = document.querySelector( '#bar' );

function onProgressUpdate (event) {
    var percentage = event.progress.loaded / event.progress.total * 100;
    bar.style.width = percentage + "%";
    if (percentage >= 100){
        bar.classList.add( 'hide' );
        setTimeout(function(){
            bar.style.width = 0;
        }, 1000);
    }
}

function onButtonClick(targetPanorama) {
    bar.classList.remove('hide');
    viewer.setPanorama(targetPanorama);
}

//action ketika infospot di click
infospot.addEventListener('click', function () {
    onButtonClick(panorama2);
});

infospot2.addEventListener('click', function () {
    onButtonClick(panorama3);
});

infospot3.addEventListener('click', function () {
    onButtonClick(panorama1);
});

panorama1.addEventListener('progress', onProgressUpdate);
panorama2.addEventListener('progress', onProgressUpdate);
panorama3.addEventListener('progress', onProgressUpdate);