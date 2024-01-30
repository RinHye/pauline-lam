
let projects : any[] = []

const alpiq = {
    title: 'Alpiq France',
    subtitle: 'Développeur puis chef de projet technique à TheCodingMachine',
    contents: [
        {
            isList: true,
            titre: 'Tâches en bref',
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
    lien: 'alpiq'
}
const bacc = {
    title: 'Beautiful Accident',
    subtitle: 'Conception UI & intégrations des maquettes',
    contents: [
        {
            isList: false,
            title: 'But du projet',
            description: 'Créer les interfaces d\'un site de personnalisation de bagues'
        },
        {
            isList: false,
            title: 'Livrables',
            description: 'Moodboard, maquettes responsives, prototypes et intégration des maquettes'
        }
    ],
    lien: 'beautiful-accident'
}
const sitecv = {
    title: 'Evolution de mon site',
    subtitle: 'UX UI Design, intégration des maquettes',
    contents: [
        {
            isList: false,
            title: 'Description',
            description: 'J\'ai toujours développé et conçu mon site moi-même et ce, au fil du temps.'
        }
    ],
    lien: 'evolution-du-site'
}
const woka = {
    title: 'WorkAdventure',
    subtitle: 'UX UI Design pour l\'entreprise WorkAdventure',
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
    lien: 'woka'
}
const shein = {
    title: 'Redesign de SHEIN',
    subtitle: 'Projet de formation Ironhack',
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
    lien: 'shein'
}

const jazzcafe = {
    title: 'Jazz Café Montparnasse',
    subtitle: 'UI Designer pour le Jazz Café Montparnasse',
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
}

const flupaux = {
    title: 'Site mobile pour Flupa UX',
    subtitle: 'Projet UXUI en Ingénierie du Web',
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
}

const coriolis = {
    title: 'Coriolis',
    subtitle: 'Développeur à TheCodingMachine',
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
}
const dgfip = {
    title: 'DGFIP',
    subtitle: 'Développeur-concepteur JEE',
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
    ]
}

projects.push(alpiq, bacc, sitecv, woka, shein, jazzcafe, flupaux, coriolis, dgfip)

export const PROJECTS = projects;