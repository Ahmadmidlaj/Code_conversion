import * as CryptoJS from 'crypto-js';

// Secret key for encryption and decryption
// const secretKey = 'your-secret-key-here';
const secretKey = 'CRbXzc=+PO}{Mtb6~7c8F:|Pr6qP';


// Function to encrypt data using AES
export const encryptData = (data: string) => {
    const ciphertext = CryptoJS.AES.encrypt(data, secretKey).toString();
    console.log('Encrypted ciphertext:', ciphertext); // Add this line
    return ciphertext;
  };

// Function to decrypt data using AES
export const decryptData = (ciphertext: string) => {
    const bytes = CryptoJS.AES.decrypt(ciphertext, secretKey);
    const originalText = bytes.toString(CryptoJS.enc.Utf8);
    console.log('Decrypted plaintext:', originalText); // Add this line
    return originalText;
  };