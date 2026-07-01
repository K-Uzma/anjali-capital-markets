import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import NotFound from "./NotFound";
import RouteErrorFallback from "./RouteErrorFallback";
import SuspenseLoader from '../common/SuspenseLoader';
// import Homepage from "../components/homepage";

// Lazy-loaded pages — none of these land in the initial bundle
const Homepage = lazy(() => import("../components/homepage"));

const RouteIndex = () => (
  <Routes>
    {/* Public pages with header/footer */}
    <Route path="/" element={<MainLayout />}>
      <Route
        index
        element={
          <Suspense fallback={null}>
            <Homepage />
          </Suspense>
        }
      />
    </Route>

    {/* Fallback */}
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default RouteIndex;
