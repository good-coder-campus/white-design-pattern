export const getUserInput = async (message: string) => {
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    readline.question(message, (result: string) => {
      readline.close();
      resolve(result);
    });
  });
};
