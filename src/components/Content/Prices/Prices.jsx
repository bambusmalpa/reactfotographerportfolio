import React from 'react';
import styled from "styled-components"
const PrciesContainer=styled.section`
  margin-left:auto;
  margin-right:auto;
  width:80vw;
  min-height:85vh;
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  justify-content:space-around;
  align-items:space-between;
  >article{
    font-size:1rem;
    width:30%;
  }
  @media (max-width:1200px){
      article{
        margin-top:5vh;
        width:50%;
      }
    
  }
  @media (max-width:768px){
      article{
        width:100%;
      }
    
  }
`

const Prices = () => {
  return (
    <PrciesContainer>
      <article>
        <h2>Oferta Ślubna</h2>
        <p>Przedział cenowy 1200-3700pln</p>
        <p>Cena obejmuje:</p>
        <li>dojazd</li>
        <li>reportaż od błogosławieństwa do oczepin włącznie</li>
        <li>zdjęcia indywidualne Pary Młodej / grupowe z Parą Młodą</li>
        <li>sesję poślubną / sesję w studio (w innym dniu)</li>
        <li>wydruk wybranych zdjęć w formacie 40x50,  40x60,  50x70,  60x80,  60x90</li>
        <li>foto-książkę, pakiet 350-550 zdjęć </li>
        <li>zdjęcia na indywidualnym nośniku</li>
      </article>

      <article>
      <h2>Chrzciny</h2> 
        <p>Przedział cenowy 350-900pln</p>
        <p>Cena obejmuje:</p>
        <li>dojazd </li>
        <li>reportaż z chrztu oraz przyjęcia</li>
        <li>sesję w studio </li>
        <li>foto-książkę, pakiet 50-200 zdjęć</li>
        <li>zdjęcia na indywidualnym nośniku </li>
​       </article>

      <article>
        <h2>Studniówka</h2>
        <p>Przedział cenowy 30-60pln/parę</p>
        <p>Cena obejmuje:</p>
        <li>dojazd </li>
        <li>reportaż ze studniówki</li>
        <li>sesję indywidualną dla każdej z par</li>
        <li>zdjęcia grupowe / klasowe</li>
        <li>pakiet 300-500 zdjęć</li>
        <li>zdjęcia na indywidualnym nośniku</li>
      </article>

      <article>
      <h2>Komunia Święta</h2>
      <p>Przedział cenowy 100-450pln/osobę</p>
      <p>Cena obejmuje:</p>
      <li>dojazd </li>
      <li>reportaż z Komunii Świętej oraz z przyjęcia </li>
      <li>zdjęcia grupowe / indywidualne</li>
      <li>wydruk wybranych zdjęć w dużym formacie </li>
      <li>zdjęcia na indywidualnym nośniku</li>
      </article>

      <article>
        <h2>18-tka</h2>
        <p>Przedział cenowy 300-550pln</p>
        <p>Cena obejmuje:</p>
        <li>dojazd </li>
        <li>zdjęcia z całej imprezy</li>
        <li>zdjęcia indywidualne / pary / grupowe</li>
        <li>wydruk wybranych zdjęć / foto-książka</li>
        <li>zdjęcia na indywidualnym nośniku</li>
      </article>

      <article>
        <h2>Oferty Indywidualne</h2>
        <h3>Pomysły indywidualne / sesje fotomodel  / workshopy </h3>
        <p>Jesteśmy otwarci na wszystkie pomysły i propozycje, realizujemy naprawdę dziwne projekty i jesteśmy z tego dumni. Ciągle strzelamy wesela, imprezy okolicznościowe czy urodziny. Nadal szukamy nowych inspiracji poprzez projekty z innymi fotografami i studiami fotograficznymi. Najważniejszą cechą naszego teamu jest dyskrecja, co pozwala na zbudowanie komfortu dla obydwu stron.  </p>
        <p>Nie ma dla nas rzeczy niemożliwych, dlatego zachęcamy do kontaktu poprzez nasz formularz, bądź bezpośrednio telefonicznie.  </p>


      </article>
    

    </PrciesContainer>
  );
}
 
export default Prices;