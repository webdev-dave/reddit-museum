export const genresObject = {
    ai: '/r/aiArt/',
    ariel_photography: "/r/BirdsEyeEarth/",
    architecture: '/r/ArchitecturePorn/',
    astro_photography: "/r/LandscapeAstro/",
    design: '/r/DesignPorn/',
    impressionism: '/r/impressionism/',
    mixed_paintings: "/r/ArtPorn/",
    natural_landscapes: "/r/natureporn/",
    pop_art: '/r/PopArt/',
    psychedelic: '/r/PsychedelicArt/',
    short_films: '/r/ShortFilm/',
    street_srt: '/r/StreetArtPorn/',
    street_photography: '/r/streetphotography/',
    surrealism: '/r/surrealism/',
    wildlife: "/r/wildlifephotography/",
}

export const navSubOptions = {
    photography: ["street_photography", "astro_photography", "natural_landscapes", "wildlife", "ariel_photography", "Portraits", "Fashion", {historical: ["wild_west", "placeholder_1", "placeholder_2"]}],
    digital: ["option-1", "option-2"],
    ai: ["option-1", "option-2"],
    paintings: ["mixed_paintings", "option-2"],
    cinema: ["short_films", "option-2"],
    sculptures: ["option-1", "option-2"],
    architecture: ["architecture", "option-2"],
    about: [],
  };

export const blankGenresObject = Object.keys(genresObject).reduce((acc, value) => {
    return {...acc, [value]: [] };
}, {});

