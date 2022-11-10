import { useCallback } from "react";

type Params = {
  thousand: string,
  billion: string
};

type ReturnType = Array<(string | null)>;

const useNumberToLetter = ({ thousand, billion }: Params = { thousand: "hezar", billion: "milllion"}) => {
   let generateVoiceAddresses: (str: string, suffix: string) => ReturnType = useCallback((str: string, suffix = '') => {
     // Remove zeros from start
     while (str.startsWith("0"))
       str = str.substring(1);

     let startPart: ReturnType = [];
     if(str.length > 8) {
       startPart = generateVoiceAddresses(str.slice(str.length - 6, str.length), billion);
       str = str.slice(0, str.length - 6);
     } else if(str.length > 4) {
       startPart = generateVoiceAddresses(str.slice(str.length - 3, str.length), thousand);
       str = str.slice(0, str.length - 3);
     }

     const voicesArray: ReturnType = Array.from({ length: str.length });
     let add_and = false;

     for (let i = 0; i < voicesArray.length; i++) {
       if (str[voicesArray.length - 1 - i] !== '0') {
         const firstPart = str[voicesArray.length - 1 - i];
         voicesArray[i] = (firstPart ? firstPart + "0".repeat(i) : '') + (add_and ? "_" : "");
         add_and = true;
       }
       if (voicesArray.length >= 2 && voicesArray[1] === "10_") {
         voicesArray[0] = "1" + voicesArray[0];
         voicesArray[1] =  null;
       }
     }


     // If we want suffix or not
     if(suffix) {
       let tempSuffix = `${suffix}${voicesArray.length > 0 ? '-o' : ''}`;
       voicesArray.push(tempSuffix);
     }

     return startPart.concat(voicesArray);
   }, []);

   return generateVoiceAddresses;
 };

 export default useNumberToLetter;
