import styled from "styled-components";
const Footer = () => {
  return (
    <FooterMain className="footer">
      <FooterHead>
        <h1>SIGN UP OUR NEWSLETTER</h1>
        <p>Recieve our latest updates</p>
      </FooterHead>
      <FooterInput>
        <input type="text" placeholder="Enter your email address" />
      </FooterInput>

      <FooterCopyright>
        <p>
          © 2022 Urban Fashion Store Demo All Rights Reserved. Powered by ABC.
        </p>
        <p>Abc Themes by urbans.com</p>
      </FooterCopyright>
    </FooterMain>
  );
};
export default Footer;

const FooterMain = styled.div`
  padding: 50px 0;
  background-color: #b4b7c1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;
const FooterHead = styled.div`
  h1 {
    font-size: 1.4rem;
    letter-spacing: 3px;
  }
  p {
    font-size: 0.8rem;
    text-align: center;
    letter-spacing: 2px;
  }
`;
const FooterInput = styled.div`
  input {
    color: white;
    border: none;
    outline: 1px solid white;
    background-color: transparent;
    padding: 10px;
    ::placeholder {
      color: white;
    }
  }
`;
const FooterCopyright = styled.div`
  p {
    font-size: 0.8rem;
    margin-bottom: -1px;
  }
  margin-top: 50px;
  text-align: center;
`;
