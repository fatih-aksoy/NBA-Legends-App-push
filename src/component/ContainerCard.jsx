import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import { data } from "../helpers/data";
import PlayerCard from "./PlayerCard";
// import { useState } from "react";

const ContainerCard = () => {
  // ! FILTRELEME islemi icin inputtan verileri yakalamam lazim. onun icin state ihtiyacim var. boylece asagida state timizi tanimlayalim.
  console.log(data);
  const [search, setSearch] = useState("");
  // !inputtan value yu nasil yakalariz? Form.Control icerisinde onChange eventi tanimlayarak bu ise baslariz. icerisinde callback ile tanimariz yada bunu yapmayip suslu acip fonksiyonun ismin tanimlariz. onChange={handleChange} gibi...

  const handleChange = (e) => {
    // ! inputtan gelen degeri nasil yakalariz. inputa yazi yazildigini nerden bilicem. bana gerceklersen event lazim yani (e) lazim. bu onChange oldugu icin parantez icine (e) yazip bu ecventi yakalayabilirim. sonra bu value yu state me aktaracagim.
    console.log(e.target.value);
    setSearch(e.target.value); //! setter metodu her zaman asenkron olarak  calisir..
  };
  console.log(search);

  //! datayi filtreleyecegim. veriyi yakala item ile. itemin name ine gore. name yakaladik. buyuk harf kontrolu yapicaz. toLowerCase. item name i kucuk harfe donustur. includes benim serach metodumu iceriyor mu? neye gore? inputa giris yapan kisi yanlislikla bos karakter girebilir o yuzden trim() fonk cagrilir. sagsan soldan bosluklari kaldirdiktan sonra da bunlari kucukc harfe donustur. bir daha toLowerCase cagririz.filtreleme isleminden sonra artik datayik ekrna basabiliriz. yani datayi map leyecegiz.
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.trim().toLowerCase())
  );

  //! kontol edelim:
  console.log(filteredData);

  return (
    // ! neden react fragment kullandik. eger herhangi bit stillendirme yapmayacaksak <></> kullanibiliriz.
    <>
      {/*//! input un type pini search diye yazrsak input un ici sag tarafina X isareti gelcektir. classi card-container olan Container component ina kendimiz css de ozellik verecegiz.  */}
      <Form.Control
        type="search"
        placeholder=" Search Player..."
        onChange={handleChange}
      />
      <Container className="p-3 rounded-4 card-container my-3">
        {/* //! responsive olmasi iicin datayi  row icerisinde map leyecegiz.  */}
        <Row xs={1} sm={2} md={3} lg={4} xl={6} className="justify-content-center g-3">
          {/* bu componentte isimiz bittikten sonra bu col satirini kesicez */}
          {/* //! <Col>1 of 2</Col> */}
          {/* {filteredData.map((player, i) => (
            <PlayerCard
              key={i}
              player={player}
              img={player.img}
              name={player.name}
              statistics={player.statistics}
              {...player}
            />
          ))} */}

          {/* //!ASLINDA FILTERED DATA ISLEMI BURADA DA YAPILABILIR. 2.YOL */}
          {/* {data
            .filter((item) =>
              item.name.toLowerCase().includes(search.trim().toLowerCase())
            )
            .map((player, i) => (
              <PlayerCard key={i} {...player} />
            ))} */}

          {filteredData.map((player, i) => (
            <PlayerCard
              // ! ustteki yorum kismindaki verileri kisaltilmis yol olarak tek satirda spread metodu ile acabilriz. boylece uzun uzun yazmamis oluruz. player in icini acarak propslari gondermis oldum. player icindeki 3 veri bize lazim ama eger 25 veri lazim olacaksa {...player} metodu uygun degil. cunku {...player metodu} nekadar veri varsa acar gondeir. 25 veriden 3 tane lazim olacaksa destructuring yapip gondermek daha mantikli. yani ustteki command kismindaki gibi. Biz de suan az veri oldugu icin spread metodu kullanabilirz. bir problme teskil etmez.
              key={i}
              {...player} //! objenin icerisndeki tum veriler lazimsa.....
              //! {name,img,statistics }
            />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ContainerCard;
