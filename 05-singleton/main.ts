import { ChocolateBoiler } from './ChocolateBoiler';

async function runBoilerTasks() {
  const task = async () => {
    const boiler = ChocolateBoiler.getInstance();
    boiler.fill();
    boiler.boil();
    boiler.drain();
  };

  await Promise.all([task(), task()]);
}

runBoilerTasks()
  .then(() => {
    console.log('Both boiler tasks completed.');
  })
  .catch((error) => {
    console.error('An error occurred:', error);
  });
