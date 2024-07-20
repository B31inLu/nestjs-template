import { Test, TestingModule } from "@nestjs/testing";
import { beforeEach, describe, expect, it } from "vitest";
import { AppService } from "./app.service";

describe("AppController", () => {
    let service: AppService;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            providers: [AppService],
        }).compile();

        service = app.get<AppService>(AppService);
    });

    describe("root", () => {
        it('should return "Hello World!"', () => {
            expect(service.getHello()).toBe("Hello World!");
        });
    });
});
