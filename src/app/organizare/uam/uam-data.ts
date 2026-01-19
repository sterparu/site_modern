
export interface UamMember {
    slug: string;
    name: string;
    category: string;
    image: string;
    content: Record<string, {
        type: 'paragraph' | 'heading' | 'list';
        text?: string;
        items?: string[];
        level?: number;
    }[]>;
}

export const uamMembers: UamMember[] = [
    {
        slug: "nake-florin",
        name: "Florin Angel",
        category: "CAT 3",
        image: "/images/uam/nake_florin.png",
        content: {
            ro: [
                { type: 'heading', level: 2, text: "Ca Decoy" },
                { type: 'paragraph', text: "A început cariera de decoy în 2012 în România - licențiat în România și în Belgia (la acea vreme). Decoy pentru UK din 2019. Primul decoy care a participat pentru UK la o SuperSelecție. Primul decoy care a ajuns pe podium (locul 3/20). Decoy la Campionatul Mondial FMBB Grecia 2022 pentru UK. Decoy la Campionatul Mondial FCI Spania 2022. Câștigător SuperSelecție 2025 Italia. Decoy Campionat Național în țări precum: UK, România, Austria, USA." },
                { type: 'heading', level: 2, text: "Ca Trainer" },
                { type: 'paragraph', text: "Am avut propria companie de training în România și am colaborat cu școli de câini, organizații caritabile din 2009-2015. Am antrenat câini pentru filme, videoclipuri muzicale, reclame, spoturi TV 2008-2015. Dog show handling 2010-2015." },
                { type: 'heading', level: 3, text: "În UK" },
                { type: 'paragraph', text: "Head Trainer pentru Residential Training Dog School 2015-2018. Canine Behaviourist pentru organizație mare de salvare a câinilor 2018-2024. Canine Training Manager 2025-prezent." }
            ],
            // English Fallback/Translation (Using Romanian for now or empty for others as requested specific translation only for Yoann)
            en: [
                { type: 'heading', level: 2, text: "As Decoy" },
                { type: 'paragraph', text: "Started decoy career in 2012 in Romania - licensed in Romania and Belgium (at that time). Decoy for UK since 2019. First decoy to participate for UK at a SuperSelection. First decoy to reach the podium (3rd place/20). Decoy at FMBB World Championship Greece 2022 for UK. Decoy at FCI World Championship Spain 2022. Winner of SuperSelection 2025 Italy. National Championship Decoy in countries such as: UK, Romania, Austria, USA." },
                // ... abbreviated translation
            ]
        }
    },
    {
        slug: "morgan-blanchard",
        name: "Morgan Blanchard",
        category: "CAT 3",
        image: "/images/uam/morgan_blanchard.png",
        content: {
            ro: [
                { type: 'paragraph', text: "Lorem ipsum dolor sit amet..." }
            ]
        }
    },
    {
        slug: "davide-cantaro",
        name: "Davide Cantaro",
        category: "CAT 3",
        image: "/images/uam/davide_cantaro.png",
        content: {
            ro: [
                { type: 'paragraph', text: "Lorem ipsum dolor sit amet..." }
            ]
        }
    },
    {
        slug: "anderson-ramos",
        name: "Anderson Ramos",
        category: "CAT 1&2 - Rez. CAT 3",
        image: "/images/uam/anderson_ramos.png",
        content: {
            ro: [
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
        }
    },
    {
        slug: "alexandru-davidescu",
        name: "Alexandru Davidescu",
        category: "CAT 1&2",
        image: "/images/uam/alexandru_davidescu.png",
        content: {
            ro: [
                { type: 'paragraph', text: "Sunt Alex Davidescu, decoy internațional de Mondioring..." }
            ]
        }
    },
    {
        slug: "yoann-lebreton",
        name: "Yoann LeBreton",
        category: "Rez. CAT 1&2",
        image: "/images/uam/yoann_lebreton.png",
        content: {
            en: [
                { type: 'paragraph', text: "My name is Yoann Le Breton, I am 22 years old, and I have been practicing Mondioring since the age of 15. I have progressed to Level 3 in France, and then at the international level." },
                { type: 'paragraph', text: "I have participated in several World Championships in Category 3, under the FMBB and FCI federations, as well as most national championships in different countries, which has allowed me to gain solid competitive experience and adaptability." },
                { type: 'paragraph', text: "At the national level, I have competed in two French Mondioring Championships in Category 3, demonstrating my commitment and consistency at the highest level." },
                { type: 'paragraph', text: "I would like to warmly thank my sponsor, Junot Équipements, who has supported me since the beginning, and Bernard Junot for his guidance throughout my career as a decoy. Their trust and support have been essential to my journey and achievements." }
            ],
            ro: [
                { type: 'paragraph', text: "Mă numesc Yoann Le Breton, am 22 de ani și practic Mondioring de la vârsta de 15 ani. Am progresat până la Nivelul 3 în Franța, apoi la nivel internațional." },
                { type: 'paragraph', text: "Am participat la mai multe Campionate Mondiale la Categoria 3, sub federațiile FMBB și FCI, precum și la majoritatea campionatelor naționale din diverse țări, ceea ce mi-a permis să dobândesc o experiență competițională solidă și adaptabilitate." },
                { type: 'paragraph', text: "La nivel național, am concurat în două Campionate de Mondioring ale Franței la Categoria 3, demonstrându-mi angajamentul și constanța la cel mai înalt nivel." },
                { type: 'paragraph', text: "Aș dori să mulțumesc călduros sponsorului meu, Junot Équipements, care m-a susținut încă de la început, și lui Bernard Junot pentru îndrumarea sa pe parcursul carierei mele de decoy. Încrederea și sprijinul lor au fost esențiale pentru parcursul și realizările mele." }
            ],
            fr: [
                { type: 'paragraph', text: "Je m'appelle Yoann Le Breton, j'ai 22 ans et je pratique le Mondioring depuis l'âge de 15 ans. J'ai progressé jusqu'au niveau 3 en France, puis au niveau international." },
                { type: 'paragraph', text: "J'ai participé à plusieurs championnats du monde en catégorie 3, sous les fédérations FMBB et FCI, ainsi qu'à la plupart des championnats nationaux dans différents pays, ce qui m'a permis d'acquérir une solide expérience de la compétition et une grande capacité d'adaptation." },
                { type: 'paragraph', text: "Au niveau national, j'ai participé à deux championnats de France de Mondioring en catégorie 3, démontrant mon engagement et ma régularité au plus haut niveau." },
                { type: 'paragraph', text: "Je tiens à remercier chaleureusement mon sponsor, Junot Équipements, qui me soutient depuis mes débuts, ainsi que Bernard Junot pour ses conseils tout au long de ma carrière d'Homme Assistant. Leur confiance et leur soutien ont été essentiels à mon parcours et à mes réussites." }
            ],
            de: [
                { type: 'paragraph', text: "Ich heiße Yoann Le Breton, bin 22 Jahre alt und praktiziere Mondioring seit meinem 15. Lebensjahr. Ich habe mich in Frankreich bis Stufe 3 hochgearbeitet und bin dann auf internationaler Ebene angetreten." },
                { type: 'paragraph', text: "Ich habe an mehreren Weltmeisterschaften in der Kategorie 3 unter den Verbänden FMBB und FCI teilgenommen sowie an den meisten nationalen Meisterschaften in verschiedenen Ländern, was mir ermöglichte, solide Wettbewerbserfahrung und Anpassungsfähigkeit zu gewinnen." },
                { type: 'paragraph', text: "Auf nationaler Ebene habe ich an zwei französischen Mondioring-Meisterschaften in der Kategorie 3 teilgenommen und dabei mein Engagement und meine Beständigkeit auf höchstem Niveau unter Beweis gestellt." },
                { type: 'paragraph', text: "Ich möchte meinem Sponsor Junot Équipements, der mich von Anfang an unterstützt hat, und Bernard Junot für seine Anleitung während meiner Karriere als Helfer herzlich danken. Ihr Vertrauen und ihre Unterstützung waren für meinen Weg und meine Erfolge von entscheidender Bedeutung." }
            ],
            es: [
                { type: 'paragraph', text: "Me llamo Yoann Le Breton, tengo 22 años y practico Mondioring desde los 15 años. He progresado hasta el Nivel 3 en Francia y luego a nivel internacional." },
                { type: 'paragraph', text: "He participado en varios Campeonatos Mundiales en la Categoría 3, bajo las federaciones FMBB y FCI, así como en la mayoría de los campeonatos nacionales en diferentes países, lo que me ha permitido adquirir una sólida experiencia competitiva y adaptabilidad." },
                { type: 'paragraph', text: "A nivel nacional, he competido en dos Campeonatos de Francia de Mondioring en la Categoría 3, demostrando mi compromiso y constancia al más alto nivel." },
                { type: 'paragraph', text: "Quisiera agradecer calurosamente a mi patrocinador, Junot Équipements, que me ha apoyado desde el principio, y a Bernard Junot por su orientación a lo largo de mi carrera como hombre asistente (decoy). Su confianza y apoyo han sido esenciales para mi trayectoria y logros." }
            ],
            pt: [
                { type: 'paragraph', text: "O meu nome é Yoann Le Breton, tenho 22 anos e pratico Mondioring desde os 15 anos. Progredi até ao Nível 3 em França e depois a nível internacional." },
                { type: 'paragraph', text: "Participei em vários Campeonatos do Mundo na Categoria 3, sob as federações FMBB e FCI, bem como na maioria dos campeonatos nacionais em diferentes países, o que me permitiu ganhar uma sólida experiência competitiva e adaptabilidade." },
                { type: 'paragraph', text: "A nível nacional, competi em dois Campeonatos Franceses de Mondioring na Categoria 3, demonstrando o meu compromisso e consistência ao mais alto nível." },
                { type: 'paragraph', text: "Gostaria de agradecer calorosamente ao meu patrocinador, Junot Équipements, que me apoiou desde o início, e a Bernard Junot pela sua orientação ao longo da minha carreira como homem assistente. A sua confiança e apoio têm sido essenciais para o meu percurso e conquistas." }
            ],
            hu: [
                { type: 'paragraph', text: "A nevem Yoann Le Breton, 22 éves vagyok, és 15 éves korom óta foglalkozom Mondioringgal. Franciaországban a 3. szintig jutottam, majd nemzetközi szinten folytattam." },
                { type: 'paragraph', text: "Számos világbajnokságon vettem részt a 3. kategóriában, az FMBB és az FCI szövetségek alatt, valamint a legtöbb nemzeti bajnokságon különböző országokban, ami lehetővé tette számomra, hogy szilárd verseny tapasztalatot és alkalmazkodóképességet szerezzek." },
                { type: 'paragraph', text: "Nemzeti szinten két francia Mondioring bajnokságon indultam a 3. kategóriában, bizonyítva elkötelezettségemet és következetességemet a legmagasabb szinten." },
                { type: 'paragraph', text: "Szeretném hálásan megköszönni szponzoromnak, a Junot Équipements-nek, aki a kezdetektől fogva támogatott, és Bernard Junot-nak az iránymutatását a segédszurkolói (decoy) karrierem során. Bizalmuk és támogatásuk elengedhetetlen volt az utamhoz és eredményeimhez." }
            ],
            el: [
                { type: 'paragraph', text: "Ονομάζομαι Yoann Le Breton, είμαι 22 ετών και ασχολούμαι με το Mondioring από την ηλικία των 15 ετών. Έφτασα στο Επίπεδο 3 στη Γαλλία και στη συνέχεια σε διεθνές επίπεδο." },
                { type: 'paragraph', text: "Έχω συμμετάσχει σε αρκετά Παγκόσμια Πρωταθλήματα στην Κατηγορία 3, υπό τις ομοσπονδίες FMBB και FCI, καθώς και στα περισσότερα εθνικά πρωταθλήματα σε διάφορες χώρες, γεγονός που μου επέτρεψε να αποκτήσω στέρεη αγωνιστική εμπειρία και προσαρμοστικότητα." },
                { type: 'paragraph', text: "Σε εθνικό επίπεδο, έχω διαγωνιστεί σε δύο Πρωταθλήματα Mondioring Γαλλίας στην Κατηγορία 3, αποδεικνύοντας την αφοσίωση και τη συνέπειά μου στο υψηλότερο επίπεδο." },
                { type: 'paragraph', text: "Θα ήθελα να ευχαριστήσω θερμά τον χορηγό μου, Junot Équipements, που με στήριξε από την αρχή, και τον Bernard Junot για την καθοδήγησή του καθ' όλη τη διάρκεια της καριέρας μου ως βοηθός καθήκοντος (decoy). Η εμπιστοσύνη και η υποστήριξή τους ήταν καθοριστικές για την πορεία και τα επιτεύγματά μου." }
            ]
        }
    }
];
