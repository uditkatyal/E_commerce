import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  emptyCart: {
    marginTop: "100px",
    backgroundColor: "#FCF8E3",
    letterSpacing: "1px",
    textAlign: "center",
    width: "15%",
    margin: "0 auto",
    padding: "10px ",
  },
  mainTable: {
    marginTop: "100px",
    letterSpacing: "1px",
    textAlign: "center",
    width: "75%",
    margin: "0 auto",
    padding: "10px ",
  },
  itemHandle: {
    display: "flex",
    gap: "10px",
  },
  itemImage: {
    width: "200px",
    padding: "0 10px",
  },
  itemData: {
    textAlign: "left",
  },
  itemPrice: {
    fontWeight: "bold",

    fontSize: "1.1rem",
  },
  itemQuantityButton: {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    alignItems: "center",
  },
  quantityButton: {
    width: "40px",
    height: "40px",
    border: "1px solid #ccc",
    backgroundColor: "#fff",
    fontSize: "20px",
    fontWeight: "bold",
    color: "#000",
    cursor: "pointer",
    outline: "none",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      backgroundColor: "#ccc",
      color: "#fff",
    },
    quantityCount: {
      border: "1px solid #ccc",
      fontSize: "20px",
      fontWeight: "bold",
      color: "#000",
      cursor: "pointer",
      outline: "none",
    },
    horizontalLine: {
      width: "100%",
      height: "100px",
      backgroundColor: "#ccc",
      margin: "10px 0",
    },
    cartItemsOrder: {
      display: "flex",
      gap: "10px",
    },
    removeIcon: {
      fontSize: "20px",
    },
    "&:hover": {
      backgroundColor: "red",
    },
    payContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
}));
