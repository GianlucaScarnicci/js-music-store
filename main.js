const endpoint = 'https://flynn.boolean.careers/exercises/api/array/music';
console.log(endpoint);




axios.get(endpoint).then((response) =>{
    aggiungiAlbum(response);
    console.log(response);
}
).catch((error) =>{
    console.log(error);
}
);


function aggiungiAlbum(response){
   let album=response.data.response;
   for(let i=0;i<album.length;i++){
    let img=document.getElementById('img');
    let imgUrl=album[i].poster;
    img.src=imgUrl;
    img.class='card-img-top';
    let card=document.getElementById('card');
    let titolo=document.getElementById('titolo');
    let autore=document.getElementById('autore');
    let genere=document.getElementById('genere');
    let anno=document.getElementById('anno');
    titolo.innerHTML=album[i].title;
    autore.innerHTML=album[i].author;
    genere.innerHTML=album[i].genre;
    anno.innerHTML=album[i].year;

   }
}