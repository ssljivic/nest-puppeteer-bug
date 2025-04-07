import puppeteer from "puppeteer";

async function start(): Promise<void> {
  process.on("SIGINT", () => {
    console.log("\n\n");
    console.log("Inside SIGINT handler - start");
    browser.close;
    console.log("Inside SIGINT handler - end");
  });

  const browser = await puppeteer.launch();
}

start();
