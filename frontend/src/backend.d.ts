import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface PersistentQuoteSubmission {
    city: string;
    name: string;
    email: string;
    message: string;
    timestamp: bigint;
    phone: string;
    coverageType: string;
}
export interface BusinessInfo {
    whatsapp: string;
    licensedStates: Array<string>;
    email: string;
    address: string;
    phone: string;
}
export interface UserProfile {
    name: string;
    email: string;
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    getBusinessInfo(): Promise<{
        info: BusinessInfo;
        name: string;
    }>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getQuoteByIndex(index: bigint): Promise<PersistentQuoteSubmission>;
    getQuotes(): Promise<Array<PersistentQuoteSubmission>>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    isCallerAdmin(): Promise<boolean>;
    saveCallerUserProfile(_profile: UserProfile): Promise<void>;
    submitQuote(quote: PersistentQuoteSubmission): Promise<void>;
    updateBusinessInfo(name: string, info: BusinessInfo): Promise<void>;
}
