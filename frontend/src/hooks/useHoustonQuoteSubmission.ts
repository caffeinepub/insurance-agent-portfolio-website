import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

export interface HoustonQuoteFormData {
  name: string;
  phone: string;
  email: string;
  city: string;
  coverageType: string;
  message: string;
}

export function useHoustonQuoteSubmission() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: HoustonQuoteFormData) => {
      if (!actor) throw new Error('Actor not available');
      return actor.submitQuote({
        name: data.name,
        phone: data.phone,
        email: data.email,
        city: data.city,
        coverageType: data.coverageType,
        message: data.message,
        timestamp: BigInt(Date.now()),
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['quoteSubmissions'] });
    },
  });
}
