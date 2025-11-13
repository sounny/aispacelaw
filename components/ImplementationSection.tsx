export function renderImplementationSection(container: HTMLElement) {
    const contentHTML = `
        <div class="relative w-full">
            <div class="w-full bg-[#0c0a1d]/80 border border-purple-500/30 backdrop-blur-md rounded-2xl p-8 shadow-xl shadow-purple-500/5">
            <h3 class="text-[24px] md:text-[28px] font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-300 mb-8">Implementation</h3>
            <div class="space-y-6 text-base">
                <div class="flex flex-col md:flex-row gap-4">
                    <div class="md:w-32 flex-shrink-0"><span class="font-bold text-cyan-300 uppercase tracking-wider text-sm md:text-base border-b border-cyan-500/30 pb-1">Collaborative</span></div>
                    <div class="flex-1 text-gray-300 leading-relaxed">Encourage regional coordination (EU, OECD, ESA) and involve major space agencies and private actors in codeveloping ethical AI norms. Ideally, have one set of soft laws first before expansion as a stepping stone, before introducing hard laws to avoid unaligned, fragmented standards.</div>
                </div>
                <div class="h-px w-full bg-white/5"></div>
                <div class="flex flex-col md:flex-row gap-4">
                    <div class="md:w-32 flex-shrink-0"><span class="font-bold text-cyan-300 uppercase tracking-wider text-sm md:text-base border-b border-cyan-500/30 pb-1">Advocacy</span></div>
                    <div class="flex-1 text-gray-300 leading-relaxed">Advocate for inclusive access to AI tools and data, especially for developing countries.</div>
                </div>
                <div class="h-px w-full bg-white/5"></div>
                <div class="flex flex-col md:flex-row gap-4">
                    <div class="md:w-32 flex-shrink-0"><span class="font-bold text-cyan-300 uppercase tracking-wider text-sm md:text-base border-b border-cyan-500/30 pb-1">Transparency</span></div>
                    <div class="flex-1 text-gray-300 leading-relaxed">Promote several Transparency and Confidence-Building Measures (TCBMs) to clarify intent and reduce misunderstandings, especially amongst the various players due to sensitive data.</div>
                </div>
                <div class="h-px w-full bg-white/5"></div>
                <div class="flex flex-col md:flex-row gap-4">
                    <div class="md:w-32 flex-shrink-0"><span class="font-bold text-purple-300 uppercase tracking-wider text-sm md:text-base border-b border-purple-500/30 pb-1">TCBMs</span></div>
                    <div class="flex-1 text-gray-300 leading-relaxed">Voluntary practices that promote trust, reduce misunderstandings, and support peaceful cooperation in space activities so ex. data-sharing initiatives between agencies and private actors (ex. Copernicus open data programme).</div>
                </div>
            </div>
            </div>
        </div>
    `;
    container.innerHTML = contentHTML;
}
