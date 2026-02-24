import { useState, useEffect } from 'react';
import { useGetBusinessInfo, useUpdateBusinessInfo } from '../../hooks/useAdminQueries';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Loader2, Save, Eye } from 'lucide-react';
import { toast } from 'sonner';

const BUSINESS_INFO_KEYS = {
  businessName: 'businessName',
  city: 'city',
  state: 'state',
  licenseNumber: 'licenseNumber',
  phone: 'phone',
  address: 'address',
};

export default function AdminSettingsPage() {
  const [formData, setFormData] = useState({
    businessName: '',
    city: '',
    state: '',
    licenseNumber: '',
    phone: '',
    address: '',
  });

  const [showPreview, setShowPreview] = useState(false);

  const { data: businessName, isLoading: loadingName } = useGetBusinessInfo(BUSINESS_INFO_KEYS.businessName);
  const { data: city, isLoading: loadingCity } = useGetBusinessInfo(BUSINESS_INFO_KEYS.city);
  const { data: state, isLoading: loadingState } = useGetBusinessInfo(BUSINESS_INFO_KEYS.state);
  const { data: licenseNumber, isLoading: loadingLicense } = useGetBusinessInfo(BUSINESS_INFO_KEYS.licenseNumber);
  const { data: phone, isLoading: loadingPhone } = useGetBusinessInfo(BUSINESS_INFO_KEYS.phone);
  const { data: address, isLoading: loadingAddress } = useGetBusinessInfo(BUSINESS_INFO_KEYS.address);

  const updateBusinessInfo = useUpdateBusinessInfo();

  const isLoading = loadingName || loadingCity || loadingState || loadingLicense || loadingPhone || loadingAddress;

  useEffect(() => {
    if (!isLoading) {
      setFormData({
        businessName: businessName || '',
        city: city || '',
        state: state || '',
        licenseNumber: licenseNumber || '',
        phone: phone || '',
        address: address || '',
      });
    }
  }, [businessName, city, state, licenseNumber, phone, address, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.businessName || !formData.city || !formData.state || !formData.licenseNumber || !formData.phone || !formData.address) {
      toast.error('All fields are required');
      return;
    }

    try {
      // Update all fields
      await Promise.all([
        updateBusinessInfo.mutateAsync({ key: BUSINESS_INFO_KEYS.businessName, value: formData.businessName }),
        updateBusinessInfo.mutateAsync({ key: BUSINESS_INFO_KEYS.city, value: formData.city }),
        updateBusinessInfo.mutateAsync({ key: BUSINESS_INFO_KEYS.state, value: formData.state }),
        updateBusinessInfo.mutateAsync({ key: BUSINESS_INFO_KEYS.licenseNumber, value: formData.licenseNumber }),
        updateBusinessInfo.mutateAsync({ key: BUSINESS_INFO_KEYS.phone, value: formData.phone }),
        updateBusinessInfo.mutateAsync({ key: BUSINESS_INFO_KEYS.address, value: formData.address }),
      ]);

      toast.success('Business information updated successfully');
    } catch (error) {
      toast.error('Failed to update business information');
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="w-8 h-8 text-gold-accent animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-serif font-bold text-white mb-2">Settings</h2>
        <p className="text-white/70 font-sans">Manage your business information displayed on the public site</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="bg-navy-secondary border-gold-accent/30">
          <CardHeader>
            <CardTitle className="text-xl font-serif text-white">Business Information</CardTitle>
            <CardDescription className="text-white/60">
              Update your business details that appear throughout the website
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="businessName" className="text-white font-sans">Business Name *</Label>
                <Input
                  id="businessName"
                  type="text"
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  className="bg-navy-primary/50 border-gold-accent/30 text-white"
                  required
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city" className="text-white font-sans">City *</Label>
                  <Input
                    id="city"
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="bg-navy-primary/50 border-gold-accent/30 text-white"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="state" className="text-white font-sans">State *</Label>
                  <Input
                    id="state"
                    type="text"
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="bg-navy-primary/50 border-gold-accent/30 text-white"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address" className="text-white font-sans">Office Address *</Label>
                <Input
                  id="address"
                  type="text"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="bg-navy-primary/50 border-gold-accent/30 text-white"
                  placeholder="123 Main St, Suite 100"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-white font-sans">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-navy-primary/50 border-gold-accent/30 text-white"
                  placeholder="(555) 123-4567"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="licenseNumber" className="text-white font-sans">License Number *</Label>
                <Input
                  id="licenseNumber"
                  type="text"
                  value={formData.licenseNumber}
                  onChange={(e) => setFormData({ ...formData, licenseNumber: e.target.value })}
                  className="bg-navy-primary/50 border-gold-accent/30 text-white"
                  required
                />
              </div>

              <div className="flex gap-3">
                <Button
                  type="submit"
                  disabled={updateBusinessInfo.isPending}
                  className="flex-1 bg-gold-accent hover:bg-gold-accent/90 text-navy-primary font-semibold"
                >
                  {updateBusinessInfo.isPending ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save className="w-4 h-4 mr-2" />
                      Save Changes
                    </>
                  )}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowPreview(!showPreview)}
                  className="border-gold-accent/30 text-white hover:bg-gold-accent/10"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  {showPreview ? 'Hide' : 'Show'} Preview
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {showPreview && (
          <Card className="bg-navy-secondary border-gold-accent/30">
            <CardHeader>
              <CardTitle className="text-xl font-serif text-white">Preview</CardTitle>
              <CardDescription className="text-white/60">
                How your information will appear on the public site
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Header Preview */}
              <div className="bg-navy-primary/50 p-4 rounded-lg border border-gold-accent/20">
                <p className="text-xs text-white/60 mb-2 font-sans">Header</p>
                <div className="text-xl font-serif font-bold text-gold-accent">
                  {formData.businessName || '[Business Name]'}
                </div>
              </div>

              {/* Footer Preview */}
              <div className="bg-navy-primary/50 p-4 rounded-lg border border-gold-accent/20 space-y-3">
                <p className="text-xs text-white/60 mb-2 font-sans">Footer</p>
                <div>
                  <p className="text-white font-sans font-semibold">{formData.businessName || '[Business Name]'}</p>
                  <p className="text-white/70 text-sm font-sans">{formData.address || '[Address]'}</p>
                  <p className="text-white/70 text-sm font-sans">
                    {formData.city || '[City]'}, {formData.state || '[State]'}
                  </p>
                  <p className="text-white/70 text-sm font-sans">{formData.phone || '[Phone]'}</p>
                </div>
                <div className="pt-2 border-t border-gold-accent/20">
                  <p className="text-white/70 text-sm font-sans">
                    <span className="text-gold-accent font-semibold">License:</span> {formData.licenseNumber || '[License Number]'}
                  </p>
                </div>
              </div>

              {/* Contact Section Preview */}
              <div className="bg-navy-primary/50 p-4 rounded-lg border border-gold-accent/20">
                <p className="text-xs text-white/60 mb-2 font-sans">Contact Section</p>
                <p className="text-white font-sans">
                  Helping Families in <span className="text-gold-accent font-semibold">{formData.city || '[City]'}, {formData.state || '[State]'}</span> Protect Their Income
                </p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
