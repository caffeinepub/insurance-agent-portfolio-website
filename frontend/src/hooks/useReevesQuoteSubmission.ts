import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import { CoverageType, BestTimeToCall } from '../backend';

export interface ReevesQuoteFormData {
  name: string;
  phone: string;
  email: string;
  zipCode: string;
  coverageType: string;
  message?: string;
}

function mapCoverageType(value: string): CoverageType {
  switch (value.toLowerCase()) {
    case 'auto': return CoverageType.auto;
    case 'home': return CoverageType.home;
    case 'life': return CoverageType.life;
    case 'health': return CoverageType.life; // map health to life as closest
    case 'business': return CoverageType.business;
    default: return CoverageType.auto;
  }
}

export function useReevesQuoteSubmission() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: ReevesQuoteFormData) => {
      if (!actor) throw new Error('Actor not available');
      return actor.submitQuote(
        data.name,
        data.phone,
        data.email,
        data.zipCode || '90001',
        mapCoverageType(data.coverageType),
        BestTimeToCall.anyTime
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['quoteSubmissions'] });
    },
  });
}
