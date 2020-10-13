#!/usr/bin/env node

const mdLinks = require('../src');

const { argv } = require('yargs').check((argv, options) => { //yargs lo usamos para configurar como se veran los links en la consola
    const filePaths = argv._
    if (filePaths.length !== 1) { // si el usuario no puso ningun link, le arrojara un error y no ejecutara nada 
        throw new Error("You need to pass a path to the file to read")
    } else {
        return true // tell Yargs that the arguments passed the check
    }
}).options({ // le ponemos unas opciones o los comandos que queramos ver en node
    'validate': {
        'describe': 'Validates each link to check if the link is broken or not',
        demandOption: false,
        default: false,
        type: "boolean"
    },
    'stats': {
        'describe': 'Shows some basic statistics about the links in the file',
        demandOption: false,
        default: false,
        type: "boolean"
    }
});


//Realizamos  una estadistica del total de links, mostrando los links que estan rotos y los links sin repetir
mdLinks(argv._[0], { validate: argv.validate, stats: argv.stats }).then((links) => {
    const stats = {};
    if (argv.stats) {
        stats.total = links.length;
        const distinctLinks = [...new Set(links.map(link => link.href))];
        stats.unique = distinctLinks.length;
        if (argv.validate) {
            const brokenLinks = links.filter(link => !link.ok);
            stats.broken = brokenLinks.length;
        }
    }

    console.log(links, stats);

});