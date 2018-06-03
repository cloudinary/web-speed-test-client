import { BrowserUtils } from "wdio-allure-ts";
const TEST_SUM_SELECTOR: string = "//*[@class='test-summ']";
const VALUE_CLASS_SELECTOR: string = "//*[@class='value']";
/**
 *
 */
export namespace WebSpeedResultPage {
  export function validateThumbnail(): void {
    //Thumbnail exist
    const TEST_SCREEN_SELECTOR: string = `${TEST_SUM_SELECTOR}//*[@class='test-screen loaded']`;
    BrowserUtils.isVisible(TEST_SCREEN_SELECTOR);
  }

  export function validateScore(): void {
    const TEST_GRADE_SELECTOR: string = `${TEST_SUM_SELECTOR}//*[@class='test-grade test-meta-box']`;

    //grade type
    const GRADE_TYPE_B_SELECTOR: string = `${TEST_GRADE_SELECTOR}//*[@class='grade grade-B']`;
    BrowserUtils.isExist(GRADE_TYPE_B_SELECTOR);
    BrowserUtils.expectText(GRADE_TYPE_B_SELECTOR, "B");

    //grade text
    const GRADE_TEXT_B_SELECTOR: string = `${TEST_GRADE_SELECTOR}//*[@class='grade-text grade-text-B']`;
    BrowserUtils.isExist(GRADE_TEXT_B_SELECTOR);
    BrowserUtils.expectText(GRADE_TEXT_B_SELECTOR, "Good");
  }

  export function validateStats(): void {
    const STATS_SELECTOR: string = `${TEST_SUM_SELECTOR}//*[@class='test-stats test-meta-box']`;

    //original weight
    BrowserUtils.expectText(
      `${STATS_SELECTOR}//*[@class='original-images-weight']`,
      "234.9 KB"
    );

    //trans weight
    BrowserUtils.expectText(
      `${STATS_SELECTOR}//*[@class='trans-images-weight']`,
      "74.7 KB"
    );
  }

  export function validateTotals(): void {
    const TOTALS_SELECTOR: string = "//*[@class='test-totals']";

    //Image count
    BrowserUtils.expectText(
      `${TOTALS_SELECTOR}//*[@class='image-count test-meta-box']${VALUE_CLASS_SELECTOR}`,
      "10"
    );

    //Total weight
    BrowserUtils.expectText(
      `${TOTALS_SELECTOR}//*[@class='image-weight test-meta-box']${VALUE_CLASS_SELECTOR}`,
      "235KB"
    );

    //Potential Compressed Weight
    BrowserUtils.expectText(
      `${TOTALS_SELECTOR}//*[@class='compression test-meta-box']${VALUE_CLASS_SELECTOR}`,
      "31.8%"
    );
  }

  export function validateImage(): void {
    const ITEM_SELECTOR: string =
      "//*[@class='resultsList']//*[@class='resultsItem'][1]";

    //image data grade
    BrowserUtils.expectText(
      `${ITEM_SELECTOR}//*[@class='image-data-grading grade grade-B']`,
      "B"
    );

    //image name
    BrowserUtils.expectText(
      `${ITEM_SELECTOR}//*[@class='image-data-name']`,
      "Mickey_Mouse.png"
    );

    //compression Bar
    const COMPRESSION_BAR_SELECTOR: string = `${ITEM_SELECTOR}//*[@class='compressionBar' and descendant-or-self::*[@class='note original-note' and text()='Current']]`;
    BrowserUtils.expectText(
      `${COMPRESSION_BAR_SELECTOR}//*[@class='type']`,
      "PNG"
    );

    BrowserUtils.expectText(
      `${COMPRESSION_BAR_SELECTOR}//*[@class='bytes']`,
      "71.7 KB"
    );
  }
}
