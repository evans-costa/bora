// const fs = require('fs')

// function Evento(picture, title, description) {
//     this.picture = picture;
//     this.title = title;
//     this.description = description;
// }

// function getAll() {
//     const listaEventos = JSON.parse(
//         fs.readFileSync('database/eventos.json', 'utf-8')
//     );
//     return listaEventos.map(
//         (evento) =>
//         new Evento(
//             evento.picture,
//             evento.title,
//             evento.description
//         )
//     );
// }

// function criarEvento(picture, title, description) {
//     const novoEvento = new Evento(picture, title, description)
//     const listaEventos = getAll();
//     listaEventos.push(novoEvento)
//     fs.writeFileSync('database/eventos.json', JSON.stringify(listaEventos))
// }

// function getById(id) {
//     const listaEventos = getAll()
//     return listaEventos[id]
// }

// function atualizarEvento(id, picture, title, description) {
//     const listaEventos = getAll()
//     const evento = listaEventos[id]
//     evento.picture = picture
//     evento.title = title
//     evento.description = description
//     fs.writeFileSync('database/eventos.json', JSON.stringify(listaEventos))
// }

// function excluirEvento(id) {
//     const listaEventos = getAll();
//     listaEventos.splice(id, 1)
//     fs.writeFileSync('database/eventos.json', JSON.stringify(listaEventos))
// }



// module.exports = {
//     getAll,
//     criarEvento,
//     getById,
//     atualizarEvento,
//     excluirEvento
// }