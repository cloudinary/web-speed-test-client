export type ImageAnalyzeInfo = {
};
export type ViewportSize = {
  height: number,
  width: number
};

export type ResultSumm = {
  totalPageRank: string,
  //@TODO: write logic
  totalImagesWeight: number,
  totalImagesCount: number,
  // smartCompressPercentage: number,
  location: string,
  dpi: number,
  viewportSize: ViewportSize,
  browserName: string,
  browserVersion: string,
  screenShot: string
};
export type TestResult = {
  imagesTestResults: Array<ImageAnalyzeInfo>,
  resultSumm: ResultSumm,
}

// This is the model of our module state
export type State = {
  testResult: ?TestResult,
  testId: ?string,
  isFetching: boolean,
  hasResults: boolean
};
