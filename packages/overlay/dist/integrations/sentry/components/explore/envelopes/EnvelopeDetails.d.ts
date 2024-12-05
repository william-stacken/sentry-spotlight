import { Envelope } from '@sentry/types';
import { RawEventContext } from '../../../../integration';

export default function EnvelopeDetails({ data }: {
    data: {
        envelope: Envelope;
        rawEnvelope: RawEventContext;
    };
}): import("react/jsx-runtime").JSX.Element;
