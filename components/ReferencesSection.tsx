export function renderReferencesSection(container: HTMLElement) {
    const contentHTML = `
        <div class="container mx-auto px-4 max-w-4xl">
        <div id="references-toggle" role="button" tabindex="0" aria-expanded="false" class="flex items-center justify-center mb-8 cursor-pointer group">
            <h3 class="text-[24px] md:text-[28px] font-bold text-gray-500 uppercase tracking-[0.2em] group-hover:text-gray-300 transition-colors">References</h3>
            <svg id="references-chevron" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6 ml-4 text-gray-500 group-hover:text-gray-300 transition-transform transform">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
        </div>
        <div id="references-content" class="collapsible-content">
            <div>
                <div class="h-96 custom-scrollbar overflow-y-auto pr-4">
                    <div class="text-gray-500 text-xs font-light leading-relaxed space-y-3">
                    <p>Ancient vector blank aged worn paper scroll with yellowed coloring and ragged torn edges | Free Vector. (n.d.). Freepik. Retrieved November 11, 2025, from https://www.freepik.com/free-vector/ancient-vector-blank-aged-worn-paper-scroll-with-yellowed-coloring-ragged-torn-edges_10700662.htm</p>
                    <p>Artificial intelligence in space. (n.d.). Retrieved November 11, 2025, from https://www.esa.int/Enabling_Support/Preparing_for_the_Future/Discovery_and_Preparation/Artificial_intelligence_in_space</p>
                    <p>Baruah, M., & Bhanu, A. P. (2025). Applicability of Artificial Intelligence in Space Activities. IJFMR - International Journal For Multidisciplinary Research, 7(3). https://doi.org/10.36948/ijfmr.2025.v07i03.43992</p>
                    <p>Bengio, Y., Hinton, G., Yao, A., Song, D., Abbeel, P., Darrell, T., Harari, Y. N., Zhang, Y.-Q., Xue, L., Shalev-Shwartz, S., Hadfield, G., Clune, J., Maharaj, T., Hutter, F., Baydin, A. G., McIlraith, S., Gao, Q., Acharya, A., Krueger, D., … Mindermann, S. (2024). Managing extreme AI risks amid rapid progress. Science, 384(6698), 842–845. https://doi.org/10.1126/science.adn0117</p>
                    <p>Bratu, I., Lodder, A., & Linden, T. van der. (2021). Autonomous Space Objects and International Space Law: Navigating the Liability Gap. Indonesian Journal of International Law, 18(3). https://doi.org/10.17304/ijil.vol18.3.818</p>
                    <p>Bratu, I., Lodder, A., & Van Der Linden, T. (2021). Autonomous Space Objects and International Space Law: Navigating the Liability Gap. Indonesian Journal of International Law, 18(3). https://doi.org/10.17304/ijil.vol18.3.818</p>
                    <p>Dantzler, D. (2025, November 10). United Nations Office for Outer Space Affairs soft law policy implementation, phrasing on regulations and next steps for inclusion of private actors [Personal communication].</p>
                    <p>Drapeau des États-Unis. (2025). In Wikipédia. https://fr.wikipedia.org/w/index.php?title=Drapeau_des_%C3%89tats-Unis&oldid=229473670</p>
                    <p>Flag of China. (2025). In Wikipedia. https://en.wikipedia.org/w/index.php?title=Flag_of_China&oldid=1318444726</p>
                    <p>Flag of India. (2025). In Wikipedia. https://en.wikipedia.org/w/index.php?title=Flag_of_India&oldid=1321179428</p>
                    <p>Flag of Japan. (2025). In Wikipedia. https://en.wikipedia.org/w/index.php?title=Flag_of_Japan&oldid=1315443267</p>
                    <p>Flag of Russia. (2025). In Wikipedia. https://en.wikipedia.org/w/index.php?title=Flag_of_Russia&oldid=1316751805</p>
                    <p>Graham, T., Thangavel, K., & Martin, A.-S. (2024). Navigating AI-lien Terrain: Legal liability for artificial intelligence in outer space. Acta Astronautica, 217, 197–207. https://doi.org/10.1016/j.actaastro.2024.01.039</p>
                    <p>Li, A. S. (2025). Autonomizing Outer Space: Updating the Liability Convention for the Rise of Artificial Intelligence (AI). UC Irvine Law Review, 15(1). https://escholarship.org/uc/item/4n97x3hs</p>
                    <p>Marboe, I. (2014, November 20). Space Law Treaties and Soft Law Development. https://www.unoosa.org/documents/pdf/spacelaw/activities/2014/pres02E.pdf</p>
                    <p>Martin, A. S., & Freeland, S. R. (2020). Artificial Intelligence – A Challenging Realm for Regulating Space Activities. Annals of Air and Space Law, XLV, 275–306.</p>
                    <p>Martin, A.-S., & Freeland, S. (2021). The Advent of Artificial Intelligence in Space Activities: New Legal Challenges. Space Policy, 55, 101408. https://doi.org/10.1016/j.spacepol.2020.101408</p>
                    <p>Oche, P. A., Ewa, G. A., & Ibekwe, N. (2024). Applications and Challenges of Artificial Intelligence in Space Missions. IEEE Access, 12, 44481–44509. https://doi.org/10.1109/ACCESS.2021.3132500</p>
                    <p>Outer Space Treaty. (n.d.). Retrieved November 11, 2025, from https://www.unoosa.org/oosa/en/ourwork/spacelaw/treaties/outerspacetreaty.html</p>
                    <p>Pagallo, U., Bassi, E., & Durante, M. (2023). The Normative Challenges of AI in Outer Space: Law, Ethics, and the Realignment of Terrestrial Standards. Philosophy & Technology, 36(2), 23. https://doi.org/10.1007/s13347-023-00626-7</p>
                    <p>Responses to the set of questions provided by the Moderator and Vice – Moderator of the Scheduled Informal Consultations on Space Resources. (2021). United Nations Office for Outer Space Affairs Committee on the Peaceful Uses of Outer Space. https://www.unoosa.org/documents/doc/copuos/space-resources/60_LSC-CRP08-Responses-of-States-on-Space-Resources-27-May-2021-MNr1.docx</p>
                    <p>Thangavel, K., Sabatini, R., Gardi, A., Ranasinghe, K., Hilton, S., Servidia, P., & Spiller, D. (2024). Artificial Intelligence for Trusted Autonomous Satellite Operations. Progress in Aerospace Sciences, 144, 100960. https://doi.org/10.1016/j.paerosci.2023.100960</p>
                    <p>Urban, J. A. (2016). Soft Law: The Key to Security in a Globalized Outer Space. SSRN Electronic Journal. https://doi.org/10.2139/ssrn.2718328</p>
                    <p>Weber, A., & Franke, P. (2024). Space-Domain AI Applications need Rigorous Security Risk Analysis. Proceedings 2024 Workshop on Security of Space and Satellite Systems. Workshop on Security of Space and Satellite Systems, San Diego, CA, USA. https://doi.org/10.14722/spacesec.2024.23008</p>
                    <p>Yazici, T. (Working G. C., Martin, A.-S., Wood, S., Almenar, R., Kucher, L., Zielinski, L. Y., Wedenig, S.-M., & Tricco, G. (2024). Balancing Innovation and Responsibility: International Recommendations for AI Regulation in Space. International Institute of Space Law (IISL).</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    `;
    container.innerHTML = contentHTML;

    // --- References Section Toggle ---
    const referencesToggle = document.getElementById('references-toggle');
    const referencesContent = document.getElementById('references-content');
    const referencesChevron = document.getElementById('references-chevron');

    if (referencesToggle && referencesContent && referencesChevron) {
        referencesToggle.addEventListener('click', () => {
            const isExpanded = referencesContent.classList.toggle('expanded');
            referencesToggle.setAttribute('aria-expanded', String(isExpanded));
            referencesChevron.classList.toggle('rotate-180');
        });
    }
}