import { Suspense, lazy } from "react";

const LazyDashboard = lazy(() => import("./Dashboard"));

export const DashBoard = (props) => (
  <Suspense fallback={<CircularProgress />}>
    <LazyDashboard {...props} />
  </Suspense>
);
