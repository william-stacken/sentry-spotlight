import { useState } from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import Tabs from '~/components/Tabs';
import { useSpotlightContext } from '~/lib/useSpotlightContext';
import { useSentrySpans } from '../../data/useSentrySpans';
import { createTab } from '../../utils/tabs';
import HiddenItemsButton from '../HiddenItemsButton';
import Queries from './Queries';
import QuerySummary from './QuerySummary';
import Resources from './Resources';
import WebVitals from './webVitals';
import WebVitalsDetail from './webVitals/WebVitalsDetail';

export default function InsightsTabDetails() {
  const context = useSpotlightContext();
  const { allSpans, localSpans } = useSentrySpans();

  const [showAll, setShowAll] = useState(!context.experiments['sentry:focus-local-events']);

  const hiddenItemCount = allSpans.length - localSpans.length;

  const tabs = [
    createTab('queries', 'Queries'),
    createTab('webvitals', 'Web Vitals'),
    createTab('resources', 'Resources'),
  ];

  return (
    <>
      {!showAll && hiddenItemCount > 0 && (
        <HiddenItemsButton
          itemCount={hiddenItemCount}
          onClick={() => {
            setShowAll(true);
          }}
        />
      )}
      <Tabs tabs={tabs} nested />
      <div className="flex-1">
        <Routes>
          <Route path="queries/:type" element={<QuerySummary showAll={showAll} />} />
          <Route path="resources" element={<Resources showAll={showAll} />} />
          <Route path="webvitals" element={<WebVitals />} />
          <Route path="webvitals/:page" element={<WebVitalsDetail />} />
          {/* Default tab */}
          <Route path="queries" element={<Queries showAll={showAll} />} />
          <Route path="*" element={<Navigate to="/insights/queries" replace />} />
        </Routes>
        <Outlet />
      </div>
    </>
  );
}