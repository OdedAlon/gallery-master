'use strict';

const KEY = 'projects';
var gProjs;

_createProjs()

function getProjs() {
    return gProjs;
}

function getProjById(projId) {
    var proj = gProjs.find(function(proj) {
        return projId === proj.id;
    })
    return proj;
}


function _createProjs() {
    var projs
    projs = [
        {
            id: 'minesweeper',
            name: 'Mine Sweeper',
            title: 'The best game',
            desc: 'lorem ipsum lorem ipsum lorem ipsum',
            url: 'projes/Mine-Sweeper-first-main',
            publishedAt: 1448693940000,
            labels: ['Matrixes', 'keyboard events'],
        },
        {
            id: 'inpicture',
            name: 'In-Picture Game',
            title: 'Grate In-Picture game',
            desc: 'lorem ipsum lorem ipsum lorem ipsum',
            url: 'projes/Ex-InPicture',
            publishedAt: 1448693940000,
            labels: ['Matrixes', 'keyboard events'],
        },
        // {
        //     id: '003',
        //     name: 'Sokoban3',
        //     title: 'Better push those boxes',
        //     desc: 'lorem ipsum lorem ipsum lorem ipsum',
        //     url: 'projs/sokoban',
        //     publishedAt: 1448693940000,
        //     labels: ['Matrixes', 'keyboard events'],
        // },
        // {
        //     id: '004',
        //     name: 'Sokoban4',
        //     title: 'Better push those boxes',
        //     desc: 'lorem ipsum lorem ipsum lorem ipsum',
        //     url: 'projs/sokoban',
        //     publishedAt: 1448693940000,
        //     labels: ['Matrixes', 'keyboard events'],
        // },
        // {
        //     id: '005',
        //     name: 'Sokoban5',
        //     title: 'Better push those boxes',
        //     desc: 'lorem ipsum lorem ipsum lorem ipsum',
        //     url: 'projs/sokoban',
        //     publishedAt: 1448693940000,
        //     labels: ['Matrixes', 'keyboard events'],
        // },
        // {
        //     id: '006',
        //     name: 'Sokoban6',
        //     title: 'Better push those boxes',
        //     desc: 'lorem ipsum lorem ipsum lorem ipsum',
        //     url: 'projs/sokoban',
        //     publishedAt: 1448693940000,
        //     labels: ['Matrixes', 'keyboard events'],
        // },
        // {
        //     id: '007',
        //     name: 'Sokoban7',
        //     title: 'Better push those boxes',
        //     desc: 'lorem ipsum lorem ipsum lorem ipsum',
        //     url: 'projs/sokoban',
        //     publishedAt: 1448693940000,
        //     labels: ['Matrixes', 'keyboard events'],
        // },
        // {
        //     id: '008',
        //     name: 'Sokoban8',
        //     title: 'Better push those boxes',
        //     desc: 'lorem ipsum lorem ipsum lorem ipsum',
        //     url: 'projs/sokoban',
        //     publishedAt: 1448693940000,
        //     labels: ['Matrixes', 'keyboard events'],
        // }
    ];
    gProjs = projs
}