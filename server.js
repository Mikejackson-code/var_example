
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log("Microservices rock!");
    console.log("Todays thought ", $TODAYS_THOUGHT);
    await sleep(5000);
  }
}

main();