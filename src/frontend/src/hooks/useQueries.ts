import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { Lead } from '../backend';

export function useSubmitContactForm() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: { name: string; phone: string; email: string; message: string }) => {
      if (!actor) throw new Error('Actor not initialized');
      await actor.submitContactForm(data.name, data.phone, data.email, data.message);
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
      return actor.hasSubmittedForm();
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
      return actor.getAllLeads();
    },
    enabled: !!actor && !isFetching,
  });
}
