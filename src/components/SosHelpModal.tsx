import React, { useState } from 'react';
import { X, ShieldAlert, PhoneCall, AlertTriangle, FileText, CheckCircle2, MessageSquare, Send } from 'lucide-react';

interface SosHelpModalProps {
  lang: 'en' | 'kn';
  onClose: () => void;
}

export const SosHelpModal: React.FC<SosHelpModalProps> = ({ lang, onClose }) => {
  const [activeTab, setActiveTab] = useState<'emergency' | 'complaint'>('emergency');
  const [busNo, setBusNo] = useState('');
  const [category, setCategory] = useState('Lost Item');
  const [description, setDescription] = useState('');
  const [phone, setPhone] = useState('');
  const [submittedTicket, setSubmittedTicket] = useState<string | null>(null);

  const handleSubmitComplaint = (e: React.FormEvent) => {
    e.preventDefault();
    if (!description.trim() || !phone.trim()) return;
    const token = `KSRTC-GRV-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmittedTicket(token);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade">
      <div className="relative w-full max-w-lg rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-red-700 px-6 py-4 flex items-center justify-between text-white">
          <div className="flex items-center gap-2.5">
            <ShieldAlert className="w-5 h-5 text-white" />
            <div>
              <div className="text-sm font-bold">
                {lang === 'kn' ? 'ಕೆ.ಎಸ್.ಆರ್.ಟಿ.ಸಿ ತುರ್ತು ಸಹಾಯ ಮತ್ತು ಸಹಾಯವಾಣಿ' : 'KSRTC 24/7 Control Room & Passenger SOS'}
              </div>
              <div className="text-[11px] text-red-100">
                {lang === 'kn' ? 'ತ್ವರಿತ ನೆರವು ಮತ್ತು ದೂರು ಪರಿಹಾರ' : 'Immediate assistance, security, and lost luggage'}
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg bg-black/20 hover:bg-black/40 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-slate-800 bg-slate-950 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('emergency')}
            className={`flex-1 py-3 text-center border-b-2 transition-colors ${
              activeTab === 'emergency'
                ? 'border-red-500 text-white bg-slate-900/50'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            {lang === 'kn' ? 'ತುರ್ತು ಸಂಪರ್ಕ ಸಂಖ್ಯೆಗಳು' : 'Emergency Hotlines'}
          </button>
          <button
            onClick={() => setActiveTab('complaint')}
            className={`flex-1 py-3 text-center border-b-2 transition-colors ${
              activeTab === 'complaint'
                ? 'border-red-500 text-white bg-slate-900/50'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            {lang === 'kn' ? 'ಕಳೆದುಹೋದ ವಸ್ತುಗಳು / ದೂರು' : 'Lost & Found / Grievance'}
          </button>
        </div>

        {/* Tab 1: Hotlines */}
        {activeTab === 'emergency' && (
          <div className="p-6 space-y-4 bg-slate-950/80 text-xs">
            <div className="p-4 rounded-xl bg-red-950/40 border border-red-800/60 flex items-center justify-between">
              <div>
                <div className="text-slate-400">KSRTC Sarathi 24x7 Control Room</div>
                <div className="text-lg font-bold font-mono text-white mt-0.5">080-49596666</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Central Bus Tracking & Route Helpline</div>
              </div>
              <a
                href="tel:08049596666"
                className="px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-500 text-white font-semibold transition-colors flex items-center gap-1.5"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Call</span>
              </a>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
              <div>
                <div className="text-slate-400">Women Passenger Helpline (Shakti)</div>
                <div className="text-base font-bold font-mono text-amber-300 mt-0.5">1091 / 080-22221111</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Dedicated Women Safety & Escort Patrol</div>
              </div>
              <a
                href="tel:1091"
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold transition-colors flex items-center gap-1.5"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Call</span>
              </a>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <div className="text-slate-400">Police Assistance</div>
                <div className="text-base font-bold font-mono text-white mt-0.5">112</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <div className="text-slate-400">Medical Ambulance</div>
                <div className="text-base font-bold font-mono text-white mt-0.5">108</div>
              </div>
            </div>

            <div className="text-[11px] text-slate-500 text-center pt-2">
              All calls are recorded and monitored by the Karnataka State Transport Vigilance Cell.
            </div>
          </div>
        )}

        {/* Tab 2: Grievance / Lost & Found */}
        {activeTab === 'complaint' && (
          <div className="p-6 bg-slate-950/80 text-xs">
            {submittedTicket ? (
              <div className="p-6 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                <h4 className="text-base font-bold text-white">Grievance Registered Successfully</h4>
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 font-mono text-amber-400 font-bold text-sm">
                  {submittedTicket}
                </div>
                <p className="text-xs text-slate-400 max-w-sm mx-auto">
                  Your ticket has been dispatched to the concerned Depot Manager and Chief Traffic Vigilance Officer. You will receive SMS updates on {phone}.
                </p>
                <button
                  onClick={() => {
                    setSubmittedTicket(null);
                    setDescription('');
                  }}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-semibold"
                >
                  File Another Ticket
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmitComplaint} className="space-y-3.5">
                <div>
                  <label className="block text-slate-400 mb-1">Issue Category</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-red-500"
                  >
                    <option value="Lost Item">Lost Luggage / Item on Bus</option>
                    <option value="Delay">Severe Delay / Unannounced Halt</option>
                    <option value="Crew Behavior">Crew / Conductor Feedback</option>
                    <option value="Bus Cleanliness">Air-Conditioning / Cleanliness</option>
                    <option value="Refund">Ticket Cancellation & Refund</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-400 mb-1">Bus / Vehicle No.</label>
                    <input
                      type="text"
                      value={busNo}
                      onChange={(e) => setBusNo(e.target.value)}
                      placeholder="e.g. KA-09-F-5421"
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 mb-1">Mobile Phone *</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98860..."
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-red-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-400 mb-1">Description of Incident / Item *</label>
                  <textarea
                    required
                    rows={3}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Provide details (seat number, time of journey, item description)..."
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-red-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-red-600 hover:bg-red-500 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Ticket to Vigilance Cell</span>
                </button>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
