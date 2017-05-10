export type ImageAnalyzeInfo = {
};

export type TotalPageRank = {
};

// This is the model of our module state
export type State = {
  testId: ?string,
  imagesTestResults: ?Array<ImageAnalyzeInfo>,
  totalPageRank: ?TotalPageRank,
  isFetching: boolean,
  hasResults: boolean
};
