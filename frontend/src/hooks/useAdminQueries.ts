import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { QuoteSubmission } from '../backend';

export type { QuoteSubmission };

// Get all quote submissions for admin
export function useGetAllLeads() {
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

// Alias for appointments - same data source
export function useGetAllAppointments() {
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

// Business info - stored locally
const defaultBusinessInfo: Record<string, string> = {
  businessName: 'Reeves Insurance Solutions',
  agentName: 'Johnathan Reeves',
  phone: '(213) 555-0123',
  email: 'john@reevesinsurance.com',
  address: 'Los Angeles, CA',
  city: 'Los Angeles',
  state: 'CA',
  zipCode: '90001',
  licenseNumber: 'CA-INS-JR-2024',
  whatsappNumber: '+12135550123',
  licensedStates: 'CA, NY, TX',
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
