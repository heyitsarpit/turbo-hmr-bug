import { useState } from "react";

export function HMR_Works() {
  const [count, setCount] = useState(0);

  let message: React.ReactNode;
  const isLoading = true;
  const hasData = false;
  const hasFilters = false;

  if (isLoading) {
    message = (
      <div className="flex items-center gap-1">
        we're fetching analytics data.
      </div>
    );
  } else if (!hasData) {
    if (hasFilters) {
      message = (
        <div className="text-center">
          Sorry, there's no available analytics data with your current filter
          selection. <br /> Please try a different one.
        </div>
      );
    } else {
      message = (
        <div className="text-center">
          No available analytics data at the moment. <br /> Please check back
          later.
        </div>
      );
    }
  } else {
    message = null;
  }

  return (
    <div>
      <h1>HMR Works</h1>

      <div>and the count is = {count}</div>
      <button onClick={() => setCount((c) => c + 1)}>increment</button>
      <div>{message}</div>
    </div>
  );
}
