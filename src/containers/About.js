import React from "react";

const About = () => {
  return (
    <>
      <div class="ui segment">
        <h1>About Us</h1>
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
        <p>
          We value our customers and strive to provide excellent customer
          service. If you have any questions or concerns, please don't hesitate
          to <a href="/contact">contact us</a>. We are always happy to help.
        </p>
        <p>
          Thank you for choosing to shop with us. We hope you have a great
          experience and find exactly what you're looking for.
        </p>

        {/* <p>
        We are a small team of passionate individuals who are dedicated to
        bringing you high-quality products at affordable prices. Our goal is to
        make your shopping experience as enjoyable and hassle-free as possible.
        We offer a wide range of products in various categories, including home
        goods, clothing, beauty, and more. Our team handpicks each and every
        product to ensure that it meets our high standards of quality and value.
        We value our customers and strive to provide excellent customer service.
        If you have any questions or concerns, please don't hesitate to contact
        us. We are always happy to help. Thank you for choosing to shop with us.
        We hope you have a great experience and find exactly what you're looking
        for.
      </p> */}
      </div>
    </>
  );
};

export default About;
