import { useGetBusinessInfo } from './useAdminQueries';

const defaultBusinessInfo = {
  businessName: 'Reeves Insurance Solutions',
  agentName: 'Johnathan Reeves',
  phone: '(832) 555-1234',
  email: 'john@reevesinsurance.com',
  address: 'Los Angeles, CA',
  city: 'Los Angeles',
  state: 'CA',
  zipCode: '90001',
  licenseNumber: 'CA-INS-JR-2024',
  whatsappNumber: '+18325551234',
  licensedStates: 'CA, NY, TX',
  googleMapsUrl: 'https://maps.google.com',
  videoUrl: '',
};

export function useBusinessInfo() {
  const { data: businessName } = useGetBusinessInfo('businessName');
  const { data: agentName } = useGetBusinessInfo('agentName');
  const { data: phone } = useGetBusinessInfo('phone');
  const { data: email } = useGetBusinessInfo('email');
  const { data: address } = useGetBusinessInfo('address');
  const { data: city } = useGetBusinessInfo('city');
  const { data: state } = useGetBusinessInfo('state');
  const { data: zipCode } = useGetBusinessInfo('zipCode');
  const { data: licenseNumber } = useGetBusinessInfo('licenseNumber');
  const { data: whatsappNumber } = useGetBusinessInfo('whatsappNumber');
  const { data: licensedStates } = useGetBusinessInfo('licensedStates');
  const { data: googleMapsUrl } = useGetBusinessInfo('googleMapsUrl');
  const { data: videoUrl } = useGetBusinessInfo('videoUrl');

  return {
    businessName: businessName ?? defaultBusinessInfo.businessName,
    agentName: agentName ?? defaultBusinessInfo.agentName,
    phone: phone ?? defaultBusinessInfo.phone,
    email: email ?? defaultBusinessInfo.email,
    address: address ?? defaultBusinessInfo.address,
    city: city ?? defaultBusinessInfo.city,
    state: state ?? defaultBusinessInfo.state,
    zipCode: zipCode ?? defaultBusinessInfo.zipCode,
    licenseNumber: licenseNumber ?? defaultBusinessInfo.licenseNumber,
    whatsappNumber: whatsappNumber ?? defaultBusinessInfo.whatsappNumber,
    licensedStates: licensedStates ?? defaultBusinessInfo.licensedStates,
    googleMapsUrl: googleMapsUrl ?? defaultBusinessInfo.googleMapsUrl,
    videoUrl: videoUrl ?? defaultBusinessInfo.videoUrl,
  };
}
