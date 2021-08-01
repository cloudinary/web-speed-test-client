export const en = {
  // Home page
  AppName: 'Website Image Analysis Tool',
  PageTitleA: 'Website Speed Test',
  PageTitleB: 'Image Analysis Tool',
  LearnMoreText: 'Learn More',
  LearnMoreURL: '/about',
  SupportText: 'Contact Cloudinary support',
  SupportURL: 'https://support.cloudinary.com/hc/en-us/requests/new',
  PoweredByText: 'Powered By',
  CloudinaryLogoURL: 'http://cloudinary.com',
  ToolDescription:
    'Optimizing images can significantly improve Web page load time, resulting in improved user retention and satisfaction. This tool provides measurable and actionable information about how to go beyond simple compression: discover how changes to image size, format selection, quality and encoding can dramatically improve page load speed.',
  EditBoxDefaultText: 'Web page URL',
  EditBoxError: 'Invalid URL',
  ButtonText: 'ANALYZE',

  // Page Footer
  FooterTitle: 'Optimize Every Image with Cloudinary',
  FooterText:
    'Cloudinary is the end-to-end solution for all your image-related needs. Check out how simple it is to deliver an optimized image to your users, with on-the-fly transformations included as a component of the URL:',
  FooterOriginalTitle: 'Original',
  FooterCompressedTitle: 'Dynamic Format',
  FooterOriginalImageFormat: 'JPG',
  FooterCompressedImageFormat: 'AVIF',
  FooterOriginalImageDimensions: '374x210',
  FooterCompressedImageDimensions: '374x210',
  FooterOriginalImageWeight: '38 KB',
  FooterCompressedImageWeight: '16 KB (42%)',
  FooterSampleURL:
    'https://res.cloudinary.com/demo/image/upload/h_210,f_auto,q_auto/paint.jpg',
  TryItNowButtonText: 'Try Cloudinary for free',
  TryItNowButtonURL: 'https://cloudinary.com/signup?source=webspeedtest',
  ContactTitle: 'Learn more about Cloudinary media optimization',
  ContactText:
    'Talk to an expert and find out how Cloudinary can help with your digital media needs.',
  ContactLinkText: 'Contact Us',
  LeadForm_EmailDefaultText: 'Email',
  AboutButtonText: 'About',
  AboutButtonURL: '/about',
  PrivacyButtonText: 'Privacy',
  PrivacyButtonURL: 'http://cloudinary.com/privacy',
  TermsButtonText: 'Terms',
  TermsButtonURL: 'http://www.responsivebreakpoints.com/tos',
  LinkedinURL: 'https://www.linkedin.com/company/cloudinary',
  FacebookURL: 'https://www.facebook.com/Cloudinary',
  TwitterURL: 'https://twitter.com/cloudinary',

  /* Results page
   **********************/

  // Page header
  PageTitleResults: 'Image Analysis Results',
  ShareResults: 'Share Results',
  EmptyTest: "We couldn't find any images on this page",
  PageImageScoreTitle: 'Page Image Score',
  ImageWeightComparisonTitle: 'Image Weight Comparison',
  OriginalImages: 'Current Images',
  PotentialCompression: 'Potential after Smart Compression',
  PotentialCompressionMoreInfo:
    'Potential compression is calculated only for the analyzed images',
  AverageGradeA: 'Excellent',
  AverageGradeB: 'Good',
  AverageGradeC: 'Mediocre',
  AverageGradeD: 'Poor',
  AverageGradeE: 'Poor',
  AverageGradeF: 'Very poor',
  TotalImagesNumber: 'Total images analyzed',
  TotalImagesWeight: 'Total image weight',
  TotalImagesWeightOutOf: 'out of a total page weight of',
  PotentialCompressionPercentage: 'Potential weight reduction',
  PotentialReduction: 'Reduction in total image weight',
  PotentialCompressionPercentageMoreInfo:
    'The potential compression percentage is calculated only for the analyzed images',
  TotalImagesNumber_TooMany_A: 'Only the first', // Only first X images were analyzed
  TotalImagesNumber_TooMany_B: 'images were analyzed',
  Tested_BrowserType: 'Tested on browser',
  Tested_Location: 'From location',
  Tested_Viewport: 'Viewport size',
  Tested_DeviceDPI: 'Device DPI',
  IntegratedWith: 'Integrated with',
  URL2PNG_PlaceHolderText: 'Generating Thumbnail',
  CompressionBarsTitle:
    'Image format options with file size and % compared to current',
  LargestResultTitle: 'Largest Contentful Paint (LCP)',
  LargestResultDescription:
    'This measures how long it takes for the initial largest piece of visual media or block of content to be visible.',
  OtherPageAssets: 'Other page assets',

  // Page body (collapse and expanded)
  TimeToLoad: 'Time to load',
  TimeToLoadShouldBe: 'should be >2 sec',
  CollapsedPotentialCompressionTitle: 'Potential Smart Compression',
  ImageWeightReduction: 'Reduction in image weight',
  ExpandButton: 'See Details',
  CollapseButton: 'Close',
  Reduction: 'reduction',
  BestImageText: 'Smallest Image',
  ExpandedTabOriginal: 'Current',
  ExpandedTabSameFormat: 'Optimized Image Format',
  ExpandedTabOtherFormats: 'Other Format Alternatives',
  ImageProperty_aggregated: 'Aggregated',
  ImageProperty_format: 'Format',
  ImageProperty_fit: 'Fit',
  ImageProperty_compression: 'Compression',
  ImageProperty_color_space: 'Color Space',
  ImageProperty_color_depth: 'Color Depth',
  ImageProperty_metadata: 'Metadata',
  ImageProperty_progressive: 'Progressive',
  GradesToAverageConnection: 'Average Score',
  FromCloudinary: 'Delivered Via Cloudinary',

  // Image type display name transforms
  jpg: 'JPEG',
  jxr: 'JPEG-XR',
  gif: 'GIF',
  png: 'PNG',
  bmp: 'BMP',
  ico: 'ICO',
  tiff: 'TIFF',
  webp: 'WEBP',
  svg: 'SVG',
  wdp: 'JPEG-XR',
  hdp: 'JPEG-XR',
  avif: 'AVIF',
  jp2: 'JPEG2000',

  // Loader
  // Loader configuration (time between sentences and loop yes/no) can be found in
  // /src/assets/javascripts/features/webspeedtest/components/Loader/Loader.js
  loaderTitle: 'Analyzing URL',

  // Loader arrived from pagespeed homepage
  loadingPhrase0: 'Analyzing images...',
  loadingPhrase1: 'Evaluating optimization potential...',
  loadingPhrase2: 'Ranking images...',
  loadingPhrase3: 'Optimizing images...',
  loadingPhrase4: 'Creating recommended images...',
  loadingPhrase5: 'Adding descriptions...',
  loadingPhrase6: 'Almost ready...',
  loaderExplanation: `Website Speed Test is an image analysis tool that provides detailed optimization insights on how changes to image size, format, quality and encoding parameters can improve performance.

  Analysis may take several minutes.`,

  // Loader arrived from webpagetest
  loadingWPTPhrase0: 'Analyzing images...',
  loadingWPTPhrase1: 'Evaluating optimization potential...',
  loadingWPTPhrase2: 'Optimizing images...',
  loaderWPTExplanation: `Website Speed Test is an image analysis tool that provides detailed optimization insights on how changes to image size, format, quality and encoding parameters can improve performance.

  Analysis may take 30 seconds.`,

  // Meta data - homepahe
  meta_title: 'Website Speed Test - Image Analysis Tool by Cloudinary',
  meta_social_title: 'Website Speed Test - Image Analysis Tool by Cloudinary',
  meta_social_site_name:
    'Website Speed Test - Image Analysis Tool by Cloudinary',
  meta_social_url: 'https://webspeedtest.cloudinary.com/',
  meta_social_type: 'website',
  meta_social_description:
    'Optimized images improve page load time and user satisfaction. This tool provides measurable and actionable info about how to go beyond simple compression.',
  meta_social_image:
    'https://res.cloudinary.com/webspeedtest/image/upload/socialshare.jpg',

  // Meta data - results page

  // the analyzed url will be added to the end of the following 2 strings
  meta_results_title: 'Website Speed Test by Cloudinary - results for',

  // meta_social_url should be replaced with the results page URL
  meta_results_social_description:
    'Optimized images improve page load time and user satisfaction. This tool provides measurable and actionable info about how to go beyond simple compression. Check out this website analysis results:',

  // Errors handling

  // Timeout waiting for WPT results
  error_timeout_header: 'Its a bit crowded at the moment...',
  error_timeout_subtitle: 'Looks like we are having too many requests',
  error_timeout_content: 'Please try again later',

  // Firefox is not supported
  error_firefox_header: 'Firefox is not supported',
  error_firefox_subtitle:
    'Unfortunaetly Firefox testing is not supported at the moment',
  error_firefox_content: 'We will add this capability in the near future',

  // WPT failure
  error_wpt_failure_header: 'Error Encountered',
  error_wpt_failure_subtitle: 'We are sorry but something went wrong',
  error_wpt_failure_content: 'Please contact us for assistance',

  // Generic error
  error_generic_header: 'Error Encountered',
  error_generic_subtitle: 'We are sorry but something went wrong',
  error_generic_content: 'Please contact us for assistance'
};
