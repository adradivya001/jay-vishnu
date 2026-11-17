'use client';

import { useState } from 'react';
import { 
  User, 
  Phone, 
  Mail, 
  HelpCircle, 
  MessageSquare, 
  CheckCircle, 
  AlertCircle, 
  Loader2,
  Send
} from 'lucide-react';
import { HOSPITAL_DATA } from '@/data/hospital';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
    consent: true
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: 'idle' | 'success' | 'error';
    message: string;
    enquiryId?: string;
  }>({
    type: 'idle',
    message: ''
  });

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errors.fullName = 'Please enter your full name.';
    }
    const cleanPhone = formData.phone.replace(/[\s-]/g, '');
    if (!cleanPhone || !/^(\+91)?[6-9]\d{9}$/.test(cleanPhone)) {
      errors.phone = 'Please enter a valid 10-digit mobile number.';
    }
    if (!formData.subject.trim()) {
      errors.subject = 'Please specify the subject of your enquiry.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errors.message = 'Please provide message details (at least 10 characters).';
    }
    if (!formData.consent) {
      errors.consent = 'Please confirm consent to be contacted regarding your enquiry.';
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setStatus({ type: 'idle', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus({
          type: 'success',
          message: result.message,
          enquiryId: result.data?.enquiryId
        });
        setFormData({
          fullName: '',
          phone: '',
          email: '',
          subject: '',
          message: '',
          consent: true
        });
      } else {
        setStatus({
          type: 'error',
          message: result.message || 'Failed to send message. Please call the hospital directly.'
        });
        if (result.errors) {
          setFieldErrors(result.errors);
        }
      }
    } catch (err) {
      setStatus({
        type: 'error',
        message: 'Network issue. Please contact reception at +91 97032 15567.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-[#E8E3EC] shadow-xs p-6 sm:p-8">
      {status.type === 'success' ? (
        <div className="text-center py-8 space-y-4">
          <div className="w-14 h-14 bg-[#EDE2F2] text-[#713F83] rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-serif font-bold text-[#713F83]">Enquiry Received</h3>
          {status.enquiryId && (
            <span className="inline-block px-3 py-1 bg-[#F4EDF7] text-[#713F83] font-mono text-xs rounded-full border border-[#EDE2F2]">
              Ref: {status.enquiryId}
            </span>
          )}
          <p className="text-[#687582] text-sm max-w-md mx-auto leading-relaxed">
            {status.message}
          </p>
          <button
            type="button"
            onClick={() => setStatus({ type: 'idle', message: '' })}
            className="mt-4 px-6 py-2.5 rounded-lg bg-[#713F83] text-white text-sm font-semibold hover:bg-[#5C326B] transition-colors"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <h3 className="text-xl font-serif font-bold text-[#713F83]">Send an Enquiry</h3>
            <p className="text-xs text-[#687582] mt-1">
              Have questions regarding doctor schedules, clinic directions, or general hospital queries? Send us a message.
            </p>
          </div>

          {status.type === 'error' && (
            <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <span>{status.message}</span>
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-[#283440] mb-1">
              Your Full Name <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                required
                placeholder="Full Name"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className={`w-full pl-9 pr-3 py-2 text-sm rounded-lg border ${
                  fieldErrors.fullName ? 'border-rose-400' : 'border-[#E8E3EC]'
                } focus:outline-none focus:ring-2 focus:ring-[#713F83]`}
              />
            </div>
            {fieldErrors.fullName && <p className="text-[11px] text-rose-500 mt-1">{fieldErrors.fullName}</p>}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#283440] mb-1">
                Mobile Number <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="tel"
                  required
                  placeholder="e.g. 9703215567"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={`w-full pl-9 pr-3 py-2 text-sm rounded-lg border ${
                    fieldErrors.phone ? 'border-rose-400' : 'border-[#E8E3EC]'
                  } focus:outline-none focus:ring-2 focus:ring-[#713F83]`}
                />
              </div>
              {fieldErrors.phone && <p className="text-[11px] text-rose-500 mt-1">{fieldErrors.phone}</p>}
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#283440] mb-1">
                Email Address <span className="text-slate-400 font-normal">(Optional)</span>
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-[#E8E3EC] focus:outline-none focus:ring-2 focus:ring-[#713F83]"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#283440] mb-1">
              Subject <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <HelpCircle className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                required
                placeholder="e.g. Consultation Timings Enquiry"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className={`w-full pl-9 pr-3 py-2 text-sm rounded-lg border ${
                  fieldErrors.subject ? 'border-rose-400' : 'border-[#E8E3EC]'
                } focus:outline-none focus:ring-2 focus:ring-[#713F83]`}
              />
            </div>
            {fieldErrors.subject && <p className="text-[11px] text-rose-500 mt-1">{fieldErrors.subject}</p>}
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#283440] mb-1">
              Message <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <textarea
                rows={4}
                required
                placeholder="Describe your enquiry here..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className={`w-full p-3 text-sm rounded-lg border ${
                  fieldErrors.message ? 'border-rose-400' : 'border-[#E8E3EC]'
                } focus:outline-none focus:ring-2 focus:ring-[#713F83] resize-none`}
              />
            </div>
            {fieldErrors.message && <p className="text-[11px] text-rose-500 mt-1">{fieldErrors.message}</p>}
          </div>

          <div>
            <label className="flex items-start gap-2 cursor-pointer text-xs text-[#687582]">
              <input
                type="checkbox"
                checked={formData.consent}
                onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                className="mt-0.5 rounded text-[#713F83] focus:ring-[#713F83]"
              />
              <span>
                I agree to the privacy policy and consent to receiving a phone call or SMS from Jay Vishnu Hospital regarding this enquiry.
              </span>
            </label>
            {fieldErrors.consent && <p className="text-[11px] text-rose-500 mt-1">{fieldErrors.consent}</p>}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#713F83] hover:bg-[#5C326B] text-white font-semibold text-sm transition-colors disabled:opacity-60"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Submitting Enquiry...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Send Enquiry</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
