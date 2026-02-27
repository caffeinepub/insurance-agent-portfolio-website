import React, { useState } from 'react';
import { useGetBusinessInfo, useUpdateBusinessInfo } from '../../hooks/useAdminQueries';

interface FieldEditorProps {
  label: string;
  fieldKey: string;
}

function FieldEditor({ label, fieldKey }: FieldEditorProps) {
  const { data: value = '' } = useGetBusinessInfo(fieldKey);
  const { mutate: update, isPending } = useUpdateBusinessInfo();
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState('');

  const handleEdit = () => {
    setDraft(value);
    setEditing(true);
  };

  const handleSave = () => {
    update({ key: fieldKey, value: draft }, {
      onSuccess: () => setEditing(false),
    });
  };

  return (
    <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
      <div className="flex-1">
        <p className="text-sm font-medium text-gray-700">{label}</p>
        {editing ? (
          <input
            type="text"
            value={draft}
            onChange={e => setDraft(e.target.value)}
            className="mt-1 w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            autoFocus
          />
        ) : (
          <p className="text-sm text-gray-500 mt-0.5">{value || '—'}</p>
        )}
      </div>
      <div className="ml-4 flex gap-2">
        {editing ? (
          <>
            <button
              onClick={handleSave}
              disabled={isPending}
              className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
            >
              {isPending ? 'Saving...' : 'Save'}
            </button>
            <button
              onClick={() => setEditing(false)}
              className="px-3 py-1 text-sm bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            onClick={handleEdit}
            className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded hover:bg-gray-200"
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
}

export default function AdminSettingsPage() {
  const fields = [
    { label: 'Business Name', key: 'businessName' },
    { label: 'Agent Name', key: 'agentName' },
    { label: 'Phone', key: 'phone' },
    { label: 'Email', key: 'email' },
    { label: 'Address', key: 'address' },
    { label: 'City', key: 'city' },
    { label: 'State', key: 'state' },
    { label: 'Zip Code', key: 'zipCode' },
    { label: 'License Number', key: 'licenseNumber' },
    { label: 'WhatsApp Number', key: 'whatsappNumber' },
    { label: 'Google Maps URL', key: 'googleMapsUrl' },
    { label: 'Video URL', key: 'videoUrl' },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Business Settings</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-sm text-gray-500 mb-4">
          Update your business information. Changes are saved locally and reflected across the site.
        </p>
        {fields.map(f => (
          <FieldEditor key={f.key} label={f.label} fieldKey={f.key} />
        ))}
      </div>
    </div>
  );
}
