import { BrowserUtils } from "wdio-allure-ts";

const WEB_SPEED_TEST_URL: string = "https://webspeedtest.cloudinary.com";
const INPUT_URL_CLASS_SELECTOR: string = "//*[@class='inputUrl']";
const URL_INPUT_TEXT_BOX_SELECTOR: string = `${INPUT_URL_CLASS_SELECTOR}//input[@name='testid']`;
const SUBMIT_URL_BUTTON_SELECTOR: string = `${INPUT_URL_CLASS_SELECTOR}//button[@type='submit']`;
const IMAGE_RESULTS_SELECTOR: string =
  "//*[@class='resultSumm']//*[text()='Image Analysis Results']";

/**
 * Web Speed page
 */
export namespace WebSpeedPage {
  /**
   * Navigate to web speed test
   */
  export function navigate(): void {
    BrowserUtils.navigateToUrl(WEB_SPEED_TEST_URL);
  }

  export function setPageUrl(pageUrl: string): void {
    BrowserUtils.sendText(URL_INPUT_TEXT_BOX_SELECTOR, pageUrl);
    BrowserUtils.isVisible(SUBMIT_URL_BUTTON_SELECTOR);
    BrowserUtils.click(SUBMIT_URL_BUTTON_SELECTOR);
  }

  export function waitForTestResults(): void {
    BrowserUtils.isVisible(IMAGE_RESULTS_SELECTOR);
  }
}
