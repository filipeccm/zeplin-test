import { React } from "react";

export default function Button({ label, primary, rounded }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100px",
        height: "60px",
        backgroundColor: primary ? "yellow" : "white",
        borderRadius: rounded ? "8px" : "0px",
        border: "1px black solid",
        textAlign: "center",
        font: "Roboto",
        fontSize: "18px",
      }}
    >
      {label}
    </div>
  );
}
