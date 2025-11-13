export function renderAnimatedBackground(containerId: string) {
    const animatedBg = document.getElementById(containerId);
    if (!animatedBg) return;

    const starLayersData = [
        { count: 150, size: '1px', speed: 0.01 },
        { count: 70, size: '2px', speed: 0.025 },
        { count: 30, size: '3px', speed: 0.04 },
    ];
    starLayersData.forEach(layer => {
        const layerDiv = document.createElement('div');
        layerDiv.className = "absolute left-0 right-0 h-[200%] top-[-50%]";
        layerDiv.style.transform = `translateY(0px)`;
        
        const stars = Array.from({ length: layer.count * 2 }).map(() => ({
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 5 + 3}s`,
            animationDelay: `${Math.random() * 3}s`,
        }));

        stars.forEach(star => {
            const starDiv = document.createElement('div');
            starDiv.className = "absolute bg-white rounded-full";
            starDiv.style.width = layer.size;
            starDiv.style.height = layer.size;
            starDiv.style.top = star.top;
            starDiv.style.left = star.left;
            starDiv.style.animation = `twinkle ${star.animationDuration} ease-in-out infinite`;
            starDiv.style.animationDelay = star.animationDelay;
            layerDiv.appendChild(starDiv);
        });
        animatedBg.appendChild(layerDiv);
    });
    
    window.addEventListener('scroll', () => {
        window.requestAnimationFrame(() => {
            const scrollY = window.scrollY;
            animatedBg.childNodes.forEach((layerDiv, i) => {
                if (layerDiv instanceof HTMLElement) {
                   layerDiv.style.transform = `translateY(${scrollY * starLayersData[i].speed}px)`;
                }
            });
        });
    }, { passive: true });
}
