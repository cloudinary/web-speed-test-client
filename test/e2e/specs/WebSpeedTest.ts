
import { Reporter } from "wdio-allure-ts";
import { WebSpeedPage } from "../pages/WebSpeedPage";
import { WebSpeedResultPage } from "../pages/WebSpeedResultPage";

const PAGE_URL_TO_ANALYZE: string =
  "https://s.codepen.io/maxro/debug/5b4dde20bc49345de60920ffd1ce8af1";
/**
 *
 */
describe("WebSpeedTest", () => {
  before(() => {
    Reporter.step("Navigate to webSpeedPage");
    WebSpeedPage.navigate();

    Reporter.step("Set url to analyze");
    WebSpeedPage.setPageUrl(PAGE_URL_TO_ANALYZE);
    Reporter.step("Wait for results");
    WebSpeedPage.waitForTestResults();
    Reporter.closeStep();
  });

  it("Check thumbnail", () => {
    Reporter.step("Validate thumbnail");
    WebSpeedResultPage.validateThumbnail();
  });

  it("Validate score", () => {
    Reporter.step("Validate score");
    WebSpeedResultPage.validateScore();
  });

  it("Validate statistic", () => {
    Reporter.step("Validate stats");
    WebSpeedResultPage.validateStats();
  });

  it("Validate totals", () => {
    Reporter.step("Validate totals");
    WebSpeedResultPage.validateTotals();
  });

  it("Validate first image", () => {
    Reporter.step("Validate image");
    WebSpeedResultPage.validateImage();
  });

  afterEach(() => {
    Reporter.closeStep();
  });
});
