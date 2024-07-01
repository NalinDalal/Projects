import "./App.css";
import QRCodeGenerator from "./QRCodeGenerator";

function App() {
  return (
    <>
      <div className="text-center">
        <h1 className="text-3xl font-bold underline">QR Code Generator</h1>
        <br />
        <p> Enter the link to generate QR code: </p>
        <QRCodeGenerator />
      </div>
    </>
  );
}

export default App;
