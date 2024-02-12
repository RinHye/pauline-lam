
let projects = []
let list1 = []
let list2 = []
let list3 = []
const imgFolder = "images/projets/"
const alpiq = {
    title: 'Alpiq France',
    subtitle: 'Mon poste : développeur puis chef de projet technique',
    imageRef: imgFolder + 'Alpiq.jpg',
    contents: [
        {
            isList: true,
            title: 'Tâches en bref',
            bullet_list: [
                'Développement web',
                'Intégration de maquettes',
                'Gestion des développeurs',
                'Review de code',
                'Proposition de maquettes',
                'Optimisations SEO'
            ]
        }
    ],
    link: 'alpiq'
}

const bacc = {
    title: 'Beautiful Accident',
    subtitle: 'Design & développement de l\'UI',
    imageRef: imgFolder + 'bacc.jpg',
    contents: [
        {
            isList: false,
            title: 'But du projet',
            description: 'Refonte du site'
        },
        {
            isList: false,
            title: 'Livrables',
            description: 'Moodboard, maquettes responsives, prototypes et intégration (développement) des maquettes.'
        }
    ],
    link: 'beautiful-accident'
}

const sitecv = {
    title: 'Evolution du site',
    subtitle: 'UX UI Design, intégration des maquettes',
    imageRef: imgFolder + 'cv.jpg',
    contents: [
        {
            isList: false,
            title: 'Description',
            description: 'Vous retrouverez l\'évolution de mon site au fil des années, ainsi que les détails de la conception du site actuel.'
        }
    ],
    link: 'evolution-du-site'
}
const woka = {
    title: 'WorkAdventure',
    subtitle: 'UX UI Design pour l\'entreprise WorkAdventure',
    imageRef: imgFolder + 'Woka.jpg',
    contents: [
        {
            isList: false,
            title: 'But du projet',
            description: 'Redesigner l\'interface de partage d\'écran et la barre de navigation.'
        },
        {
            isList: false,
            title: 'Livrables',
            description: 'Moodboard, Style Guide, Prototype Hi-fi & une présentation.'
        }
    ],
    link: 'woka'
}
const shein = {
    title: 'Redesign de SHEIN',
    subtitle: 'Projet de formation Ironhack',
    imageRef: imgFolder + 'shein.jpg',
    contents: [
        {
            isList: false,
            title: 'But du projet',
            description: 'Redesigner 3 écrans d’une application mobile, sans retirer de fonctionnalités.'
        },
        {
            isList: false,
            title: 'Livrables',
            description: 'Analyse concurrence visuelle, moodboard, style guide et maquettes.'
        }
    ],
    link: 'shein'
}

const jazzcafe = {
    title: 'Jazz Café',
    subtitle: 'UI Designer pour le Jazz Café',
    imageRef: imgFolder + 'JCM.jpg',
    contents: [
        {
            isList: false,
            title: 'But du projet',
            description: 'Créer les maquettes du nouveau site.'
        },
        {
            isList: false,
            title: 'Livrables',
            description: 'Maquettes'
        }
    ],
    link: 'jazzcafe'
}

const flupaux = {
    title: 'Flupa UX',
    subtitle: 'Projet UXUI en Ingénierie du Web',
    imageRef: imgFolder + 'Flupa.jpg',
    contents: [
        {
            isList: false,
            title: 'But du projet',
            description: 'Créer les maquettes mobiles pour une association gérant des événements autour de l\'UX & l\'UI.'
        },
        {
            isList: false,
            title: 'Livrables',
            description: 'Persona, maquettes'
        }
    ],
    link: 'flupa'
}

const coriolis = {
    title: 'Coriolis',
    subtitle: 'Développeur à TheCodingMachine',
    imageRef: imgFolder + 'coriolis.jpg',
    contents: [
        {
            isList: true,
            title: 'Tâches en bref',
            bullet_list: [
                'Développement web',
                'Intégration de maquettes',
                'gestion des développeurs',
                'Review de code',
                'Proposition de maquettes',
                'Mise en place du SEO'
            ]
        }
    ],
    link: 'coriolis'
}
const dgfip = {
    title: 'DGFIP',
    subtitle: 'Développeur-concepteur JEE',
    imageRef: imgFolder + 'DGFIP.jpg',
    contents: [
        {
            isList: true,
            title: 'Tâches en bref',
            bullet_list: [
                'Développement web',
                'Intégration de maquettes',
                'gestion des développeurs',
                'Review de code',
                'Proposition de maquettes',
                'Mise en place du SEO'
            ]
        }
    ],
    link: 'dgfip'
}

const hc = {
    title: 'My Care',
    subtitle: 'UX UI Design',
    imageRef: imgFolder + 'hc.jpg',
    contents: [
        {
            isList: true,
            title: 'Tâches en bref',
            bullet_list: [
                'Développement web',
                'Intégration de maquettes',
                'gestion des développeurs',
                'Review de code',
                'Proposition de maquettes',
                'Mise en place du SEO'
            ]
        }
    ],
    link: 'health-care'
}


projects.push(bacc, woka, shein, alpiq, jazzcafe, hc)

//list1.push(alpiq, bacc, sitecv);
//list2.push(woka, shein, jazzcafe);
//list3.push(flupaux, hc);

export const PROJECTS = projects;

export const LIST1 = list1;
export const LIST2 = list2;
export const LIST3 = list3;
