import React, { useState } from "react";
import { BackgroundBox, Form, Button, ButtonAnimate, Input, Link, Title,Text,Box1,Box2 } from "./form-styling";
import { useTranslation } from "react-i18next";

function FormComponent() {
  const { t } = useTranslation();
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <>
      {" "}
      <BackgroundBox clicked={click}>
        <ButtonAnimate clicked={click} onClick={handleClick}></ButtonAnimate>

        <Form className="signin" method="post" onSubmit={handleSubmit}>
          <Title>{t('signin')}</Title>
          <Input type="email" name="email" id="emailId" placeholder="Email" />
          <Input
            type="password"
            name="password"
            id="passwordId"
            placeholder="Password"
          />
          <Link href="#">{t('forgot_your_password')}</Link>
          <Button>{t('signin')}</Button>
        </Form>

        <Form className="signup" method="post" onSubmit={handleSubmit}>
          <Title>{t('signup')}</Title>
          <Input
            type="text"
            name="username"
            id="usernameId"
            placeholder="Username"
          />

          <Input type="email" name="email" id="emailId" placeholder="Email" />
          <Input
            type="password"
            name="password"
            id="passwordId"
            placeholder="Password"
          />
          <Link href="#" onClick={handleClick}>
            {t('have_account')}
          </Link>
          <Button>{t('signup')}</Button>
        </Form>

        <Text className="text1" clicked={click}>
          <h1>{t('welcome')}</h1>
          <div>{t('no_account')}</div>
          <span className="attention">{t('click')}</span>
          <span className="attention-icon">⤶</span>
        </Text>

        <Text className="text2" clicked={click}>
          <h1>{t('hello')}</h1>
          <div>
          {t('have_account')}
          </div>
          <span className="attention">{t('click')}</span>
          <span className="attention-icon">⤷</span>
        </Text>

        <Box1 clicked={click} />
        <Box2 clicked={click} />
      </BackgroundBox>
    </>
  );
}

export default FormComponent;