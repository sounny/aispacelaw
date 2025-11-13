import { generatePosterContent } from './services/geminiService';
import { renderAnimatedBackground } from './components/AnimatedBackground';
import { renderProblemGrid, problemsData } from './components/ProblemGrid';
import { renderGapsDiagram } from './components/GapsDiagram';
import { renderSolutionSolarSystem } from './components/SolutionSolarSystem';
import { renderPolicyFramework } from './components/PolicyFramework';
import { renderImplementationSection } from './components/ImplementationSection';
import { renderNextSteps } from './components/NextSteps';
import { renderReferencesSection } from './components/ReferencesSection';
import { PosterContent, Solution } from './types';

export async function mainApp() {
    // --- DOM Element Selectors ---
    const loadingSpinner = document.getElementById('loading-spinner');
    const errorMessageContainer = document.getElementById('error-message-container');
    const mainContentContainer = document.getElementById('main-content-container');
    const bottomContentContainer = document.getElementById('bottom-content-container');
    const problemContentContainer = document.getElementById('problem-content-container');
    const exploreRisksBtn = document.getElementById('explore-risks-btn');
    const modalRoot = document.getElementById('modal-root') as HTMLElement;
    const gapsDiagramSectionContainer = document.getElementById('gaps-diagram-section-container');
    const solutionSolarSystemSectionContainer = document.getElementById('solution-solar-system-section-container');
    const policyFrameworkSectionContainer = document.getElementById('policy-framework-section-container');
    const implementationSectionContainer = document.getElementById('implementation-section-container');
    const nextStepsSectionContainer = document.getElementById('next-steps-section-container');
    const referencesSectionContainer = document.getElementById('references-section-container');

    // --- State Variables ---
    let isRisksExplored = false;

    // --- Event Handlers ---
    exploreRisksBtn.addEventListener('click', () => {
        isRisksExplored = !isRisksExplored;
        problemContentContainer.classList.toggle('expanded', isRisksExplored);
        exploreRisksBtn.textContent = isRisksExplored ? 'Hide Risks' : 'Explore Risks';
        exploreRisksBtn.classList.toggle('animate-pulse-bounce', !isRisksExplored);
    });

    // --- Initial Load ---
    renderAnimatedBackground('animated-background');
    renderProblemGrid('problem-content-container', problemsData);

    let posterContent: PosterContent | null = null;
    let fetchError: string | null = null;

    try {
        posterContent = await generatePosterContent();
    } catch (err) {
        fetchError = err instanceof Error ? err.message : 'An unknown error occurred. Displaying default poster content.';
        console.error("Failed to fetch from Gemini, using fallback. Error:", err);
        posterContent = (await import('./services/geminiService')).fallbackContent;
    } finally {
        if (posterContent && posterContent.solutions) {
            const solutions: Solution[] = posterContent.solutions;
            if(solutions.length > 0) solutions[0] = { title: 'Adaptive Governance Framework', description: '• Developing responsible AI for autonomous space systems requires integrating ethical governance with secure technical design.\n• As autonomy increases, exemplified by systems like lethal autonomous weapons already used in the military, questions of accountability, transparency, and compliance with international law become critical.' };
            if(solutions.length > 1) solutions[1] = { title: 'Tech Diplomacy & Standards', description: '• AI and sensing technologies are often multi-use, export control frameworks such as the Wassenaar Arrangement and US/EU transfer controls must guide system design to prevent misuse.\n• Ongoing policy initiatives, including the EU AI Act, OECD Responsible AI guidelines, IEEE procurement standards, and U.S. federal acquisition rules further emphasize transparency, risk management, and clarity of liability in automated decision systems.' };
            if(solutions.length > 2) solutions[2] = { title: 'Meaningful Human Control', description: '• Incorporate clearly defined decision thresholds and human control oversight, with regulatory reviews triggered when autonomous performance exceeds previously defined limits.\n• Technical safeguards must be equally robust with end-to-end encryption, authenticated command pathways, tampering resistant logging, and layered access controls to protect mission data and ensure traceability of decisions.' };
            if(solutions.length > 3) solutions[3] = { title: 'Binding Legal Frameworks', description: '• Within space law, the Outer Space Treaty and GDPR principles reinforce state responsibility, data minimization, and continuous supervision of private actors.\n• Together, these legal and technical measures establish a secure, accountable, and ethically grounded framework for deploying AI in space while maintaining meaningful human oversight.' };
        }
    }
    
    // --- Render Page ---
    loadingSpinner.classList.add('hidden');

    if (fetchError) {
        errorMessageContainer.textContent = fetchError;
        errorMessageContainer.classList.remove('hidden');
    }

    if (posterContent) {
        mainContentContainer.classList.remove('hidden');
        bottomContentContainer.classList.remove('hidden');

        renderGapsDiagram(gapsDiagramSectionContainer, modalRoot, posterContent.gapTopics);
        renderSolutionSolarSystem(solutionSolarSystemSectionContainer, modalRoot, posterContent.solutions);
        renderPolicyFramework(policyFrameworkSectionContainer);
        renderImplementationSection(implementationSectionContainer);
        renderNextSteps(nextStepsSectionContainer);
        renderReferencesSection(referencesSectionContainer);
    }
}
