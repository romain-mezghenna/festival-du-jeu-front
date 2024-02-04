import CryptoJS from 'crypto-js';

export function hashPassword(password : string):string {
    const salt = "a1z2e3r4t5y6u7i8o9p0";
    const hashed = CryptoJS.SHA256(password + salt).toString();
    console.log(hashed);
    return hashed;
}