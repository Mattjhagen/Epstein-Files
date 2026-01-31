import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, LiveServerMessage, Modality, Chat } from '@google/genai';
import { Mic, Send, X, MessageSquare, Activity, Volume2, StopCircle } from 'lucide-react';
import { AI_SYSTEM_INSTRUCTION } from '../constants';
import { base64ToUint8Array, float32ToInt16, arrayBufferToBase64, decodeAudioData } from '../utils/audio';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const ForensicAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<'CHAT' | 'LIVE'>('CHAT');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Forensic Assistant initialized. I have full access to the Jan 30, 2026 release data. Ask me about specific individuals, documents, or surveillance evidence.' }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isLiveConnected, setIsLiveConnected] = useState(false);
  const [audioVolume, setAudioVolume] = useState(0);

  // Refs for Chat
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatClientRef = useRef<Chat | null>(null);

  // Refs for Live API
  const audioContextRef = useRef<AudioContext | null>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const processorRef = useRef<ScriptProcessorNode | null>(null);
  const nextStartTimeRef = useRef<number>(0);
  const sessionPromiseRef = useRef<Promise<any> | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  // --- TEXT CHAT HANDLER ---
  const handleSendMessage = async () => {
    if (!inputText.trim()) return;
    
    const userMsg = inputText;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInputText('');
    setIsLoading(true);

    try {
      if (!chatClientRef.current) {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        chatClientRef.current = ai.chats.create({
          model: 'gemini-3-flash-preview',
          config: {
            systemInstruction: AI_SYSTEM_INSTRUCTION
          }
        });
      }

      const result = await chatClientRef.current.sendMessage({
        message: userMsg
      });
      
      const responseText = result.text; // Access text property directly, do not call as function

      setMessages(prev => [...prev, { role: 'model', text: responseText || 'No response generated.' }]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { role: 'model', text: 'Error accessing forensic database. Please try again.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  // --- LIVE API HANDLERS ---
  const startLiveSession = async () => {
    try {
        setIsLiveConnected(true);
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        
        // Setup Audio Contexts
        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
        audioContextRef.current = new AudioContextClass({ sampleRate: 24000 });
        
        // Input Audio (Mic)
        const stream = await navigator.mediaDevices.getUserMedia({ audio: {
            channelCount: 1,
            sampleRate: 16000,
        }});
        mediaStreamRef.current = stream;

        // Connect to Gemini Live
        const sessionPromise = ai.live.connect({
            model: 'gemini-2.5-flash-native-audio-preview-12-2025',
            config: {
                responseModalities: [Modality.AUDIO],
                systemInstruction: AI_SYSTEM_INSTRUCTION,
                speechConfig: {
                    voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Kore' } }
                }
            },
            callbacks: {
                onopen: () => {
                    console.log('Live Session Connected');
                    // Start Mic Streaming
                    const inputCtx = new AudioContextClass({ sampleRate: 16000 });
                    const source = inputCtx.createMediaStreamSource(stream);
                    const processor = inputCtx.createScriptProcessor(4096, 1, 1);
                    
                    processor.onaudioprocess = (e) => {
                        const inputData = e.inputBuffer.getChannelData(0);
                        // Convert to PCM Int16
                        const pcmData = float32ToInt16(inputData);
                        // Create Blob
                        const uint8 = new Uint8Array(pcmData.buffer);
                        const base64 = arrayBufferToBase64(uint8.buffer);
                        
                        sessionPromise.then(session => {
                             session.sendRealtimeInput({
                                media: {
                                    mimeType: 'audio/pcm;rate=16000',
                                    data: base64
                                }
                             });
                        });
                        
                        // Visualize volume
                        let sum = 0;
                        for(let i=0; i<inputData.length; i++) sum += inputData[i] * inputData[i];
                        setAudioVolume(Math.sqrt(sum / inputData.length) * 5); // Scale for visuals
                    };

                    source.connect(processor);
                    processor.connect(inputCtx.destination);
                    processorRef.current = processor;
                },
                onmessage: async (msg: LiveServerMessage) => {
                    // Handle Audio Output
                    const base64Audio = msg.serverContent?.modelTurn?.parts?.[0]?.inlineData?.data;
                    if (base64Audio && audioContextRef.current) {
                        const ctx = audioContextRef.current;
                        const audioData = base64ToUint8Array(base64Audio);
                        const audioBuffer = await decodeAudioData(audioData, ctx, 24000, 1);
                        
                        const source = ctx.createBufferSource();
                        source.buffer = audioBuffer;
                        source.connect(ctx.destination);
                        
                        // Schedule playback
                        const now = ctx.currentTime;
                        const start = Math.max(now, nextStartTimeRef.current);
                        source.start(start);
                        nextStartTimeRef.current = start + audioBuffer.duration;
                    }
                    
                    // Handle Turn Complete (Optional visual cue)
                    if (msg.serverContent?.turnComplete) {
                        setAudioVolume(0); 
                    }
                },
                onclose: () => {
                    console.log('Live Session Closed');
                    setIsLiveConnected(false);
                },
                onerror: (err) => {
                    console.error('Live Session Error', err);
                    setIsLiveConnected(false);
                }
            }
        });
        sessionPromiseRef.current = sessionPromise;

    } catch (e) {
        console.error("Failed to start live session", e);
        setIsLiveConnected(false);
    }
  };

  const stopLiveSession = () => {
     if (mediaStreamRef.current) {
         mediaStreamRef.current.getTracks().forEach(track => track.stop());
         mediaStreamRef.current = null;
     }
     if (processorRef.current) {
         processorRef.current.disconnect();
         processorRef.current = null;
     }
     if (audioContextRef.current) {
         audioContextRef.current.close();
         audioContextRef.current = null;
     }
     
     if (sessionPromiseRef.current) {
         sessionPromiseRef.current.then(session => {
             session.close();
         }).catch(e => console.error("Error closing session", e));
         sessionPromiseRef.current = null;
     }
     
     setIsLiveConnected(false);
     setMode('CHAT');
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-red-800 text-white p-4 rounded-full shadow-2xl hover:bg-red-700 transition-transform hover:scale-105 z-50 flex items-center space-x-2 border-2 border-red-600"
      >
        <Activity className="w-6 h-6" />
        <span className="font-bold font-serif hidden md:inline">Forensic AI</span>
      </button>

      {/* Main Panel */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-sm">
          <div className="w-full max-w-md bg-slate-900 h-full shadow-2xl border-l border-slate-700 flex flex-col animate-slide-in">
            {/* Header */}
            <div className="p-4 border-b border-slate-700 flex justify-between items-center bg-slate-800">
              <div className="flex items-center space-x-2">
                 <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                 <h2 className="text-white font-serif font-bold">Forensic Assistant</h2>
              </div>
              <button onClick={() => { setIsOpen(false); stopLiveSession(); }} className="text-slate-400 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mode Switcher */}
            <div className="p-2 bg-slate-900 flex space-x-2 border-b border-slate-800">
                <button 
                  onClick={() => { stopLiveSession(); setMode('CHAT'); }}
                  className={`flex-1 py-2 rounded text-sm font-bold flex items-center justify-center space-x-2 transition-colors ${mode === 'CHAT' ? 'bg-slate-700 text-white' : 'text-slate-500 hover:bg-slate-800'}`}
                >
                    <MessageSquare className="w-4 h-4" />
                    <span>Text Analysis</span>
                </button>
                <button 
                  onClick={() => { setMode('LIVE'); startLiveSession(); }}
                  className={`flex-1 py-2 rounded text-sm font-bold flex items-center justify-center space-x-2 transition-colors ${mode === 'LIVE' ? 'bg-red-900/50 text-red-400 border border-red-900' : 'text-slate-500 hover:bg-slate-800'}`}
                >
                    <Mic className="w-4 h-4" />
                    <span>Voice Interrogation</span>
                </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-hidden relative bg-slate-900">
                {mode === 'CHAT' ? (
                    // Chat Interface
                    <div className="h-full flex flex-col">
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
                            {messages.map((msg, idx) => (
                                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[85%] rounded-lg p-3 text-sm leading-relaxed ${
                                        msg.role === 'user' 
                                        ? 'bg-blue-600 text-white' 
                                        : 'bg-slate-800 text-slate-200 border border-slate-700'
                                    }`}>
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="bg-slate-800 text-slate-400 text-xs p-3 rounded-lg border border-slate-700 animate-pulse">
                                        Analyzing database...
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>
                        <div className="p-4 bg-slate-800 border-t border-slate-700">
                            <div className="flex items-center space-x-2">
                                <input
                                    type="text"
                                    value={inputText}
                                    onChange={(e) => setInputText(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                                    placeholder="Query the report..."
                                    className="flex-1 bg-slate-900 text-white px-4 py-3 rounded border border-slate-600 focus:outline-none focus:border-blue-500"
                                />
                                <button 
                                    onClick={handleSendMessage}
                                    disabled={isLoading || !inputText.trim()}
                                    className="p-3 bg-blue-600 text-white rounded hover:bg-blue-500 disabled:opacity-50"
                                >
                                    <Send className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    // Live Interface
                    <div className="h-full flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
                        {/* Visualizer Background */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                            <div className="w-64 h-64 bg-red-600 rounded-full blur-3xl transition-transform duration-100" style={{ transform: `scale(${1 + audioVolume})`}}></div>
                        </div>
                        
                        <div className="relative z-10 mb-8">
                            <div className={`w-32 h-32 rounded-full border-4 flex items-center justify-center transition-all duration-300 ${isLiveConnected ? 'border-red-500 shadow-[0_0_30px_rgba(220,38,38,0.5)]' : 'border-slate-700'}`}>
                                {isLiveConnected ? (
                                    <Volume2 className={`w-12 h-12 text-red-500 ${audioVolume > 0.1 ? 'animate-pulse' : ''}`} />
                                ) : (
                                    <Activity className="w-12 h-12 text-slate-600" />
                                )}
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-2 font-serif">
                            {isLiveConnected ? "Secure Line Active" : "Initializing Connection..."}
                        </h3>
                        <p className="text-slate-400 text-sm max-w-xs mx-auto mb-12">
                            {isLiveConnected 
                             ? "Speak clearly. The Assistant is listening to your queries regarding the Jan 30 release."
                             : "Establishing encrypted voice channel with the forensic database..."}
                        </p>

                        {isLiveConnected && (
                             <button 
                                onClick={stopLiveSession}
                                className="flex items-center space-x-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-full border border-slate-600 transition-colors"
                             >
                                <StopCircle className="w-5 h-5 text-red-500" />
                                <span>End Interrogation</span>
                             </button>
                        )}
                    </div>
                )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ForensicAssistant;