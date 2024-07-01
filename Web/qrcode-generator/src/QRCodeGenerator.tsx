import { useState } from "react";
import QRCode from "qrcode.react";

function QRCodeGenerator() {
  const [text, setText] = useState("");
  const [generated, setGenerated] = useState(false);

  //@ts-expect-error
  const handleChange = (e) => {
    setText(e.target.value);
    setGenerated(false);
  };

  const handleGenerate = () => {
    setGenerated(true);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ marginRight: "20px" }}>
        <input type="text" value={text} onChange={handleChange} />
        <br />
        <br />
        <button onClick={() => handleGenerate()}>Generate</button>
        <br />
        <br />
      </div>
      <div>{generated && text && <QRCode value={text} />}</div>
    </div>
  );
}

export default QRCodeGenerator;
