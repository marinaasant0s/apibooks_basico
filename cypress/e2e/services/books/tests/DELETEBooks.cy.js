import * as DELETEBooks from '../requests/DELETEBooks.request';
import * as GETBooks from '../requests/GETBooks.request';
import * as POSTBooks from '../requests/POSTBooks.request';

describe ('DELETE Books',() => {
    it('Deletar um livro', () => {
        GETBooks.todosLivros().then((resTodosLivros) => {
            DELETEBooks.deletarLivros(resTodosLivros.body[0].ID).then((resDeletarLivros) => {
                expect(resDeletarLivros.status).to.eq(200);
            })
        })
    });
    
    it('Criar e excluir um livro', () => {
        POSTBooks.addLivros().then((resAddBooks) => {
            DELETEBooks.deletarLivros(resAddBooks.body[0].ID).then((resDeletarLivros) => {
                expect(resDeletarLivros.status).to.eq(200);
            })
        })
    });
});
