import { useState } from "react";

export function HMR_Error() {
  const [count, setCount] = useState(0);

  const isLoading = true;
  const hasData = false;
  const hasFilters = false;

  const message = isLoading ? (
    <div className="flex items-center gap-1">
      we're fetching analytics data.
    </div>
  ) : !hasData ? (
    hasFilters ? (
      <div className="text-center">
        Sorry, there’s no available analytics data with your current filter
        selection. <br /> Please try a different one.
      </div>
    ) : (
      <div className="text-center">
        No available analytics data at the moment. <br /> Please check back
        later.
      </div>
    )
  ) : null;

  return (
    <div>
      <h1>HMR Error</h1>

      <div>and the count is = {count}</div>
      <button onClick={() => setCount((c) => c + 1)}>increment</button>

      <div>{message}</div>
    </div>
  );
}
