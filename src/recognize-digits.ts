import Tesseract from 'tesseract.js';

const { createWorker } = Tesseract;

const worker = createWorker({
   langPath: "../traindata"
});