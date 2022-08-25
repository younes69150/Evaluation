let chienrandom = document.getElementById('chienrandom');

  function chien(){
    fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())
  .then(JSON => imgchien.src = JSON.message);}
      
