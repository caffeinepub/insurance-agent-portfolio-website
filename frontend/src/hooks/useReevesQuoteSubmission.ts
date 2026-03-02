import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

export interface ReevesQuoteFormData {
  name: string;
  phone: string;
  email: string;
  zipCode: string;
  coverageType: string;
  message?: string;
}

export function useReevesQuoteSubmission() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: ReevesQuoteFormData) => {
      if (!actor) throw new Error('Actor not available');
      return actor.submitQuote({
        name: data.name,
        phone: data.phone,
        email: data.email,
        city: data.zipCode || '',
        coverageType: data.coverageType,
        message: data.message || '',
        timestamp: BigInt(Date.now()),
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['quoteSubmissions'] });
    },
  });
}
