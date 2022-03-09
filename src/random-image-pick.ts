import Fs from 'fs';
import path from "path";
import FileUtil from './util/FileUtil';

const destPath: string = "C:/Users/TaegyunKo/Desktop/Workspace/data/metervision/machine-learning";

let count = 0;
function getFilelist(dest: string)
{
   let d = dest;

   Fs.readdir(dest, (err: Error, files: string[]) =>
   {
      for (let i = 0; i < files.length; i++)
      {
         let file: string = d + `/${ files[ i ] }`;

         const destFilename = path.basename(file);
         const dest = `${ destPath }/${ destFilename }`;

         console.log(file);

         if (Math.random() * 10 > 4)
         {
            Fs.copyFile(file, dest, (err) =>
            {
               ++count;
               console.log(count);
            });
         }
      }
   });
}


getFilelist("C:/Users/TaegyunKo/Desktop/Workspace/data/metervision/images/meter");
