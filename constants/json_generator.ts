import type { IconsTypes } from "~/assets/icons/IconsList";
import type { LangOptionsType } from "./types/LocalesType"
import colorUtilities from "./colorUtilities";

type DefinationByLanguage = { [key in LangOptionsType]: string }

export const resultsByLocale: DefinationByLanguage = {
    'en-US': `/**

Hey there! Let's define the structure of the JSON data we need
- You can add comments, and the AI will understand them 
  to generate the JSON data accordingly!

*/

// Here is the improved TypeScript example for you:
type FakeUserListItem = {
    username: string; // Act like real.
    bio: string; // About the user (max 150 characters).
    birthdate: string; // I need "mm-dd-yyyy" format
    email: string;
    hobbies: string[];
};

/** 
 * Don't remove "result" variable!
 * This constant holds the final JSON data structure 
 */
const result = {
    users: [] as FakeUserListItem[] // Generate 3 users
};`,
    'ru-RU': `/** 

Привет! Давай определим структуру JSON-данных, которая нам нужна
- Вы можете добавлять комментарии, и ИИ поймет их 
  для генерации JSON-данных соответствующим образом!

*/


// Вот улучшенный пример TypeScript для вас:
type FakeUserListItem = {
    username: string; // Будь как настоящий.
    bio: string; // О пользователе (максимум 150 символов).
    birthdate: string; // Нужен формат "мм-дд-гггг"
    email: string;
    hobbies: string[];
};

/** 
*   Не удаляйте переменную "result"!
*   Эта константа содержит окончательную структуру JSON-данных 
*/
const result = {
    users: [] as FakeUserListItem[] // Сгенерировать 3 пользователей
};`,
    'az-AZ': `/** 

Salam! JSON məlumatlarının strukturunu təyin edək
- Şərhlər əlavə edə bilərsiniz, AI onları başa düşərək 
  JSON məlumatlarını müvafiq şəkildə generasiya edəcək!

*/


// Struktur üçün təkmilləşdirilmiş TypeScript nümunəsi:
type FakeUserListItem = {
    username: string; // Real kimi davran.
    bio: string; // İstifadəçi haqqında (maksimum 150 simvol).
    birthdate: string; // "mm-dd-yyyy" formatı lazımdır
    email: string;
    hobbies: string[];
};

/** 
*   "result" dəyişənini silməyin!
*   Bu sabit dəyişən JSON məlumat strukturunu saxlayır 
*/
const result = {
    users: [] as FakeUserListItem[] // 3 istifadəçi generasiya et
};`
}

export const resultsForClear = `const result = {};`;

export const resultsWithMessage: DefinationByLanguage = {
    'az-AZ': `/** 
* "result" dəyişənini silməyin!
* Bu sabit dəyişən JSON məlumat strukturunu saxlayır
* Sizə lazım olan type-lər və şərhlər əlavə edə bilərsiniz, 
* AI JSON məlumatlarını onlara müvafiq şəkildə generasiya edəcək 
*/
const result = {};`,

    'en-US': `/** 
* Don't remove "result" variable!
* this constant holds the final JSON data structure 
* You can add your type defination and comments, and the AI will understand them 
* to generate the JSON data accordingly!
* Happy coding ;)
*/
const result = {};`,

    'ru-RU': `/** 
* Не удаляйте переменную "result"!
* Эта константа содержит окончательную структуру данных JSON.
* Вы можете добавить определение типа и комментарии, и ИИ их распознает.
* для генерации соответствующих данных JSON!
* Удачного кодирования ;)
*/
const result = {};`,
}

export const resultPresets: { key: string, result: string, icon: IconsTypes, color: string }[] = [
    {
        key: 'how_to_prepare_cappuccino',
        color: "red",
        icon: 'mug_hot',
        result: `type CoffeePreparationStepType = {
  stepNumber: number;
  description: string;
  duration?: number;
  equipment?: string[];
};

type CoffeeType = {
  origin?: string;
  roastLevel: 'light' | 'medium' | 'dark'; 
  isDecaf: boolean; 
  preparationSteps?: CoffeePreparationStepType[]; 
};

const result = {
    target: "Cappuccino",
    info: null as CoffeeType
};`,
    },
    {
        key: 'random_country_data',
        color: colorUtilities('dark').$primaryColor,
        icon: 'map_pin_alt',
        result: `type DetailsType = {
  name: string;
  establishment_date: string; // dd-mm-yyyy 
  location: URL; // Google Maps URL
  population: number;
}

type CountryItem = {
  short_info: string;
  currency: string;
  phone_prefix: string;
  language: string;
  capital: DetailsType;
  ethnic_groups: string[];
} & DetailsType;

const result = {
    random_country: null as CountryItem
};`,
    },
    {
        key: 'planets_with_radius',
        color: "#ffa600ff",
        icon: 'language',
        result: `type SolarSystemPlanets = {
  planet_name: string;
  planet_radius: string; // km
  how_far_world: string; // km
  image_url: URL;
  wikipedia_url: URL;
};

const result = {
    planets: [] as SolarSystemPlanets[]
};`,
    },
    {
        key: 'random_users_list',
        color: "#ff33c7",
        icon: 'person',
        result: `type UserListItem = {
  first_name: string;
  last_name: string;
  middle_name: string | null;
  birthdate: string; // dd-mm-yyyy
  profile_picture: URL; // Use https://randomuser.me
  job: {
    industry: string;
    title: string;
    salary: number // annual
  }
};

const result = {
    users: [] as UserListItem[] // 10x
};`,
    },
    {
        key: 'interesting_facts',
        color: "limegreen",
        icon: 'lightbulb',
        result: `type InfoType = {
    topic: string;
    category: string;
    info: string; // Min 500 char.
    source: string | URL;
}

const result: InfoType = {
    topic: null,
    category: null,
    info: null,
    source: null
};`,
    },
    {
        key: 'learning_new_words',
        color: colorUtilities('dark').$errorColor,
        icon: 'translate',
        result: `type WordType = {
  word: string,
  translate: string,
  pronounce: string, // [pronounce]
  example: string,
  description: string, // min. 100 char.
}
type OptionsType = {
  sl: string,
  tl: string,
  category?: string,
  level: 'A1' | 'B1' | 'C1' | 'A2' | 'B2' | 'C2' | 'random',
  syntactic: 'noun' | 'verb' | 'adjective' | 'adverb' | 'pronoun' | 'preposition' | 'conjunction' | 'interjection' | 'random'
}

const result = {
  words: [] as WordType[],
  options: {
    sl: "ja-JA",
    tl: "en-US",
    category: "random",
    level: "random",
    syntactic: "random"
  } as OptionsType,
  count: 10
}`,
    },
    {
        key: 'movie_suggestions',
        color: '#9932cc',
        icon: 'clapperboard',
        result: `type MovieType = {
  title: string;
  director: string;
  release_year: number;
  genre: string[];
  runtime: number; // minutes
  rating: number; // out of 10
  synopsis: string; // min 150 char
  streaming_platforms: string[];
  imdb_url: URL;
};

type FilterType = {
  genre?: string;
  min_rating?: number;
  max_runtime?: number;
};

const result = {
    movies: [] as MovieType[], // 5x
    filters: {} as FilterType
};`,
    },
    {
        key: 'fitness_plan',
        color: '#0077ffff',
        icon: 'dribbble',
        result: `type ExerciseType = {
  name: string;
  type: 'cardio' | 'strength' | 'flexibility' | 'balance';
  duration: number; // minutes
  reps?: number;
  sets?: number;
  equipment?: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
};

type FitnessPlanType = {
  goal: 'weight_loss' | 'muscle_gain' | 'endurance' | 'general_fitness';
  duration_weeks: number;
  weekly_schedule: ExerciseType[][];
};

const result = {
    plan: null as FitnessPlanType
};`,
    },
    {
        key: 'most_streamed_spotify_songs',
        color: '#1DB954', // Spotify's green
        icon: 'music',
        result: `type SpotifySongType = {
  title: string;
  artist: string;
  album: string;
  release_date: string; // yyyy-mm-dd
  streams: number; // total streams
  duration: number; // seconds
  genres: string[];
  spotify_url: URL;
};

type FilterType = {
  time_range: 'all_time' | 'yearly' | 'weekly' | 'daily';
  limit: number; // max number of songs to return
  genre?: string;
};

const result = {
    songs: [] as SpotifySongType[], // e.g., top 10 songs
    filters: {
      time_range: 'all_time',
      limit: 10,
      genre: null
    } as FilterType
};`,
    },
    {
        key: 'most_viewed_youtube_videos',
        color: '#FF0000', // YouTube's red
        icon: 'youtube',
        result: `type YouTubeVideoType = {
  title: string;
  channel: string;
  views: number; // total views in billions
  upload_date: string; // yyyy-mm-dd
  duration: number; // seconds
  category: 'music' | 'children' | 'entertainment' | 'other';
  video_url: URL;
  thumbnail_url: URL;
};

type FilterType = {
  category?: 'music' | 'children' | 'entertainment' | 'all';
  min_views?: number; // billions
  time_range: 'all_time' | 'yearly' | 'monthly';
};

const result = {
    videos: [] as YouTubeVideoType[], // e.g., top 10 videos
    filters: {
      category: 'all',
      min_views: 5,
      time_range: 'all_time'
    } as FilterType
};`
    }
]