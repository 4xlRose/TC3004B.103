import React, { useState } from "react";
import CryptoJS from "crypto-js";
import 'bootstrap/dist/css/bootstrap.min.css';

const pimienta = "mi_pug_se_llama_mushu";

const genSal = (length = 16) => {
  const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  return Array.from({ length }, () => charset[Math.floor(Math.random() * charset.length)]).join("");
};

const CryptoForm = () => {
  const [inputText, setInputText] = useState("");
  const [encryptedText, setEncryptedText] = useState("");
  const [decryptedText, setDecryptedText] = useState("");

  const handleEncrypt = () => {
    const Sal = genSal(); 
    const finalKey = pimienta + Sal; 

    const ciphertext = CryptoJS.AES.encrypt(inputText, finalKey).toString();
    const result = `${Sal}:${ciphertext}`; 

    setEncryptedText(result);
    setDecryptedText("");
  };

  const handleDecrypt = () => {
    try {
      const [Sal, ciphertext] = encryptedText.split(":");
      const finalKey = pimienta + Sal;

      const bytes = CryptoJS.AES.decrypt(ciphertext, finalKey);
      const originalText = bytes.toString(CryptoJS.enc.Utf8);

      if (!originalText) throw new Error("Texto vacío");
      setDecryptedText(originalText);
    } catch (error) {
      setDecryptedText("Error al descifrar.");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Cifrado Hash</h2>

      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Introduce texto a cifrar"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
      </div>

      <div className="mb-3 d-flex justify-content-center gap-2">
        <button className="btn btn-primary" onClick={handleEncrypt}>
          Cifrar
        </button>
        <button className="btn btn-success" onClick={handleDecrypt}>
          Descifrar
        </button>
      </div>

      <div className="mb-3">
        <label className="form-label fw-bold">Texto Cifrado:</label>
        <div className="form-control" style={{ minHeight: "60px" }}>
          {encryptedText}
        </div>
      </div>

      <div className="mb-3">
        <label className="form-label fw-bold">Texto Original:</label>
        <div className="form-control" style={{ minHeight: "60px" }}>
          {decryptedText}
        </div>
      </div>
    </div>
  );
};

export default CryptoForm;
