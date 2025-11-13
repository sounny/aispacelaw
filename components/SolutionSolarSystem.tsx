import { Solution } from '../types';
import { problemsData } from './ProblemGrid';

function showSolutionModal(solution: Solution, modalRoot: HTMLElement) {
    let contentHTML = '';
    const solutionImages = ['./assets/Image_17.png', './assets/Image_18.png', './assets/Image_17.png', './assets/Image_18.png']; // Placeholder reuse for 4 items

    if (solution.title.toLowerCase().includes('adaptive governance') ||
        solution.title.toLowerCase().includes('tech diplomacy') ||
        solution.title.toLowerCase().includes('meaningful human control') ||
        solution.title.toLowerCase().includes('binding legal')) {
        const imgIndex = ['adaptive', 'tech', 'meaningful', 'binding'].findIndex(s => solution.title.toLowerCase().includes(s));
        contentHTML = `
            <div class="flex flex-col gap-6">
                <div>
                    <h3 class="text-2xl sm:text-3xl pr-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-400 mb-6" id="modal-title-${solution.title.replace(/\s/g, '-')}">${solution.title}</h3>
                    <p class="text-lg sm:text-xl text-gray-300 leading-relaxed whitespace-pre-line">${solution.description}</p>
                </div>
                <div class="w-full h-48 bg-white/5 border border-dashed border-cyan-500/30 rounded-xl flex items-center justify-center overflow-hidden shadow-lg">
                    <img src="${solutionImages[imgIndex]}" alt="Conceptual image for ${solution.title}" class="w-full h-full object-cover" />
                </div>
            </div>`;
    } else {
        contentHTML = `
            <h3 class="text-2xl sm:text-3xl pr-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-400 mb-4" id="modal-title-${solution.title.replace(/\s/g, '-')}">${solution.title}</h3>
            <p class="text-lg sm:text-xl text-gray-300 leading-relaxed whitespace-pre-line">${solution.description}</p>`;
    }

    const modalHTML = `
        <div class="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="modal-title-${solution.title.replace(/\s/g, '-')}">
            <div class="absolute inset-0 bg-black/70 backdrop-blur-sm modal-bg"></div>
            <div class="relative w-full max-w-4xl p-8 sm:p-12 bg-gradient-to-br from-[#100a2d] to-[#0c0a1d] border-2 border-cyan-500/30 rounded-xl shadow-2xl shadow-cyan-500/20 transform transition-all duration-300 ease-out scale-95 opacity-0 animate-fade-in-scale" style="animation-fill-mode: forwards">
            <button class="absolute top-4 right-4 w-8 h-8 text-gray-400 transition-colors hover:text-white close-modal-btn" aria-label="Close">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-full h-full"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>
            </button>
            ${contentHTML}
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

export function renderSolutionSolarSystem(container: HTMLElement, modalRoot: HTMLElement, solutions: Solution[]) {
    let isSolutionsExplored = false;
    
    const introHTML = `
        <div class="flex flex-col items-center gap-4 mb-16 text-center">
            <div class="w-16 h-16 text-cyan-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-full h-full"><path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.311a7.5 7.5 0 0 1-7.5 0c-1.255 0-2.42-.154-3.563-.437m7.126 12.911a7.5 7.5 0 0 1 7.5 0c1.255 0 2.42.154 3.563.437m-18.126-3.563a12.06 12.06 0 0 1 4.5 0m-3.75-2.311a7.5 7.5 0 0 1 7.5 0c1.255 0 2.42.154 3.563.437m-7.126-12.911a7.5 7.5 0 0 1 7.5 0" /><path stroke-linecap="round" stroke-linejoin="round" d="M12 18a.75.75 0 0 0 .75-.75V11.25a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 .75.75Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M9.75 6.75a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-4.5Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M6.375 9.75a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M16.875 9.75a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M9 3.75a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-6Z" /></svg>
            </div>
            <h2 class="text-2xl font-bold text-transparent sm:text-3xl bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-400">The Solutions: Charting a New Course</h2>
            <p class="max-w-2xl mt-1 text-gray-400">Deployable strategies to safeguard the future of space operations.</p>
        </div>
        <div class="flex flex-col items-center justify-center p-8 my-8 text-center border border-purple-500/20 bg-black/30 backdrop-blur-md rounded-xl shadow-lg shadow-purple-500/10">
            <p class="max-w-xl mb-8 text-lg text-gray-300">To address these critical risks, a multi-faceted framework is required, blending legal reforms, technical standards, and international cooperation to ensure AI is a force for good in space.</p>
            <button id="explore-solutions-btn" class="px-8 py-3 font-bold text-white uppercase transition-all duration-300 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg shadow-lg hover:from-cyan-400 hover:to-purple-500 hover:shadow-cyan-500/50 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-cyan-400 animate-pulse-bounce">
                Explore Solutions
            </button>
        </div>
        <div id="solutions-diagram-content" class="collapsible-content"></div>
    `;
    container.innerHTML = introHTML;

    const exploreSolutionsBtn = document.getElementById('explore-solutions-btn');
    const solutionsDiagramContent = document.getElementById('solutions-diagram-content');
    
    exploreSolutionsBtn.addEventListener('click', () => {
        isSolutionsExplored = !isSolutionsExplored;
        solutionsDiagramContent.classList.toggle('expanded', isSolutionsExplored);
        exploreSolutionsBtn.textContent = isSolutionsExplored ? 'Hide Solutions' : 'Explore Solutions';
        exploreSolutionsBtn.classList.toggle('animate-pulse-bounce', !isSolutionsExplored);
    });

    const keywords = ["Liability", "Security", "Bias", "Autonomy"];
    const planetColorConfig = [
        { bg: 'bg-slate-500', border: 'border-slate-300', shadow: 'shadow-slate-400/50', text: 'text-white' },
        { bg: 'bg-amber-200', border: 'border-amber-100', shadow: 'shadow-amber-300/50', text: 'text-white' },
        { bg: 'bg-sky-600', border: 'border-sky-300', shadow: 'shadow-sky-500/50', text: 'text-white' },
        { bg: 'bg-red-700', border: 'border-red-400', shadow: 'shadow-red-500/50', text: 'text-white' },
    ];
    const orbitConfig = [
        { size: 'w-64 h-64 md:w-80 md:h-80', duration: '30s', delay: '0s' },
        { size: 'w-80 h-80 md:w-[28rem] md:h-[28rem]', duration: '50s', delay: '-5s' },
        { size: 'w-96 h-96 md:w-[36rem] md:h-[36rem]', duration: '75s', delay: '-15s' },
        { size: 'w-[28rem] h-[28rem] md:w-[44rem] md:h-[44rem]', duration: '100s', delay: '-25s' },
    ];
    
    const diagramHTML = `
        <div class="animate-fade-in hidden md:block">
            <div class="relative flex items-center justify-center w-full min-h-[500px] md:min-h-[800px]">
            <div id="solution-sun" role="button" tabindex="0" class="relative z-10 flex flex-col items-center justify-center w-40 h-40 text-center bg-gray-200 rounded-full cursor-pointer md:w-48 md:h-48 animate-sun-glow transition-transform hover:scale-105 animate-pop-bounce">
                <h3 class="text-xl font-bold text-gray-800 md:text-2xl">Solutions Framework</h3>
            </div>
            ${problemsData.map((problem, index) => {
                const color = planetColorConfig[index];
                const satelliteOrbitDuration = `${(index + 2) * 5}s`;
                return `
                <div class="absolute rounded-full pointer-events-none solution-orbit-trail ${orbitConfig[index].size}" style="animation: spin ${orbitConfig[index].duration} linear infinite; animation-delay: ${orbitConfig[index].delay}">
                    <div class="absolute" style="top: 50%; left: 0%; transform: translate(-50%, -50%);">
                    <div class="w-20 h-20 md:w-24 md:h-24" style="animation: spin ${orbitConfig[index].duration} linear infinite reverse; animation-delay: ${orbitConfig[index].delay}">
                        <div class="relative flex items-center justify-center w-full h-full pointer-events-none">
                        <div class="relative z-10 grid place-items-center w-16 h-16 p-1 text-center ${color.text} ${color.bg} border-2 ${color.border} rounded-full shadow-lg md:w-20 md:h-20 ${color.shadow}">
                            <div class="z-10 flex flex-col items-center justify-center col-start-1 row-start-1 pointer-events-none">
                            <span class="text-lg font-bold leading-tight md:text-xl">${index + 1}</span>
                            <span class="mt-1 text-[10px] uppercase tracking-wider md:text-xs">${keywords[index]}</span>
                            </div>
                            <div class="absolute col-start-1 row-start-1 w-32 h-32 md:w-40 md:h-40 border border-dashed border-cyan-500/30 rounded-full pointer-events-none" style="animation: spin ${satelliteOrbitDuration} linear infinite">
                            <button class="solution-satellite absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 p-1 text-cyan-300 transition-transform duration-300 cursor-pointer pointer-events-auto hover:scale-125 hover:text-cyan-100" style="animation: spin ${satelliteOrbitDuration} linear infinite reverse" data-index="${index}" aria-label="Explore solution for ${keywords[index]}">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-full h-full"><path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" /><path stroke-linecap="round" stroke-linejoin="round" d="m15.5 14-4-4m4-4-4 4" /></svg>
                            </button>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                `}).join('')}
            <div id="solution-grid-tooltips" class="absolute inset-0 z-30 grid grid-cols-1 md:grid-cols-2 grid-rows-4 md:grid-rows-2 gap-8 p-8 pointer-events-none invisible">
                ${solutions.map((solution, index) => {
                    const alignmentClasses = ['md:justify-self-start md:self-start justify-self-center self-center','md:justify-self-end md:self-start justify-self-center self-center','md:justify-self-start md:self-end justify-self-center self-center','md:justify-self-end md:self-end justify-self-center self-center'][index];
                    return `<div class="p-6 w-full max-w-xs md:max-w-md md:w-96 border rounded-xl shadow-2xl border-cyan-500/30 bg-black/80 backdrop-blur-md transition-all duration-500 ease-in-out pointer-events-auto opacity-0 scale-95 invisible translate-y-8 ${alignmentClasses}">
                            <h3 class="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-400 mb-4">${solution.title}</h3>
                            <p class="text-sm text-gray-300 leading-relaxed whitespace-pre-line">${solution.description}</p>
                            </div>`;
                }).join('')}
            </div>
            </div>
        </div>`;
    
    const mobileGridHTML = `
        <div class="animate-fade-in block md:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
            ${solutions.map((solution, index) => `
                <button class="p-6 text-left bg-black/30 border border-purple-500/20 rounded-lg shadow-lg hover:bg-black/50 hover:border-purple-500/50 transition-all duration-300" data-index="${index}">
                    <h3 class="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-400 mb-2">${solution.title}</h3>
                    <p class="text-sm text-gray-300 line-clamp-3">${solution.description}</p>
                </button>
            `).join('')}
        </div>
    `;

    solutionsDiagramContent.innerHTML = `<div>${diagramHTML}${mobileGridHTML}</div>`;

    solutionsDiagramContent.querySelectorAll('[data-index]').forEach(el => {
        el.addEventListener('click', (e) => {
            e.stopPropagation();
            const index = parseInt((el as HTMLElement).dataset.index);
            showSolutionModal(solutions[index], modalRoot);
        });
    });
    
    let showAllSolutions = false;
    const solutionSun = solutionsDiagramContent.querySelector('#solution-sun');
    const solutionTooltipsContainer = solutionsDiagramContent.querySelector('#solution-grid-tooltips');
    const solutionTooltips = solutionTooltipsContainer.querySelectorAll(':scope > div');

    if(solutionSun) {
        solutionSun.addEventListener('click', () => {
            showAllSolutions = !showAllSolutions;
            solutionTooltipsContainer.classList.toggle('invisible', !showAllSolutions);
            solutionTooltips.forEach(tip => {
                tip.classList.toggle('opacity-100', showAllSolutions);
                tip.classList.toggle('scale-100', showAllSolutions);
                tip.classList.toggle('visible', showAllSolutions);
                tip.classList.toggle('translate-y-0', showAllSolutions);
                tip.classList.toggle('opacity-0', !showAllSolutions);
                tip.classList.toggle('scale-95', !showAllSolutions);
                tip.classList.toggle('invisible', !showAllSolutions);
                tip.classList.toggle('translate-y-8', !showAllSolutions);
            });
        });
    }
}