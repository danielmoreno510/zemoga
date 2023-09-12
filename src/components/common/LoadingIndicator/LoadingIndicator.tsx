import { ElementType } from "react";

const LoadingIndicator = (Component: ElementType ) => {
  return function WihLoadingComponent({ isLoading, ...props }: {isLoading: boolean, [key: string]: any}) {
    return <>{isLoading ? 'Loading...' : <Component {...props} />}</>;
  }
}
export default LoadingIndicator;