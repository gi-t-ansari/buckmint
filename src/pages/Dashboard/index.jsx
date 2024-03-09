import { Suspense, lazy } from "react";
import { CircularProgress } from "../../components";

const LazyDashboard = lazy(() => import("./Dashboard"));

export const Dashboard = (props) => (
  <Suspense fallback={<CircularProgress />}>
    <LazyDashboard {...props} />
  </Suspense>
);
