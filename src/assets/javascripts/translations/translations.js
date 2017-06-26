export const translations = {
  en: {
    // Home page
    'AppName': 'Website Speed Test',
    'PageTitleA': 'Website Speed Test',
    'PageTitleB': 'Image Analysis Tool',
    'LearnMoreText': 'Learn More',
    'LearnMoreURL': 'https://webspeedtest.cloudinary.com/about',
    'PoweredByText': 'Powered By',
    'CloudinaryLogoURL': 'http://cloudinary.com?utm_source=webspeedtest',
    'ToolDescription': 'Optimizing images can significantly improve Web page load time, resulting in improved user retention and satisfaction. This tool provides measurable and actionable information about how to go beyond simple compression: discover how changes to image size, format selection, quality and encoding can dramatically improve page load speed.',
    'EditBoxDefaultText': 'Web page URL',
    'EditBoxError': 'Invalid URL',
    'ButtonText': 'ANALYZE',

    // Page Footer
    'FooterTitle': 'Optimize Every Image with Cloudinary',
    'FooterText': 'Cloudinary is the end-to-end solution for all your image-related needs. Check out how simple it is to deliver an optimized image to your users, with on-the-fly transformations included as a component of the URL:',
    'FooterOriginalTitle': 'Original',
    'FooterCompressedTitle': 'Dynamic Format',
    'FooterOriginalImageFormat': 'JPG',
    'FooterCompressedImageFormat': 'WEBP',
    'FooterOriginalImageDimensions': '374x210',
    'FooterCompressedImageDimensions': '374x210',
    'FooterOriginalImageWeight': '38 KB',
    'FooterCompressedImageWeight': '16 KB (42%)',
    'FooterSampleURL': 'https://res.cloudinary.com/demo/image/upload/h_210,f_auto,q_auto/paint.jpg',
    'TryItNowButtonText': 'Try Cloudinary for free',
    'TryItNowButtonURL': 'https://cloudinary.com/signup?source=webspeedtest',
    'LeadForm_Title': 'Learn more about Image Optimization',
    'LeadForm_EmailDefaultText': 'Email',
    'LeadForm_FirstDefaultText': 'First name',
    'LeadForm_LastDefaultText': 'Last name',
    'LeadForm_Button': 'Send',
    'AboutButtonText': 'About',
    'AboutButtonURL': 'https://webspeedtest.cloudinary.com/about',
    'PrivacyButtonText': 'Privacy',
    'PrivacyButtonURL': 'http://cloudinary.com/privacy',
    'TermsButtonText': 'Terms',
    'TermsButtonURL': 'http://www.responsivebreakpoints.com/tos',
    'LinkedinURL': 'https://www.linkedin.com/company/cloudinary',
    'FacebookURL': 'https://www.facebook.com/Cloudinary',
    'GooglePlusURL': 'https://plus.google.com/+Cloudinary',
    'TwitterURL': 'https://twitter.com/cloudinary',

    /* Results page
    **********************/

    // Page header
    'PageTitleResults': 'Image Analysis Results',
    'ShareResults': 'Share Results',
    'EmptyTest': 'We couldn\'t find any images on this page',
    'PageImageScoreTitle': 'Page Image Score',
    'ImageWeightComparisonTitle': 'Image Weight Comparison',
    'OriginalImages': 'Current Images',
    'PotentialCompression': 'Potential after Smart Compression',
    'PotentialCompressionMoreInfo': 'Potential compression is calculated only for the analyzed images',
    'AverageGradeA': 'Excellent',
    'AverageGradeB': 'Good',
    'AverageGradeC': 'Mediocre',
    'AverageGradeD': 'Poor',
    'AverageGradeE': 'Poor',
    'AverageGradeF': 'Very poor',
    'TotalImagesNumber': 'Total Images Analyzed',
    'TotalImagesWeight': 'Total Image Weight',
    'PotentialCompressionPercentage': 'Potential Compressed Weight',
    'PotentialCompressionPercentageMoreInfo': 'The potential compression percentage is calculated only for the analyzed images',
    'TotalImagesNumber_TooMany_A': 'Only the first', // Only first X images were analyzed
    'TotalImagesNumber_TooMany_B': 'images were analyzed',
    'Tested_BrowserType': 'Tested on browser',
    'Tested_Location': 'From location',
    'Tested_Viewport': 'Viewport size',
    'Tested_DeviceDPI': 'Device DPI',
    'IntegratedWith': 'Integrated with',
    'URL2PNG_PlaceHolderText': 'Generating Thumbnail',

    // Page body (collapse and expanded)
    'CollapsedPotentialCompressionTitle': 'Potential Smart Compression',
    'ExpandButton': 'See More',
    'CollapseButton': 'Close',
    'BestImageText': 'Smallest Image',
    'ExpandedTabOriginal': 'Current',
    'ExpandedTabSameFormat': 'Optimized Image',
    'ExpandedTabOtherFormats': 'Format Alternatives',
    'ImageProperty_aggregated': 'Aggregated',
    'ImageProperty_format': 'Format',
    'ImageProperty_fit': 'Fit',
    'ImageProperty_compression': 'Compression',
    'ImageProperty_color_space': 'Color Space',
    'ImageProperty_color_depth': 'Color Depth',
    'ImageProperty_metadata': 'Metadata',
    'ImageProperty_progressive': 'Progressive',
    'GradesToAverageConnection': 'Average',

    // Image type display name transforms
    'jpg': 'JPEG',
    'jxr': 'JPEG-XR',
    'gif': 'GIF',
    'png': 'PNG',
    'bmp': 'BMP',
    'ico': 'ICO',
    'tiff': 'TIFF',
    'webp': 'WEBP',
    'svg': 'SVG',
    'wdp': 'JPEG-XR',
    'hdp': 'JPEG-XR',

    // Loader phrases
    // Loader configuration (time between sentences and loop yes/no) can be found in
    // web-speed-test-client/src/assets/javascripts/features/webspeedtest/components/Loader/Loader.js
    // wdtLoading.start
    'loadingPhrase0': 'Analyzing images...',
    'loadingPhrase1': 'Ranking optimization potential...',
    'loadingPhrase2': 'Optimizing images...',
    'loadingPhrase3': 'Creating recommended images...',
    'loadingPhrase4': 'Adding explanations...',
    'loadingPhrase5': 'Almost done...',
    'loaderExplanation': 'Analysis may take several minutes',

    // Meta data - homepahe
    'meta_title': 'Website Speed Test - Image Analysis Tool by Cloudinary',
    'meta_social_title': 'Website Speed Test - Image Analysis Tool by Cloudinary',
    'meta_social_site_name': 'Website Speed Test - Image Analysis Tool by Cloudinary',
    'meta_social_url': 'https://webspeedtest.cloudinary.com/',
    'meta_social_type': 'website',
    'meta_social_description': 'Optimized images improve page load time and user satisfaction. This tool provides measurable and actionable info about how to go beyond simple compression.',
    'meta_social_image': 'https://res.cloudinary.com/webspeedtest/image/upload/socialshare.jpg',

    // Meta data - results page

    // the analyzed url will be added to the end of the following 2 strings
    'meta_results_title': 'Website Speed Test by Cloudinary - results for',

    // meta_social_url should be replaced with the results page URL

    'meta_results_social_description': 'Optimized images improve page load time and user satisfaction. This tool provides measurable and actionable info about how to go beyond simple compression. Check out this website analysis results:'

  }
}
