const TODAYS_THOUGHT = process.env.TODAYS_THOUGHT;
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log("Microservices rock!");
    console.log(`${TODAYS_THOUGHT} rocks!`);
    await sleep(5000);
  }
}

main();
