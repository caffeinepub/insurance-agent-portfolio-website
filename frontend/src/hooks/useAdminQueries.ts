import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { UserProfile, UserRole } from '../backend';

// Legacy types for old insurance site (backend methods no longer exist)
type Lead = {
  fullName: string;
  phoneNumber: string;
  email: string;
  zipCode: string;
  coverageAmount: string;
  agreedToTcpA: boolean;
};

type Appointment = {
  id: bigint;
  date: bigint;
  clientName: string;
  contactInfo: {
    phone: string;
    email: string;
  };
  status: AppointmentStatus;
};

enum AppointmentStatus {
  scheduled = 'scheduled',
  completed = 'completed',
  canceled = 'canceled',
}

// User Profile Queries
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

export function useSaveCallerUserProfile() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (profile: UserProfile) => {
      if (!actor) throw new Error('Actor not initialized');
      await actor.saveCallerUserProfile(profile);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['currentUserProfile'] });
    },
  });
}

// Admin Role Queries
export function useGetCallerUserRole() {
  const { actor, isFetching } = useActor();

  return useQuery<UserRole>({
    queryKey: ['callerUserRole'],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not available');
      return actor.getCallerUserRole();
    },
    enabled: !!actor && !isFetching,
    retry: false,
  });
}

// Leads Queries (Legacy - backend methods no longer exist)
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
    refetchInterval: 30000,
  });
}

// Appointments Queries (Legacy - backend methods no longer exist)
export function useGetAllAppointments() {
  const { actor, isFetching } = useActor();

  return useQuery<Appointment[]>({
    queryKey: ['allAppointments'],
    queryFn: async () => {
      if (!actor) return [];
      // Backend method no longer exists - return empty array
      return [];
    },
    enabled: !!actor && !isFetching,
    refetchInterval: 30000,
  });
}

export function useUpdateAppointmentStatus() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, status }: { id: bigint; status: AppointmentStatus }) => {
      if (!actor) throw new Error('Actor not initialized');
      // Backend method no longer exists
      throw new Error('This functionality has been replaced by the Houston demo');
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['allAppointments'] });
    },
  });
}

// Business Info Queries (Legacy - backend methods no longer exist)
export function useGetBusinessInfo(key: string) {
  const { actor, isFetching } = useActor();

  return useQuery<string>({
    queryKey: ['businessInfo', key],
    queryFn: async () => {
      if (!actor) return '';
      // Backend method no longer exists - return empty string
      return '';
    },
    enabled: !!actor && !isFetching,
  });
}

export function useUpdateBusinessInfo() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ key, value }: { key: string; value: string }) => {
      if (!actor) throw new Error('Actor not initialized');
      // Backend method no longer exists
      throw new Error('This functionality has been replaced by the Houston demo');
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['businessInfo', variables.key] });
      queryClient.invalidateQueries({ queryKey: ['businessInfo'] });
    },
  });
}

// Export types for use in components
export type { Lead, Appointment };
export { AppointmentStatus };
