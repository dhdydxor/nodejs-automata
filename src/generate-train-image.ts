import { createCanvas, loadImage } from "canvas";
import fs from "fs";
import CuteString from "cute-string-util";

const canvas = createCanvas(440, 122);
const ctx = canvas.getContext('2d');

let YPosition: number[];
let XPosition: number[];
let Pad: number;
const XPad: number = 30;
const YPad: number = -1210;
const Step: number = 5;
let Height = 120;

YPosition = [ 0, 0, 0, 0 ];
XPosition = [ 0, 97, 194, 291 ];

function strToArrNum(str: string): number[]
{
   let result: number[] = [];

   for (let i = 0; i < str.length; i++)
   {
      result.push(parseInt(str.charAt(i)));
   }

   // console.log(result);

   return result;
}

async function start()
{
   let digit = await loadImage("src/digits/3.jpg");

   ctx.fillStyle = "#FFFFFF";
   ctx.fillRect(0, 0, canvas.width, canvas.height);
   Pad = canvas.height / Step;

   let count: number = 6500;
   let c: number[] = [];

   XPosition.map((k, v) => { c.push(0); });

   let lastPos = XPosition.length - 1;

   while (count <= 10010)
   {
      for (let step = 0; step < Step; step++)
      {
         let str: number[] = strToArrNum(CuteString.lpad(count, XPosition.length, "0"));
         let c: number[] = strToArrNum(CuteString.lpad(count, XPosition.length, "0"));

         for (let i = 0; i <= lastPos; i++)
         {
            if (i != lastPos)
            {
               let sPad = Height / 10;
               let add = (sPad * (str[ i + 1 ]));
               let p = (str[ i ] * Height) + add;

               ctx.drawImage(digit, XPosition[ i ] + XPad, YPad - p);
            }
            else
            {
               let p = (str[ lastPos ] * Height) + (step * Pad);
               ctx.drawImage(digit, XPosition[ lastPos ] + XPad, YPad - p);
            }
         }

         for (let i = 0; i < lastPos; i++)
         {
            if (c[ i + 1 ] >= 5)
            {
               c[ i ] = c[ i ] + 1;
               if (c[ i ] >= 10) c[ i ] = 0;
            }
         }

         if (step >= (Step / 2))
         {
            c[ lastPos ] = c[ lastPos ] + 1;
            if (c[ lastPos ] >= 10) c[ lastPos ] = 0;
         }

         const buffer = canvas.toBuffer("image/jpeg");
         const filename = "src/trainee/02/" + str.join("") + "-" + CuteString.lpad(step, 3, "0");
         fs.writeFileSync(filename + ".png", buffer);
         fs.writeFileSync(filename + ".gt.txt", c.join(""), { encoding: 'utf8' });

         let fd = fs.openSync('src/trainee/02/output.txt', 'a');
         fs.appendFileSync(fd, c.join("") + "\n", 'utf8');
         fs.close(fd);
      }

      ++count;
   }
}

start();