import { Problem } from '../types';

export const problemsData: Problem[] = [
    { title: '1. The “Liability Black Hole”', description: '• As AI systems take over critical tasks like autonomous rendezvous and docking, accidents—such as satellite collisions or failed docking maneuvers—can occur without clear human oversight.\n• Current space law struggles to assign responsibility for these incidents.\n• This creates a “liability gap,” leaving victims without justice and letting bad actors evade accountability.\n (Bratu et al., 2021; Martin & Freeland, 2021; Pagallo et al., 2023).' },
    { title: '2. Security Threats "Gravity"', description: '• AI systems in space are vulnerable to cyberattacks, manipulation, and data breaches.\n• Consequences: These vulnerabilities can severely impact space assets and terrestrial infrastructure.\n• For example: A cyberattack manipulates an AI-controlled satellite’s navigation, causing it to collide with a critical communication satellite and disrupting global internet services for millions.\n (Weber & Franke, 2024; Oche et al., 2021; Thangavel et al., 2024; Gal et al., 2020)' },
    { title: '3. Built-in Bias "Inertia"', description: '• AI-powered satellites capture and analyze high-resolution images worldwide without consent or oversight, enabling mass collection, processing, and sale of sensitive data with few safeguards or regulations.\n• These AI systems inherit and amplify biases from training data, causing discriminatory outcomes like misidentification or disproportionate targeting of certain groups via space-based facial recognition.\n• This deepens inequalities and enables unjust surveillance or enforcement actions.\n (Yazici, 2025; Ghamisi et al., 2024; Izzo & Campanile, 2024; Kochupillai, 2021).' },
    { title: '4. Unpredictable Autonomy "Cluster"', description: '• Highly autonomous AI can make rapid, unpredictable and irreversible decisions without human intervention.\n• This unpredictability in high-stakes hinders risk assessment and legal accountability.\n• Humans may be powerless to prevent disasters caused by autonomous AI decisions.\n• Absence of clear, enforceable standards raises issues of compliance, fairness, and protection of fundamental rights.\n (Graham et al., 2024; Thangavel et al., 2024; Gal et al., 2020; Pagallo et al., 2023; Martin & Freeland, 2021).' }
];

export function renderProblemGrid(containerId: string, problems: Problem[]) {
    const problemContentContainer = document.getElementById(containerId);
    if (!problemContentContainer) return;

    let activePlanet: number | null = null;
    let showAllPlanets = false;

    const keywords = ["Liability", "Security", "Bias", "Autonomy"];
    const planetColorConfig = [
        { bg: 'bg-slate-500', border: 'border-slate-300', shadow: 'shadow-slate-400/50', ping: 'bg-slate-400', text: 'text-white' },
        { bg: 'bg-amber-200', border: 'border-amber-100', shadow: 'shadow-amber-300/50', ping: 'bg-amber-100', text: 'text-white' },
        { bg: 'bg-sky-600', border: 'border-sky-300', shadow: 'shadow-sky-500/50', ping: 'bg-sky-400', text: 'text-white' },
        { bg: 'bg-red-700', border: 'border-red-400', shadow: 'shadow-red-500/50', ping: 'bg-red-500', text: 'text-white' },
    ];
    const orbitConfig = [
        { size: 'w-64 h-64 md:w-80 md:h-80', duration: '30s' },
        { size: 'w-80 h-80 md:w-[28rem] md:h-[28rem]', duration: '50s', delay: '-5s' },
        { size: 'w-96 h-96 md:w-[36rem] md:h-[36rem]', duration: '75s', delay: '-15s' },
        { size: 'w-[28rem] h-[28rem] md:w-[44rem] md:h-[44rem]', duration: '100s', delay: '-25s' },
    ];

    const tooltipContentHTML = (problem: Problem) => `
        <h4 class="mb-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-400">${problem.title}</h4>
        <p class="text-sm text-gray-300 leading-relaxed whitespace-pre-line">${problem.description}</p>
    `;

    const solarSystemHTML = `
        <div class="relative flex items-center justify-center w-full min-h-[500px] md:min-h-[800px]">
        <div id="problem-sun" role="button" tabindex="0" class="relative z-10 flex flex-col items-center justify-center w-40 h-40 text-center bg-gray-200 rounded-full cursor-pointer md:w-48 md:h-48 transition-transform hover:scale-105 animate-sun-glow">
            <h3 class="text-xl font-bold text-gray-800 md:text-2xl">AI Main Risks</h3>
        </div>
        ${problems.map((problem, index) => `
            <div class="absolute rounded-full pointer-events-none orbit-trail ${orbitConfig[index].size}" style="animation: spin ${orbitConfig[index].duration} linear infinite; animation-delay: ${orbitConfig[index].delay ?? '0s'}; z-index: ${20 + (problems.length - 1 - index)};">
            <div class="absolute" style="top: 50%; left: 0%; transform: translate(-50%, -50%);">
                <div class="pointer-events-auto w-20 h-20 md:w-24 md:h-24" style="animation: spin ${orbitConfig[index].duration} linear infinite reverse; animation-delay: ${orbitConfig[index].delay ?? '0s'};">
                <div class="planet-container relative flex items-center justify-center w-full h-full transition-transform duration-300 cursor-pointer" data-index="${index}">
                    <div class="ping-indicator absolute w-full h-full ${planetColorConfig[index].ping} rounded-full opacity-0"></div>
                    <div class="relative z-10 flex flex-col items-center justify-center w-16 h-16 p-1 text-center ${planetColorConfig[index].text} ${planetColorConfig[index].bg} border-2 ${planetColorConfig[index].border} rounded-full shadow-lg md:w-20 md:h-20 ${planetColorConfig[index].shadow}">
                    <span class="text-lg font-bold leading-tight md:text-xl">${index + 1}</span>
                    <span class="mt-1 text-[10px] uppercase tracking-wider md:text-xs">${keywords[index]}</span>
                    </div>
                </div>
                <div class="tooltip absolute z-30 p-4 w-64 border rounded-lg shadow-xl border-purple-500/30 bg-black/50 backdrop-blur-md left-full ml-4 top-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out opacity-0 scale-95 invisible">
                    ${tooltipContentHTML(problem)}
                </div>
                </div>
            </div>
            </div>
        `).join('')}
        <div id="problem-grid-tooltips" class="absolute inset-0 z-30 grid grid-cols-2 grid-rows-2 gap-4 p-4 pointer-events-none invisible">
            ${problems.map((problem, index) => {
                const alignmentClasses = [
                    'justify-self-start self-start',
                    'justify-self-end self-start',
                    'justify-self-start self-end',
                    'justify-self-end self-end'
                ][index];
                return `<div class="p-4 w-80 border rounded-lg shadow-xl border-purple-500/30 bg-black/50 backdrop-blur-md transition-all duration-300 ease-in-out pointer-events-auto opacity-0 scale-95 invisible ${alignmentClasses}">${tooltipContentHTML(problem)}</div>`;
            }).join('')}
        </div>
        </div>
    `;

    const mobileGridHTML = `
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
        ${problems.map(problem => `
            <div class="flex flex-col p-6 border border-purple-500/20 bg-black/30 backdrop-blur-md rounded-xl shadow-lg shadow-purple-500/10 transition-all duration-300 hover:border-purple-500/50 hover:shadow-purple-500/20 hover:-translate-y-1">
            <div class="flex items-center gap-4 mb-3">
                <h3 class="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-400">${problem.title}</h3>
            </div>
            <p class="text-gray-300 leading-relaxed text-base whitespace-pre-line">${problem.description}</p>
            </div>
        `).join('')}
        </div>
    `;

    problemContentContainer.innerHTML = `
        <div class="animate-fade-in">
            <div class="hidden md:block">${solarSystemHTML}</div>
            <div class="block md:hidden">${mobileGridHTML}</div>
        </div>
    `;
    
    const sun = problemContentContainer.querySelector('#problem-sun');
    if (!sun) return;

    const planets = problemContentContainer.querySelectorAll('.planet-container');
    const gridTooltipsContainer = problemContentContainer.querySelector('#problem-grid-tooltips');
    const gridTooltips = gridTooltipsContainer.querySelectorAll(':scope > div');

    function toggleAllTooltips(show: boolean) {
        showAllPlanets = show;
        gridTooltipsContainer.classList.toggle('invisible', !show);
        gridTooltips.forEach(tip => {
            tip.classList.toggle('opacity-100', show);
            tip.classList.toggle('scale-100', show);
            tip.classList.toggle('visible', show);
            tip.classList.toggle('opacity-0', !show);
            tip.classList.toggle('scale-95', !show);
            tip.classList.toggle('invisible', !show);
        });
    }
    
    sun.addEventListener('click', () => {
        activePlanet = null;
        planets.forEach(p => {
            p.classList.remove('scale-110');
            p.querySelector('.ping-indicator').classList.add('opacity-0');
            (p.nextElementSibling as HTMLElement).classList.add('opacity-0', 'scale-95', 'invisible');
            (p.nextElementSibling as HTMLElement).classList.remove('opacity-100', 'scale-100', 'visible');
        });
        toggleAllTooltips(!showAllPlanets);
    });

    planets.forEach(planet => {
        planet.addEventListener('click', (e) => {
            e.stopPropagation();
            const index = parseInt((planet as HTMLElement).dataset.index);
            const tooltip = planet.nextElementSibling as HTMLElement;
            const ping = planet.querySelector('.ping-indicator');

            if (activePlanet === index) {
                activePlanet = null;
                planet.classList.remove('scale-110');
                ping.classList.add('opacity-0');
                tooltip.classList.add('opacity-0', 'scale-95', 'invisible');
                tooltip.classList.remove('opacity-100', 'scale-100', 'visible');
            } else { 
                if(activePlanet !== null) {
                    const prevPlanet = problemContentContainer.querySelector(`.planet-container[data-index="${activePlanet}"]`);
                    prevPlanet.classList.remove('scale-110');
                    prevPlanet.querySelector('.ping-indicator').classList.add('opacity-0');
                    (prevPlanet.nextElementSibling as HTMLElement).classList.add('opacity-0', 'scale-95', 'invisible');
                    (prevPlanet.nextElementSibling as HTMLElement).classList.remove('opacity-100', 'scale-100', 'visible');
                }
                activePlanet = index;
                showAllPlanets = false;
                toggleAllTooltips(false);

                planet.classList.add('scale-110');
                ping.classList.remove('opacity-0');
                tooltip.classList.remove('opacity-0', 'scale-95', 'invisible');
                tooltip.classList.add('opacity-100', 'scale-100', 'visible');
            }
        });
    });
    
    document.body.addEventListener('click', (e) => {
        if (!problemContentContainer.contains(e.target as Node)) {
            toggleAllTooltips(false);
            if(activePlanet !== null) {
                const prevPlanet = problemContentContainer.querySelector(`.planet-container[data-index="${activePlanet}"]`);
                if(prevPlanet) {
                    prevPlanet.classList.remove('scale-110');
                    prevPlanet.querySelector('.ping-indicator').classList.add('opacity-0');
                    (prevPlanet.nextElementSibling as HTMLElement).classList.add('opacity-0', 'scale-95', 'invisible');
                    (prevPlanet.nextElementSibling as HTMLElement).classList.remove('opacity-100', 'scale-100', 'visible');
                    activePlanet = null;
                }
            }
        } 
    });
}
