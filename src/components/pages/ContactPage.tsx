import * as React from 'react';
import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2, AlertCircle, Mail, MapPin, Linkedin, Github, Terminal } from 'lucide-react';
import { developerProfile } from '../../data/portfolioData';
import { Kw, Var, Typ, Str, Comment, Punct } from '../ui/CodeSyntax';
import { CodeGutter } from '../layout/CodeGutter';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    'Initialized contact socket connection...',
    'Ready for message dispatch.',
  ]);

  const addLog = (log: string) => {
    setTerminalLogs((prev) => [...prev, log]);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    addLog(`[Outgoing]: Preparing message packet from ${formData.name || 'Visitor'}...`);

    try {
      const response = await fetch('https://formsubmit.co/ajax/fardinhasan.mayen@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'Portfolio Inquiry',
          message: formData.message,
          _subject: `New Portfolio Message: ${formData.subject || 'No Subject'} from ${formData.name}`,
        }),
      });

      if (response.ok) {
        setStatus('success');
        addLog(`[Success]: Message dispatched successfully to ${developerProfile.email}`);
        addLog('[Status]: 200 OK — Fardin will respond promptly.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to deliver message.');
      }
    } catch (err: any) {
      console.error('Contact submission error:', err);
      setStatus('error');
      setErrorMessage('Could not connect to service. Please use direct email link.');
      addLog('[Error]: 500 Connection failed. Please email directly.');
    }
  };

  return (
    <div className="flex w-full min-h-full font-mono">
      <CodeGutter linesCount={45} />

      <div className="flex-1 py-6 px-4 sm:px-2 max-w-4xl space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-1 text-xs sm:text-sm text-[#d4d4d4]"
        >
          <div>
            <Kw>const</Kw> <Var>ContactForm</Var> <Punct>=</Punct> <Punct>()</Punct> <Kw>=&gt;</Kw> <Punct>{`{`}</Punct>
          </div>
          <div className="pl-4">
            <Kw>return</Kw> <Punct>(</Punct>
          </div>
          <div className="pl-8 pt-1">
            <Comment>// Let's collaborate — open to full-stack, frontend, contracts & opportunities</Comment>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="rounded-xl border border-[#333333] bg-[#252526]/80 p-6 sm:p-8 backdrop-blur-sm space-y-6 shadow-xl"
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs text-[#9cdcfe] mb-2 font-mono">
                <span className="text-[#c586c0]">name</span>: <Typ>string</Typ>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
                className="w-full bg-[#1e1e1e] border border-[#3c3c3c] focus:border-[#007acc] rounded px-3.5 py-2.5 text-sm text-[#e6e6e6] placeholder-[#555555] outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs text-[#9cdcfe] mb-2 font-mono">
                <span className="text-[#c586c0]">email</span>: <Typ>string</Typ>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
                className="w-full bg-[#1e1e1e] border border-[#3c3c3c] focus:border-[#007acc] rounded px-3.5 py-2.5 text-sm text-[#e6e6e6] placeholder-[#555555] outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs text-[#9cdcfe] mb-2 font-mono">
                <span className="text-[#c586c0]">subject</span>: <Typ>string</Typ>
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project inquiry or consultation"
                className="w-full bg-[#1e1e1e] border border-[#3c3c3c] focus:border-[#007acc] rounded px-3.5 py-2.5 text-sm text-[#e6e6e6] placeholder-[#555555] outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs text-[#9cdcfe] mb-2 font-mono">
                <span className="text-[#c586c0]">message</span>: <Typ>string</Typ>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Describe your project, timeline, or message..."
                className="w-full bg-[#1e1e1e] border border-[#3c3c3c] focus:border-[#007acc] rounded px-3.5 py-2.5 text-sm text-[#e6e6e6] placeholder-[#555555] outline-none transition-colors resize-y"
              />
            </div>

            <div className="flex items-center justify-between flex-wrap gap-4 pt-2">
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="flex items-center gap-2 px-6 py-2.5 rounded bg-[#007acc] hover:bg-[#0062a3] disabled:opacity-50 text-white font-medium text-sm transition-all shadow-md hover:shadow-[0_0_20px_rgba(0,122,204,0.4)] cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>{status === 'submitting' ? 'Transmitting...' : 'Send message →'}</span>
              </button>

              {status === 'success' && (
                <div className="flex items-center gap-2 text-xs text-[#4ec9b0] bg-[#4ec9b0]/10 px-3 py-1.5 rounded border border-[#4ec9b0]/30">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Message transmitted successfully!</span>
                </div>
              )}

              {status === 'error' && (
                <div className="flex items-center gap-2 text-xs text-[#f87171] bg-[#f87171]/10 px-3 py-1.5 rounded border border-[#f87171]/30">
                  <AlertCircle className="w-4 h-4" />
                  <span>{errorMessage}</span>
                </div>
              )}
            </div>
          </form>

          <div className="mt-6 pt-5 border-t border-[#333333]">
            <div className="flex items-center gap-2 text-xs text-[#858585] mb-2 font-mono">
              <Terminal className="w-3.5 h-3.5 text-[#007acc]" />
              <span>TERMINAL — Output & Dispatch Logs</span>
            </div>
            <div className="bg-[#181818] rounded border border-[#2d2d2d] p-3 text-[11px] font-mono text-[#858585] space-y-1 overflow-x-auto">
              {terminalLogs.map((log, i) => (
                <div key={i} className="leading-relaxed">
                  <span className="text-[#4ec9b0]">➜</span> {log}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <a
            href={`mailto:${developerProfile.email}`}
            className="flex items-center gap-3 p-4 rounded-lg border border-[#333333] bg-[#252526]/50 hover:border-[#007acc] hover:bg-[#252526] transition-all text-[#cccccc]"
          >
            <Mail className="w-4 h-4 text-[#ce9178]" />
            <div>
              <div className="font-semibold text-white">Direct Email</div>
              <div className="text-[11px] text-[#858585]">{developerProfile.email}</div>
            </div>
          </a>

          <div className="flex items-center gap-3 p-4 rounded-lg border border-[#333333] bg-[#252526]/50 text-[#cccccc]">
            <MapPin className="w-4 h-4 text-[#4ec9b0]" />
            <div>
              <div className="font-semibold text-white">Location</div>
              <div className="text-[11px] text-[#858585]">{developerProfile.location} (UTC+6)</div>
            </div>
          </div>
        </div>

        <div className="pt-4 text-xs text-[#d4d4d4] space-y-1">
          <div className="pl-4">
            <Punct>);</Punct>
          </div>
          <div>
            <Punct>{`}`}</Punct><Punct>;</Punct>
          </div>
          <div className="pt-2">
            <Kw>export default</Kw> <Var>ContactForm</Var><Punct>;</Punct>
          </div>
        </div>
      </div>
    </div>
  );
};
