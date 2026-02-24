import { useGetBusinessInfo } from './useAdminQueries';

export function useBusinessInfo() {
  const { data: businessName } = useGetBusinessInfo('businessName');
  const { data: city } = useGetBusinessInfo('city');
  const { data: state } = useGetBusinessInfo('state');
  const { data: licenseNumber } = useGetBusinessInfo('licenseNumber');
  const { data: phone } = useGetBusinessInfo('phone');
  const { data: address } = useGetBusinessInfo('address');

  return {
    businessName: businessName || 'SecureWealth Insurance',
    city: city || '[City]',
    state: state || '[State]',
    licenseNumber: licenseNumber || 'XXXXX',
    phone: phone || '(XXX) XXX-XXXX',
    address: address || '[Office Address]',
  };
}
