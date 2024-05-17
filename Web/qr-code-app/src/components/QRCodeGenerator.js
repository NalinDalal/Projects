// src/components/QRCodeGenerator.js
import React, { useState } from "react";
import QRCode from "qrcode.react";

function QRCodeGenerator() {
  const [url, setUrl] = useState("");
  const [qrCodeValue, setQrCodeValue] = useState("");

  const handleChange = (event) => {
    setUrl(event.target.value);
  };

  const generateQRCode = () => {
    setQrCodeValue(url);
  };

  return (
    <div>
      <h2>QR Code Generator</h2>
      <br />
      <input
        type="text"
        placeholder="Enter URL"
        value={url}
        onChange={handleChange}
      />
      <br />
      <br />
      <button onClick={generateQRCode}>Generate QR Code</button>
      {qrCodeValue && <QRCode value={qrCodeValue} />}
    </div>
  );
}

export default QRCodeGenerator;
