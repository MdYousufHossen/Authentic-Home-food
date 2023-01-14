export const screeinBreakpoints = {
  mobile: 400,
  tablet: 600,
  landscape: 768,
  laptopS: 992,
  laptopL: 1200,
  largeScreen: 1800,
};

export const device = {
  mobile: `(max-width:${screeinBreakpoints.mobile}px)`,
  tablet: ` (min-width:${screeinBreakpoints.mobile}px) and (max-width:${screeinBreakpoints.tablet}px)`,
  landscape: `(min-width:${screeinBreakpoints.tablet}px) and (max-width:${screeinBreakpoints.landscape}px)`,
  laptopS: `(min-width:${screeinBreakpoints.landscape}px) and (max-width:${screeinBreakpoints.laptopS}px)`,
  laptopL: `(min-width:${screeinBreakpoints.landscape}px) and (max-width:${screeinBreakpoints.laptopL}px)`,
  largeScreen: `(min-width:${screeinBreakpoints.laptopL}px) and (max-width:${screeinBreakpoints.largeScreen}px)`,

  // mobileS: `(max-width: ${screeinBreakpoints.mobileS})`,
  // mobileM: `(min-width: ${screeinBreakpoints.mobileS}) and (max-width: ${screeinBreakpoints.mobileM})`,
  // mobileL: `(max-width: ${screeinBreakpoints.mobileL})`,
  // tablet: `(min-width: ${screeinBreakpoints.tablet}) and (max-width: ${screeinBreakpoints.laptop})`,
  // laptop: `(max-width: ${screeinBreakpoints.laptop})`,
  // laptopL: `(max-width: ${screeinBreakpoints.laptopL})`,
  // desktop: `(max-width: ${screeinBreakpoints.desktop})`,
  // desktopL: `(max-width: ${screeinBreakpoints.desktop})`,
};
