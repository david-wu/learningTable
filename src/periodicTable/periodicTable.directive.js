angular.module('app')
    .directive('periodicTable', [
        PeriodicTable
    ]);

function PeriodicTable(){
    return {
        scope: {},
        templateUrl: 'periodicTable/periodicTable.tpl.html',
        link: linkFunc.bind(null),
    };
}

function linkFunc(scope, element, attrs){


    scope.settings = {};

    scope.reset = function(){
        scope.groups = _.cloneDeep(defaultGroups);
    }

    scope.saveTo = function(namespace){
        scope.settings[namespace] = _.cloneDeep(scope.groups);
        localStorage.setItem(namespace, JSON.stringify(scope.groups));
    }

    scope.load = function(namespace){
        // scope.groups = _.cloneDeep(scope.settings[namespace]);
        var settings = JSON.parse(localStorage.getItem(namespace));
        if(settings){
            scope.groups = settings;
        }
        // scope.groups = JSON.parse(localStorage.getItem(namespace))
    }

    scope.loadAll = function(){


        _.each(Object.keys(localStorage), function(key){
            scope.settings[key] = localStorage[key];
        });
    };

    scope.loadAll();
    console.log(scope.settings)

    scope.reset();
}

var defaultGroups = [
    {
        name: 'Space Types',
        class: 'space-types',
        columns: [
            [
                {
                    tag: 'Fc',
                    name: 'faculty spaces'
                },
                {
                    tag: 'Sp',
                    name: 'support'
                },
                {
                    tag: 'Ex',
                    name: 'exhibition'
                },
                {
                    tag: 'Ci',
                    name: 'circulation'
                },
                {
                    tag: 'Od',
                    name: 'outdoor',
                }
            ],
            [
                {
                    tag: 'S',
                    name: 'soft seating',
                },
                {
                    tag: 'F',
                    name: 'flexible spaces'
                },
                {
                    tag: 'C',
                    name: 'cave space',
                },
                {
                    tag: 'St',
                    name: 'studio space',
                },
                {
                    tag: 'Cb',
                    name: 'collaboration',
                },
            ],
            [
                {
                    tag: 'Io',
                    name: 'indoor/outdoor',
                },
                {
                    tag: 'V',
                    name: 'Views/Vistas',
                },
                {
                    tag: 'Ce',
                    name: 'casual eating',
                },
                {
                    tag: 'Pf',
                    name: 'physical fitness',
                },
                {
                    tag: 'Mp',
                    name: 'music space',
                }
            ],
            [
                {
                    tag: 'Cr',
                    name: 'classroom',
                },
                {
                    tag: 'At',
                    name: 'Atrium/Lobby',
                },
                {
                    tag: 'Gl',
                    name: 'gallery',
                },
                {
                    tag: 'So',
                    name: 'storage',
                },
                {
                    tag: 'Lb',
                    name: 'labs',
                },
            ]
        ]
    },
    {
        name: 'Psychological',
        class: 'psychological',
        spaced: true,
        columns: [
            [
                {
                    tag: 'Cv',
                    name: 'creativeness'
                },
                {
                    tag: 'En',
                    name: 'encouragement',
                },
                {
                    tag: 'Re',
                    name: 'reflection',
                },
                {
                    tag: 'Sp',
                    name: 'Spirituality',
                },
                {
                    tag: 'Cm',
                    name: 'community',
                },
                {
                    tag: 'Dr',
                    name: 'discovery',
                },
            ],
            [
                {
                    tag: 'So',
                    name: 'socialization',
                },
                {
                    tag: 'Sa',
                    name: 'safety',
                },
                {
                    tag: 'Aw',
                    name: 'Awe',
                },
                {
                    tag: 'Jo',
                    name: 'Joy',
                },
                {
                    tag: 'Pl',
                    name: 'play',
                },
                {
                    tag: 'St',
                    name: 'stimulation',
                },
            ]
        ]
    },
    {
        name: 'Spatial',
        class: 'spacial',
        columns: [
            [
                {
                    tag: 'Co',
                    name: 'connectivity'
                },
                {
                    tag: 'Na',
                    name: 'nature',
                },
                {
                    tag: 'Mo',
                    name: 'monument',
                },
                {
                    tag: 'Te',
                    name: 'Technology',
                },
                {
                    tag: 'Qu',
                    name: 'Quietness',
                },
                {
                    tag: 'Qu',
                    name: 'Quietness',
                },
                {
                    tag: 'Cg',
                    name: 'Congregation',
                },
            ],
            [
                {
                    tag: 'Im',
                    name: 'intimacy'
                },
                {
                    tag: 'Op',
                    name: 'openness',
                },
                {
                    tag: 'Br',
                    name: 'brightness',
                },
                {
                    tag: 'Cl',
                    name: 'closure',
                },
                {
                    tag: 'Ac',
                    name: 'Activeness',
                },
                {
                    tag: 'Ic',
                    name: 'interaction',
                },
            ],
        ]
    },
    {
        name: 'Phenomenological',
        class: 'pheno',
        columns: [
            [
                {
                    tag: 'Ar',
                    name: 'aroma'
                },
                {
                    tag: 'Tx',
                    name: 'texture',
                },
                {
                    tag: 'Vp',
                    name: 'pleasantness',
                },
                {
                    tag: 'Cr',
                    name: 'colorfulness',
                },
                {
                    tag: 'Em',
                    name: 'empowerment',
                },
                {
                    tag: 'Rf',
                    name: 'reflectiveness',
                },
            ],
            [
                {
                    tag: 'Wa',
                    name: 'warmth'
                },
                {
                    tag: 'Cn',
                    name: 'collaboration',
                },
                {
                    tag: 'Cz',
                    name: 'coziness',
                },
                {
                    tag: 'Br',
                    name: 'breeziness',
                },
                {
                    tag: 'Bl',
                    name: 'be-littlement',
                },
                {
                    tag: 'Sd',
                    name: 'studiousness',
                },
            ]

        ]
    },
    {
        name: 'Learning Modalities',
        class: 'modalities',
        spaced: true,
        columns: [
            [
                {
                    tag: 'Sl',
                    name: 'social learning'
                },
                {
                    tag: 'Al',
                    name: 'Art learning',
                },
                {
                    tag: 'St',
                    name: 'Story Telling',
                },
                {
                    tag: 'Ho',
                    name: 'Hand on learning',
                },
                {
                    tag: 'Sp',
                    name: 'student present',
                },
            ],
            [
                {
                    tag: 'Re',
                    name: 'Research'
                },
                {
                    tag: 'Pe',
                    name: 'Performance',
                },
                {
                    tag: 'Se',
                    name: 'Seminar',
                },
                {
                    tag: 'Cs',
                    name: 'community serve',
                },
                {
                    tag: 'Nl',
                    name: 'Naturalist Learn',
                },
            ],
            [
                {
                    tag: 'Le',
                    name: 'Lecture format'
                },
                {
                    tag: 'Pb',
                    name: 'project Based',
                },
                {
                    tag: 'Tb',
                    name: 'Tech based',
                },
                {
                    tag: 'Dl',
                    name: 'Distance learning',
                },
            ],
            [
                {
                    tag: 'Is',
                    name: 'Independent Stdy'
                },
                {
                    tag: 'Pt',
                    name: 'Peer Tutoring',
                },
                {
                    tag: 'Tc',
                    name: 'Team Collaborate',
                },
                {
                    tag: 'Oo',
                    name: 'One on One',
                },
            ]
        ]
    },
    {
        name: 'Learning Intelligence',
        class: 'intelligence',
        columns: [
            [
                {
                    tag: 'Li',
                    name: 'Linguistic'
                },
                {
                    tag: 'Lo',
                    name: 'Logical / Math',
                },
                {
                    tag: 'M',
                    name: 'Musical',
                },
                {
                    tag: 'K',
                    name: 'Kinesthetic',
                },
            ],
            [
                {
                    tag: 'S',
                    name: 'Sptial'
                },
                {
                    tag: 'N',
                    name: 'Naturalist',
                },
                {
                    tag: 'In',
                    name: 'Interpersonal',
                },
                {
                    tag: 'It',
                    name: 'Intrapersonal',
                },
                {
                    tag: 'E',
                    name: 'Existential',
                },
            ],
        ]
    }
];
