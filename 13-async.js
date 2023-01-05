const { readFile, writeFile } = require("fs").promises;
/* const util = require('util')

const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile) */



const start = async () => {
  try {
    const first = await readFile("./content/first.txt", "utf-8");
    const second = await readFile("./content/second.txt", "utf-8");
    await writeFile('./content/result-mind-grenade.txt',`THIS IS AWESOME : ${first} ${second}`)
    console.log(first, second);
  } catch (err) {
    console.log(err);
  }
};
start();


/* const getText = (path) => {
    return new Promise((resolve, reject) => {
      readFile("./content/first.txt", "utf-8", (error, data) => {
        if (error) {
          reject(error);
        } else {
          resolve(data);
        }
      });
    });
  };
   */
  /* getText("./content/first.txt")
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
 */