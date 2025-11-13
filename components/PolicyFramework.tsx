export function renderPolicyFramework(container: HTMLElement) {
    const contentHTML = `
        <div class="relative w-full py-24 overflow-hidden">
            <div class="relative z-10 container mx-auto px-4 flex flex-col items-center">
            <div class="w-full max-w-6xl bg-[#0c0a1d]/80 border border-cyan-500/30 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl shadow-purple-500/10">
                <div class="flex flex-col md:flex-row gap-8 items-start mb-8">
                    <div class="flex flex-col gap-4 flex-shrink-0">
                    <h2 class="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-400 tracking-tighter">UNOOSA</h2>
                    <p class="text-xl text-cyan-100 font-light tracking-widest uppercase">104 Countries</p>
                    <div class="flex items-center justify-center w-72 h-20 bg-white/5 border border-dashed border-cyan-500/30 rounded-xl overflow-hidden">
                        <img src="./assets/Image_19.jpeg" alt="UNOOSA Logo" class="w-full h-full object-cover" />
                    </div>
                    </div>
                    <div class="flex-1 md:pl-8 md:border-l border-cyan-500/20 pt-2 text-base">
                    <ul class="space-y-4 text-gray-300">
                        <li class="flex gap-3"><span class="text-cyan-400 mt-1">●</span><span><strong class="text-white">Use UNOOSA as the central platform for dialogue</strong> regarding AI regulations in space.</span></li>
                        <li class="flex gap-3">
                            <span class="text-cyan-400 mt-1">●</span>
                            <div><span>All the major space-faring countries are already members of UNOOSA (ex. China, Russia, US, India, Japan) in which they already:</span>
                                <ul class="mt-2 ml-1 space-y-1 text-sm text-gray-400 border-l-2 border-cyan-500/20 pl-3">
                                    <li>— Participate in shaping international space law</li>
                                    <li>— Collaborate on peaceful uses of outer space</li>
                                    <li>— Access capacity-building programs and technical support</li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                    </div>
                </div>
                <div class="w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent mb-12"></div>
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mb-12">
                <div class="p-6 border border-purple-500/30 bg-purple-900/10 rounded-2xl text-center lg:text-right shadow-[0_0_15px_rgba(168,85,247,0.1)]">
                    <h3 class="text-xl font-bold text-purple-200 mb-2">STRATEGY</h3>
                    <p class="text-lg text-white font-medium leading-relaxed">Soft laws + multilingual, multi-stakeholder outreach plan</p>
                </div>
                <div class="relative flex justify-center">
                    <div class="relative w-full max-w-[320px] aspect-[2/3] flex items-center justify-center">
                        <svg viewBox="0 0 300 450" class="absolute inset-0 w-full h-full overflow-visible drop-shadow-lg">
                            <defs>
                                <linearGradient id="parchmentGrad" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#FFF4E0" /><stop offset="15%" stop-color="#FFE0B2" /><stop offset="85%" stop-color="#FFE0B2" /><stop offset="100%" stop-color="#FFF4E0" /></linearGradient>
                                <linearGradient id="rollGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#E6CCA0" /><stop offset="40%" stop-color="#FFE5B4" /><stop offset="100%" stop-color="#D4B485" /></linearGradient>
                            </defs>
                            <path d="M 45,60 Q 35,225 45,390 L 255,390 Q 265,225 255,60 Z" fill="url(#parchmentGrad)" stroke="#D7CCC8" stroke-width="0.5"/>
                            <g><rect x="20" y="30" width="260" height="35" rx="5" fill="url(#rollGrad)" stroke="#C1A476" stroke-width="1"/><path d="M 25,30 L 25,65" stroke="#A68B5B" stroke-width="1" stroke-opacity="0.5" /><path d="M 275,30 L 275,65" stroke="#A68B5B" stroke-width="1" stroke-opacity="0.5" /></g>
                            <g><rect x="20" y="385" width="260" height="35" rx="5" fill="url(#rollGrad)" stroke="#C1A476" stroke-width="1"/><path d="M 25,385 L 25,420" stroke="#A68B5B" stroke-width="1" stroke-opacity="0.5" /><path d="M 275,385 L 275,420" stroke="#A68B5B" stroke-width="1" stroke-opacity="0.5" /></g>
                            <path d="M 45,100 L 10,115 L 45,130 Z" fill="#C1A476" />
                            <path d="M 255,320 L 290,335 L 255,350 Z" fill="#C1A476" />
                        </svg>
                        <div class="relative z-10 px-10 py-16 text-center flex flex-col items-center justify-center h-full">
                            <h3 class="font-serif font-bold text-[#1A3C6D] text-3xl leading-tight mb-6 drop-shadow-sm">AI in Space</h3>
                            <p class="font-serif text-[#1A3C6D] text-xl leading-relaxed font-medium">A globally cooperative path towards a safer, more regulated AI future</p>
                        </div>
                    </div>
                </div>
                <div class="p-6 border border-cyan-500/30 bg-cyan-900/10 rounded-2xl text-center lg:text-left shadow-[0_0_15px_rgba(34,211,238,0.1)]">
                    <h3 class="text-xl font-bold text-cyan-200 mb-2">CORE PILLARS</h3>
                    <p class="text-lg text-white font-medium leading-relaxed">Centered on: <span class="text-cyan-300">trust</span>, <span class="text-cyan-300">transparency</span>, and <span class="text-cyan-300">shared responsibility</span> in AI space governance</p>
                </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div class="flex flex-col justify-center md:items-start">
                        <div class="bg-white/5 border-l-4 border-purple-500 p-6 rounded-r-xl">
                        <p class="text-lg text-gray-200 italic">Align with <strong class="text-white not-italic">Outer Space Treaty</strong> principles: <br/><span class="text-purple-300">peaceful use, benefit to all, and international cooperation.</span></p>
                        </div>
                </div>
                <div class="flex flex-col items-end">
                    <div class="text-right">
                        <h4 class="text-sm uppercase tracking-widest text-gray-400 mb-3">Target Groups for Framework</h4>
                        <div class="flex flex-wrap justify-end gap-2">
                            <span class="px-3 py-1 text-sm bg-cyan-500/10 border border-cyan-500/30 text-cyan-100 rounded-full">UN Bodies</span>
                            <span class="px-3 py-1 text-sm bg-cyan-500/10 border border-cyan-500/30 text-cyan-100 rounded-full">Regional Bodies</span>
                            <span class="px-3 py-1 text-sm bg-cyan-500/10 border border-cyan-500/30 text-cyan-100 rounded-full">National Agencies</span>
                            <span class="px-3 py-1 text-sm bg-cyan-500/10 border border-cyan-500/30 text-cyan-100 rounded-full">Private Sector</span>
                            <span class="px-3 py-1 text-sm bg-cyan-500/10 border border-cyan-500/30 text-cyan-100 rounded-full">Civilian Society</span>
                        </div>
                    </div>
                </div>
                </div>
                <div class="mt-12 pt-8 border-t border-white/10">
                <h4 class="text-center text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-8 uppercase tracking-wide">Key Messages</h4>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-base">
                    <div class="p-6 bg-black/40 rounded-xl border border-white/5 hover:border-cyan-500/30 transition-colors"><p class="text-gray-300 leading-relaxed">“Let’s make UNOOSA the centralized platform for regulations surrounding AI regulations.”</p></div>
                    <div class="p-6 bg-black/40 rounded-xl border border-white/5 hover:border-cyan-500/30 transition-colors"><p class="text-gray-300 leading-relaxed">“AI is transforming space so let’s shape its level of decision-making together, to create a safer, more regulated AI future.”</p></div>
                    <div class="p-6 bg-black/40 rounded-xl border border-white/5 hover:border-cyan-500/30 transition-colors"><p class="text-gray-300 leading-relaxed">“Transparency, human oversight, and shared benefits are essential.”</p></div>
                </div>
                </div>
            </div>
            </div>
        </div>
    `;
    container.innerHTML = contentHTML;
}