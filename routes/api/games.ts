export interface Game {
    id: number;
    name: string;
    boxArt: string;
    link: string;
    isCompleted: boolean;
    toBeContinued: boolean;
    completedOn: string;
    rating: number;
}

export const allGames: Game[] = [
    {
        "id": 1,
        "name": "Alessia's Dollhouse",
        "boxArt":
            "https://res.cloudinary.com/ddz9c0wp9/image/upload/v1731715464/alessias_dollhouse_wdvrpt.webp",
        "link":
            "https://store.steampowered.com/app/3037780/Alessias_Dollhouse/",
        "isCompleted": true,
        "toBeContinued": false,
        "completedOn": "November 17th, 2024",
        "rating": 2.5,
    },
    {
        "id": 2,
        "name": "Alien: Isolation",
        "boxArt":
            "https://res.cloudinary.com/ddz9c0wp9/image/upload/v1731715466/alien_isolation_fhakth.webp",
        "link": "https://store.steampowered.com/app/214490/Alien_Isolation/",
        "isCompleted": true,
        "toBeContinued": false,
        "completedOn": "October 27th, 2024",
        "rating": 4.5,
    },
    {
        "id": 3,
        "name": "Below, Rusted Gods (Demo)",
        "boxArt":
            "https://res.cloudinary.com/ddz9c0wp9/image/upload/v1731715469/below_rusted_gods_demo_dinjoc.webp",
        "link": "https://store.steampowered.com/app/2895680/Below_Rusted_Gods/",
        "isCompleted": true,
        "toBeContinued": false,
        "completedOn": "October 30th, 2024",
        "rating": 3.5,
    },
    {
        "id": 4,
        "name": "The Convenience Store",
        "boxArt":
            "https://res.cloudinary.com/ddz9c0wp9/image/upload/v1731715473/convenience_store_kmj8xl.webp",
        "link":
            "https://store.steampowered.com/app/1228520/Chillas_Art_The_Convenience_Store/",
        "isCompleted": true,
        "toBeContinued": false,
        "completedOn": "October 6th, 2024",
        "rating": 2,
    },
    {
        "id": 5,
        "name": "Cry of Fear",
        "boxArt":
            "https://res.cloudinary.com/ddz9c0wp9/image/upload/v1731715476/cry_of_fear_grt94p.webp",
        "link": "https://store.steampowered.com/app/223710/Cry_of_Fear/",
        "isCompleted": false,
        "toBeContinued": false,
        "completedOn": "",
        "rating": 0,
    },
    {
        "id": 6,
        "name": "Dark Deception",
        "boxArt":
            "https://res.cloudinary.com/ddz9c0wp9/image/upload/v1731715478/dark_deception_twuohv.webp",
        "link": "https://store.steampowered.com/app/332950/Dark_Deception/",
        "isCompleted": false,
        "toBeContinued": false,
        "completedOn": "",
        "rating": 0,
    },
    {
        "id": 7,
        "name": "Don't Be Afraid",
        "boxArt":
            "https://res.cloudinary.com/ddz9c0wp9/image/upload/v1731715481/dont_be_afraid_lih7hh.webp",
        "link": "https://store.steampowered.com/app/760410/Dont_Be_Afraid/",
        "isCompleted": false,
        "toBeContinued": false,
        "completedOn": "",
        "rating": 0,
    },
    {
        "id": 8,
        "name": "Dreamless",
        "boxArt":
            "https://res.cloudinary.com/ddz9c0wp9/image/upload/v1731715483/dreamless_c71ocz.webp",
        "link": "https://store.steampowered.com/app/3011020/Dreamless/",
        "isCompleted": true,
        "toBeContinued": false,
        "completedOn": "November 3rd, 2024",
        "rating": 1,
    },
    {
        "id": 9,
        "name": "Escape the Backrooms",
        "boxArt":
            "https://res.cloudinary.com/ddz9c0wp9/image/upload/v1731715485/escape_the_backrooms_htakz8.webp",
        "link":
            "https://store.steampowered.com/app/1943950/Escape_the_Backrooms/",
        "isCompleted": false,
        "toBeContinued": false,
        "completedOn": "",
        "rating": 0,
    },
    {
        "id": 10,
        "name": "Faint Call",
        "boxArt":
            "https://res.cloudinary.com/ddz9c0wp9/image/upload/v1731715488/faint_call_xryq9c.webp",
        "link": "https://store.steampowered.com/app/2958780/Faint_Call/",
        "isCompleted": true,
        "toBeContinued": false,
        "completedOn": "October 6th, 2024",
        "rating": 3,
    },
    {
        "id": 11,
        "name": "From the Darkness",
        "boxArt":
            "https://res.cloudinary.com/ddz9c0wp9/image/upload/v1731715491/from_the_darkness_qwrcgu.webp",
        "link": "https://store.steampowered.com/app/1517340/From_The_Darkness/",
        "isCompleted": true,
        "toBeContinued": false,
        "completedOn": "October 8th, 2024",
        "rating": 4,
    },
    {
        "id": 12,
        "name": "Hail to the Rainbow (Demo)",
        "boxArt":
            "https://res.cloudinary.com/ddz9c0wp9/image/upload/v1731715493/hail_to_the_rainbow_demo_tq0sar.webp",
        "link":
            "https://store.steampowered.com/app/1699230/Hail_to_the_Rainbow/",
        "isCompleted": true,
        "toBeContinued": false,
        "completedOn": "November 11th, 2024",
        "rating": 4,
    },
    {
        "id": 13,
        "name": "In My Head",
        "boxArt":
            "https://res.cloudinary.com/ddz9c0wp9/image/upload/v1731715555/in_my_head_pgdlsh.webp",
        "link": "https://store.steampowered.com/app/3147870/In_My_Head/",
        "isCompleted": true,
        "toBeContinued": false,
        "completedOn": "October 8th, 2024",
        "rating": 3,
    },
    {
        "id": 14,
        "name": "Infliction",
        "boxArt":
            "https://res.cloudinary.com/ddz9c0wp9/image/upload/v1731715557/infliction_fcsgb3.webp",
        "link": "https://store.steampowered.com/app/692100/Infliction/",
        "isCompleted": true,
        "toBeContinued": false,
        "completedOn": "November 24th, 2024",
        "rating": 3.5,
    },
    {
        "id": 15,
        "name": "Is Simon There?",
        "boxArt":
            "https://res.cloudinary.com/ddz9c0wp9/image/upload/v1731715560/is_simon_there_gpgt2j.webp",
        "link": "https://store.steampowered.com/app/1961300/Is_Simon_There/",
        "isCompleted": true,
        "toBeContinued": false,
        "completedOn": "October 30th, 2024",
        "rating": 4,
    },
    {
        "id": 16,
        "name": "Labyrinthine",
        "boxArt":
            "https://res.cloudinary.com/ddz9c0wp9/image/upload/v1731715563/labyrinthine_k94jyz.webp",
        "link": "https://store.steampowered.com/app/1302240/Labyrinthine/",
        "isCompleted": false,
        "toBeContinued": false,
        "completedOn": "",
        "rating": 0,
    },
    {
        "id": 17,
        "name": "Microbial Sector",
        "boxArt":
            "https://res.cloudinary.com/ddz9c0wp9/image/upload/v1731715565/microbial_sector_cb7o1y.webp",
        "link": "https://store.steampowered.com/app/3141170/Microbial_Sector/",
        "isCompleted": false,
        "toBeContinued": true,
        "completedOn": "November 19th, 2024",
        "rating": 4,
    },
    {
        "id": 18,
        "name": "Mists of Aiden",
        "boxArt":
            "https://res.cloudinary.com/ddz9c0wp9/image/upload/v1731715568/mists_of_aiden_mfxmvd.webp",
        "link": "https://store.steampowered.com/app/1239050/Mists_of_Aiden/",
        "isCompleted": false,
        "toBeContinued": false,
        "completedOn": "",
        "rating": 0,
    },
    {
        "id": 19,
        "name": "Rise of Insanity",
        "boxArt":
            "https://res.cloudinary.com/ddz9c0wp9/image/upload/v1731715570/rise_of_insanity_fzlzk0.webp",
        "link": "https://store.steampowered.com/app/629220/Rise_of_Insanity/",
        "isCompleted": true,
        "toBeContinued": false,
        "completedOn": "November 17th, 2024",
        "rating": 2,
    },
    {
        "id": 20,
        "name": "SOMA",
        "boxArt":
            "https://res.cloudinary.com/ddz9c0wp9/image/upload/v1731715573/soma_rqyu0s.webp",
        "link": "https://store.steampowered.com/app/282140/SOMA/",
        "isCompleted": false,
        "toBeContinued": false,
        "completedOn": "",
        "rating": 0,
    },
    {
        "id": 21,
        "name": "Summer of '58",
        "boxArt":
            "https://res.cloudinary.com/ddz9c0wp9/image/upload/v1731715575/summer_of_58_rbrua6.webp",
        "link": "https://store.steampowered.com/app/1609080/Summer_of_58/",
        "isCompleted": true,
        "toBeContinued": false,
        "completedOn": "November 3rd, 2024",
        "rating": 2.5,
    },
    {
        "id": 22,
        "name": "The Complex",
        "boxArt":
            "https://res.cloudinary.com/ddz9c0wp9/image/upload/v1731715578/the_complex_f9fflr.webp",
        "link":
            "https://store.steampowered.com/app/1942120/The_Complex_Found_Footage/",
        "isCompleted": false,
        "toBeContinued": false,
        "completedOn": "",
        "rating": 0,
    },
    // {
    //     "id": 23,
    //     "name": "The Council",
    //     "boxArt":
    //         "https://res.cloudinary.com/ddz9c0wp9/image/upload/v1731715580/the_council_l6qolz.webp",
    //     "link": "https://store.steampowered.com/app/287630/The_Council/",
    //     "isCompleted": false,
    //     "toBeContinued": false,
    //     "completedOn": "",
    //     "rating": 0,
    // },
    {
        "id": 24,
        "name": "The Mortuary Assistant",
        "boxArt":
            "https://res.cloudinary.com/ddz9c0wp9/image/upload/v1731715583/the_mortuary_assistant_gdrh8x.webp",
        "link":
            "https://store.steampowered.com/app/1295920/The_Mortuary_Assistant/",
        "isCompleted": false,
        "toBeContinued": true,
        "completedOn": "October 5th, 2024",
        "rating": 4,
    },
    {
        "id": 25,
        "name": "The Room Three",
        "boxArt":
            "https://res.cloudinary.com/ddz9c0wp9/image/upload/v1731715585/the_room_three_qltjod.webp",
        "link": "https://store.steampowered.com/app/456750/The_Room_Three/",
        "isCompleted": false,
        "toBeContinued": true,
        "completedOn": "November 24th, 2024",
        "rating": 4.5,
    },
    {
        "id": 26,
        "name": "The Scourge",
        "boxArt":
            "https://res.cloudinary.com/ddz9c0wp9/image/upload/v1731715588/the_scourge_fzqvqz.webp",
        "link":
            "https://store.steampowered.com/app/2456350/The_Scourge__Tai_ng/",
        "isCompleted": false,
        "toBeContinued": true,
        "completedOn": "November 5th, 2024",
        "rating": 4.5,
    },
    {
        "id": 27,
        "name": "The Windows Are Gone",
        "boxArt":
            "https://res.cloudinary.com/ddz9c0wp9/image/upload/v1731715590/the_windows_are_gone_ibsmtx.webp",
        "link":
            "https://store.steampowered.com/app/2590250/The_Windows_Are_Gone/",
        "isCompleted": true,
        "toBeContinued": false,
        "completedOn": "November 12th, 2024",
        "rating": 3,
    },
    {
        "id": 28,
        "name": "TransMemory",
        "boxArt":
            "https://res.cloudinary.com/ddz9c0wp9/image/upload/v1731715593/transmemory_bl533f.webp",
        "link": "https://store.steampowered.com/app/3138360/TransMemory/",
        "isCompleted": true,
        "toBeContinued": false,
        "completedOn": "October 6th, 2024",
        "rating": 3,
    },
    {
        "id": 29,
        "name": "Trapped",
        "boxArt":
            "https://res.cloudinary.com/ddz9c0wp9/image/upload/v1731715596/trapped_ay67xu.webp",
        "link": "https://store.steampowered.com/app/1193990/Trapped/",
        "isCompleted": true,
        "toBeContinued": false,
        "completedOn": "November 12th, 2024",
        "rating": 3,
    },
    {
        "id": 30,
        "name": "Visage",
        "boxArt":
            "https://res.cloudinary.com/ddz9c0wp9/image/upload/v1731715598/visage_rzz7kp.webp",
        "link": "https://store.steampowered.com/app/594330/Visage/",
        "isCompleted": true,
        "toBeContinued": false,
        "completedOn": "October 1st, 2024",
        "rating": 5,
    },
    {
        "id": 31,
        "name": "Welcome to Kowloon",
        "boxArt":
            "https://res.cloudinary.com/ddz9c0wp9/image/upload/v1731715601/welcome_to_kowloon_uexknv.webp",
        "link":
            "https://store.steampowered.com/app/2515240/Welcome_to_Kowloon/",
        "isCompleted": true,
        "toBeContinued": false,
        "completedOn": "October 30th, 2024",
        "rating": 4,
    },
    {
        "id": 32,
        "name": "Concluse",
        "boxArt":
            "https://res.cloudinary.com/ddz9c0wp9/image/upload/v1731715471/concluse_wjmxt6.webp",
        "link": "https://store.steampowered.com/app/826230/CONCLUSE/",
        "isCompleted": true,
        "toBeContinued": false,
        "completedOn": "November 19th, 2024",
        "rating": 1,
    },
    {
        "id": 33,
        "name": "P.T.",
        "boxArt":
            "https://res.cloudinary.com/ddz9c0wp9/image/upload/v1731714643/pt_kl5xbj.webp",
        "link":
            "https://steamcommunity.com/sharedfiles/filedetails/?id=3019867267",
        "isCompleted": true,
        "toBeContinued": false,
        "completedOn": "November 11th, 2024",
        "rating": 3.5,
    },
    {
        "id": 34,
        "name": "The Beast Inside",
        "boxArt":
            "https://res.cloudinary.com/ddz9c0wp9/image/upload/v1732863013/the_beast_inside_enk81b.webp",
        "link": "https://store.steampowered.com/app/792300/The_Beast_Inside/",
        "isCompleted": false,
        "toBeContinued": false,
        "completedOn": "",
        "rating": 0,
    },
    {
        "id": 35,
        "name": "Christmas Nightmare",
        "boxArt":
            "https://res.cloudinary.com/ddz9c0wp9/image/upload/v1732862921/christmas_nightmare_jruqq4.webp",
        "link":
            "https://store.steampowered.com/app/2693460/Christmas_Nightmare/",
        "isCompleted": false,
        "toBeContinued": false,
        "completedOn": "",
        "rating": 0,
    },
    {
        "id": 36,
        "name": "I'm on Observation Duty 7",
        "boxArt":
            "https://res.cloudinary.com/ddz9c0wp9/image/upload/v1732862921/observation_7_bxboom.webp",
        "link":
            "https://store.steampowered.com/app/2462520/Im_on_Observation_Duty_7/",
        "isCompleted": false,
        "toBeContinued": false,
        "completedOn": "",
        "rating": 0,
    },
    {
        "id": 37,
        "name": "Lost Alone Ultimate",
        "boxArt":
            "https://res.cloudinary.com/ddz9c0wp9/image/upload/v1732862921/lost_alone_ultimate_blvyyi.webp",
        "link":
            "https://store.steampowered.com/app/2341330/Lost_Alone_Ultimate/",
        "isCompleted": false,
        "toBeContinued": false,
        "completedOn": "",
        "rating": 0,
    },
    {
        "id": 38,
        "name": "The Room",
        "boxArt":
            "https://res.cloudinary.com/ddz9c0wp9/image/upload/v1732862922/the_room_yaro9i.webp",
        "link": "https://store.steampowered.com/app/288160/The_Room/",
        "isCompleted": false,
        "toBeContinued": false,
        "completedOn": "",
        "rating": 0,
    },
    {
        "id": 39,
        "name": "The Room Two",
        "boxArt":
            "https://res.cloudinary.com/ddz9c0wp9/image/upload/v1732862922/the_room_two_st4rfd.webp",
        "link": "https://store.steampowered.com/app/425580/The_Room_Two/",
        "isCompleted": false,
        "toBeContinued": false,
        "completedOn": "",
        "rating": 0,
    },
    {
        "id": 40,
        "name": "The Room 4: Old Sins",
        "boxArt":
            "https://res.cloudinary.com/ddz9c0wp9/image/upload/v1732862922/the_room_four_ed8lby.webp",
        "link":
            "https://store.steampowered.com/app/1361320/The_Room_4_Old_Sins/",
        "isCompleted": false,
        "toBeContinued": false,
        "completedOn": "",
        "rating": 0,
    },
    {
        "id": 41,
        "name": "Scary Shadow Spot: Last Farewell",
        "boxArt":
            "https://res.cloudinary.com/ddz9c0wp9/image/upload/v1732862922/scary_shadow_spot_q5t0ou.webp",
        "link":
            "https://store.steampowered.com/app/3096050/Scary_Shadow_Spot__Last_Farewell/",
        "isCompleted": false,
        "toBeContinued": false,
        "completedOn": "",
        "rating": 0,
    },
];
