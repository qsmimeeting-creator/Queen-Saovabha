import React, { useState } from 'react';
import { CONTACT_INFO } from '../data/mockData';
import { ChatMessage } from '../types';
import { Phone, Globe, Mail, ExternalLink, Bot, Send, Sparkles, User, RefreshCw, MessageSquare, AlertTriangle, ArrowUpRight, Facebook } from 'lucide-react';

export const ContactSection: React.FC = () => {
  // Gemini AI Chat State
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: 'สวัสดีค่ะ! ดิฉันคือพยาบาลผู้ช่วยเสมือนประจำสถานเสาวภา สภากาชาดไทย ยินดีให้ข้อมูลเกี่ยวกับการให้บริการฉีดวัคซีน การเตรียมตัว เวลาทำการ หรือสถานที่ตั้งค่ะ มีข้อสงสัยสอบถามได้เลยนะคะ 😊',
      timestamp: 'เมื่อครู่'
    }
  ]);
  const [inputQuestion, setInputQuestion] = useState('');
  const [isAskingAi, setIsAskingAi] = useState(false);

  const messengerUrl = CONTACT_INFO.facebookMessengerUrl; // https://m.me/SaovabhaInstitute
  const facebookPageUrl = CONTACT_INFO.facebookUrl; // https://www.facebook.com/SaovabhaInstitute

  const handleAskAi = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputQuestion.trim() || isAskingAi) return;

    const userText = inputQuestion.trim();
    setInputQuestion('');

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: userText,
      timestamp: new Date().toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' })
    };

    setChatMessages((prev) => [...prev, userMsg]);
    setIsAskingAi(true);

    try {
      const res = await fetch('/api/ask-ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: userText })
      });
      const data = await res.json();

      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: data.answer || 'ขออภัย ไม่สามารถประมวลผลคำตอบได้ในขณะนี้',
        timestamp: new Date().toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' })
      };
      setChatMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      const errorMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: 'ขออภัย เกิดข้อผิดพลาดทางเครือข่าย โปรดติดต่อสถานเสาวภา สภากาชาดไทย โดยตรงทางโทรศัพท์ 02-252-0161 ถึง 4 นะคะ',
        timestamp: new Date().toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' })
      };
      setChatMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsAskingAi(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-6">
      
      {/* Title Header */}
      <div className="bg-gradient-to-r from-blue-700 via-indigo-800 to-purple-900 text-white p-5 sm:p-6 rounded-3xl shadow-lg mb-6 border-2 border-indigo-900">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <span className="p-2.5 bg-white/20 rounded-2xl backdrop-blur-sm">
              💬
            </span>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold font-['Kanit',sans-serif]">
                สอบถามข้อมูลและช่องทางติดต่อ
              </h2>
              <p className="text-xs sm:text-sm text-indigo-100 font-medium">
                {CONTACT_INFO.agencyName}
              </p>
            </div>
          </div>

          <a
            href={messengerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-sky-400 hover:bg-sky-300 text-slate-900 font-bold px-4 py-2.5 rounded-2xl text-xs flex items-center gap-2 shadow-md transition shrink-0"
          >
            <MessageSquare className="w-4 h-4 text-blue-900" />
            แชทผ่าน Facebook Messenger
          </a>
        </div>
      </div>

      {/* Direct Facebook Messenger Prominent Card */}
      <div className="bg-gradient-to-br from-blue-50 to-sky-100 border-2 border-blue-300 p-5 sm:p-6 rounded-3xl shadow-sm mb-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md">
              <MessageSquare className="w-8 h-8" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                  ช่องทางแชทหลัก
                </span>
                <span className="text-xs text-blue-900 font-semibold">Facebook Messenger</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 font-['Kanit',sans-serif]">
                สอบถามเจ้าหน้าที่ผ่าน Facebook Messenger
              </h3>
              <p className="text-xs text-slate-600">
                ส่งข้อความสอบถามรายละเอียดบริการวัคซีนโดยตรงกับ Facebook Page สถานเสาวภา สภากาชาดไทย
              </p>
            </div>
          </div>

          <a
            href={messengerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold px-5 py-3 rounded-2xl text-xs flex items-center justify-center gap-2 shadow-md transition shrink-0"
          >
            <MessageSquare className="w-4 h-4" />
            <span>เปิดแชท Messenger (m.me/SaovabhaInstitute)</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Phone & Emergency Call Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        <div className="bg-white p-5 rounded-3xl border-2 border-slate-200 shadow-sm flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] text-slate-500 font-semibold block uppercase">
                เบอร์โทรศัพท์ติดต่อ
              </span>
              <strong className="text-sm sm:text-base font-extrabold text-slate-900 font-['Kanit',sans-serif]">
                {CONTACT_INFO.directPhone}
              </strong>
            </div>
          </div>
          <a
            href="tel:022520161"
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-2.5 rounded-2xl text-xs shadow-sm transition"
          >
            โทรออก
          </a>
        </div>

        <div className="bg-rose-500 text-white p-5 rounded-3xl border-2 border-rose-700 shadow-sm flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center shrink-0">
              <AlertTriangle className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-[10px] text-rose-100 font-semibold block uppercase">
                สายด่วนฉุกเฉินทางการแพทย์
              </span>
              <strong className="text-base sm:text-lg font-extrabold text-white font-['Kanit',sans-serif]">
                โทร 1669 (24 ชั่วโมง)
              </strong>
            </div>
          </div>
          <a
            href="tel:1669"
            className="bg-white text-rose-700 hover:bg-rose-100 font-bold px-4 py-2.5 rounded-2xl text-xs shadow-sm transition"
          >
            โทรฉุกเฉิน
          </a>
        </div>
      </div>

      {/* Official Links Grid */}
      <div className="space-y-4 mb-8">
        <h3 className="text-base font-bold text-slate-900 font-['Kanit',sans-serif] flex items-center gap-2">
          <Globe className="w-5 h-5 text-indigo-600" />
          ช่องทางติดต่อออนไลน์ทางการ
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <a
            href={messengerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-5 rounded-3xl border-2 border-slate-200 hover:border-blue-600 shadow-sm hover:shadow-md transition flex flex-col justify-between group"
          >
            <div>
              <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl w-fit mb-3 group-hover:bg-blue-600 group-hover:text-white transition">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-bold text-slate-900 font-['Kanit',sans-serif] mb-1 group-hover:text-blue-600 transition flex items-center gap-1">
                Messenger แชท
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 shrink-0" />
              </h4>
              <p className="text-xs text-slate-600 mb-3">
                https://m.me/SaovabhaInstitute
              </p>
            </div>
            <div className="pt-2 border-t border-slate-100 text-xs font-bold text-blue-600 flex items-center justify-between">
              <span>ส่งข้อความแชท</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </a>

          <a
            href={facebookPageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-5 rounded-3xl border-2 border-slate-200 hover:border-blue-600 shadow-sm hover:shadow-md transition flex flex-col justify-between group"
          >
            <div>
              <div className="p-3 bg-blue-50 text-blue-700 rounded-2xl w-fit mb-3 group-hover:bg-blue-700 group-hover:text-white transition">
                <Facebook className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-bold text-slate-900 font-['Kanit',sans-serif] mb-1 group-hover:text-blue-700 transition flex items-center gap-1">
                Facebook Page หลัก
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-700 shrink-0" />
              </h4>
              <p className="text-xs text-slate-600 mb-3">
                สถานเสาวภา สภากาชาดไทย
              </p>
            </div>
            <div className="pt-2 border-t border-slate-100 text-xs font-bold text-blue-700 flex items-center justify-between">
              <span>ไปยังเพจ Facebook</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </a>

          <a
            href={CONTACT_INFO.website}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-5 rounded-3xl border-2 border-slate-200 hover:border-indigo-600 shadow-sm hover:shadow-md transition flex flex-col justify-between group"
          >
            <div>
              <div className="p-3 bg-indigo-50 text-indigo-600 rounded-2xl w-fit mb-3 group-hover:bg-indigo-600 group-hover:text-white transition">
                <Globe className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-bold text-slate-900 font-['Kanit',sans-serif] mb-1 group-hover:text-indigo-600 transition flex items-center gap-1">
                เว็บไซต์ทางการ
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-600 shrink-0" />
              </h4>
              <p className="text-xs text-slate-600 mb-3">
                www.saovabha.org
              </p>
            </div>
            <div className="pt-2 border-t border-slate-100 text-xs font-bold text-indigo-600 flex items-center justify-between">
              <span>เปิดเว็บไซต์</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </a>
        </div>
      </div>

      {/* AI Assistant Chat Widget */}
      <div className="bg-white rounded-3xl border-2 border-indigo-900 shadow-xl overflow-hidden">
        
        {/* Chat Header */}
        <div className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white p-4 flex items-center justify-between border-b border-indigo-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-400 text-slate-900 flex items-center justify-center font-bold shadow-md">
              <Bot className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold font-['Kanit',sans-serif] flex items-center gap-1.5">
                ผู้ช่วย AI สอบถามข้อมูลอัตโนมัติ
                <span className="bg-amber-400 text-slate-900 text-[10px] px-2 py-0.5 rounded-full font-bold">
                  Gemini AI
                </span>
              </h3>
              <p className="text-[11px] text-indigo-200">
                สอบถามข้อมูลเวลาทำการ การเตรียมตัว และบริการวัคซีน 24 ชั่วโมง
              </p>
            </div>
          </div>

          <button
            onClick={() => setChatMessages([chatMessages[0]])}
            className="p-2 text-indigo-200 hover:text-white hover:bg-white/10 rounded-xl text-xs transition"
            title="เริ่มสนทนาใหม่"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>

        {/* Chat Message Window */}
        <div className="p-4 bg-slate-50 min-h-[200px] max-h-[320px] overflow-y-auto space-y-3">
          {chatMessages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start gap-2.5 ${
                msg.sender === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              {msg.sender === 'bot' && (
                <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center shrink-0 text-xs font-bold shadow-sm">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div
                className={`max-w-[82%] p-3.5 rounded-2xl text-xs leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-indigo-600 text-white rounded-tr-none shadow-sm'
                    : 'bg-white text-slate-800 border border-slate-200 rounded-tl-none shadow-sm'
                }`}
              >
                <p className="whitespace-pre-line">{msg.text}</p>
                <span
                  className={`block text-[9px] mt-1 text-right ${
                    msg.sender === 'user' ? 'text-indigo-200' : 'text-slate-400'
                  }`}
                >
                  {msg.timestamp}
                </span>
              </div>

              {msg.sender === 'user' && (
                <div className="w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center shrink-0 text-xs font-bold">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {isAskingAi && (
            <div className="flex items-center gap-2 text-xs text-indigo-600 font-medium p-2 bg-indigo-50 rounded-2xl w-fit border border-indigo-100 animate-pulse">
              <Sparkles className="w-4 h-4" />
              <span>พยาบาล AI กำลังประมวลผลคำตอบ...</span>
            </div>
          )}
        </div>

        {/* Quick Suggestion Chips */}
        <div className="px-4 py-2 bg-white border-t border-slate-200 flex items-center gap-1.5 overflow-x-auto text-[11px] scrollbar-none">
          <span className="text-slate-400 font-semibold shrink-0">คำถามแนะนำ:</span>
          <button
            onClick={() => setInputQuestion('สถานเสาวภา เปิดให้บริการวันและเวลาใดบ้าง?')}
            className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl whitespace-nowrap"
          >
            วันและเวลาทำการ?
          </button>
          <button
            onClick={() => setInputQuestion('ข้อปฏิบัติและการเตรียมตัวก่อนฉีดวัคซีน?')}
            className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl whitespace-nowrap"
          >
            การเตรียมตัวก่อนฉีด?
          </button>
          <button
            onClick={() => setInputQuestion('การเดินทางมาสถานเสาวภา สภากาชาดไทย?')}
            className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl whitespace-nowrap"
          >
            การเดินทาง?
          </button>
        </div>

        {/* Input Form */}
        <form onSubmit={handleAskAi} className="p-3 bg-white border-t border-slate-200 flex items-center gap-2">
          <input
            type="text"
            value={inputQuestion}
            onChange={(e) => setInputQuestion(e.target.value)}
            placeholder="พิมพ์คำถามข้อสงสัยเรื่องบริการของสถานเสาวภา..."
            className="flex-1 px-4 py-2.5 bg-slate-100 text-slate-900 rounded-2xl text-xs placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 font-medium"
          />
          <button
            type="submit"
            disabled={!inputQuestion.trim() || isAskingAi}
            className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-300 text-white font-bold p-2.5 rounded-2xl transition shadow-sm"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>

    </div>
  );
};
