import { readFileSync, readFile } from 'fs';

const readFilePromise = (filename: string): Promise<string> =>
  new Promise<string>((resolve, reject) => {
    readFile(filename, (error: any, buffer: Buffer) => {
      if (error) reject(error);
      else resolve(buffer.toString());
    });
  });

(async () => {
  const content = await readFilePromise('../../package.json');
  console.log('read package.json using Promise and async/await...');
  console.log(content);
})();
