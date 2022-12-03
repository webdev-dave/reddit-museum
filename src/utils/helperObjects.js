export const genresObject = {
    ai: {path: '/r/aiArt/', allowYoutubeVideos: false},
    ariel_photography: {path: "/r/BirdsEyeEarth/", allowYoutubeVideos: false},
    architecture:  {path: "/r/ArchitecturePorn/", allowYoutubeVideos: false},
    astro_photography: {path: "/r/LandscapeAstro/", allowYoutubeVideos: false},
    castles: {path: "/r/ImaginaryCastles/", allowYoutubeVideos: false},
    contemporary_mix: {path: "/r/Paintings/", allowYoutubeVideos: false},
    design: {path: "/r/DesignPorn/", allowYoutubeVideos: false},
    digital_paintings: {path: "/r/DigitalPainting/", allowYoutubeVideos: false},
    drawings: {path: "/r/drawing/", allowYoutubeVideos: false},
    film: {path: "/r/filmphotography/", allowYoutubeVideos: false},
    impressionism: {path: "/r/impressionism/", allowYoutubeVideos: false},
    mixed_paintings: {path: "/r/ArtPorn/", allowYoutubeVideos: false},
    modern: {path: "/r/AbstractArt/", allowYoutubeVideos: false},
    landscapes: {path: "/r/EarthPorn/", allowYoutubeVideos: false} ,
    pop_art: {path: "/r/PopArt/", allowYoutubeVideos: false},
    portraits: {path: "/r/portraitphotography/", allowYoutubeVideos: false},
    psychedelic: {path: "/r/PsychedelicArt/", allowYoutubeVideos: false} ,
    sculptures: {path: "/r/SculpturePorn/", allowYoutubeVideos: false},
    short_films: {path: "/r/ShortFilm/", allowYoutubeVideos: true},
    street_art: {path: "/r/StreetArtPorn/", allowYoutubeVideos: false},
    street_photography: {path: "/r/streetphotography/", allowYoutubeVideos: false},
    surrealism: {path: "/r/surrealism/", allowYoutubeVideos: false},
    psychedelic_visuals: {path: "/r/TrippyGIFs/", allowYoutubeVideos: false},
    wildlife: {path: "/r/wildlifephotography/", allowYoutubeVideos: false},
    wild_west: {path: "/r/WildWestPics/", allowYoutubeVideos: false}
}

export const navSubOptions = {
    photography: ["street_photography", "film", "ariel_photography", "landscapes", "astro_photography", "wildlife",  "portraits", {historical: ["wild_west", "color_restoration", "placeholder_2"]}],
    digital: ["ai", "digital_paintings", "psychedelic_visuals", "castles"],
    paintings: ["mixed_paintings", "modern", "surrealism", "drawings", "contemporary_mix"],
    cinema: ["short_films", "option-2"],
    structural: ["architecture", "sculptures"],
    about: [],
  };

export const blankGenresObject = Object.keys(genresObject).reduce((acc, value) => {
    return {...acc, [value]: [] };
}, {});

