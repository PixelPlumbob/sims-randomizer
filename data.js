
// ============================================================
// DATA — PACKS
// ============================================================
const PACKS = [
  // Base Game
  { id: "base",                label: "Base Game",                type: "base" },

  // Expansion Packs
  { id: "get_to_work",         label: "Get to Work",              type: "expansion" },
  { id: "get_together",        label: "Get Together",             type: "expansion" },
  { id: "city_living",         label: "City Living",              type: "expansion" },
  { id: "cats_and_dogs",       label: "Cats & Dogs",              type: "expansion" },
  { id: "get_famous",          label: "Get Famous",               type: "expansion" },
  { id: "island_living",       label: "Island Living",            type: "expansion" },
  { id: "discover_university", label: "Discover University",      type: "expansion" },
  { id: "eco_lifestyle",       label: "Eco Lifestyle",            type: "expansion" },
  { id: "snowy_escape",        label: "Snowy Escape",             type: "expansion" },
  { id: "cottage_living",      label: "Cottage Living",           type: "expansion" },
  { id: "seasons",             label: "Seasons",                  type: "expansion" },
  { id: "high_school_years",   label: "High School Years",        type: "expansion" },
  { id: "growing_together",    label: "Growing Together",         type: "expansion" },
  { id: "horse_ranch",         label: "Horse Ranch",              type: "expansion" },
  { id: "for_rent",            label: "For Rent",                 type: "expansion" },
  { id: "lovestruck",          label: "Lovestruck",               type: "expansion" },
  { id: "businesses_hobbies",  label: "Businesses & Hobbies",     type: "expansion" },
  { id: "enchanted_by_nature", label: "Enchanted by Nature",      type: "expansion" },
  { id: "royalty_legacy",      label: "Royalty & Legacy",         type: "expansion" },
  { id: "adventure_awaits",    label: "Adventure Awaits",         type: "expansion" },

  // Game Packs
  { id: "outdoor_retreat",     label: "Outdoor Retreat",          type: "gamepack" },
  { id: "spa_day",             label: "Spa Day",                  type: "gamepack" },
  { id: "vampires",            label: "Vampires",                 type: "gamepack" },
  { id: "parenthood",          label: "Parenthood",               type: "gamepack" },
  { id: "jungle_adventure",    label: "Jungle Adventure",         type: "gamepack" },
  { id: "strangerville",       label: "StrangerVille",            type: "gamepack" },
  { id: "realm_of_magic",      label: "Realm of Magic",           type: "gamepack" },
  { id: "star_wars",           label: "Journey to Batuu",         type: "gamepack" },
  { id: "werewolves",          label: "Werewolves",               type: "gamepack" },
  { id: "home_chef_hustle",    label: "Home Chef Hustle",         type: "gamepack" },
  { id: "life_and_death",      label: "Life & Death",             type: "gamepack" },
  { id: "my_wedding_stories",  label: "My Wedding Stories",       type: "gamepack" },
  { id: "dream_home_decor",    label: "Dream Home Decorator",     type: "gamepack" },

  // Stuff Packs
  { id: "nifty_knitting",      label: "Nifty Knitting",           type: "stuff" },
  { id: "paranormal",          label: "Paranormal Stuff",         type: "stuff" },
  { id: "moschino_stuff",      label: "Moschino Stuff",           type: "stuff" },

  // Kits
  { id: "bust_the_dust",       label: "Bust the Dust Kit",        type: "kit" },
  { id: "crystal_creations",   label: "Crystal Creations Kit",    type: "kit" },

  // Game Events
  { id: "forever_friends",     label: "Forever Friends Event",    type: "event" },
  { id: "cozy_celebrations",   label: "Cozy Celebrations Event",  type: "event" },
  { id: "lost_legacies",       label: "Lost Legacies Event",      type: "event" },
  { id: "blast_from_the_past", label: "Blast from the Past Event",type: "event" },
];

// ============================================================
// DATA — OCCULT TYPES
// ============================================================
const OCCULTS = [
  { id: "sim",         label: "Sim",         pack: "base",               weight: 10 },
  { id: "vampire",     label: "Vampire",     pack: "vampires",           weight: 1 },
  { id: "alien",       label: "Alien",       pack: "get_to_work",        weight: 1 },
  { id: "spellcaster", label: "Spellcaster", pack: "realm_of_magic",     weight: 1 },
  { id: "werewolf",    label: "Werewolf",    pack: "werewolves",         weight: 1 },
  { id: "mermaid",     label: "Mermaid",     pack: "island_living",      weight: 1 },
  { id: "fairy",       label: "Fairy",       pack: "enchanted_by_nature",weight: 1 },
];

// ============================================================
// DATA — WORLDS
// ============================================================
const WORLDS = [
  // Base Game
  { id: "willow_creek",      label: "Willow Creek",         pack: "base" },
  { id: "oasis_springs",     label: "Oasis Springs",        pack: "base" },
  { id: "newcrest",          label: "Newcrest",             pack: "base" },
  // Expansion Packs
  { id: "magnolia_promenade",label: "Magnolia Promenade",   pack: "get_to_work" },
  { id: "windenburg",        label: "Windenburg",           pack: "get_together" },
  { id: "san_myshuno",       label: "San Myshuno",          pack: "city_living" },
  { id: "forgotten_hollow",  label: "Forgotten Hollow",     pack: "vampires" },
  { id: "brindleton_bay",    label: "Brindleton Bay",       pack: "cats_and_dogs" },
  { id: "del_sol_valley",    label: "Del Sol Valley",       pack: "get_famous" },
  { id: "sulani",            label: "Sulani",               pack: "island_living" },
  { id: "glimmerbrook",      label: "Glimmerbrook",         pack: "realm_of_magic" },
  { id: "britechester",      label: "Britechester",         pack: "discover_university" },
  { id: "evergreen_harbor",  label: "Evergreen Harbor",     pack: "eco_lifestyle" },
  { id: "mt_komorebi",       label: "Mt. Komorebi",         pack: "snowy_escape" },
  { id: "henford_on_bagley", label: "Henford-on-Bagley",    pack: "cottage_living" },
  { id: "tartosa",           label: "Tartosa",              pack: "my_wedding_stories" },
  { id: "moonwood_mill",     label: "Moonwood Mill",        pack: "werewolves" },
  { id: "copperdale",        label: "Copperdale",           pack: "high_school_years" },
  { id: "san_sequoia",       label: "San Sequoia",          pack: "growing_together" },
  { id: "chestnut_ridge",    label: "Chestnut Ridge",       pack: "horse_ranch" },
  { id: "tomarang",          label: "Tomarang",             pack: "for_rent" },
  { id: "ciudad_enamorada",  label: "Ciudad Enamorada",     pack: "lovestruck" },
  { id: "ravenwood",         label: "Ravenwood",            pack: "life_and_death" },
  { id: "nordhaven",         label: "Nordhaven",            pack: "businesses_hobbies" },
  { id: "innisgreen",        label: "Innisgreen",           pack: "enchanted_by_nature" },
  { id: "gibbi_point",       label: "Gibbi Point",          pack: "adventure_awaits" },
  { id: "ondarion",          label: "Ondarion",             pack: "royalty_legacy" },
];

// ============================================================
// DATA — CAREERS
// ============================================================
const CAREERS = [
  // Base Game — full careers (adult/elder only)
  { id: "astronaut",           label: "Astronaut",              pack: "base",               stages: ["adult","elder"] },
  { id: "athlete",             label: "Athlete",                pack: "base",               stages: ["adult","elder"] },
  { id: "business",            label: "Business",               pack: "base",               stages: ["adult","elder"] },
  { id: "criminal",            label: "Criminal",               pack: "base",               stages: ["adult","elder"] },
  { id: "culinary",            label: "Culinary",               pack: "base",               stages: ["adult","elder"] },
  { id: "entertainer",         label: "Entertainer",            pack: "base",               stages: ["adult","elder"] },
  { id: "freelancer",          label: "Freelancer",             pack: "base",               stages: ["adult","elder"] },
  { id: "painter",             label: "Painter",                pack: "base",               stages: ["adult","elder"] },
  { id: "secret_agent",        label: "Secret Agent",           pack: "base",               stages: ["adult","elder"] },
  { id: "tech_guru",           label: "Tech Guru",              pack: "base",               stages: ["adult","elder"] },
  { id: "writer",              label: "Writer",                 pack: "base",               stages: ["adult","elder"] },
  { id: "critic",              label: "Critic",                 pack: "city_living",        stages: ["adult","elder"] },
  { id: "politician",          label: "Politician",             pack: "city_living",        stages: ["adult","elder"] },
  { id: "social_media",        label: "Social Media",           pack: "city_living",        stages: ["adult","elder"] },
  { id: "style_influencer",    label: "Style Influencer",       pack: "city_living",        stages: ["adult","elder"] },
  { id: "gardener",            label: "Gardener",               pack: "seasons",            stages: ["adult","elder"] },
  { id: "actor",               label: "Actor",                  pack: "get_famous",         stages: ["adult","elder"] },
  { id: "conservationist",     label: "Conservationist",        pack: "island_living",      stages: ["adult","elder"] },
  { id: "education",           label: "Education",              pack: "discover_university",stages: ["adult","elder"] },
  { id: "engineer",            label: "Engineer",               pack: "discover_university",stages: ["adult","elder"] },
  { id: "law",                 label: "Law",                    pack: "discover_university",stages: ["adult","elder"] },
  { id: "civil_designer",      label: "Civil Designer",         pack: "eco_lifestyle",      stages: ["adult","elder"] },
  { id: "salaryperson",        label: "Salaryperson",           pack: "snowy_escape",       stages: ["adult","elder"] },
  { id: "military",            label: "Military",               pack: "snowy_escape",        stages: ["adult","elder"] },
  { id: "romance_consultant",  label: "Romance Consultant",     pack: "lovestruck",          stages: ["adult","elder"] },
  { id: "reaper",              label: "Reaper",                 pack: "life_and_death",      stages: ["adult","elder"] },
  { id: "undertaker",          label: "Undertaker",             pack: "life_and_death",      stages: ["adult","elder"] },
  { id: "interior_decorator",  label: "Interior Decorator",     pack: "dream_home_decor",    stages: ["adult","elder"] },
  { id: "naturopath",          label: "Naturopath",             pack: "enchanted_by_nature", stages: ["adult","elder"] },
  { id: "park_worker",         label: "Park Worker",            pack: "adventure_awaits",    stages: ["adult","elder"] },
  { id: "noble",               label: "Noble",                  pack: "royalty_legacy",      stages: ["adult","elder"] },
  { id: "self_employment",     label: "Self-Employment",        pack: "get_to_work",         stages: ["adult","elder"] },
  { id: "scientist",           label: "Scientist",              pack: "get_to_work",         stages: ["adult","elder"] },
  { id: "detective",           label: "Detective",              pack: "get_to_work",         stages: ["adult","elder"] },
  { id: "doctor",              label: "Doctor",                 pack: "get_to_work",         stages: ["adult","elder"] },
  { id: "small_business",      label: "Small Business Owner",   pack: "businesses_hobbies",  stages: ["adult","elder"] },
  { id: "stay_at_home",        label: "Stay at Home Parent",    pack: "base",                stages: ["adult","elder"] },
  { id: "veterinarian",        label: "Veterinarian",           pack: "cats_and_dogs",       stages: ["adult","elder"] },
  // Part-time jobs (teens + adults)
  { id: "babysitter",          label: "Babysitter",             pack: "base",               stages: ["teen","adult","elder"], partTime: true },
  { id: "barista",             label: "Barista",                pack: "base",               stages: ["teen","adult","elder"], partTime: true },
  { id: "fast_food",           label: "Fast Food Employee",     pack: "base",               stages: ["teen","adult","elder"], partTime: true },
  { id: "manual_laborer",      label: "Manual Laborer",         pack: "base",               stages: ["teen","adult","elder"], partTime: true },
  { id: "retail",              label: "Retail Employee",        pack: "base",               stages: ["teen","adult","elder"], partTime: true },
  { id: "diver",               label: "Diver",                  pack: "island_living",      stages: ["teen","adult","elder"], partTime: true },
  { id: "fisherman",           label: "Fisherman",              pack: "island_living",      stages: ["teen","adult","elder"], partTime: true },
  { id: "lifeguard",           label: "Lifeguard",              pack: "island_living",      stages: ["teen","adult","elder"], partTime: true },
  { id: "simfluencer",         label: "Simfluencer",            pack: "high_school_years",  stages: ["teen","adult","elder"], partTime: true },
  { id: "video_game_streamer", label: "Video Game Streamer",    pack: "high_school_years",  stages: ["teen","adult","elder"], partTime: true },
  { id: "handyperson",         label: "Handyperson",            pack: "for_rent",           stages: ["teen","adult","elder"], partTime: true },
  { id: "odd_jobs",            label: "Odd Jobs",               pack: "island_living",      stages: ["teen","adult","elder"], partTime: true },
  // Unemployed
  { id: "unemployed",          label: "Unemployed",             pack: "base",               stages: ["teen","adult","elder"] },
];

// ============================================================
// DATA — AFTER-SCHOOL ACTIVITIES
// Separate from career — shown alongside school career on the card.
// child: scouts, drama club only
// teen:  all activities
// ============================================================
const AFTERSCHOOL = [
  { id: "scouts",           label: "Scouts",              pack: "base",               stages: ["child","teen"] },
  { id: "drama_club",       label: "Drama Club",          pack: "base",               stages: ["child","teen"] },
  { id: "cheer_team",       label: "Cheer Team",          pack: "base",               stages: ["teen"] },
  { id: "chess_team",       label: "Chess Team",          pack: "base",               stages: ["teen"] },
  { id: "computer_team",    label: "Computer Team",       pack: "base",               stages: ["teen"] },
  { id: "football_team",    label: "Football Team",       pack: "base",               stages: ["teen"] },
  { id: "esports",          label: "E-Sports Competitor", pack: "discover_university",stages: ["teen"] },
  { id: "soccer_team",      label: "Soccer Team",         pack: "discover_university",stages: ["teen"] },
];

// ============================================================
// DATA — FREELANCE JOBS
// Assigned when career = "freelancer". Each job has its own agency name.
// ============================================================
const FREELANCE_JOBS = [
  { id: "freelance_programmer",    label: "Freelance Programmer",          pack: "base" },
  { id: "freelance_artist",        label: "Freelance Artist",              pack: "base" },
  { id: "freelance_writer",        label: "Freelance Writer",              pack: "base" },
  { id: "paranormal_investigator", label: "Paranormal Investigator",       pack: "paranormal" },
  { id: "fabricator",              label: "Fabricator",                    pack: "eco_lifestyle" },
  { id: "candle_maker",            label: "Candle Maker",                  pack: "eco_lifestyle" },
  { id: "juice_fizzer",            label: "Juice Fizzer",                  pack: "eco_lifestyle" },
  { id: "freelance_photographer",  label: "Freelance Fashion Photographer",pack: "moschino_stuff" },
];

// ============================================================
// DATA — RELATIONSHIP
// Marital status and kids are generated separately.
// Only shown for adult and elder life stages.
// ============================================================
const MARITAL_STATUSES = [
  { id: "single",           label: "Single" },
  { id: "engaged",           label: "Engaged" },
  { id: "married",          label: "Married" },
];

const KIDS_OPTIONS = [
  { id: "none",       label: "No kids" },
  { id: "two",    label: "2 kids" },
  { id: "one",    label: "1 kid" },
  { id: "three_plus", label: "3+ kids" },
];

// ============================================================
// DATA — BONUS TRAITS
// ============================================================
const BONUS_TRAITS = {
  high_metabolism:   { id: "high_metabolism",   label: "High Metabolism",   desc: "It is easier to stay fit and trim when you have High Metabolism." },
  muser:             { id: "muser",             label: "Muser",             desc: "Musers get better boosts to their skills when they are inspired." },
  dastardly:         { id: "dastardly",         label: "Dastardly",         desc: "Dastardly Sims perform stronger and more successful mean interactions." },
  fairy_influence:   { id: "fairy_influence",   label: "Fairy Influence",   desc: "These Sims seem to leave a big impact! Relationship fluctuations are bigger when socializing with Fairy Sims and Gnomes." },
  domestic:          { id: "domestic",          label: "Domestic",          desc: "Domestic Sims will see their familiar relationships grow stronger faster." },
  essence_of_flavor: { id: "essence_of_flavor", label: "Essence of Flavor", desc: "Sims with Essence of Flavor make higher quality food and drink." },
  business_savvy:    { id: "business_savvy",    label: "Business Savvy",    desc: "Business Savvy Sims earn more money from their careers." },
  quick_learner:     { id: "quick_learner",     label: "Quick Learner",     desc: "Quick Learners build all skills a little bit faster!" },
  home_turf:         { id: "home_turf",         label: "Home Turf",         desc: "These Sims become Happy when they are in their home neighbourhood." },
  alluring:          { id: "alluring",          label: "Alluring",          desc: "Alluring Sims are more successful at romance than others." },
  collector:         { id: "collector",         label: "Collector",         desc: "Collectors can find rare collectibles more often!" },
  gregarious:        { id: "gregarious",        label: "Gregarious",        desc: "Gregarious Sims build friendly relationships faster." },
  spa_membership:    { id: "spa_membership",    label: "Spa Membership",    desc: "All fees at Spas are waived!" },
  lunar_confidant:   { id: "lunar_confidant",   label: "Lunar Confidant",   desc: "These Sims get an initial relationship boost when introducing themselves to werewolves." },
  animal_affection:  { id: "animal_affection",  label: "Animal Affection",  desc: "Relationships with animals begin at higher values." },
  relatable:         { id: "relatable",         label: "Relatable",         desc: "Relatable Sims build friendly relationships with fellow teens faster." },
  prepared_voyager:  { id: "prepared_voyager",  label: "Prepared Voyager",  desc: "Sims who are Prepared Voyagers fill up their needs slightly when travelling." },
};

// ============================================================
// DATA — TRAITS
// ============================================================
const TRAITS = [
  { id:"cautious",               label:"Cautious",               pack:"base",               stages:["infant"],                          desc:"These Sims appreciate the familiar but are slow to warm up to new experiences, locations, and Sims." },
  { id:"sensitive",              label:"Sensitive",              pack:"base",               stages:["infant"],                          desc:"These Sims are prone to diaper rash, are often picky with food, and can more easily become overstimulated by too much play and social interaction; however, they also rest more peacefully through the night when soothed." },
  { id:"calm",                   label:"Calm",                   pack:"base",               stages:["infant"],                          desc:"These Sims like to watch the world, are less likely to cry or become angry, and don't grow tired of activities as easily as other infants; however, they are less likely to explore the world on their own." },
  { id:"intense",                label:"Intense",                pack:"base",               stages:["infant"],                          desc:"These Sims have big emotions and are easily entertained, but they are also more difficult to calm when in a bad mood." },
  { id:"wiggly",                 label:"Wiggly",                 pack:"base",               stages:["infant"],                          desc:"These Sims are always on the go and want to play and move about; however they often struggle to fall asleep or pay attention for extended periods of time." },
  { id:"sunny",                  label:"Sunny",                  pack:"base",               stages:["infant"],                          desc:"These Sims are bursting with smiles and giggles and enjoy engaging with other Sims, but they do require more social attention." },
  { id:"angelic",     label:"Angelic",     pack:"base", stages:["toddler"], desc:"Idyllic, easygoing Toddlers. They are never defiant and they don't throw a tantrum. They can easily talk to strangers." },
  { id:"charmer",     label:"Charmer",     pack:"base", stages:["toddler"], desc:"These Toddlers love to socialize. They earn Communication skill faster, and don't suffer Stranger Danger from strangers. They can Share the Love with other Sims." },
  { id:"clingy",      label:"Clingy",      pack:"base", stages:["toddler"], desc:"These shy Toddlers avoid Sims outside the household and get sad if left behind. They gain extra skill when taught. And they recover faster from bad moods when Comforted." },
  { id:"fussy",       label:"Fussy",       pack:"base", stages:["toddler"], desc:"Tiny trouble-makers who love to Cry, cause trouble, and Throw Fits. But being noticed makes them Happy and helps them overcome negative Moodlets." },
  { id:"independent", label:"Independent", pack:"base", stages:["toddler"], desc:"These Toddlers love their freedom, and don't like to take orders from caregivers. They gain extra skill when they are left alone, and need less Attention than other Toddlers." },
  { id:"inquisitive", label:"Inquisitive", pack:"base", stages:["toddler"], desc:"Curious explorers. These Toddlers gain Thinking skill slightly faster. They are happiest when learning something, and sad if they haven't learned anything lately." },
  { id:"silly",       label:"Silly",       pack:"base", stages:["toddler"], desc:"Goofy and curious. These Toddlers love to tell jokes and get Playful. They earn Imagination skill slightly faster." },
  { id:"wild",        label:"Wild",        pack:"base", stages:["toddler"], desc:"Spirited and full of Energy. These Toddlers love to explore and get Energized. They earn Movement skill slightly faster. They get sad if they haven't been outside in a while." },
  { id:"active",                 label:"Active",                 pack:"base",               stages:["child","teen","adult","elder"], desc:"These Sims tend to be Energized, can Pump Up other Sims, and may become upset if they don't exercise for a period of time." },
  { id:"art_lover",              label:"Art Lover",              pack:"base",               stages:["child","teen","adult","elder"], desc:"These Sims gain powerful Moodlets from Viewing works of art and can Admire Art and Discuss Art in unique ways." },
  { id:"bookworm",               label:"Bookworm",               pack:"base",               stages:["child","teen","adult","elder"], desc:"These Sims gain powerful Moodlets from reading Books and can Analyze Books and Discuss Books in unique ways." },
  { id:"cheerful",               label:"Cheerful",               pack:"base",               stages:["child","teen","adult","elder"], desc:"These Sims tend to be Happier than other Sims." },
  { id:"childish",               label:"Childish",               pack:"base",               stages:["child","teen","adult","elder"], desc:"These Sims gain powerful Moodlets from watching the Kids Network, become Playful when playing with Children, and become Happy when playing with Children's toys." },
  { id:"clumsy",                 label:"Clumsy",                 pack:"base",               stages:["child","teen","adult","elder"], desc:"These Sims tend to fail more often at physical activities and tend to laugh at failure instead of becoming upset." },
  { id:"creative",               label:"Creative",               pack:"base",               stages:["child","teen","adult","elder"], desc:"These Sims tend to be Inspired, can Share Creative Ideas with other Sims, and may become upset if they're not creative for a period of time." },
  { id:"erratic",                label:"Erratic",                pack:"base",               stages:["child","teen","adult","elder"], desc:"These Sims can Talk to themselves and have unpredictable Emotions." },
  { id:"evil",                   label:"Evil",                   pack:"base",               stages:["child","teen","adult","elder"], desc:"These Sims become Happy around Sims with negative Moodlets, can Laugh Maniacally and Discuss Evil Plans, and become Angry when interacting with Good Sims." },
  { id:"geek",                   label:"Geek",                   pack:"base",               stages:["child","teen","adult","elder"], desc:"These Sims become Happy when Reading Sci-Fi or Playing Video Games, may become Tense if they haven't played much, are better at finding Collectibles, and can Discuss Geek Things with other Geek Sims." },
  { id:"genius",                 label:"Genius",                 pack:"base",               stages:["child","teen","adult","elder"], desc:"These Sims tend to be Focused, can Share Ideas with other Sims, and may become upset if they haven't improved their Mental Skills for some time." },
  { id:"gloomy",                 label:"Gloomy",                 pack:"base",               stages:["child","teen","adult","elder"], desc:"These Sims tend to be Sad, can Share Melancholy Thoughts to other Sims, and while sad, gain a boost to their Creative Skill." },
  { id:"glutton",                label:"Glutton",                pack:"base",               stages:["child","teen","adult","elder"], desc:"These Sims have a greater negative reaction to Hunger, always enjoy eating, no matter the quality of the food, and will eat Spoiled Food." },
  { id:"good",                   label:"Good",                   pack:"base",               stages:["child","teen","adult","elder"], desc:"These Sims become Happy around Sims with positive Moodlets, can Donate to Charity, become Sad with interacting with Evil Sims, and can Discuss World Peace." },
  { id:"goofball",               label:"Goofball",               pack:"base",               stages:["child","teen","adult","elder"], desc:"These Sims tend to be Playful." },
  { id:"hot_headed",             label:"Hot-Headed",             pack:"base",               stages:["child","teen","adult","elder"], desc:"These Sims tend to be Angry, can Rile up other Sims, and become Angry when targeted with Mischief." },
  { id:"kleptomaniac",           label:"Kleptomaniac",           pack:"base",               stages:["child","teen","adult","elder"], desc:"These Sims don't mind \"borrowing\" things from others with a simple swipe, but will get Tense when they have not swiped anything in a while." },
  { id:"lazy",                   label:"Lazy",                   pack:"base",               stages:["child","teen","adult","elder"], desc:"These Sims gain powerful Moodlets from Watching TV or Napping as well as from Comfortable furniture, become Fatigued more quickly from exercise, and grow Tense when performing household chores." },
  { id:"loner",                  label:"Loner",                  pack:"base",               stages:["child","teen","adult","elder"], desc:"These Sims become Happy when alone, do not receive negative Moodlets when their Social Need is low, become Tense around strangers, and become Embarrassed more often by social rejection." },
  { id:"loves_outdoors",         label:"Loves Outdoors",         pack:"base",               stages:["child","teen","adult","elder"], desc:"These Sims can Enthuse about Nature to other Sims and become Happy when Outdoors." },
  { id:"mean",                   label:"Mean",                   pack:"base",               stages:["child","teen","adult","elder"], desc:"These Sims become Happy when being Mean or Mischievous to other Sims and become Confident after winning a fight." },
  { id:"music_lover",            label:"Music Lover",            pack:"base",               stages:["child","teen","adult","elder"], desc:"These Sims gain powerful Moodlets and boost their Fun Need when Listening to Music and become Happy when playing instruments." },
  { id:"neat",                   label:"Neat",                   pack:"base",               stages:["child","teen","adult","elder"], desc:"These Sims become Happy and have Fun when performing household chores, can have a Cleaning Frenzy, and become really Uncomfortable in dirty surroundings." },
  { id:"outgoing",               label:"Outgoing",               pack:"base",               stages:["child","teen","adult","elder"], desc:"These Sims gain powerful Moodlets from Friendly socialization, have their Social need decay quickly, and gain more negative Moodlets when their Social need is low." },
  { id:"perfectionist",          label:"Perfectionist",          pack:"base",               stages:["child","teen","adult","elder"], desc:"These Sims take longer to craft items but tend to make them higher quality, gain powerful Moodlets after crafting a high quality item, and gain negative Moodlets after crafting a low quality item." },
  { id:"practice_makes_perfect", label:"Practice Makes Perfect", pack:"base",               stages:["child","teen","adult","elder"], desc:"Sims with this trait learn skills faster, even if they are a bit slower at first." },
  { id:"self_assured",           label:"Self-Assured",           pack:"base",               stages:["child","teen","adult","elder"], desc:"These Sims tend to be Confident." },
  { id:"slob",                   label:"Slob",                   pack:"base",               stages:["child","teen","adult","elder"], desc:"These Sims are not affected by dirty surroundings, make household items dirtier faster, and can Rummage for Food in garbage." },
  { id:"vegetarian",             label:"Vegetarian",             pack:"base",               stages:["child","teen","adult","elder"], desc:"These Sims will actively avoid eating foods that contain meat products and can become sick if they eat such foods." },
  { id:"squeamish",              label:"Squeamish",              pack:"outdoor_retreat",    stages:["child","teen","adult","elder"], desc:"Squeamish Sims are nauseated by the sight of creepy crawlies, vomiting, violence and death. These Sims become Uncomfortable near anything dirty." },
  { id:"recycle_disciple",       label:"Recycle Disciple",       pack:"eco_lifestyle",      stages:["child","teen","adult","elder"], desc:"These Sims are rabid recyclers that benefit from recycling and rummaging for bits and pieces, but should they go too long without indulging in their hobby they become tense." },
  { id:"green_fiend",            label:"Green Fiend",            pack:"eco_lifestyle",      stages:["child","teen","adult","elder"], desc:"These Sims are happiest when living on a green street and will continuously work towards making their environment more eco-friendly." },
  { id:"adventurous",            label:"Adventurous",            pack:"snowy_escape",       stages:["child","teen","adult","elder"], desc:"These Sims seek out new and unique experiences." },
  { id:"proper",                 label:"Proper",                 pack:"snowy_escape",       stages:["child","teen","adult","elder"], desc:"These Sims tend to disapprove of other Sims' improper behavior such as Mean or Mischievous socials, but find themselves happier in Formal Outfits and have a much easier time with Friendly and Romantic socials." },
  { id:"child_of_the_islands",   label:"Child of the Islands",   pack:"island_living",      stages:["child","teen","adult","elder"], desc:"These Sims experience a spiritual connection to islands of Sulani. Honor the islands by partaking in their culture, summon powerful elementals and reap the rewards of their blessings—or the consequences of their disfavor." },
  { id:"child_of_the_ocean",     label:"Child of the Ocean",     pack:"island_living",      stages:["child","teen","adult","elder"], desc:"Answer the call of the ocean! Sims with this trait will prefer water related activities and feel closer to denizens of the sea." },
  { id:"child_of_the_village",   label:"Child of the Village",   pack:"for_rent",           stages:["child","teen","adult","elder"], desc:"These Sims love feeling anchored to their community and Tomarani culture. Keeping in touch with loved ones and engaging in activities that remind them of home is important for being Happy." },
  { id:"insider",                label:"Insider",                pack:"get_together",       stages:["child","teen","adult","elder"], desc:"These Sims love being in Clubs, and tend to be happiest when surrounded by their friends." },
  { id:"cat_lover",              label:"Cat Lover",              pack:"cats_and_dogs",      stages:["child","teen","adult","elder"], desc:"These Sims tend to make cats their companions, preferring the company of cats to other Sims." },
  { id:"dog_lover",              label:"Dog Lover",              pack:"cats_and_dogs",      stages:["child","teen","adult","elder"], desc:"These Sims love to be near dogs. They will gain relationships faster with dogs and socialize with dogs more than the average Sim." },
  { id:"horse_lover",            label:"Horse Lover",            pack:"horse_ranch",        stages:["child","teen","adult","elder"], desc:"These Sims share a strong bond with Horses. They have an easier time socializing with and caring for Horses than other Sims." },
  { id:"animal_enthusiast",      label:"Animal Enthusiast",      pack:"cottage_living",     stages:["child","teen","adult","elder"], desc:"These Sims are obsessed with animals, and will seek their company often. They will have an easier time caring for animals and getting closer to them." },
  { id:"lactose_intolerant",     label:"Lactose Intolerant",     pack:"cottage_living",     stages:["child","teen","adult","elder"], desc:"These Sims will become sick if they eat dairy, but will feel great if they have avoided it for a while." },
  { id:"competitive",            label:"Competitive",            pack:"adventure_awaits",   stages:["child","teen","adult","elder"], desc:"Competitive Sims have to be the best at anything they put their sweaty focus on, especially games and physical activities. They're all about winning, so they take losing really personally." },
  { id:"macabre",                label:"Macabre",                pack:"life_and_death",     stages:["child","teen","adult","elder"], desc:"Embrace your inner darkness - and your occasional intrusions of light. Macabre Sims are all about being their best, unique Sim self while still reveling in all that life (and the afterlife) has to offer." },
  { id:"skeptical",              label:"Skeptical",              pack:"life_and_death",     stages:["child","teen","adult","elder"], desc:"Not entirely trusting of the majority of things you see or hear? Skeptical Sims like to challenge the universe to provide concrete proof that something is indeed as it might appear." },
  { id:"plant_lover",            label:"Plant Lover",            pack:"enchanted_by_nature",stages:["child","teen","adult","elder"], desc:"Plant Lover Sims treat each and every plant like the little Sim they are. Being a friend to plants is not always easy on a Plant Lover's emotions, but luckily these Sims don't need any skill to share their special interest, just a big heart!" },
  { id:"active_imagination",     label:"Active Imagination",     pack:"forever_friends",    stages:["child"],                       desc:"These Sims gain boosts from imaginative activities gaining creative Skills faster but may get overwhelmed at times." },
  { id:"ambitious",              label:"Ambitious",              pack:"base",               stages:["teen","adult","elder"], desc:"These Sims gain powerful Moodlets from career success, gain negative Moodlets from career failure, and may become Tense if not promoted." },
  { id:"family_oriented",        label:"Family-Oriented",        pack:"base",               stages:["teen","adult","elder"], desc:"These Sims become Happy around family members, become Sad if they don't interact with family for a period of time, and can Boast about Family." },
  { id:"noncommittal",           label:"Noncommittal",           pack:"base",               stages:["teen","adult","elder"], desc:"These Sims become Tense after a while in the same job or relationship, become Happy when they Quit a Job or Break Off a relationship, take longer to Propose, and can Discuss their Fear of Commitment." },
  { id:"romantic",               label:"Romantic",               pack:"base",               stages:["teen","adult","elder"], desc:"These Sims tend to be Flirty and may become Sad if they don't have any Romantic social interactions for a period of time." },
  { id:"foodie",                 label:"Foodie",                 pack:"base",               stages:["teen","adult","elder"], desc:"These Sims become Happy and have Fun when eating good food, become Uncomfortable when eating bad food, and can Watch Cooking Shows for ideas." },
  { id:"materialistic",          label:"Materialistic",          pack:"base",               stages:["teen","adult","elder"], desc:"These Sims can Admire and Brag about Possessions and become Sad when they haven't purchased a new item for a period of time." },
  { id:"bro",                    label:"Bro",                    pack:"base",               stages:["teen","adult","elder"], desc:"These Sims can Bro Hug other Bros, gain Confidence around other Bros, and become Energized from Watching Sports." },
  { id:"hates_children",         label:"Hates Children",         pack:"base",               stages:["teen","adult","elder"], desc:"These Sims become Angry around Children, become Tense after Try for a Baby, and can be Mean to Children." },
  { id:"jealous",                label:"Jealous",                pack:"base",               stages:["teen","adult","elder"], desc:"These Sims get Jealous more easily than other Sims. They gain a boost of Confidence from being around their significant other, but get Tense if they haven't seen them recently." },
  { id:"loyal",                  label:"Loyal",                  pack:"base",               stages:["teen","adult","elder"], desc:"Loyal Sims value their relationships and fully commit to them, whether they are friendship, romance or even work. They avoid lying and cheating because their loved ones' trust is very important to them." },
  { id:"snob",                   label:"Snob",                   pack:"base",               stages:["teen","adult","elder"], desc:"These Sims can Critique Work on low quality items, are bored by \"low brow\" television, and gain Confidence around other Snob Sims." },
  { id:"unflirty",               label:"Unflirty",               pack:"city_living",        stages:["teen","adult","elder"], desc:"These Sims get Tense around Flirty Sims and seldom get Flirty themselves. It's difficult for them to be Romantic in public." },
  { id:"dance_machine",          label:"Dance Machine",          pack:"get_together",       stages:["teen","adult","elder"], desc:"These Sims can't wait to get down, boogie, and party all night! When at venues like Bars, Nightclubs, and Lounges, these Sims can get a burst of energy with the Party Time interaction." },
  { id:"maker",                  label:"Maker",                  pack:"eco_lifestyle",      stages:["teen","adult","elder"], desc:"These Sims become happy when making things. They become sad when it's been too long since completing a project on a Fabricator, Candlemaking Station, Juice Fizzer, or Woodworking Table. They do not receive negative effects from crafting or repair failures." },
  { id:"freegan",                label:"Freegan",                pack:"eco_lifestyle",      stages:["teen","adult","elder"], desc:"These Sims reject consumerism and prefer to reduce wasteful spending by any means. They enjoy finding re-used or thrown away goods and foods. In fact, they have the best luck at finding the highest-quality treasures in Dumpsters!" },
  { id:"cringe",                 label:"Cringe",                 pack:"for_rent",           stages:["teen","adult","elder"], desc:"Sims who are obnoxiously oblivious and oftentimes met with polarizing reactions. Cringe Sims can be socially unaware of their surroundings at times, but have an adorable enthusiasm for life." },
  { id:"generous",               label:"Generous",               pack:"for_rent",           stages:["teen","adult","elder"], desc:"Caring, empathetic, and patient. These Sims are happiest when offering their time and money to help others. Everyone loves Generous Sims, but they can be a little too brazen with their donations." },
  { id:"nosy",                   label:"Nosy",                   pack:"for_rent",           stages:["teen","adult","elder"], desc:"Sims who thrive on gossip, snooping, and spying. They have incredibly poor boundaries and don't quite understand what personal space is, but they will discover secrets by any means necessary." },
  { id:"party_animal",           label:"Party Animal",           pack:"high_school_years",  stages:["teen","adult","elder"], desc:"These Sims tend to enjoy parties and letting every other Sim know by hyping up a crowd and performing party tricks." },
  { id:"self_absorbed",          label:"Self-Absorbed",          pack:"get_famous",         stages:["teen","adult","elder"], desc:"These Sims are all about themselves! They can Fish for Compliments, are more excited when receiving a present, and may become tense when they haven't gotten enough attention." },
  { id:"shady",                  label:"Shady",                  pack:"businesses_hobbies", stages:["teen","adult","elder"], desc:"These Sims excel at exploiting situations and bending rules for personal gain, often without regard for conventional ethics or fairness. They thrive in mischievous activities and can influence others to adopt their way of living." },
  { id:"socially_awkward",       label:"Socially Awkward",       pack:"high_school_years",  stages:["teen","adult","elder"], desc:"These Sims tend to struggle in social situations and build charisma more slowly, but gain powerful Moodlets and Sentiments when they are able to overcome their awkwardness to form close relationships." },
  { id:"overachiever",           label:"Overachiever",           pack:"high_school_years",  stages:["teen","adult","elder"], desc:"These Sims tend to raise their skills faster and are happy when they finish work tasks, but are a little harder to get along with as friends." },
  { id:"rancher",                label:"Rancher",                pack:"horse_ranch",        stages:["teen","adult","elder"], desc:"These Sims excel at ranch life and take pride in their work. They enjoy ranch chores and caring for their Livestock." },
  { id:"lovebug",                label:"Lovebug",                pack:"lovestruck",         stages:["teen","adult","elder"], desc:"Sims with this trait are constantly swept up in the whirlwind of romance. They fall in love easily, often wearing their hearts on their sleeves." },
  { id:"romantically_reserved",  label:"Romantically Reserved",  pack:"lovestruck",         stages:["teen","adult","elder"], desc:"These Sims often tread carefully in the realm of love, preferring to take their time and build solid emotional connections before jumping headfirst into romance." },
  { id:"paranoid",               label:"Paranoid",               pack:"strangerville",      stages:["teen","adult","elder"], desc:"Paranoid Sims feel that danger is around every corner, and that people are always talking about them. Paranoid Sims feel a sense of security while hanging out in basements." },
  { id:"high_maintenance",       label:"High Maintenance",       pack:"spa_day",            stages:["teen","adult","elder"], desc:"These Sims require extra work to keep in good condition. Their problems sometimes appear trivial, and may even appear out of the blue. These struggles can be remedied through mindful habits, which puts them in a state of catharsis." },
  { id:"chased_by_death",        label:"Chased by Death",        pack:"life_and_death",     stages:["teen","adult","elder"], desc:"Chased by Death Sims know that death follows their every move. Frequent near-death experiences give these Sims a desire to live each day to the fullest and progress along their soul's journey faster." },
  { id:"disruptive",             label:"Disruptive",             pack:"enchanted_by_nature",stages:["teen","adult","elder"], desc:"Disruptive Sims are driven to interact with the world by messing with it. They can spread interpersonal chaos by Giving Bad Balance Advice or stick it to nature by Disrupting Plants. Disruptive Sims build Mischief Skill faster but are slower to regain Balance than most Sims." },
  { id:"mystical",               label:"Mystical",               pack:"enchanted_by_nature",stages:["teen","adult","elder"], desc:"Feeling a strong affinity for both the natural and supernatural, Mystical Sims see higher purpose in living harmoniously in each world. These Sims learn Apothecary and Gardening Skills faster and have an easier time building friendships with Occult Sims." },
  { id:"idealist",               label:"Idealist",               pack:"businesses_hobbies", stages:["teen","adult","elder"], desc:"These Sims hold high moral standards and strive for a better world guided by their values and principles. They are committed to doing what they believe is right, even when it's challenging." },
  { id:"grouch",                 label:"Grouch",                 pack:"cozy_celebrations",  stages:["teen","adult","elder"], desc:"These Sims raise their Mischief skill faster by playing pranks and bothering others with their surprises." },
  { id:"wise",                   label:"Wise",                   pack:"for_rent",           stages:["elder"],                desc:"A Sim who's experienced enough of life to know what really matters. These Sims enjoy reminiscing and sharing life's wisdom, making them excellent Mentors. Their years of experience allow them to naturally learn new Skills with ease, and their emotional intelligence reduces their angry and uncomfortable thoughts." },
];

// ============================================================
// DATA — CONFLICTS
// ============================================================
const CONFLICTS_RAW = [
  ["ambitious","lazy"], ["ambitious","freegan"],
  ["cheerful","gloomy"], ["cheerful","grouch"], ["cheerful","hot_headed"], ["cheerful","macabre"],
  ["childish","snob"], ["childish","evil"], ["childish","hates_children"],
  ["clumsy","maker"], ["erratic","wise"],
  ["gloomy","hot_headed"], ["gloomy","party_animal"],
  ["goofball","snob"], ["hot_headed","wise"],
  ["lovebug","grouch"], ["lovebug","jealous"], ["lovebug","loner"],
  ["lovebug","noncommittal"], ["lovebug","romantically_reserved"], ["lovebug","unflirty"],
  ["paranoid","outgoing"],
  ["romantic","romantically_reserved"], ["romantic","unflirty"],
  ["romantically_reserved","outgoing"], ["romantically_reserved","unflirty"],
  ["squeamish","glutton"], ["squeamish","loves_outdoors"], ["squeamish","slob"],
  ["squeamish","freegan"], ["squeamish","rancher"],
  ["unflirty","lovebug"], ["unflirty","romantic"], ["unflirty","romantically_reserved"],
  ["wise","cringe"], ["wise","snob"],
  ["foodie","freegan"], ["foodie","glutton"],
  ["loves_outdoors","squeamish"], ["maker","clumsy"], ["maker","lazy"],
  ["active","lazy"], ["adventurous","lazy"],
  ["chased_by_death","mystical"], ["child_of_the_islands","child_of_the_village"],
  ["competitive","lazy"], ["disruptive","mystical"], ["disruptive","proper"],
  ["freegan","materialistic"], ["freegan","snob"],
  ["glutton","squeamish"], ["kleptomaniac","good"],
  ["lazy","neat"], ["lazy","overachiever"], ["lazy","rancher"], ["lazy","competitive"],
  ["macabre","skeptical"], ["macabre","disruptive"], ["macabre","mystical"],
  ["materialistic","generous"], ["mystical","skeptical"], ["neat","slob"],
  ["overachiever","lazy"], ["skeptical","mystical"], ["slob","proper"],
  ["vegetarian","plant_lover"],
  ["bro","grouch"], ["cringe","proper"],
  ["evil","good"], ["evil","generous"],
  ["family_oriented","hates_children"], ["family_oriented","noncommittal"],
  ["generous","glutton"], ["generous","grouch"], ["generous","mean"],
  ["good","evil"], ["good","grouch"], ["good","mean"], ["good","kleptomaniac"],
  ["grouch","insider"], ["grouch","outgoing"], ["grouch","party_animal"], ["grouch","proper"],
  ["hates_children","family_oriented"], ["idealist","shady"], ["insider","loner"],
  ["jealous","lovebug"], ["loner","outgoing"], ["loner","party_animal"],
  ["loyal","noncommittal"], ["mean","proper"], ["noncommittal","loyal"],
  ["outgoing","socially_awkward"], ["party_animal","socially_awkward"],
  ["plant_lover","vegetarian"], ["shady","idealist"],
  ["snob","freegan"], ["snob","goofball"],
  ["socially_awkward","outgoing"], ["socially_awkward","party_animal"],
];

// ============================================================
// DATA — ASPIRATIONS
// ============================================================
const ASPIRATIONS = [
  { id:"artistic_prodigy",      label:"Artistic Prodigy",            category:"Creativity",  pack:"base",               stages:["child"],               bonusTrait:null, desc:"This Sim has dreams of succeeding in the arts!" },
  { id:"rambunctious_scamp",    label:"Rambunctious Scamp",          category:"Motor",       pack:"base",               stages:["child"],               bonusTrait:null, desc:"This Sim wants to be playful and nimble!" },
  { id:"social_butterfly",      label:"Social Butterfly",            category:"Social",      pack:"base",               stages:["child"],               bonusTrait:null, desc:"This Sim wants to talk to everyone and make friends!" },
  { id:"whiz_kid",              label:"Whiz Kid",                    category:"Mental",      pack:"base",               stages:["child"],               bonusTrait:null, desc:"This Sim wants to be the smartest kid in school!" },
  { id:"cool_kid",              label:"Cool Kid on the Block",       category:"Social",      pack:"adventure_awaits",   stages:["child"],               bonusTrait:null, desc:"This Sim wants to be known as the coolest kid in the neighborhood!" },
  { id:"slumber_party",         label:"Slumber Party Animal",        category:"Multi-Skill", pack:"growing_together",   stages:["child"],               bonusTrait:null, desc:"This Sim wants to be the life of the party - in a uniquely creative way!" },
  { id:"mind_and_body",         label:"Mind and Body",               category:"Multi-Skill", pack:"growing_together",   stages:["child"],               bonusTrait:null, desc:"This Sim wants to master both their mind and body!" },
  { id:"playtime_captain",      label:"Playtime Captain",            category:"Multi-Skill", pack:"growing_together",   stages:["child"],               bonusTrait:null, desc:"This Sim loves to seek out active play - with friends!" },
  { id:"creative_genius_child", label:"Creative Genius",             category:"Multi-Skill", pack:"growing_together",   stages:["child"],               bonusTrait:null, desc:"This Sim wants to build their creative and mental skills to inspire innovation and play!" },
  { id:"drama_llama",           label:"Drama Llama",                 category:"Social",      pack:"high_school_years",  stages:["teen"],                bonusTrait:BONUS_TRAITS.relatable,         desc:"This Sim wants all the drama all the time." },
  { id:"goal_oriented",         label:"Goal Oriented",               category:"Social",      pack:"high_school_years",  stages:["teen"],                bonusTrait:BONUS_TRAITS.relatable,         desc:"This Sim wants to be the best: Grades? Check. Sports? Check. Money? Check!" },
  { id:"live_fast",             label:"Live Fast",                   category:"Social",      pack:"high_school_years",  stages:["teen"],                bonusTrait:BONUS_TRAITS.relatable,         desc:"This Sim aims to get the most out of life by living care-free and rules-free." },
  { id:"admired_icon",          label:"Admired Icon",                category:"Social",      pack:"high_school_years",  stages:["teen"],                bonusTrait:BONUS_TRAITS.relatable,         desc:"This Sim wants to be a trend setter, popular, and influential. A true icon." },
  { id:"friend_of_animals",     label:"Friend of the Animals",       category:"Animal",      pack:"cats_and_dogs",      stages:["teen","adult","elder"], bonusTrait:BONUS_TRAITS.animal_affection,  desc:"This Sim wants to be friends with the animals." },
  { id:"bodybuilder",           label:"Bodybuilder",                 category:"Athletic",    pack:"base",               stages:["teen","adult","elder"], bonusTrait:BONUS_TRAITS.high_metabolism,   desc:"This Sim wants to work out and become as strong as they can be!" },
  { id:"extreme_sports",        label:"Extreme Sports Enthusiast",   category:"Athletic",    pack:"snowy_escape",       stages:["teen","adult","elder"], bonusTrait:BONUS_TRAITS.high_metabolism,   desc:"This Sim wants to explore Mt. Komorebi's wilderness and participate in extreme snow sports." },
  { id:"championship_rider",    label:"Championship Rider",          category:"Athletic",    pack:"horse_ranch",        stages:["teen","adult","elder"], bonusTrait:BONUS_TRAITS.high_metabolism,   desc:"This Sim wants to be one of the world's premiere Horse Riders." },
  { id:"painter_extraord",      label:"Painter Extraordinaire",      category:"Creativity",  pack:"base",               stages:["teen","adult","elder"], bonusTrait:BONUS_TRAITS.muser,             desc:"This Sim wants their life to be all about art and painting!" },
  { id:"musical_genius",        label:"Musical Genius",              category:"Creativity",  pack:"base",               stages:["teen","adult","elder"], bonusTrait:BONUS_TRAITS.muser,             desc:"This Sim wants to be an expert musician and songwriter!" },
  { id:"bestselling_author",    label:"Bestselling Author",          category:"Creativity",  pack:"base",               stages:["teen","adult","elder"], bonusTrait:BONUS_TRAITS.muser,             desc:"This Sim wants to write books and become a famous author!" },
  { id:"master_actor",          label:"Master Actor",                category:"Creativity",  pack:"get_famous",         stages:["teen","adult","elder"], bonusTrait:BONUS_TRAITS.muser,             desc:"This Sim wants to hone their craft and become an acclaimed actor!" },
  { id:"master_maker",          label:"Master Maker",                category:"Creativity",  pack:"eco_lifestyle",      stages:["teen","adult","elder"], bonusTrait:BONUS_TRAITS.muser,             desc:"This Sim wants to become an expert at Fabrication!" },
  { id:"lord_of_knits",         label:"Lord/Lady of the Knits",      category:"Creativity",  pack:"nifty_knitting",     stages:["teen","adult","elder"], bonusTrait:BONUS_TRAITS.muser,             desc:"This Sim has yarn running through their veins and will stop at nothing on their quest to craft the perfect knittable!" },
  { id:"public_enemy",          label:"Public Enemy",                category:"Deviance",    pack:"base",               stages:["teen","adult","elder"], bonusTrait:BONUS_TRAITS.dastardly,         desc:"This Sim wants to make enemies and be a famous criminal!" },
  { id:"master_of_grudges",     label:"Master of Grudges",           category:"Deviance",    pack:"lost_legacies",      stages:["teen","adult","elder"], bonusTrait:BONUS_TRAITS.dastardly,         desc:"This Sim wants to resolve bitter feelings for an enemy through petty, but satisfying, vengeance." },
  { id:"sticky_fingers",        label:"Sticky Fingers",              category:"Deviance",    pack:"blast_from_the_past", stages:["teen","adult","elder"], bonusTrait:BONUS_TRAITS.dastardly,         desc:"This Sim wants to become a master procurer and redistributor of goods and wealth to their own pocket. This aspiration has only one milestone." },
  { id:"chief_of_mischief",     label:"Chief of Mischief",           category:"Deviance",    pack:"base",               stages:["teen","adult","elder"], bonusTrait:BONUS_TRAITS.dastardly,         desc:"This Sim is all about pranks and mayhem!" },
  { id:"villainous_valentine",  label:"Villainous Valentine",        category:"Deviance",    pack:"base",               stages:["teen","adult","elder"], bonusTrait:BONUS_TRAITS.dastardly,         desc:"This Sim wants to destroy the love lives of all Sims, including their own!" },
  { id:"seeker_of_secrets",     label:"Seeker of Secrets",           category:"Deviance",    pack:"for_rent",           stages:["teen","adult","elder"], bonusTrait:BONUS_TRAITS.dastardly,         desc:"This Sim loves the thrill of discovering juicy Secrets about other Sims." },
  { id:"social_puppeteer",      label:"Social Puppeteer",            category:"Deviance",    pack:"royalty_legacy",     stages:["teen","adult","elder"], bonusTrait:BONUS_TRAITS.dastardly,         desc:"This Sim wants to know everyone's business and is able to extort and expose scandals about whoever they please!" },
  { id:"fairy_stories",         label:"Fairy Stories",               category:"Fairy",       pack:"enchanted_by_nature",stages:["teen","adult","elder"], bonusTrait:BONUS_TRAITS.fairy_influence,   desc:"This Sim wants to show the world just what kind of Fairy they can be." },
  { id:"successful_lineage",    label:"Successful Lineage",          category:"Family",      pack:"base",               stages:["teen","adult","elder"], bonusTrait:BONUS_TRAITS.domestic,          desc:"This Sim wants to have a family that succeeds in life!" },
  { id:"big_happy_family",      label:"Big Happy Family",            category:"Family",      pack:"base",               stages:["teen","adult","elder"], bonusTrait:BONUS_TRAITS.domestic,          desc:"This Sim wants to build a large, loving household!" },
  { id:"vampire_family",        label:"Vampire Family",              category:"Family",      pack:"vampires",           stages:["teen","adult","elder"], bonusTrait:BONUS_TRAITS.domestic,          desc:"This Sim wants to have a family of Vampires!" },
  { id:"super_parent",          label:"Super Parent",                category:"Family",      pack:"parenthood",         stages:["teen","adult","elder"], bonusTrait:BONUS_TRAITS.domestic,          desc:"This Sim wants to be the best parent ever!" },
  { id:"master_chef",           label:"Master Chef",                 category:"Food",        pack:"base",               stages:["teen","adult","elder"], bonusTrait:BONUS_TRAITS.essence_of_flavor, desc:"This Sim wants to master the Culinary Arts!" },
  { id:"master_mixologist",     label:"Master Mixologist",           category:"Food",        pack:"base",               stages:["teen","adult","elder"], bonusTrait:BONUS_TRAITS.essence_of_flavor, desc:"This Sim wants to know everything there is to know about Mixology!" },
  { id:"expert_nectar_maker",   label:"Expert Nectar Maker",         category:"Food",        pack:"horse_ranch",        stages:["teen","adult","elder"], bonusTrait:BONUS_TRAITS.essence_of_flavor, desc:"This Sim wants to master the art of Nectar Making." },
  { id:"appliance_wiz",         label:"Appliance Wiz",               category:"Food",        pack:"home_chef_hustle",   stages:["teen","adult","elder"], bonusTrait:BONUS_TRAITS.essence_of_flavor, desc:"This Sim knows their way around the small kitchen appliances!" },
  { id:"fabulously_wealthy",    label:"Fabulously Wealthy",          category:"Fortune",     pack:"base",               stages:["teen","adult","elder"], bonusTrait:BONUS_TRAITS.business_savvy,    desc:"This Sim wants to get rich and have a successful career!" },
  { id:"mansion_baron",         label:"Mansion Baron",               category:"Fortune",     pack:"base",               stages:["teen","adult","elder"], bonusTrait:BONUS_TRAITS.business_savvy,    desc:"This Sim is all about owning the biggest, fanciest home!" },
  { id:"market_magnate",        label:"Market Magnate",              category:"Fortune",     pack:"home_chef_hustle",   stages:["teen","adult","elder"], bonusTrait:BONUS_TRAITS.business_savvy,    desc:"This Sim wants to operate the most profitable Food Stand!" },
  { id:"five_star_property",    label:"Five-Star Property Owner",    category:"Fortune",     pack:"for_rent",           stages:["teen","adult","elder"], bonusTrait:BONUS_TRAITS.business_savvy,    desc:"This Sim wants to be the best Property Owner the world has ever seen!" },
  { id:"renaissance_sim",       label:"Renaissance Sim",             category:"Knowledge",   pack:"base",               stages:["teen","adult","elder"], bonusTrait:BONUS_TRAITS.quick_learner,     desc:"This Sim wants to be good at many things at once!" },
  { id:"nerd_brain",            label:"Nerd Brain",                  category:"Knowledge",   pack:"base",               stages:["teen","adult","elder"], bonusTrait:BONUS_TRAITS.quick_learner,     desc:"This Sim wants to be both book smart and handy!" },
  { id:"computer_whiz",         label:"Computer Whiz",               category:"Knowledge",   pack:"base",               stages:["teen","adult","elder"], bonusTrait:BONUS_TRAITS.quick_learner,     desc:"This Sim wants to know everything about computers, from playing games to Careers!" },
  { id:"master_vampire",        label:"Master Vampire",              category:"Knowledge",   pack:"vampires",           stages:["teen","adult","elder"], bonusTrait:BONUS_TRAITS.quick_learner,     desc:"This Sim wants to become a wise and powerful Vampire!" },
  { id:"archaeology_scholar",   label:"Archaeology Scholar",         category:"Knowledge",   pack:"jungle_adventure",   stages:["teen","adult","elder"], bonusTrait:BONUS_TRAITS.quick_learner,     desc:"This Sim wants to understand Archaeology through excavation, research, and authenticating ancient artifacts." },
  { id:"spellcraft",            label:"Spellcraft & Sorcery",        category:"Knowledge",   pack:"realm_of_magic",     stages:["teen","adult","elder"], bonusTrait:BONUS_TRAITS.quick_learner,     desc:"This Sim craves a deep knowledge of the arcane magical arts." },
  { id:"academic",              label:"Academic",                    category:"Knowledge",   pack:"discover_university",stages:["teen","adult","elder"], bonusTrait:BONUS_TRAITS.quick_learner,     desc:"This Sim wants to attend university and get a job, but most importantly — learn!" },
  { id:"ghost_historian",       label:"Ghost Historian",             category:"Knowledge",   pack:"life_and_death",     stages:["teen","adult","elder"], bonusTrait:BONUS_TRAITS.quick_learner,     desc:"This Sim wants to learn everything about ghosts and use the findings to write spooky horror novels!" },
  { id:"master_mentor",         label:"Master Mentor",               category:"Knowledge",   pack:"businesses_hobbies", stages:["teen","adult","elder"], bonusTrait:BONUS_TRAITS.quick_learner,     desc:"This Sim wants to learn from talented mentors, then pass that knowledge on to others." },
  { id:"elixir_enthusiast",     label:"Elixir Enthusiast",           category:"Knowledge",   pack:"enchanted_by_nature",stages:["teen","adult","elder"], bonusTrait:BONUS_TRAITS.quick_learner,     desc:"This Sim wants to learn everything about the Apothecary Skill and craft powerful Cures and Elixirs." },
  { id:"city_native",           label:"City Native",                 category:"Location",    pack:"city_living",        stages:["teen","adult","elder"], bonusTrait:BONUS_TRAITS.home_turf,         desc:"This Sim is all about the city life." },
  { id:"strangerville_mystery", label:"StrangerVille Mystery",       category:"Location",    pack:"strangerville",      stages:["teen","adult","elder"], bonusTrait:BONUS_TRAITS.home_turf,         desc:"StrangerVille is holding some deep dark secret, and this Sim wants to uncover it." },
  { id:"beach_life",            label:"Beach Life",                  category:"Location",    pack:"island_living",      stages:["teen","adult","elder"], bonusTrait:BONUS_TRAITS.home_turf,         desc:"This Sim wants to take it slow and enjoy beach life." },
  { id:"mt_komorebi",           label:"Mt. Komorebi Sightseer",      category:"Location",    pack:"snowy_escape",       stages:["teen","adult","elder"], bonusTrait:BONUS_TRAITS.home_turf,         desc:"This Sim wants to explore Mt. Komorebi's culture and experience everything it has to offer." },
  { id:"fount_of_tomarani",     label:"Fount of Tomarani Knowledge", category:"Location",    pack:"for_rent",           stages:["teen","adult","elder"], bonusTrait:BONUS_TRAITS.home_turf,         desc:"This Sim wants to immerse themselves in everything Tomarang has to offer!" },
  { id:"perfectly_pristine",    label:"Perfectly Pristine",          category:"Lifestyle",   pack:"bust_the_dust",      stages:["teen","adult","elder"], bonusTrait:BONUS_TRAITS.home_turf,         desc:"This Sim likes their home to be presentable and clean all the time." },
  { id:"fabulously_filthy",     label:"Fabulously Filthy",           category:"Lifestyle",   pack:"bust_the_dust",      stages:["teen","adult","elder"], bonusTrait:BONUS_TRAITS.home_turf,         desc:"This Sim revels in filthy, messy homes and avoids cleaning at all costs." },
  { id:"serial_romantic",       label:"Serial Romantic",             category:"Love",        pack:"base",               stages:["teen","adult","elder"], bonusTrait:BONUS_TRAITS.alluring,          desc:"This Sim wants to play the field and go on all sorts of dates with people!" },
  { id:"soulmate",              label:"Soulmate",                    category:"Love",        pack:"base",               stages:["teen","adult","elder"], bonusTrait:BONUS_TRAITS.alluring,          desc:"This Sim wants to find and live a rewarding life with \"The One\"!" },
  { id:"romantic_explorer",     label:"Romantic Explorer",           category:"Love",        pack:"lovestruck",         stages:["teen","adult","elder"], bonusTrait:BONUS_TRAITS.alluring,          desc:"This Sim wants to explore all that romance has to offer." },
  { id:"paragon_partner",       label:"Paragon Partner",             category:"Love",        pack:"lovestruck",         stages:["teen","adult","elder"], bonusTrait:BONUS_TRAITS.alluring,          desc:"This Sim wants to have successful relationships with two or more Sims." },
  { id:"freelance_botanist",    label:"Freelance Botanist",          category:"Nature",      pack:"base",               stages:["teen","adult","elder"], bonusTrait:BONUS_TRAITS.collector,         desc:"This Sim wants to grow plants and become an expert Gardener!" },
  { id:"the_curator",           label:"The Curator",                 category:"Nature",      pack:"base",               stages:["teen","adult","elder"], bonusTrait:BONUS_TRAITS.collector,         desc:"This Sim wants to collect everything this world has to offer!" },
  { id:"angling_ace",           label:"Angling Ace",                 category:"Nature",      pack:"base",               stages:["teen","adult","elder"], bonusTrait:BONUS_TRAITS.collector,         desc:"This Sim wants to know everything about fishing!" },
  { id:"outdoor_enthusiast",    label:"Outdoor Enthusiast",          category:"Nature",      pack:"outdoor_retreat",    stages:["teen","adult","elder"], bonusTrait:BONUS_TRAITS.collector,         desc:"This Sim wants to experience everything nature has to offer!" },
  { id:"jungle_explorer",       label:"Jungle Explorer",             category:"Nature",      pack:"jungle_adventure",   stages:["teen","adult","elder"], bonusTrait:BONUS_TRAITS.collector,         desc:"This Sim wants to explore the jungle and uncover its ancient secrets!" },
  { id:"purveyor_of_potions",   label:"Purveyor of Potions",         category:"Nature",      pack:"realm_of_magic",     stages:["teen","adult","elder"], bonusTrait:BONUS_TRAITS.collector,         desc:"This Sim wants to learn every potion recipe and craft each one!" },
  { id:"eco_innovator",         label:"Eco Innovator",               category:"Nature",      pack:"eco_lifestyle",      stages:["teen","adult","elder"], bonusTrait:BONUS_TRAITS.collector,         desc:"This Sim wants to build a better, greener community." },
  { id:"country_caretaker",     label:"Country Caretaker",           category:"Nature",      pack:"cottage_living",     stages:["teen","adult","elder"], bonusTrait:BONUS_TRAITS.collector,         desc:"This Sim wants to tend the countryside and befriend all animals and critters!" },
  { id:"crystal_crafter",       label:"Crystal Crafter",             category:"Nature",      pack:"crystal_creations",  stages:["teen","adult","elder"], bonusTrait:BONUS_TRAITS.collector,         desc:"This Sim wants to cut gemstones, craft jewelry, and harness the power of the crystals!" },
  { id:"nature_nomad",          label:"Nature Nomad",                category:"Nature",      pack:"enchanted_by_nature",stages:["teen","adult","elder"], bonusTrait:BONUS_TRAITS.collector,         desc:"This Sim embraces Natural Living and enjoys fulfilling their every need in the great outdoors." },
  { id:"critter_hunter",        label:"Critter Hunter",              category:"Nature",      pack:"adventure_awaits",   stages:["teen","adult","elder"], bonusTrait:BONUS_TRAITS.collector,         desc:"This Sim wants to explore the rich worlds of butterflies and fish to learn all they can about critters!" },
  { id:"joke_star",             label:"Joke Star",                   category:"Popularity",  pack:"base",               stages:["teen","adult","elder"], bonusTrait:BONUS_TRAITS.gregarious,        desc:"This Sim wants to tell jokes and become a famous comedian!" },
  { id:"party_animal_asp",      label:"Party Animal",                category:"Popularity",  pack:"base",               stages:["teen","adult","elder"], bonusTrait:BONUS_TRAITS.gregarious,        desc:"This Sim wants to throw and attend amazing parties!" },
  { id:"friend_of_the_world",   label:"Friend of the World",         category:"Popularity",  pack:"base",               stages:["teen","adult","elder"], bonusTrait:BONUS_TRAITS.gregarious,        desc:"This Sim wants to make and keep as many friends as they can!" },
  { id:"neighborhood_confid",   label:"Neighborhood Confidante",     category:"Popularity",  pack:"city_living",        stages:["teen","adult","elder"], bonusTrait:BONUS_TRAITS.gregarious,        desc:"This Sim wants to provide all manner of advice and be a positive influence in the lives of their neighbors." },
  { id:"leader_of_the_pack",    label:"Leader of the Pack",          category:"Popularity",  pack:"get_together",       stages:["teen","adult","elder"], bonusTrait:BONUS_TRAITS.gregarious,        desc:"This Sim wants to be the leader of the best Club in Town!" },
  { id:"world_famous_celeb",    label:"World-Famous Celebrity",      category:"Popularity",  pack:"get_famous",         stages:["teen","adult","elder"], bonusTrait:BONUS_TRAITS.gregarious,        desc:"This Sim wants to become illustriously famous." },
  { id:"discerning_dweller",    label:"Discerning Dweller",          category:"Popularity",  pack:"for_rent",           stages:["teen","adult","elder"], bonusTrait:BONUS_TRAITS.gregarious,        desc:"This Sim aspires to be the perfect Tenant and neighbor in a Residential Rental!" },
  { id:"esteemed_entrepreneur", label:"Esteemed Entrepreneur",       category:"Popularity",  pack:"businesses_hobbies", stages:["teen","adult","elder"], bonusTrait:BONUS_TRAITS.gregarious,        desc:"This Sim wants to run a small business full of happy customers." },
  { id:"inner_peace",           label:"Inner Peace",                 category:"Wellness",    pack:"spa_day",            stages:["teen","adult","elder"], bonusTrait:BONUS_TRAITS.spa_membership,    desc:"This Sim is on a quest to achieve Inner Peace and develop tools to help mitigate negative emotions." },
  { id:"self_care_specialist",  label:"Self-Care Specialist",        category:"Wellness",    pack:"spa_day",            stages:["teen","adult","elder"], bonusTrait:BONUS_TRAITS.spa_membership,    desc:"This Sim wants to make it big with monetizing Wellness activities." },
  { id:"zen_guru",              label:"Zen Guru",                    category:"Wellness",    pack:"spa_day",            stages:["teen","adult","elder"], bonusTrait:BONUS_TRAITS.spa_membership,    desc:"This Sim wants to share their mastery of Wellness with the world and train a successor." },
  { id:"good_vampire",          label:"Good Vampire",                category:"Occult",      pack:"vampires",           stages:["teen","adult","elder"], bonusTrait:BONUS_TRAITS.quick_learner,     desc:"This Sim wants to tame their thirst and remain as sim as possible!" },
  { id:"werewolf_initiate",     label:"Werewolf Initiate",           category:"Occult",      pack:"werewolves",         stages:["teen","adult","elder"], bonusTrait:BONUS_TRAITS.lunar_confidant,   desc:"This Sim wants to unleash their inner beast and become a werewolf!" },
  { id:"lone_wolf",             label:"Lone Wolf",                   category:"Occult",      pack:"werewolves",         stages:["teen","adult","elder"], bonusTrait:BONUS_TRAITS.lunar_confidant,   desc:"This Sim wants to become the strongest and most feared werewolf, all on their own!" },
  { id:"emissary_collective",   label:"Emissary of the Collective",  category:"Occult",      pack:"werewolves",         stages:["teen","adult","elder"], bonusTrait:BONUS_TRAITS.lunar_confidant,   desc:"This Sim wants to join The Moonwood Collective and become a friendly ambassador to all!" },
  { id:"wildfang_renegade",     label:"Wildfang Renegade",           category:"Occult",      pack:"werewolves",         stages:["teen","adult","elder"], bonusTrait:BONUS_TRAITS.lunar_confidant,   desc:"This Sim wants to join the Wildfangs and unapologetically take on the world as a Werewolf!" },
  { id:"cure_seeker",           label:"Cure Seeker",                 category:"Occult",      pack:"werewolves",         stages:["teen","adult","elder"], bonusTrait:BONUS_TRAITS.lunar_confidant,   desc:"This Sim seeks a cure for lycanthropy to live their life as a non-werewolf Sim." },
  { id:"hope_order",            label:"Hope VS Order",               category:"Star Wars",   pack:"star_wars",          stages:["teen","adult","elder"], bonusTrait:BONUS_TRAITS.prepared_voyager,  desc:"On the world of Batuu there is a growing conflict. This Sim is out to explore Black Spire Outpost and understand whether they should stand with the Resistance or the First Order." },
  { id:"paragon_of_hope",       label:"Paragon of Hope",             category:"Star Wars",   pack:"star_wars",          stages:["teen","adult","elder"], bonusTrait:BONUS_TRAITS.prepared_voyager,  desc:"This Sim looks to be the spark of hope that disrupts the First Order's operations on Batuu." },
  { id:"enforcer_of_order",     label:"Enforcer of Order",           category:"Star Wars",   pack:"star_wars",          stages:["teen","adult","elder"], bonusTrait:BONUS_TRAITS.prepared_voyager,  desc:"This Sim is out to prove their loyalty to the First Order by stamping out the Resistance presence on Batuu." },
  { id:"galactic_privateer",    label:"Galactic Privateer",          category:"Star Wars",   pack:"star_wars",          stages:["teen","adult","elder"], bonusTrait:BONUS_TRAITS.prepared_voyager,  desc:"This Sim isn't about choosing sides — they're happy just mingling among the smugglers and bounty hunters on the fringe planet of Batuu." },
];


// ============================================================
// DATA — DEATHS (for Ghost generation)
// occultRestriction values:
//   null             = any occult allowed
//   "vampires_only"  = only vampires
//   "spellcasters_only" = only spellcasters
//   "fairies_only"   = only fairies
//   "not_fairies"    = everyone except fairies
//   "not_mermaids"   = everyone except mermaids
// ============================================================
const DEATHS = [
  { id:"hunger",               label:"Hunger",                   pack:"base",                ageMin:"teen",  occultRestriction:"not_fairies"      },
  { id:"electrocution",        label:"Electrocution",            pack:"base",                ageMin:"teen",  occultRestriction:null               },
  { id:"fire",                 label:"Fire",                     pack:"base",                ageMin:"child", occultRestriction:null               },
  { id:"overexertion",         label:"Overexertion",             pack:"base",                ageMin:"teen",  occultRestriction:null               },
  { id:"cowplant",             label:"Cowplant",                 pack:"base",                ageMin:"teen",  occultRestriction:null               },
  { id:"laughter",             label:"Laughter",                 pack:"base",                ageMin:"teen",  occultRestriction:null               },
  { id:"anger",                label:"Anger",                    pack:"base",                ageMin:"teen",  occultRestriction:null               },
  { id:"embarrassment",        label:"Embarrassment",            pack:"base",                ageMin:"teen",  occultRestriction:null               },
  { id:"drowning",             label:"Drowning",                 pack:"base",                ageMin:"child", occultRestriction:"not_mermaids"     },
  { id:"meteorite",            label:"Meteorite",                pack:"base",                ageMin:"teen",  occultRestriction:null               },
  { id:"murphy_bed",           label:"Crushed by Murphy Bed",    pack:"base",                ageMin:"teen",  occultRestriction:null               },
  { id:"rabid_rodent",         label:"Rabid Rodent Fever",       pack:"base",                ageMin:"teen",  occultRestriction:null               },
  { id:"steam",                label:"Steam",                    pack:"spa_day",             ageMin:"teen",  occultRestriction:null               },
  { id:"pufferfish",           label:"Pufferfish",               pack:"city_living",         ageMin:"child", occultRestriction:null               },
  { id:"sunlight",             label:"Sunlight",                 pack:"vampires",            ageMin:"teen",  occultRestriction:"vampires_only"    },
  { id:"poison",               label:"Poison",                   pack:"jungle_adventure",    ageMin:"teen",  occultRestriction:null               },
  { id:"mother_plant",         label:"Consumed by the Mother",   pack:"strangerville",       ageMin:"teen",  occultRestriction:null               },
  { id:"overheating",          label:"Overheating",              pack:"seasons",             ageMin:"child", occultRestriction:null               },
  { id:"freezing",             label:"Freezing",                 pack:"seasons",             ageMin:"child", occultRestriction:null               },
  { id:"lightning",            label:"Lightning",                pack:"seasons",             ageMin:"teen",  occultRestriction:null               },
  { id:"spellcaster_overload", label:"Spellcaster Overload",     pack:"realm_of_magic",      ageMin:"teen",  occultRestriction:"spellcasters_only"},
  { id:"flies",                label:"Flies",                    pack:"eco_lifestyle",       ageMin:"teen",  occultRestriction:null               },
  { id:"beetles",              label:"Beetles",                  pack:"eco_lifestyle",       ageMin:"teen",  occultRestriction:null               },
  { id:"vending_machine",      label:"Vending Machine",          pack:"snowy_escape",        ageMin:"teen",  occultRestriction:null               },
  { id:"falling",              label:"Falling from Heights",     pack:"snowy_escape",        ageMin:"teen",  occultRestriction:null               },
  { id:"killer_chicken",       label:"Killer Chicken",           pack:"cottage_living",      ageMin:"teen",  occultRestriction:null               },
  { id:"killer_rabbit",        label:"Killer Rabbit",            pack:"cottage_living",      ageMin:"teen",  occultRestriction:null               },
  { id:"urban_legend",         label:"Urban Legend",             pack:"high_school_years",   ageMin:"teen",  occultRestriction:null               },
  { id:"stink_capsule",        label:"Stink Capsule",            pack:"high_school_years",   ageMin:"teen",  occultRestriction:null               },
  { id:"mold",                 label:"Mold",                     pack:"for_rent",            ageMin:"teen",  occultRestriction:null               },
  { id:"broken_heart",         label:"Broken Heart",             pack:"lovestruck",          ageMin:"teen",  occultRestriction:null               },
  { id:"murder_of_crows",      label:"Murder of Crows",          pack:"life_and_death",      ageMin:"teen",  occultRestriction:null               },
  { id:"cuckoo_malfunction",   label:"Cuckoo Malfunction",       pack:"royalty_legacy",      ageMin:"teen",  occultRestriction:null               },
  { id:"emotional_starvation", label:"Emotional Starvation",     pack:"enchanted_by_nature", ageMin:"teen",  occultRestriction:"fairies_only"     },
  { id:"old_age",              label:"Old Age",                  pack:"base",                ageMin:"elder", occultRestriction:null               },
];

// Child-specific allowed deaths, keyed by occult id (or "_default" for all others)
const CHILD_DEATHS = {
  sim:      ["fire","drowning","overheating","freezing","pufferfish"],
  vampire:  ["fire","drowning"],
  mermaid:  ["fire","freezing","overheating","pufferfish"],
  _default: ["fire","drowning","overheating","freezing","pufferfish"],
};
