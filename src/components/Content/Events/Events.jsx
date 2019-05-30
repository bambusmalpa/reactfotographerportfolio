import React from 'react';
import styled from "styled-components"

const EventsContainer=styled.section`
  margin-left:auto;
  margin-right:auto;
  margin-top:5vh;
  width:80vw;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  align-items:center;
  padding-bottom:5vh;
  >h2{
    padding-left:2%;
    padding-right:2%;
    background-color:#eeeeee;
  }
  >p{
    margin-top:2vh;
  }
  >p>span{
    color:#888888;
  }
  >p.cities{
    display:flex;
    flex-direction:column;
  }

`

const Events = () => {
  return (
    <EventsContainer> 
      <h2>Fotografia Portretowa WARSZTATY</h2>
      <p>Chyba każdy z Was zastanawiał się w jaki sposób zrobić fajny i ciekawy portret. W jaki sposób ustawić własny aparat i w jaki sposób wykorzystać światło w portrecie.</p>
 
      <p>Na te, oraz wiele więcej pytań odpowiemy podczas warsztatów z fotografii portretowej.</p>
  
      <p>W marcu i kwietniu zapraszamy na weekendowe warsztaty z portretu
      w studiach fotograficznych zlokalizowanych w trzech miastach w Polsce</p>
      <h2>Białystok - Łódź - Rzeszów</h2>

      <p>Podczas warsztatów nauczysz się, w jaki sposób wykorzystywać światło, jak najlepiej oraz jak najprościej nim balansować. W jaki sposób używać blendy, modyfikatorów światła, led ringów, najprostszych lamp błyskowych, jak również profesjonalnych lamp studyjnych. Podczas warsztatów użyjemy do stworzenia portretów OCF (Off Camera Flash) - jednej, dwóch, trzech, czterech - tak niedocenianych w fotografii portretowej. Nauczysz się w jaki sposób tworzyć portrety według czterech najpopularniejszych stylów.</p>

      <p>​
      Zaletą tych warsztatów jest to, że nauczysz się wykorzystywać własny aparat (body) oraz własne obiektywy. Mała grupa oraz teoria połączona z praktyką, spowoduje, że sprzęt, który posiadasz będzie dla Ciebie bardziej przyjazny w tego typu fotografii. 
      W cenie kursu wliczone zostały: profesjonalne studia fotograficzne oraz jego wyposażenie, profesjonalne modelki i modele, poczęstunek.</p>

      <p>
      <p>Do kogo kierujemy nasze warsztaty:</p> 
       <p>- do amatorów i profesjonalistów</p> 
       <p>- do ludzi z pasją</p> 
       <p>- do osób, które mają chęć poszerzyć swoją wiedzę</p> 
       <p>- do każdego kto dobrze chce spędzić czas w studiu fotograficznym w  naszym towarzystwie</p>
       </p>
        <p >Termin naszych warsztatów: marzec-kwiecień
        Cena za kurs: 385pln/osobę
        Minimalna liczba uczestników kursu: 5
        Maksymalna liczba uczestników kursu: 10</p>

​         <p className="cities">
        <span>BIAŁYSTOK - Zdobyty :) 10 osób zapisane</span>
        <span>ŁÓDŹ - Zdobyta :) 10 osób zapisane</span>
        <span>RZESZÓW - Zdobyty :) 10 osób zapisane</span></p>



    </EventsContainer>
  );
}
 
export default Events;