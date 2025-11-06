import { CardOcrSDK } from '@identy/identy-ocr';
// import '../node_modules/@identy/identy-face/dist/identy-face-style.css';
const LICENSE =
  'QUVTAgAAAGzINdTc96gA4Y9ZPxP2IBV6Oe8oxFBtsMkubyhcOMw8W1Dckd3AG24OfabMFlKTmk6cVA2Ii5lZPMdM7dvpbGDYP2YdrYX205pwodJX+gOWgb73Fu6A1v1433jbzy7s8eqBbPqFEBb4H+M1HSQtle0EajqHC67MZ53S5WhqLmWTxMKVYgdizqw6TCxUtoeJSmI=';

//RUN ```export LICENSE="'<Base64_License>'";yarn start```; If you dont want to replace the LICENSE here.
let license = LICENSE;
console.log('license', license);
try {
  CardOcrSDK.preInitialize(license).catch((err) => {
    if (err.code == 506) {
      alert(err.message);
    }
  });
} catch (error) {
  console.log(error);
}

import('./bootstrap').catch((err) => console.error(err));
