/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorInfo, memo, PropsWithChildren, PureComponent } from 'react';

interface SomeError extends Error {
  message: string;
}
interface ErrorCatcherState {
  error?: SomeError | null;
}

class ErrorCatcher extends PureComponent<
  PropsWithChildren<Record<string, any>>,
  ErrorCatcherState
> {
  constructor(props: PropsWithChildren<Record<string, any>>) {
    super(props);

    this.state = {
      error: null,
    };
  }

  componentDidCatch(error: SomeError, info: ErrorInfo) {
    console.error({ error, info });
  }

  static getDerivedStateFromError(error: SomeError) {
    return { error };
  }

  render() {
    const { error } = this.state;
    const { children } = this.props;

    if (error) {
      return <div>{JSON.stringify(error)}</div>;
    }

    return children;
  }
}

export default memo(ErrorCatcher);
