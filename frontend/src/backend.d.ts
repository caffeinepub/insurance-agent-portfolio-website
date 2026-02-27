import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface BusinessInfo {
    whatsapp: string;
    licensedStates: Array<string>;
    email: string;
    address: string;
    phone: string;
}
export interface QuoteSubmission {
    id: bigint;
    bestTimeToCall: BestTimeToCall;
    name: string;
    email: string;
    zipCode: string;
    timestamp: bigint;
    phone: string;
    coverageType: CoverageType;
}
export interface UserProfile {
    name: string;
    email: string;
}
export enum BestTimeToCall {
    morning = "morning",
    evening = "evening",
    anyTime = "anyTime",
    afternoon = "afternoon"
}
export enum CoverageType {
    auto = "auto",
    home = "home",
    life = "life",
    business = "business"
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
    getQuoteById(id: bigint): Promise<QuoteSubmission>;
    getQuoteSubmissions(): Promise<Array<QuoteSubmission>>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    isCallerAdmin(): Promise<boolean>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
    submitQuote(name: string, phone: string, email: string, zipCode: string, coverageType: CoverageType, bestTimeToCall: BestTimeToCall): Promise<bigint>;
    updateBusinessInfo(name: string, info: BusinessInfo): Promise<void>;
}
