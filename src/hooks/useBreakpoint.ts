import { useEffect, useState } from "react";

export enum BreakPoints {
  DESKTOP = 'desktop',
  TABLET = 'tablet',
  MOBILE = 'mobile',
}

const defaultConfiguration = {
	[BreakPoints.DESKTOP]: [992, 7680],
	[BreakPoints.TABLET]: [601, 991],
	[BreakPoints.MOBILE]: [0, 600],
};

function useBreakpoints(config = defaultConfiguration) {
  const [breakpoint, setBreakpoint] = useState<BreakPoints>(BreakPoints.DESKTOP);
  const [windowSize, setWindowSize] = useState<number | null>(null);

  const handleResize = () => setWindowSize(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();

    if (!windowSize) {
      setBreakpoint(BreakPoints.DESKTOP);
    } else {
      if (config.mobile[0] < windowSize && windowSize <= config.mobile[1]) {
        setBreakpoint(BreakPoints.MOBILE);
      }

      if (config.tablet[0] < windowSize && windowSize <= config.tablet[1]) {
        setBreakpoint(BreakPoints.TABLET);
      }

      if (config.desktop[0] < windowSize && windowSize <= config.desktop[1]) {
        setBreakpoint(BreakPoints.DESKTOP);
      }
    }

    return () => window.removeEventListener('resize', handleResize);
  }, [windowSize]);

  return breakpoint;
}

export default useBreakpoints;
