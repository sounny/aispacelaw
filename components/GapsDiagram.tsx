import { GapTopic } from '../types';

function parseBoldText(text: string) {
    return text.split('**').map((part, index) => 
        index % 2 === 1 ? `<strong>${part}</strong>` : part
    ).join('');
}

function handleSegmentClick(topic: GapTopic, modalRoot: HTMLElement) {
    let detailsContent: string;
    
    if (topic.title.includes('Outer Space Treaty')) {
        const treatyContent = [
          '- The exploration and use of outer space shall benefit all of mankind',
          '- Outer space shall be free for exploration and use by all States',
          '- Outer space is not subject to national appropriation by claim of sovereignty',
          '- States shall not place nuclear weapons or weapons of mass destruction in outer space',
          '- All celestial bodies shall be used exclusively for peaceful purposes',
          '- Astronauts shall be regarded as the envoys of mankind',
          '- States shall be responsible for governmental or non-governmental national space activities',
          '- States shall be liable for damage caused by their space objects',
          '- States shall avoid harmful contamination of space and celestial bodies',
        ].join('\n');
        topic.details = treatyContent;
    } else if (topic.title.includes('Current Laws')) {
        const lawsContent = [
          '**NASAs’s Framework for Ethical Use of Artificial Intelligence:**\nIdentifies 6 core principles that any AI system used by NASA should satisfy - fairness, explainability and transparency, accountability, security and safety, societally beneficial, scientifically and technically robust',
          '**ESA’s Missions Operations A2I Roadmap:**\nOutlines how AI can be applied across mission operations in regards to automated health monitoring, decisions and planning, modelling and simulations, content and data generation, data handling and governance',
          '**DLR’s Institute for AI Safety and Security:**\nWorks on reliability and resilience, safety and security by design, transparency and traceability, data quality and governance, human-centricity and social acceptance',
          "**Soft laws** are principles that aren't legally binding, but many space agencies have no publicly visible full AI ethics policy with a set of key principles let alone a legally binding framework for the use of AI"
        ].join('\n\n');
         topic.details = lawsContent;
    } else if (topic.title.includes('Current uses of AI')) {
        const usesContent = [
            '**ESA’S HERA PLANETARY DEFENSE MISSION:**\nThis mission will use AI to steer itself through asteroids, build a model of surroundings and make decisions onboard',
            '**DLR’S CIMON (CREW INTERACTIVE MOBILE COMPANION):**\nAn AI assistant that supports astronauts in daily tasks onboard the ISS. It is able to see, speak, hear, understand and even fly',
            '**JAXA’S EPSILON ROCKET:**\nThe first launch vehicle to incorporate an AI driven autonomous operation system for pre-launch decision making.',
            '**JAXA’S INT-BALL:**\nAn intelligent, free-flying, spherical camera drone with autonomous navigation and remote control to assist astronauts with routine photography tasks'
        ].join('\n\n');
        topic.details = usesContent;
    }

    if (topic.title.includes('Outer Space Treaty')) {
        const treatyImages = [
            'Image_1.jpg', 'Image_2.jpg', 'Image_3.png', 'Image_4.jpg', 
            'Image_5.jpg', 'Image_6.png', 'Image_7.jpg', 'Image_8.jpg', 'Image_9.jpg'
        ];
        detailsContent = `<div class="space-y-4">${topic.details.split('\n').map((line, index) => `
            <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-4 border-b border-cyan-500/10 last:border-b-0">
                <p class="flex-1 text-base text-gray-300 sm:text-lg leading-relaxed">${line.replace(/^- /, '')}</p>
                <div class="flex flex-shrink-0 w-full sm:w-28 h-20 bg-white/5 border border-dashed border-cyan-500/30 rounded-md transition-colors hover:border-cyan-500/60 overflow-hidden">
                    <img src="./assets/${treatyImages[index]}" alt="Illustration for Outer Space Treaty principle ${index + 1}" class="w-full h-full object-cover" />
                </div>
            </div>`).join('')}</div>`;
    } else if (topic.title.includes('Current Laws')) {
        const agencyLogoMap: { [key: string]: string } = {
            'NASA': './assets/Image_10.png',
            'ESA': './assets/Image_11.png',
            'DLR': './assets/Image_12.jpeg'
        };
        const sections = topic.details.split('\n\n');
        const frameworks = sections.slice(0, 3).map((framework) => {
            const [title, ...descriptionParts] = framework.split('\n');
            let logoSrc = '';
            if (title.includes('NASA')) logoSrc = agencyLogoMap['NASA'];
            else if (title.includes('ESA')) logoSrc = agencyLogoMap['ESA'];
            else if (title.includes('DLR')) logoSrc = agencyLogoMap['DLR'];
            
            const logoContent = logoSrc ? `<img src="${logoSrc}" alt="${title.split(':')[0].replace(/\*\*/g, '')}" class="w-full h-full object-contain p-2" />` : '';

            return `
              <div class="relative p-4 overflow-hidden border rounded-lg bg-white/5 border-white/10">
                <div class="relative z-10 flex flex-col sm:flex-row gap-4 justify-between items-start">
                  <div class="flex-1">
                      <p class="text-lg font-bold text-cyan-200">${parseBoldText(title)}</p>
                      <p class="mt-2 text-sm text-gray-300 sm:text-base">${parseBoldText(descriptionParts.join('\n'))}</p>
                  </div>
                   <div class="flex items-center justify-center flex-shrink-0 w-full sm:w-28 h-20 bg-white/5 border border-dashed border-cyan-500/30 rounded-md transition-colors hover:border-cyan-500/60 mt-2 sm:mt-0 overflow-hidden">
                      ${logoContent}
                  </div>
                </div>
              </div>`;
        }).join('');
         const softLaw = sections.length > 3 ? `<div class="p-4 mt-4 border-l-2 border-purple-400 bg-purple-900/20"><p class="text-gray-300 italic">${parseBoldText(sections[3])}</p></div>` : '';
         detailsContent = `<div class="space-y-6">${frameworks}${softLaw}</div>`;
    } else if (topic.title.includes('Current uses of AI')) {
        const useCaseImages = ['Image_13.png', 'Image_14.png', 'Image_15.png', 'Image_10.png'];
        detailsContent = `<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">${topic.details.split('\n\n').map((useCase, index) => {
            const [title, ...descriptionParts] = useCase.split('\n');
            return `
              <div class="p-5 bg-[#0c0a1d] border border-cyan-500/30 rounded-xl shadow-lg hover:shadow-cyan-500/20 transition-shadow duration-300 flex flex-col">
                <div class="flex-1">
                    <h4 class="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2 leading-tight">${parseBoldText(title)}</h4>
                    <p class="text-sm text-gray-300 leading-relaxed mb-4">${descriptionParts.join('\n')}</p>
                </div>
                <div class="w-full h-24 bg-white/5 border border-dashed border-cyan-500/30 rounded-md overflow-hidden">
                    <img src="./assets/${useCaseImages[index]}" alt="${title.split(':')[0].replace(/\*\*/g, '')}" class="w-full h-full object-cover" />
                </div>
              </div>`;
        }).join('')}</div>`;
    } else {
         detailsContent = `<div class="grid gap-6 md:grid-cols-2"><div class="space-y-4 text-base text-gray-300 sm:text-lg leading-relaxed">${topic.details.split('\n').map(p=>`<p>${p}</p>`).join('')}</div><div class="flex flex-col items-center justify-center p-4 border border-dashed rounded-lg border-gray-500/50 bg-black/20"><p class="mb-2 text-sm text-center text-gray-400">Conceptual Image:</p><p class="text-center text-gray-200 italic">"${topic.imagePrompt}"</p></div></div>`;
    }

    const modalHTML = `
        <div class="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="modal-title-${topic.title.replace(/\s/g, '-')}" >
          <div class="absolute inset-0 bg-transparent backdrop-blur-md modal-bg"></div>
          <div class="relative flex flex-col w-full max-w-2xl max-h-[90vh] bg-[#0c0a1d] border border-cyan-500/30 rounded-2xl shadow-[0_0_50px_rgba(103,232,249,0.15)] transform transition-all duration-300 ease-out scale-95 opacity-0 animate-fade-in-scale" style="animation-fill-mode: forwards">
            <div class="flex items-start justify-between flex-shrink-0 p-6 border-b sm:p-8 border-cyan-500/20">
                <h3 id="modal-title-${topic.title.replace(/\s/g, '-')}" class="pr-8 text-xl font-bold text-transparent sm:text-2xl bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-400">${topic.title}</h3>
                <button class="flex-shrink-0 w-8 h-8 text-gray-400 transition-colors hover:text-white close-modal-btn" aria-label="Close">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-full h-full"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>
                </button>
            </div>
            <div class="p-6 sm:p-8 overflow-y-auto custom-scrollbar">${detailsContent}</div>
          </div>
        </div>`;
    
    modalRoot.innerHTML = modalHTML;
    document.body.classList.add('modal-open');
    
    const modal = modalRoot.querySelector('[role="dialog"]') as HTMLElement;
    const focusableElements = Array.from(modal.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )) as HTMLElement[];
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleFocusTrap = (e: KeyboardEvent) => {
        if (e.key !== 'Tab') return;
        if (e.shiftKey) {
            if (document.activeElement === firstElement) {
                lastElement.focus();
                e.preventDefault();
            }
        } else {
            if (document.activeElement === lastElement) {
                firstElement.focus();
                e.preventDefault();
            }
        }
    };
    const handleEscape = (e: KeyboardEvent) => { if (e.key === 'Escape') closeModal(); };

    const closeModal = () => {
        modal.removeEventListener('keydown', handleFocusTrap);
        window.removeEventListener('keydown', handleEscape);
        modalRoot.innerHTML = '';
        document.body.classList.remove('modal-open');
    };

    modal.addEventListener('keydown', handleFocusTrap);
    window.addEventListener('keydown', handleEscape);

    firstElement?.focus();

    modal.querySelector('.close-modal-btn').addEventListener('click', closeModal);
    modal.querySelector('.modal-bg').addEventListener('click', closeModal);
}


export function renderGapsDiagram(container: HTMLElement, modalRoot: HTMLElement, topics: GapTopic[]) {
    let isGapsExplored = false;

    const introHTML = `
        <div class="flex flex-col items-center gap-4 mb-8 text-center">
            <div class="w-16 h-16 text-cyan-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-full h-full"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>
            </div>
            <h2 class="text-2xl font-bold text-transparent sm:text-3xl bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-400">
                The Gaps: AI Governance Black Hole
            </h2>
            <p class="max-w-2xl mt-1 text-gray-400">Key challenges in current space law that create a governance vacuum for AI.</p>
        </div>
        <div class="flex flex-col items-center justify-center p-8 my-8 text-center border border-purple-500/20 bg-black/30 backdrop-blur-md rounded-xl shadow-lg shadow-purple-500/10">
            <p class="max-w-xl mb-8 text-lg text-gray-300">
                Explore the legal black hole where current regulations fail to capture the risks of autonomous systems in space.
            </p>
            <button id="explore-gaps-btn" class="px-8 py-3 font-bold text-white uppercase transition-all duration-300 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg shadow-lg hover:from-cyan-400 hover:to-purple-500 hover:shadow-cyan-500/50 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-cyan-400 animate-pulse-bounce">
                Explore Gaps
            </button>
        </div>
        <div id="gaps-diagram-content" class="collapsible-content"></div>
    `;
    container.innerHTML = introHTML;
    const exploreGapsBtn = document.getElementById('explore-gaps-btn');
    const gapsDiagramContent = document.getElementById('gaps-diagram-content');

    exploreGapsBtn.addEventListener('click', () => {
        isGapsExplored = !isGapsExplored;
        gapsDiagramContent.classList.toggle('expanded', isGapsExplored);
        exploreGapsBtn.textContent = isGapsExplored ? 'Hide Gaps' : 'Explore Gaps';
        exploreGapsBtn.classList.toggle('animate-pulse-bounce', !isGapsExplored);
    });
    
    const orderedTopics = [
        topics.find(t => t.title.includes('Outer Space Treaty')),
        topics.find(t => t.title.includes('Current Laws')),
        topics.find(t => t.title.includes('Current uses of AI')),
    ].filter(Boolean) as GapTopic[];

    function getLines(title: string) {
      if (title.includes('Outer Space Treaty')) return ['Outer Space', 'Treaty (1967)'];
      if (title.includes('Current Laws')) return ['Current Laws', '& Guidelines'];
      if (title.includes('Current uses')) return ['Current Uses', 'of AI'];
      return title.split(' ');
    }
    
    const diagramHTML = `
        <div class="animate-fade-in hidden md:block">
            <div class="relative flex items-center justify-center w-full p-4 py-12">
                <div class="relative w-full max-w-sm sm:max-w-md md:max-w-lg aspect-square">
                    <svg viewBox="0 0 300 300" class="w-full h-full relative z-10 overflow-visible">
                        <defs>
                            <radialGradient id="blackHoleGradient" cx="0.5" cy="0.5" r="0.5"><stop offset="0%" stop-color="#000000" /><stop offset="85%" stop-color="#000000" /><stop offset="100%" stop-color="#2d0a31" /></radialGradient>
                            <linearGradient id="accretionGradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#22d3ee" stop-opacity="0.8" /><stop offset="50%" stop-color="#8b5cf6" stop-opacity="0.5" /><stop offset="100%" stop-color="#000000" stop-opacity="0" /></linearGradient>
                            <filter id="glow-strong"><feGaussianBlur stdDeviation="4" result="coloredBlur" /><feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
                            <filter id="glow-soft"><feGaussianBlur stdDeviation="2" result="blur" /><feComposite in="SourceGraphic" in2="blur" operator="over" /></filter>
                        </defs>
                        <g class="animate-spin-slow" style="transform-origin: 150px 150px;"><circle cx="150" cy="150" r="145" fill="url(#accretionGradient)" opacity="0.2" style="mix-blend-mode: screen;"></circle><circle cx="150" cy="150" r="120" stroke="url(#accretionGradient)" stroke-width="1" opacity="0.3" stroke-dasharray="10 20"></circle><circle cx="150" cy="150" r="100" stroke="purple" stroke-width="0.5" opacity="0.3"></circle></g>
                        <circle cx="150" cy="150" r="73" fill="url(#blackHoleGradient)" filter="url(#glow-soft)"></circle>
                        <circle cx="150" cy="150" r="75" fill="none" stroke="#22d3ee" class="animate-photon-ring" filter="url(#glow-strong)"></circle>
                        <text x="150" y="150" text-anchor="middle" dy=".3em" class="font-bold text-transparent fill-white/90 tracking-[0.3em] text-lg pointer-events-none drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">GAPS</text>
                        
                        ${orderedTopics.map((topic, index) => {
                            const rotation = index * 120;
                            const lines = getLines(topic.title);
                            const midAngleDeg = -30;
                            const midAngleRad = midAngleDeg * (Math.PI / 180);
                            const textRadius = 115;
                            const textX = 150 + textRadius * Math.cos(midAngleRad);
                            const textY = 150 + textRadius * Math.sin(midAngleRad);
                            const textCounterRotation = -rotation;

                            return `
                            <g class="cursor-pointer gap-segment" transform="rotate(${rotation} 150 150)" data-index="${index}" role="button" tabindex="0">
                                <g style="animation: hover-float 6s ease-in-out infinite; animation-delay: ${index * -2}s">
                                    <g class="group transition-all duration-500 hover:filter hover:drop-shadow-[0_0_15px_rgba(34,211,238,0.6)]">
                                        <title>${topic.title}</title>
                                        <path d="M 150 2 A 148 148 0 0 1 278.2 224 L 215 187.5 A 75 75 0 0 0 150 75 Z" class="fill-transparent stroke-cyan-500/30 stroke-[1px] transition-all duration-300 group-hover:stroke-cyan-300 group-hover:stroke-[2px] group-hover:fill-cyan-500/10"></path>
                                        <g transform="rotate(${textCounterRotation} ${textX} ${textY})">
                                            <text x="${textX}" y="${textY}" text-anchor="middle" class="text-xs font-bold tracking-wider text-cyan-100 uppercase transition-all duration-300 fill-current sm:text-sm group-hover:text-white group-hover:drop-shadow-[0_0_5px_black]" style="pointer-events: none;">
                                                ${lines.map((line, i) => {
                                                    const baseDy = 1.2;
                                                    const initialDy = -(lines.length - 1) / 2 * baseDy;
                                                    const dy = i === 0 ? `${initialDy}em` : `${baseDy}em`;
                                                    return `<tspan x="${textX}" dy="${dy}">${line}</tspan>`;
                                                }).join('')}
                                            </text>
                                        </g>
                                    </g>
                                </g>
                            </g>
                            `;
                        }).join('')}
                    </svg>
                </div>
            </div>
        </div>`;

    const mobileListHTML = `
        <div class="animate-fade-in block md:hidden space-y-4">
            ${orderedTopics.map((topic, index) => `
                <button class="w-full p-6 text-left bg-black/30 border border-purple-500/20 rounded-lg shadow-lg hover:bg-black/50 hover:border-purple-500/50 transition-all duration-300" data-index="${index}">
                    <h3 class="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-400">${topic.title}</h3>
                </button>
            `).join('')}
        </div>
    `;
    
    gapsDiagramContent.innerHTML = `<div>${diagramHTML}${mobileListHTML}</div>`;
    
    gapsDiagramContent.querySelectorAll('[data-index]').forEach(el => {
        el.addEventListener('click', () => {
            const index = parseInt((el as HTMLElement).dataset.index);
            handleSegmentClick(orderedTopics[index], modalRoot);
        });
    });
}