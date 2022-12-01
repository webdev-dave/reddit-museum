export const genresObject = {
    ai: {path: '/r/aiArt/', allowYoutubeVideos: false},
    ariel_photography: {path: "/r/BirdsEyeEarth/", allowYoutubeVideos: false},
    architecture:  {path: "/r/ArchitecturePorn/", allowYoutubeVideos: false},
    astro_photography: {path: "/r/LandscapeAstro/", allowYoutubeVideos: false},
    design: {path: "/r/DesignPorn/", allowYoutubeVideos: false},
    film: {path: "/r/filmphotography/", allowYoutubeVideos: false},
    impressionism: {path: "/r/impressionism/", allowYoutubeVideos: false},
    mixed_paintings: {path: "/r/ArtPorn/", allowYoutubeVideos: false},
    landscapes: {path: "/r/EarthPorn/", allowYoutubeVideos: false} ,
    pop_art: {path: "/r/PopArt/", allowYoutubeVideos: false},
    portraits: {path: "/r/portraitphotography/", allowYoutubeVideos: false},
    psychedelic: {path: "/r/PsychedelicArt/", allowYoutubeVideos: false} ,
    short_films: {path: "/r/ShortFilm/", allowYoutubeVideos: true},
    street_art: {path: "/r/StreetArtPorn/", allowYoutubeVideos: false},
    street_photography: {path: "/r/streetphotography/", allowYoutubeVideos: false},
    surrealism: {path: "/r/surrealism/", allowYoutubeVideos: false},
    wildlife: {path: "/r/wildlifephotography/", allowYoutubeVideos: false},
}

export const navSubOptions = {
    photography: ["street_photography", "film", "ariel_photography", "landscapes", "astro_photography", "wildlife",  "portraits", {historical: ["wild_west", "color_restoration", "placeholder_2"]}],
    digital: ["option-1", "option-2"],
    ai: ["ai", "option-2"],
    paintings: ["mixed_paintings", "option-2"],
    cinema: ["short_films", "option-2"],
    sculptures: ["option-1", "option-2"],
    architecture: ["architecture", "option-2"],
    about: [],
  };

export const blankGenresObject = Object.keys(genresObject).reduce((acc, value) => {
    return {...acc, [value]: [] };
}, {});

