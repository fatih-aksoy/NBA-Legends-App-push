import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const PlayerCard = ({ name, img, statistics }) => {
  //! artik burada true false islemi uygulayacagiz. yani bir state islemi uygulayacagiz. initial degerimize gore kosulumuzu olustururuz. yani CONDITIONAL RENDERING i yapacagiz.
  const [showImage, setShowImage] = useState(true);

  // !    && || ?:

  return (
    <Col>
      {/* //! tek tek onclick yazilabilir ama tek satirda TOGGLE mantigi kullanilarak bir image bir statistics ler gosterilebilir.  */}
      <Card onClick={() => setShowImage(!showImage)} className="player-card" role="button" >
        {/* //! BURADA KOSULUMUZU UYGULAYACAGIZ. */}
        {showImage ? (
          // ! true da image yi gosterecek. false da startistics leri gosterecek. onClick eventi kurarak bunu yapacagiz.
          <Card.Img
            variant="top"
            src={img}
            height="350px"
            // onClick={()=>setShowImage(false)}
          />
        ) : (
          <ul className="m-auto"
          // onClick={()=>setShowImage(true)}
          >
            {
              // ! statistics leri basarken burada her bir child a unique key vermeyi unutmuyoruz.
              // ! basket ball iconu koyucaz. WINDOWS VE PENCERE tusuna ayni anda basip iconu seciyouz.
              statistics.map((item, i) => (
                <li className="list-unstyled h5 text-styled" key={i}>
                  {" "}
                  🏀
                  {item}
                </li>
              ))
            }
          </ul>
        )}
        <Card.Footer>
          <Card.Title>{name}</Card.Title>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default PlayerCard;
