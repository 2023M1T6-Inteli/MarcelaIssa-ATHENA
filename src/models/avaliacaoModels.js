const database = require('../data/data')
const DAO = require('../data/DAO') // template para executar comandos no banco de dados


function avaliacoes() {}

// modelo responsável por listar avaliações
avaliacoes.prototype.getAvaliacoes = function(callback, idProf) {
    var sql = 'SELECT * FROM avaliacao WHERE id_professor = ?';

    // executa a consulta sql e retorna os dados na função callback
    DAO.select(sql, [idProf], retorno => {
        callback(retorno)
    });
}

// modelo responsável por criar uma avaliação
avaliacoes.prototype.postAvaliacao = function(callback, nomeAvaliacao, dataAvaliacao, serieAvaliacao, idProfessor) {

    // nesse ponto, o professor é criado com o nome, data e serie
    // passados via corpo da requisição
    var sql = 'INSERT INTO avaliacao (nome, data, serie, id_professor) VALUES (?,?,?,?);';
    DAO.insert(sql, [nomeAvaliacao, dataAvaliacao, serieAvaliacao, idProfessor], retorno => {
        callback(retorno)
    });
}

avaliacoes.prototype.updateAvaliacao = function(callback, nomeAvaliacao, dataAvaliacao, serieAvaliacao, idAvaliacao) {
    var sql = 'UPDATE avaliacao set nome = ? AND data = ? AND serie = ? WHERE id_avaliacao = ?';

    // executa a atualização e verifica se houve algum erro
    DAO.update(sql, [nomeAvaliacao, dataAvaliacao, serieAvaliacao, idAvaliacao], retorno => {
        callback(retorno)
    });
}

// modelo responsável por deletar uma avaliação
avaliacoes.prototype.deleteAvaliacao = function(callback, idAvaliacao) {
    var sql = 'DELETE FROM avaliacao WHERE id_avaliacao =?';

    // executa a consulta sql e retorna os dados na função callback
    DAO.delete(sql, [idAvaliacao], retorno => {
        callback(retorno)
    });
}

module.exports = function(){
    return avaliacoes;
}

