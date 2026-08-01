export function VectorTranslate(row) {

    return {
        id: row.id,
        axis: {
            x: row.D - row.A,
            y: row.W - row.S,
            z: row.Y - row.C,
            rot: row.E - row.Q
        },
        station: {
            level: Number(row.level),
            ready: Number(row.ready),
            state: row.state,
            real: row.real,
            ort: row.ort,
            beam: row.beam,
            override: row.override,
            block: row.block
        },
        evo: Number(row.evo),
        geo: Number(row.geo),
        radar: Number(row.radar),
        color: row.color
    };
}
