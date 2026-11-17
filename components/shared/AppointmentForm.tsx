'use client';

import { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  Stethoscope, 
  CheckCircle, 
  AlertCircle, 
  Loader2 
} from 'lucide-react';
import { DEPARTMENTS_DATA, DOCTORS_DATA, HOSPITAL_DATA } from '@/data/hospital';

interface AppointmentFormProps {
  initialDepartment?: string;
  initialDoctor?: string;
}

export default function AppointmentForm({ 
  initialDepartment = '', 
  initialDoctor = '' 
}: AppointmentFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    speciality: initialDepartment || (DEPARTMENTS_DATA[0]?.name || 'Neurology'),
    doctor: initialDoctor || '',
    preferredDate: '',
    preferredTime: 'Morning Hours',
    message: '',
    consent: true
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: 'idle' | 'success' | 'error';
    message: string;
    refId?: string;
  }>({
    type: 'idle',
    message: ''
  });

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errors.fullName = 'Please enter patient name.';
    }
    const phoneClean = formData.phone.replace(/[\s-]/g, '');
    if (!phoneClean || !/^(\+91)?[6-9]\d{9}$/.test(phoneClean)) {
      errors.phone = 'Please enter a valid 10-digit mobile number.';
    }
    if (!formData.speciality) {
      errors.speciality = 'Please select a preferred speciality.';
    }
    if (!formData.preferredDate) {
      errors.preferredDate = 'Please select your preferred consultation date.';
    }
    if (!formData.consent) {
      errors.consent = 'Please confirm consent to be contacted regarding this enquiry.';
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
      const response = await fetch('/api/appointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus({
          type: 'success',
          message: result.message,
          refId: result.data?.referenceId
        });
        setFormData({
          fullName: '',
          phone: '',
          email: '',
          speciality: DEPARTMENTS_DATA[0]?.name || 'Neurology',
          doctor: '',
          preferredDate: '',
          preferredTime: 'Morning Hours',
          message: '',
          consent: true
        });
      } else {
        setStatus({
          type: 'error',
          message: result.message || 'Failed to submit appointment request. Please call the hospital directly.'
        });
        if (result.errors) {
          setFieldErrors(result.errors);
        }
      }
    } catch (err) {
      setStatus({
        type: 'error',
        message: 'Network error. Please call our hospital reception at +91 97032 15567.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-[#E8E3EC] shadow-xs p-6 sm:p-8">
      {status.type === 'success' ? (
        <div className="text-center py-8 space-y-4">
          <div className="w-16 h-16 bg-[#EDE2F2] text-[#713F83] rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="w-10 h-10" />
          </div>
          <h3 className="text-2xl font-serif font-bold text-[#713F83]">Request Received</h3>
          {status.refId && (
            <p className="inline-block px-3 py-1 bg-[#F4EDF7] text-[#713F83] font-mono text-xs rounded-full border border-[#EDE2F2]">
              Reference: {status.refId}
            </p>
          )}
          <p className="text-[#687582] max-w-md mx-auto text-sm leading-relaxed">
            {status.message}
          </p>
          <div className="p-4 bg-[#EAF4FA] rounded-xl text-[#283440] text-xs border border-[#DDEEF6] max-w-md mx-auto">
            <strong className="text-[#398EB8]">Important Note:</strong> An appointment request is subject to doctor availability and hospital confirmation. If your condition is urgent, please call us directly at <strong>{HOSPITAL_DATA.displayPhone}</strong>.
          </div>
          <button
            type="button"
            onClick={() => setStatus({ type: 'idle', message: '' })}
            className="mt-4 px-6 py-2.5 rounded-lg bg-[#713F83] text-white text-sm font-semibold hover:bg-[#5C326B] transition-colors"
          >
            Submit Another Request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <h3 className="text-xl font-serif font-bold text-[#713F83]">Appointment Enquiry</h3>
            <p className="text-xs sm:text-sm text-[#687582] mt-1">
              Share your details and preferred consultation timing. Our reception desk will contact you to confirm availability.
            </p>
          </div>

          {status.type === 'error' && (
            <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <span>{status.message}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Patient Name */}
            <div>
              <label className="block text-xs font-semibold text-[#283440] mb-1.5">
                Patient Name <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  required
                  placeholder="Patient Name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className={`w-full pl-9 pr-3 py-2 text-sm rounded-lg border ${
                    fieldErrors.fullName ? 'border-rose-400 bg-rose-50/30' : 'border-[#E8E3EC]'
                  } focus:outline-none focus:ring-2 focus:ring-[#713F83]`}
                />
              </div>
              {fieldErrors.fullName && (
                <p className="text-[11px] text-rose-500 mt-1">{fieldErrors.fullName}</p>
              )}
            </div>

            {/* Mobile Number */}
            <div>
              <label className="block text-xs font-semibold text-[#283440] mb-1.5">
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
                    fieldErrors.phone ? 'border-rose-400 bg-rose-50/30' : 'border-[#E8E3EC]'
                  } focus:outline-none focus:ring-2 focus:ring-[#713F83]`}
                />
              </div>
              {fieldErrors.phone && (
                <p className="text-[11px] text-rose-500 mt-1">{fieldErrors.phone}</p>
              )}
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-xs font-semibold text-[#283440] mb-1.5">
                Email Address <span className="text-slate-400 font-normal">(Optional)</span>
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="email"
                  placeholder="patient@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-[#E8E3EC] focus:outline-none focus:ring-2 focus:ring-[#713F83]"
                />
              </div>
            </div>

            {/* Preferred Speciality: Only Neurology or Ophthalmology */}
            <div>
              <label className="block text-xs font-semibold text-[#283440] mb-1.5">
                Preferred Speciality <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <Stethoscope className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <select
                  required
                  value={formData.speciality}
                  onChange={(e) => {
                    const spec = e.target.value;
                    const matchedDoc = DOCTORS_DATA.find(d => d.speciality === spec);
                    setFormData({ 
                      ...formData, 
                      speciality: spec,
                      doctor: matchedDoc ? matchedDoc.name : ''
                    });
                  }}
                  className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-[#E8E3EC] focus:outline-none focus:ring-2 focus:ring-[#713F83] bg-white"
                >
                  {DEPARTMENTS_DATA.map((dept) => (
                    <option key={dept.id} value={dept.name}>
                      {dept.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Preferred Doctor: Dr. Bharat Vishnu Reddy or Dr. Leela Padmini */}
            <div>
              <label className="block text-xs font-semibold text-[#283440] mb-1.5">
                Preferred Doctor
              </label>
              <select
                value={formData.doctor}
                onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                className="w-full px-3 py-2 text-sm rounded-lg border border-[#E8E3EC] focus:outline-none focus:ring-2 focus:ring-[#713F83] bg-white"
              >
                <option value="">Any Available Specialist</option>
                {DOCTORS_DATA.map((doc) => (
                  <option key={doc.id} value={doc.name}>
                    {doc.name} ({doc.speciality})
                  </option>
                ))}
              </select>
            </div>

            {/* Preferred Date */}
            <div>
              <label className="block text-xs font-semibold text-[#283440] mb-1.5">
                Preferred Date <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="date"
                  required
                  min={new Date().toISOString().split('T')[0]}
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className={`w-full pl-9 pr-3 py-2 text-sm rounded-lg border ${
                    fieldErrors.preferredDate ? 'border-rose-400 bg-rose-50/30' : 'border-[#E8E3EC]'
                  } focus:outline-none focus:ring-2 focus:ring-[#713F83]`}
                />
              </div>
              {fieldErrors.preferredDate && (
                <p className="text-[11px] text-rose-500 mt-1">{fieldErrors.preferredDate}</p>
              )}
            </div>
          </div>

          {/* Preferred Time */}
          <div>
            <label className="block text-xs font-semibold text-[#283440] mb-1.5">
              Preferred Consultation Time Window
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Morning Hours',
                'Evening Hours'
              ].map((slot) => (
                <label
                  key={slot}
                  className={`flex items-center gap-2 p-3 rounded-lg border text-xs cursor-pointer transition-colors ${
                    formData.preferredTime === slot
                      ? 'border-[#713F83] bg-[#F4EDF7] text-[#713F83] font-medium'
                      : 'border-[#E8E3EC] hover:bg-[#FAF8FC] text-[#283440]'
                  }`}
                >
                  <input
                    type="radio"
                    name="preferredTime"
                    value={slot}
                    checked={formData.preferredTime === slot}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="text-[#713F83] focus:ring-[#713F83]"
                  />
                  <Clock className="w-3.5 h-3.5 text-[#687582]" />
                  <span>{slot}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Additional Message (optional) */}
          <div>
            <label className="block text-xs font-semibold text-[#283440] mb-1.5">
              Additional Message <span className="text-slate-400 font-normal">(Optional)</span>
            </label>
            <div className="relative">
              <textarea
                rows={3}
                placeholder="Share any specific enquiry regarding your visit..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full p-3 text-sm rounded-lg border border-[#E8E3EC] focus:outline-none focus:ring-2 focus:ring-[#713F83] resize-none"
              />
            </div>
          </div>

          {/* Consent Checkbox */}
          <div>
            <label className="flex items-start gap-2 cursor-pointer text-xs text-[#687582]">
              <input
                type="checkbox"
                checked={formData.consent}
                onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                className="mt-0.5 rounded text-[#713F83] focus:ring-[#713F83]"
              />
              <span>
                I agree to be contacted by Jay Vishnu Hospital regarding this consultation enquiry. I understand that submitting this request does not constitute an automatically confirmed booking until verified by hospital staff.
              </span>
            </label>
            {fieldErrors.consent && (
              <p className="text-[11px] text-rose-500 mt-1">{fieldErrors.consent}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#713F83] hover:bg-[#5C326B] active:bg-[#4E2B5A] text-white font-semibold shadow-xs transition-all duration-150 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Submitting Request...</span>
              </>
            ) : (
              <>
                <Calendar className="w-4 h-4" />
                <span>Submit Appointment Request</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
