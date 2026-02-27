import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { QuoteSubmission, UserProfile } from '../backend';
import { CoverageType, BestTimeToCall } from '../backend';

// Re-export types for convenience
export type { QuoteSubmission, UserProfile };
export { CoverageType, BestTimeToCall };

// Get caller user profile
export function useGetCallerUserProfile() {
  const { actor, isFetching: actorFetching } = useActor();

  const query = useQuery<UserProfile | null>({
    queryKey: ['currentUserProfile'],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not available');
      return actor.getCallerUserProfile();
    },
    enabled: !!actor && !actorFetching,
    retry: false,
  });

  return {
    ...query,
    isLoading: actorFetching || query.isLoading,
    isFetched: !!actor && query.isFetched,
  };
}

// Save caller user profile
export function useSaveCallerUserProfile() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (profile: UserProfile) => {
      if (!actor) throw new Error('Actor not available');
      return actor.saveCallerUserProfile(profile);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['currentUserProfile'] });
    },
  });
}

// Get all quote submissions (admin)
export function useGetQuoteSubmissions() {
  const { actor, isFetching } = useActor();

  return useQuery<QuoteSubmission[]>({
    queryKey: ['quoteSubmissions'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getQuoteSubmissions();
    },
    enabled: !!actor && !isFetching,
  });
}

// Submit quote
export function useSubmitQuote() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: {
      name: string;
      phone: string;
      email: string;
      zipCode: string;
      coverageType: CoverageType;
      bestTimeToCall: BestTimeToCall;
    }) => {
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
