export const genresObject = {
    ai: '/r/aiArt/',
    architecture: '/r/ArchitecturePorn/',
    design: '/r/DesignPorn/',
    impressionism: '/r/impressionism/',
    pop_art: '/r/PopArt/',
    psychedelic: '/r/PsychedelicArt/',
    street_srt: '/r/StreetArtPorn/',
    street_photography: '/r/streetphotography/',
    surrealism: '/r/surrealism/'
}

export const navSubOptions = {
    photography: ["Street Photography", "Astrophotography","Natural Landscapes", "Drone Photography", "Long Exposure", "Portraits", "Fashion"],
    digital: ["option-1", "option-2"],
    ai: ["option-1", "option-2"],
    paintings: ["option-1", "option-2"],
    cinema: ["option-1", "option-2"],
    sculptures: ["option-1", "option-2"],
    architecture: ["Architecture", "option-2"],
    about: [],
  };

export const blankGenresObject = Object.keys(genresObject).reduce((acc, value) => {
    return {...acc, [value]: [] };
}, {});

