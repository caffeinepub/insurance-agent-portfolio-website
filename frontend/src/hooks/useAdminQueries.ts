import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { PersistentQuoteSubmission } from '../backend';

export type { PersistentQuoteSubmission };

// Get all quote submissions for admin
export function useGetAllLeads() {
  const { actor, isFetching } = useActor();

  return useQuery<PersistentQuoteSubmission[]>({
    queryKey: ['quoteSubmissions'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getQuotes();
    },
    enabled: !!actor && !isFetching,
  });
}

// Alias for appointments - same data source
export function useGetAllAppointments() {
  const { actor, isFetching } = useActor();

  return useQuery<PersistentQuoteSubmission[]>({
    queryKey: ['quoteSubmissions'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getQuotes();
    },
    enabled: !!actor && !isFetching,
  });
}

// Business info - stored locally
const defaultBusinessInfo: Record<string, string> = {
  businessName: 'Jenkins Insurance Agency',
  agentName: 'C. Jenkins',
  phone: '(281) 410-8934',
  email: 'cjenkins@twfg.com',
  address: '33018 Tamina Rd, Greater Houston Metro TX',
  city: 'The Woodlands',
  state: 'TX',
  zipCode: '77354',
  licenseNumber: 'TX-INS-CJ-2024',
  whatsappNumber: '+12814108934',
  licensedStates: 'TX',
  googleMapsUrl: 'https://maps.google.com',
  videoUrl: '',
};

export function useGetBusinessInfo(key: string) {
  return useQuery<string>({
    queryKey: ['businessInfo', key],
    queryFn: async () => {
      const stored = localStorage.getItem(`businessInfo_${key}`);
      return stored ?? defaultBusinessInfo[key] ?? '';
    },
    staleTime: Infinity,
  });
}

export function useUpdateBusinessInfo(options?: { key?: string; value?: string }) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ key, value }: { key: string; value: string }) => {
      localStorage.setItem(`businessInfo_${key}`, value);
    },
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({ queryKey: ['businessInfo', variables.key] });
      queryClient.invalidateQueries({ queryKey: ['businessInfo'] });
    },
  });
}
