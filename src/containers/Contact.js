import React from "react";
import imgage from "../img/Hero.jpg";

const Contact = () => {
  return (
    <div>
      <div class="ui segment">
        <h1 class="about ui centered header">First header</h1>
        <img class="ui large centered bordered image" src={imgage} />

        <h3>Welcome to our e-commerce shop!</h3>
        <div class="ui left aligned segment">
          <p>
            We are a small team of passionate individuals who are dedicated to
            bringing you high-quality products at affordable prices. Our goal is
            to make your shopping experience as enjoyable and hassle-free as
            possible.
          </p>
          {/* <p>
            We offer a wide range of products in various categories, including
            home goods, clothing, beauty, and more. Our team handpicks each and
            every product to ensure that it meets our high standards of quality
            and value.
          </p> */}
        </div>

        <div classnName="about_me" class="ui segment">
          <p>
            We value our customers and strive to provide excellent customer
            service. If you have any questions or concerns, please don't
            hesitate to
            <div className="ui align center segment">
              <a href="/contact">contact us</a>. We are always happy to help. ui
              segment a
            </div>
          </p>
        </div>
        <div>
          <p>
            Thank you for choosing to shop with us. We hope you have a great
            experience and find exactly what you're looking for.
          </p>
        </div>
        <div class="ui segment">
          <p>
            We are a small team of passionate individuals who are dedicated to
            bringing you high-quality products at affordable prices. Our goal is
            to make your shopping experience as enjoyable and hassle-free as
            possible. We offer a wide range of products in various categories,
            including home goods, clothing, beauty, and more. Our team handpicks
            each and every product to ensure that it meets our high standards of
            quality and value. We value our customers and strive to provide
            excellent customer service. If you have any questions or concerns,
            please don't hesitate to contact us. We are always happy to help.
            Thank you for choosing to shop with us. We hope you have a great
            experience and find exactly what you're looking for.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
