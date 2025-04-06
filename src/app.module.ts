import { Module, Global } from "@nestjs/common";

import { AppController } from "@/app.controller";
import { AppService } from "@/app.service";
import puppeteer from "puppeteer";

@Global()
@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    {
      provide: AppService,
      useFactory: async () => {
        if (process.env.WITH_PUPPETEER === "true") {
          return new AppService(await puppeteer.launch({ headless: true }));
        } else {
          return new AppService();
        }
      },
    },
  ],
  exports: [],
})
export class AppModule {}
