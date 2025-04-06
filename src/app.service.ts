import { Injectable, OnModuleDestroy } from "@nestjs/common";
import { Browser } from "puppeteer";

@Injectable()
export class AppService implements OnModuleDestroy {
  constructor(private readonly browser?: Browser) {}

  async onModuleDestroy() {
    console.log("\n\n");
    console.log("OnModuleDestroy start");
    if (this.browser) {
      await this.browser.close();
    }
    console.log("OnModuleDestroy end");
  }
}
