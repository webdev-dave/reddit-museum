export const genresObject = {
    AI: '/r/aiArt/',
    Architecture: '/r/ArchitecturePorn/',
    Design: '/r/DesignPorn/',
    Impressionism: '/r/impressionism/',
    Pop_Art: '/r/PopArt/',
    Psychedelic: '/r/PsychedelicArt/',
    Street_Art: '/r/StreetArtPorn/',
    Street_Photography: '/r/streetphotography/',
    Surrealism: '/r/surrealism/'
}

export const blankGenresObject = Object.keys(genresObject).reduce((acc, value) => {
    return {...acc, [value]: [] };
}, {});

