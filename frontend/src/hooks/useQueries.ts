import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

// Legacy types for old insurance site (backend methods no longer exist)
type Lead = {
  fullName: string;
  phoneNumber: string;
  email: string;
  zipCode: string;
  coverageAmount: string;
  agreedToTcpA: boolean;
};

export function useSubmitLeadForm() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: {
      fullName: string;
      phoneNumber: string;
      email: string;
      zipCode: string;
      coverageAmount: string;
      agreedToTcpA: boolean;
    }) => {
      if (!actor) throw new Error('Actor not initialized');
      // Backend method no longer exists - this is legacy code
      throw new Error('This functionality has been replaced by the Houston demo');
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['hasSubmittedForm'] });
      queryClient.invalidateQueries({ queryKey: ['allLeads'] });
    },
  });
}

export function useHasSubmittedForm() {
  const { actor, isFetching } = useActor();

  return useQuery<boolean>({
    queryKey: ['hasSubmittedForm'],
    queryFn: async () => {
      if (!actor) return false;
      // Backend method no longer exists - return false
      return false;
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetAllLeads() {
  const { actor, isFetching } = useActor();

  return useQuery<Lead[]>({
    queryKey: ['allLeads'],
    queryFn: async () => {
      if (!actor) return [];
      // Backend method no longer exists - return empty array
      return [];
    },
    enabled: !!actor && !isFetching,
  });
}
