export function RADAR_CORE(geo) {

    return {
        radar: geo.sweep === 360 ? "RADAR-AKTIV" : "RADAR-AUS",
        sweep: geo.sweep
    };
}
