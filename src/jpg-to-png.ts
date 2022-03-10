import fs from "fs";
import path from "path";

const dir = "C:/Users/dev/Desktop/Workspace/nodejs/nodejs-automata/src/trainee/02/";
const Jimp = require("jimp");


fs.readdir(dir, (err, files) =>
{
   files.forEach(file =>
   {
      let ext = path.extname(file);
      let f = dir + file;

      if (ext == ".png")
      {
         let name = path.basename(file, ext);

         let a = Jimp.read(f);
         Jimp.read(f, function (err, file)
         {
            if (err)
            {
               console.log(err);
            } else
            {
               file.write(dir + name + ".tiff");
            }
         });
      }

      // console.log();

      /* */
   });
});

