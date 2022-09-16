import ReactDom from "react-dom";
import "./LoginModal.css";
const LoginModal = ({ open, children, onClose }) => {
  const LOGIN_MODAL_STYLES = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    backgroundColor: "white",
    padding: "50px",
    zIndex: "1000",
    // margin: "0 auto",
    width: "38%",
    padding: "75px 150px",
    minWidth: "500px",
  };
  const OVERLAY_STYLE = {
    position: "fixed",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
    zIndex: "2",
    backgroundColor: "rgba(0,0,0,0.7)",
  };
  const LOGIN_FORM_MODAL = {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
  };
  const FONT_CROSS_STYLE = {
    position: "absolute",
    top: "20px",
    right: "30px",
    color: "#2C062C",
    fontSize: "2rem",
    cursor: "pointer",
  };
  const LOGIN_BUTTTON_MODAL = {
    transition: "all 0.3s ease-in-out",
    boxSizing: "border-box",
    // border: "1px solid black",
    letterSpacing: "1px",
    padding: "8px 25px",
    fontSize: "0.8rem",
    fontWeight: "bold",
  };
  const REGISTER_BUTTON_MODAL = {
    transition: "all 0.3s ease-in-out",
    textDecoration: "none",
    textAlign: "center",
    letterSpacing: "1px",
    padding: "8px 25px",
    fontSize: "0.8rem",
    fontWeight: "bold",
  };
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLE}></div>
      <div style={LOGIN_MODAL_STYLES}>
        {/* <button onClick={onClose}>Close</button> */}
        {children}
        <form action="">
          <div style={LOGIN_FORM_MODAL}>
            <i
              style={FONT_CROSS_STYLE}
              onClick={onClose}
              class="fa-solid fa-xmark"
            ></i>
            <div className="email-password">
              <label
                style={{
                  fontWeight: "bolder",
                  fontSize: "0.8rem",
                  letterSpacing: "1px",
                }}
                for="email"
              >
                Email Address
              </label>
              <input
                className="input-email-password"
                id="email"
                type="email"
                name="email"
              />
            </div>
            <div className="email-password">
              <label
                style={{
                  fontWeight: "bolder",
                  fontSize: "0.8rem",
                  letterSpacing: "1px",
                }}
                for="pass"
              >
                Password
              </label>
              <input
                className="input-email-password"
                type="password"
                id="pass"
                name="password"
                minlength="8"
                required
              />
            </div>
            <div className="login-register-btn">
              <button
                type="submit"
                className="login-hover"
                style={LOGIN_BUTTTON_MODAL}
              >
                LOGIN
              </button>
              <a
                href="/register"
                className="register-hover"
                style={REGISTER_BUTTON_MODAL}
              >
                REGISTER
              </a>
            </div>

            <a className="forgot-password" href="/forgotpassword">
              Forgot your password?
            </a>
          </div>
        </form>
      </div>
    </>,
    document.getElementById("portal")
  );
};
export default LoginModal;
