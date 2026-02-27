import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import { CoverageType, BestTimeToCall } from '../backend';

export interface HoustonQuoteFormData {
  name: string;
  phone: string;
  email: string;
  zipCode: string;
  coverageType: CoverageType;
  bestTimeToCall: BestTimeToCall;
}

export { CoverageType, BestTimeToCall };

export function useHoustonQuoteSubmission() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: HoustonQuoteFormData) => {
      if (!actor) throw new Error('Actor not available');
      return actor.submitQuote(
        data.name,
        data.phone,
        data.email,
        data.zipCode,
        data.coverageType,
        data.bestTimeToCall
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['quoteSubmissions'] });
    },
  });
}
