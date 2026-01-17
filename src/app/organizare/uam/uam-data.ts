
export interface UamMember {
    slug: string;
    name: string;
    category: string;
    image: string;
    content: {
        type: 'paragraph' | 'heading' | 'list';
        text?: string;
        items?: string[];
        level?: number;
    }[];
}

export const uamMembers: UamMember[] = [
    {
        slug: "nake-florin",
        name: "Florin Angel",
        category: "CAT 3",
        image: "/images/uam/nake_florin.png",
        content: [
            { type: 'heading', level: 2, text: "Ca Decoy" },
            { type: 'paragraph', text: "A început cariera de decoy în 2012 în România - licențiat în România și în Belgia (la acea vreme). Decoy pentru UK din 2019. Primul decoy care a participat pentru UK la o SuperSelecție. Primul decoy care a ajuns pe podium (locul 3/20). Decoy la Campionatul Mondial FMBB Grecia 2022 pentru UK. Decoy la Campionatul Mondial FCI Spania 2022. Câștigător SuperSelecție 2025 Italia. Decoy Campionat Național în țări precum: UK, România, Austria, USA." },
            { type: 'heading', level: 2, text: "Ca Trainer" },
            { type: 'paragraph', text: "Am avut propria companie de training în România și am colaborat cu școli de câini, organizații caritabile din 2009-2015. Am antrenat câini pentru filme, videoclipuri muzicale, reclame, spoturi TV 2008-2015. Dog show handling 2010-2015." },
            { type: 'heading', level: 3, text: "În UK" },
            { type: 'paragraph', text: "Head Trainer pentru Residential Training Dog School 2015-2018. Canine Behaviourist pentru organizație mare de salvare a câinilor 2018-2024. Canine Training Manager 2025-prezent." }
        ]
    },
    {
        slug: "morgan-blanchard",
        name: "Morgan Blanchard",
        category: "CAT 3",
        image: "/images/uam/morgan_blanchard.png",
        content: [
            { type: 'paragraph', text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
            { type: 'paragraph', text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt." },
            { type: 'paragraph', text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga." }
        ]
    },
    {
        slug: "davide-cantaro",
        name: "Davide Cantaro",
        category: "CAT 3",
        image: "/images/uam/davide_cantaro.png",
        content: [
            { type: 'paragraph', text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
            { type: 'paragraph', text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt." }
        ]
    },
    {
        slug: "anderson-ramos",
        name: "Anderson Ramos",
        category: "CAT 1&2 - Rez. CAT 3",
        image: "/images/uam/anderson_ramos.png",
        content: [
            { type: 'paragraph', text: "Anderson Ramos este un profesionist consacrat în Mondioring, cu performanțe remarcabile recunoscute la nivel internațional." },
            {
                type: 'list', items: [
                    "TOP 3 mondial – Decoy Mondioring 2025",
                    "Campion al Braziliei – Decoy Mondioring 2025",
                    "Dresor profesionist de câini",
                    "Membru al Confederației Braziliene de Cinologie (CBKC) și al Federației Chinologice Internaționale (FCI)"
                ]
            }
        ]
    },
    {
        slug: "alexandru-davidescu",
        name: "Alexandru Davidescu",
        category: "CAT 1&2",
        image: "/images/uam/alexandru_davidescu.png",
        content: [
            { type: 'paragraph', text: "Sunt Alex Davidescu, decoy internațional de Mondioring, activ pe scena sportului canin. Din 2009 reprezint România la cel mai înalt nivel în calitate de decoy si conductor canin, contribuind la formarea mai multor decoy si echipe canine." },
            { type: 'paragraph', text: "Am avut onoarea să fiu selectat și să lucrez în competiții și selecții internaționale, inclusiv:" },
            { type: 'paragraph', text: "Decoy la Campionatul Mondial FMBB 2023" },
            { type: 'paragraph', text: "Am participat la mai multe selecți internațional în Belgia (2016), Rusia (2018), România (2021 – locul 5), Grecia (2024) Italia (2025)" },
            { type: 'paragraph', text: "Experiență extinsă în Mondioring și IPO, cu participări la campionate naționale și mondiale" },
            { type: 'paragraph', text: "Misiunea mea este să ofer un test corect, tehnic și sportiv, punând în valoare curajul, claritatea și instinctele câinelui, respectând în același timp siguranța și spiritul competiției. Principiile mele sunt:" },
            {
                type: 'list', items: [
                    "respect pentru câine și sport",
                    "tehnică, precizie și neutralitate",
                    "intensitate, dinamism și control",
                    "contribuția la dezvoltarea sportului, atât în România cât și internațional"
                ]
            },
            { type: 'paragraph', text: "Mondioring nu este doar o competiție — este o cultură a excelenței. Iar rolul decoy-ului este să o susțină, să o ridice și să o reprezinte cu onoare." }
        ]
    },
    {
        slug: "yoann-lebreton",
        name: "Yoann LeBreton",
        category: "Rez. CAT 1&2",
        image: "/images/uam/yoann_lebreton.png",
        content: [
            { type: 'paragraph', text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
            { type: 'paragraph', text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt." },
            { type: 'paragraph', text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga." }
        ]
    }
];
