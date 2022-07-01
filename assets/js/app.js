let prixReel = 0; //Prix à deviner
let nbEssai = 10;   //Nombre d'essaie maximum
let btnPlay = document.getElementById('play'); //Bouton de lancement/Choix de l'objet
let btnOk = document.getElementById('btnOk'); //Bouton valider la saisie
let btnReset =document.getElementById('reset'); //Bouton reset
let retour = document.getElementById('retour'); //Zone retour, affiche la réponse
let retourTry = document.getElementById('retourTry'); //Zone retour, affiche essaie
const MESSAGE = document.getElementById("message-element");
const BTN_REJOUER = document.getElementById("play-bouton");
const IMAGES= [ // Images
  '<img src="./assets/image/fauteuil.jpg" alt="Un fauteuil">',
  '<img src="./assets/image/machine-a-cafe.jpg" alt="machine à café">',
  '<img src="./assets/image/montre-connectee-withings.jpg" alt="Une montre connectée">',
  '<img src="./assets/image/sac.jpg" alt="Un sac à main">',
  '<img src="./assets/image/t-shit.jpg" alt="Un t-shirt">'
]; 

                          
//------ FONCTION 1 ------//

  function play() { //Function play : Lance le jeu et change d'objet.
    let i = Math.floor(Math.random() * IMAGES.length);//J'attribu un nombre random a toute la longueur de ma const images, et je les stocks dans une variable'i' 
    container.innerHTML = IMAGES[i]; // Je place mes images avec leurs nombre random ma div avec l'id 'container'
    prixReel = Math.floor(Math.random() * 100) ; // Nombre random dans 'prixReel'
    console.log(prixReel);

  }
  btnPlay.addEventListener('click', play, false); //Evenement d'écoute sur le btn

                            
  //------ FONCTION 2 ------//
  function devine() {
      let prix = document.getElementById('valeur').value; //Récupère la valeur saisie
      
      if(/[a-zA-Z]/.test(prix)){
        retour.innerHTML='Les lettres sont interdites';
      }

      else{

      if (nbEssai === 0) { // Si 10 tentatives
          retour.innerHTML = 'Perdu, vous avez épuisé vos 10 tentatives' ;
          document.getElementById('retour').style.backgroundColor = 'red';
          document.getElementById('retourTry').style.backgroundColor = 'red';

        }

        else{
      
      if (prix == prixReel) { // Si prix deviné
            retour.innerHTML = "Felicitations, le prix " + prixReel + " est correct !";
            document.getElementById('retour').style.backgroundColor = '#5dd25d';
            document.getElementById('retourTry').style.backgroundColor = '#5dd25d';
            retourTry.innerHTML = "Nombre d'essaie restant :" + " " + (nbEssai - 1);

          } 
        

        else{ 
          if (prix < prixReel) { // Si le nombre est trop petit
          retour.innerHTML = prix + " est trop petit";
          nbEssai--;
          retourTry.innerHTML = "Nombre d'essaie restant :" + " " + (nbEssai);
          } 
            
        
        else { // Si le nombre est trop grand
          retour.innerHTML= prix + " est trop grand";
          nbEssai--;
          retourTry.innerHTML = "Nombre d'essaie restant :" + " " + (nbEssai );
        }
      }
    }
  }
}
btnOk.addEventListener('click', devine, false); //Evenement d'écoute sur le btn

                            
//------ FONCTION 3 ------//

function reset() { //Function reset : reload.
  document.getElementById('valeur').value = "";
  location.reload();
  
}
btnReset.addEventListener('click', reset, false); //Evenement d'écoute sur le btn

BTN_REJOUER.addEventListener("click", () => {
 
  MESSAGE.style.display = "none";
});

