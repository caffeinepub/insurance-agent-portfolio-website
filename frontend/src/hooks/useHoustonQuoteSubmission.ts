import { useMutation } from '@tanstack/react-query';
import { useActor } from './useActor';
import { BestTimeToCall, CoverageType } from '@/backend';

interface QuoteSubmissionData {
  name: string;
  phone: string;
  email: string;
  zipCode: string;
  coverageType: CoverageType;
  bestTimeToCall: BestTimeToCall;
}

export function useHoustonQuoteSubmission() {
  const { actor } = useActor();

  return useMutation({
    mutationFn: async (data: QuoteSubmissionData) => {
      if (!actor) throw new Error('Actor not available');

      await actor.submitQuote(
        data.name,
        data.phone,
        data.email,
        data.zipCode,
        data.coverageType,
        data.bestTimeToCall
      );
    },
  });
}
