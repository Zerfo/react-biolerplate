import { memo, Suspense, useMemo } from 'react';

import RouterDesktop from 'containers/Router/ReouterDesktop';
import RouterMobile from 'containers/Router/RouterMobile';
import RouterTablet from 'containers/Router/RouterTablet';

import useBreakpoints, { BreakPoints } from 'hooks/useBreakpoint';

function App() {
  const breakpoints = useBreakpoints();

  const loyoutSwitch = useMemo(() => {
    switch (breakpoints) {
      case BreakPoints.MOBILE:
        return <RouterMobile />;
      case BreakPoints.TABLET:
        return <RouterTablet />;
      case BreakPoints.DESKTOP:
      default:
        return <RouterDesktop />;
    }
  }, [breakpoints]);

  return <Suspense fallback={<div>....Loading</div>}>{loyoutSwitch}</Suspense>;
}

export default memo(App);
