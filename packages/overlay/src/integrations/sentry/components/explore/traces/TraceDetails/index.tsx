import { Link, Navigate, Route, Routes, useParams } from 'react-router-dom';
import { createTab } from '~/integrations/sentry/utils/tabs';
import Tabs from '../../../../../../components/Tabs';
import { default as dataCache, default as sentryDataCache } from '../../../../data/sentryDataCache';
import EventContexts from '../../../events/EventContexts';
import EventList from '../../../events/EventList';
import TraceDetailHeader from './components/TraceDetailHeader';
import TraceTreeview from './components/TraceTreeview';

export default function TraceDetails() {
  const { traceId } = useParams();

  if (!traceId) {
    return <p className="text-primary-300 p-6">Unknown trace id</p>;
  }

  const trace = dataCache.getTraceById(traceId);

  if (!trace) {
    return (
      <p className="text-primary-300 p-6">
        Trace not found. Check for more{' '}
        <Link to="/traces" className="underline">
          traces
        </Link>
      </p>
    );
  }

  const errorCount = sentryDataCache
    .getEventsByTrace(traceId)
    .filter(
      e =>
        e.type !== 'transaction' &&
        (!e.contexts?.trace?.trace_id || sentryDataCache.isTraceLocal(e.contexts.trace.trace_id)),
    ).length;

  const tabs = [
    createTab('details', 'Details'),
    createTab('context', 'Context'),
    createTab('errors', 'Errors', {
      notificationCount: {
        count: errorCount,
        severe: errorCount > 0,
      },
    }),
  ];

  return (
    <>
      <TraceDetailHeader trace={trace} />
      <Tabs tabs={tabs} nested={true} />

      <Routes>
        <Route path="details" element={<TraceTreeview traceId={traceId} />} />
        <Route path="spans/:spanId" element={<TraceTreeview traceId={traceId} />} />
        <Route path="context" element={<EventContexts event={trace.rootTransaction || trace.transactions[0]} />} />
        <Route path="errors" element={<EventList traceId={traceId} />} />
        {/* Default tab */}
        <Route path="*" element={<Navigate to={`/explore/traces/${traceId}/details`} replace />} />
      </Routes>
    </>
  );
}
