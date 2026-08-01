export function GEO_CORE(vector) {

    return {
        position: vector.evo === 360 ? "GEO-BEREIT" : "GEO-BLOCKIERT",
        sweep: vector.evo === 360 ? 360 : 0
    };
}
