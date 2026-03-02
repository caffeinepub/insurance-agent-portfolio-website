import { useState, useEffect } from 'react';
import { X, ChevronUp, ChevronDown, Edit2, Trash2 } from 'lucide-react';
import { useToast } from '../../contexts/ToastContext';

interface Review {
  id: string;
  stars: number;
  text: string;
  name: string;
  city: string;
  date: string;
}

const defaultReviews: Review[] = [
  { id: '1', stars: 5, text: "C. Jenkins saved our family over $1,400 a year by switching our home and auto bundle. The whole process took less than 24 hours and we never had to visit any office. I've referred three neighbors already.", name: 'Sarah M.', city: 'The Woodlands', date: '2024-01-15' },
  { id: '2', stars: 5, text: "After the flooding last year I thought dealing with insurance was going to be a nightmare. Jenkins Insurance walked us through every single step and got our claim approved fast. An absolute lifesaver for our family.", name: 'Robert T.', city: 'Humble', date: '2024-02-03' },
  { id: '3', stars: 5, text: "As a small business owner in Spring I needed someone who understood Texas commercial insurance. Jenkins knew exactly what I needed and saved me over $2,100 on my annual premium.", name: 'Maria G.', city: 'Spring', date: '2024-02-20' },
];

const cities = ['The Woodlands', 'Spring', 'Humble', 'Magnolia', 'Tomball', 'Conroe'];

function StarSelector({ value, onChange }: { value: number; onChange: (v: number) => void }) {
  const [hover, setHover] = useState(0);
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map(s => (
        <button
          key={s}
          type="button"
          onClick={() => onChange(s)}
          onMouseEnter={() => setHover(s)}
          onMouseLeave={() => setHover(0)}
          className="text-2xl transition-colors"
          style={{ color: s <= (hover || value) ? '#F4B942' : '#d1d5db' }}
        >
          ★
        </button>
      ))}
    </div>
  );
}

const emptyForm = { stars: 5, text: '', name: '', city: 'The Woodlands', date: new Date().toISOString().split('T')[0] };

export default function AdminJenkinsReviewsPage() {
  const { showToast } = useToast();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('jenkinsReviews');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setReviews(parsed);
          return;
        }
      }
    } catch {}
    setReviews(defaultReviews);
    localStorage.setItem('jenkinsReviews', JSON.stringify(defaultReviews));
  }, []);

  const saveReviews = (updated: Review[]) => {
    setReviews(updated);
    localStorage.setItem('jenkinsReviews', JSON.stringify(updated));
  };

  const avgRating = reviews.length > 0
    ? (reviews.reduce((s, r) => s + r.stars, 0) / reviews.length).toFixed(1)
    : '5.0';

  const openAdd = () => {
    setEditingId(null);
    setForm(emptyForm);
    setShowForm(true);
  };

  const openEdit = (review: Review) => {
    setEditingId(review.id);
    setForm({ stars: review.stars, text: review.text, name: review.name, city: review.city, date: review.date });
    setShowForm(true);
  };

  const handleSave = async () => {
    if (!form.text.trim() || !form.name.trim()) return;
    setSaving(true);
    await new Promise(r => setTimeout(r, 400));

    if (editingId) {
      saveReviews(reviews.map(r => r.id === editingId ? { ...r, ...form } : r));
    } else {
      const newReview: Review = { id: Date.now().toString(), ...form };
      saveReviews([...reviews, newReview]);
    }

    setShowForm(false);
    setSaving(false);
    showToast('✅ Review saved successfully!', 'success');
  };

  const deleteReview = (id: string) => {
    if (!window.confirm('Delete this review?')) return;
    saveReviews(reviews.filter(r => r.id !== id));
    showToast('Review deleted.', 'info');
  };

  const moveUp = (i: number) => {
    if (i === 0) return;
    const updated = [...reviews];
    [updated[i - 1], updated[i]] = [updated[i], updated[i - 1]];
    saveReviews(updated);
  };

  const moveDown = (i: number) => {
    if (i === reviews.length - 1) return;
    const updated = [...reviews];
    [updated[i], updated[i + 1]] = [updated[i + 1], updated[i]];
    saveReviews(updated);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-montserrat font-bold text-[28px]" style={{ color: '#1B3A6B' }}>
            Manage Your Reviews
          </h1>
          <p className="font-opensans text-[14px] text-gray-500 mt-1">
            Overall Rating: <span className="font-bold" style={{ color: '#F4B942' }}>★ {avgRating}</span> ({reviews.length} reviews)
          </p>
        </div>
        <button
          onClick={openAdd}
          className="px-5 py-2.5 rounded-xl text-[14px] font-semibold transition-all hover:opacity-80"
          style={{ background: '#F4B942', color: '#1B3A6B' }}
        >
          + Add New Review
        </button>
      </div>

      {/* Overall Rating Card */}
      <div className="bg-white rounded-2xl shadow-sm p-6 mb-6 flex items-center gap-6">
        <div className="text-center">
          <div className="font-montserrat font-extrabold text-[48px]" style={{ color: '#1B3A6B' }}>{avgRating}</div>
          <div className="text-[24px]" style={{ color: '#F4B942' }}>{'★'.repeat(Math.round(parseFloat(avgRating)))}</div>
          <div className="font-opensans text-[13px] text-gray-400">{reviews.length} reviews</div>
        </div>
        <div className="flex-1">
          {[5, 4, 3, 2, 1].map(star => {
            const count = reviews.filter(r => r.stars === star).length;
            const pct = reviews.length > 0 ? (count / reviews.length) * 100 : 0;
            return (
              <div key={star} className="flex items-center gap-2 mb-1">
                <span className="font-opensans text-[12px] text-gray-500 w-4">{star}</span>
                <span style={{ color: '#F4B942' }}>★</span>
                <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full rounded-full transition-all" style={{ width: `${pct}%`, background: '#F4B942' }} />
                </div>
                <span className="font-opensans text-[12px] text-gray-400 w-6">{count}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-4">
        {reviews.map((review, i) => (
          <div key={review.id} className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-[18px]" style={{ color: '#F4B942' }}>
                    {'★'.repeat(review.stars)}{'☆'.repeat(5 - review.stars)}
                  </div>
                  <span className="font-montserrat font-bold text-[15px]" style={{ color: '#1B3A6B' }}>
                    {review.name}
                  </span>
                  <span className="font-opensans text-[13px]" style={{ color: '#F4B942' }}>
                    {review.city}
                  </span>
                  <span className="font-opensans text-[12px] text-gray-400">{review.date}</span>
                </div>
                <p className="font-opensans text-[15px] text-gray-600 leading-relaxed">"{review.text}"</p>
              </div>
              <div className="flex flex-col gap-1 flex-shrink-0">
                <button
                  onClick={() => moveUp(i)}
                  disabled={i === 0}
                  className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-30"
                  title="Move Up"
                >
                  <ChevronUp className="w-4 h-4 text-gray-500" />
                </button>
                <button
                  onClick={() => moveDown(i)}
                  disabled={i === reviews.length - 1}
                  className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-30"
                  title="Move Down"
                >
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                </button>
                <button
                  onClick={() => openEdit(review)}
                  className="p-1.5 rounded-lg hover:bg-blue-50 transition-colors"
                  title="Edit"
                >
                  <Edit2 className="w-4 h-4" style={{ color: '#1B3A6B' }} />
                </button>
                <button
                  onClick={() => deleteReview(review.id)}
                  className="p-1.5 rounded-lg hover:bg-red-50 transition-colors"
                  title="Delete"
                >
                  <Trash2 className="w-4 h-4 text-red-500" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add/Edit Modal */}
      {showForm && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <h3 className="font-montserrat font-bold text-[18px]" style={{ color: '#1B3A6B' }}>
                {editingId ? 'Edit Review' : 'Add New Review'}
              </h3>
              <button onClick={() => setShowForm(false)} className="text-gray-400 hover:text-gray-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="px-6 py-5 space-y-4">
              <div>
                <label className="font-opensans text-[13px] font-semibold text-gray-600 block mb-2">Star Rating</label>
                <StarSelector value={form.stars} onChange={v => setForm({ ...form, stars: v })} />
              </div>
              <div>
                <label className="font-opensans text-[13px] font-semibold text-gray-600 block mb-1">Reviewer Name *</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  placeholder="e.g. Sarah M."
                  className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-xl font-opensans text-[14px] focus:outline-none"
                  onFocus={e => (e.target.style.borderColor = '#F4B942')}
                  onBlur={e => (e.target.style.borderColor = '#e5e7eb')}
                />
              </div>
              <div>
                <label className="font-opensans text-[13px] font-semibold text-gray-600 block mb-1">City</label>
                <select
                  value={form.city}
                  onChange={e => setForm({ ...form, city: e.target.value })}
                  className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-xl font-opensans text-[14px] focus:outline-none bg-white"
                >
                  {cities.map(c => <option key={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className="font-opensans text-[13px] font-semibold text-gray-600 block mb-1">Review Text *</label>
                <textarea
                  value={form.text}
                  onChange={e => setForm({ ...form, text: e.target.value })}
                  rows={4}
                  placeholder="Write the review text here..."
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl font-opensans text-[14px] focus:outline-none resize-none"
                  onFocus={e => (e.target.style.borderColor = '#F4B942')}
                  onBlur={e => (e.target.style.borderColor = '#e5e7eb')}
                />
              </div>
              <div>
                <label className="font-opensans text-[13px] font-semibold text-gray-600 block mb-1">Date</label>
                <input
                  type="date"
                  value={form.date}
                  onChange={e => setForm({ ...form, date: e.target.value })}
                  className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-xl font-opensans text-[14px] focus:outline-none"
                  onFocus={e => (e.target.style.borderColor = '#F4B942')}
                  onBlur={e => (e.target.style.borderColor = '#e5e7eb')}
                />
              </div>
              <button
                onClick={handleSave}
                disabled={saving || !form.text.trim() || !form.name.trim()}
                className="w-full py-3 rounded-xl text-[15px] font-semibold transition-all hover:opacity-80 disabled:opacity-60 flex items-center justify-center gap-2"
                style={{ background: '#F4B942', color: '#1B3A6B' }}
              >
                {saving ? (
                  <>
                    <div className="w-4 h-4 border-2 border-jenkins-navy/30 border-t-jenkins-navy rounded-full animate-spin" />
                    Saving...
                  </>
                ) : (
                  'Save Review'
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
