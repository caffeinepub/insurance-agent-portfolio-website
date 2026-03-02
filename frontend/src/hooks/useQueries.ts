import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { PersistentQuoteSubmission, UserProfile } from '../backend';

// Re-export types for convenience
export type { PersistentQuoteSubmission, UserProfile };

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
  const { actor, isFetching: actorFetching } = useActor();

  return useQuery<PersistentQuoteSubmission[]>({
    queryKey: ['quoteSubmissions'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getQuotes();
    },
    enabled: !!actor && !actorFetching,
  });
}

// Alias for admin pages
export const useGetAllLeads = useGetQuoteSubmissions;
export const useGetAllAppointments = useGetQuoteSubmissions;

// Submit a quote
export function useSubmitQuote() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (params: {
      name: string;
      phone: string;
      email: string;
      city: string;
      coverageType: string;
      message: string;
    }) => {
      if (!actor) throw new Error('Actor not available');
      return actor.submitQuote({
        name: params.name,
        phone: params.phone,
        email: params.email,
        city: params.city,
        coverageType: params.coverageType,
        message: params.message,
        timestamp: BigInt(Date.now()),
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['quoteSubmissions'] });
    },
  });
}
