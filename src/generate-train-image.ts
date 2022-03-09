import { createCanvas, loadImage } from "canvas";
import fs from "fs";
import CuteString from "cute-string-util";

const canvas = createCanvas(530, 180);
const ctx = canvas.getContext('2d');

let YPosition: number[];
let XPosition: number[];
let Pad: number;
const XPad: number = 30;
const YPad: number = -1620;
const Step: number = 10;

YPosition = [ 0, 0, 0, 0 ];
XPosition = [ 0, 132, 264, 396 ];

function strToArrNum(str: string): number[]
{
   let result: number[] = [];

   for (let i = 0; i < str.length; i++)
   {
      result.push(parseInt(str.charAt(i)));
   }

   return result;
}

async function start()
{
   let digit = await loadImage("src/digits/1.jpg");

   ctx.fillStyle = "#FFFFFF";
   ctx.fillRect(0, 0, canvas.width, canvas.height);
   Pad = canvas.height / Step;

   let c = 0;
   let count: number = 0;

   while (count < 20)
   {
      for (let step = 0; step < Step; step++)
      {
         ++c;

         for (let i = XPosition.length - 1; i >= 0; i--)
         {
            let str: number[] = strToArrNum(CuteString.lpad(count, XPosition.length, "0"));

            if (i == XPosition.length - 1)
            {
               let p = (str[ XPosition.length - 1 ] * canvas.height) + (step * Pad);
               ctx.drawImage(digit, XPosition[ i ] + XPad, YPosition[ 0 ] + YPad - p, 76, 5057);
            }
            else
            {
               let p = Step * str[ i + 1 ];
               // ctx.drawImage(digit, XPosition[ i ] + XPad, YPosition[ 0 ] + YPad - p, 76, 5057);
            }

         }

         const buffer = canvas.toBuffer("image/jpeg");
         fs.writeFileSync("src/trainee/01/" + CuteString.lpad(count, 4, "0") + "-" + c + ".png", buffer);
      }

      ++count;
   }

   /* for (let i = XPosition.length - 1; i >= 0; i--)
   {
      let str: number[] = strToArrNum(CuteString.lpad(count, XPosition.length, "0"));

      if (i == XPosition.length - 1)
      {
         let p = (str[ XPosition.length - 1 ] * canvas.height) + (counter * Pad);
         ctx.drawImage(digit, XPosition[ i ] + XPad, YPosition[ 0 ] + YPad - p, 76, 5057);
      }
      else
      {
         let p = Step * str[ i + 1 ];
         // ctx.drawImage(digit, XPosition[ i ] + XPad, YPosition[ 0 ] + YPad - p, 76, 5057);
      }
   } */

   /* while (add < 110)
   {
      XPosition.map((v, k) =>
      {
         ctx.drawImage(digit, XPosition[ k ] + XPad, YPosition[ 0 ] + YPad - (Pad * c[ k ]), 76, 5057);
      });


      const buffer = canvas.toBuffer("image/jpeg");
      fs.writeFileSync("src/trainee/01/" + CuteString.lpad(count, 4, "0") + "-" + c[ XPosition.length - 1 ] + ".png", buffer);

      add++;
      ++c[ XPosition.length - 1 ];
      ++cp[ XPosition.length - 1 ];

      for (let i = XPosition.length - 1; i >= 0; i--)
      {
         if (c[ i ] >= 91)
         {
            c[ i ] = 0;
            ++c[ i - 1 ];
         }

         if (cp[ i ] > 0)
         {
            cp[ i ] = -9;
            ++cp[ i - 1 ];
            ++count;
         }
      }
   } */
}

start();