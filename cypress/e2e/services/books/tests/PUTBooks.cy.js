import * as PUTBooks from '../requests/PUTBooks.request';
import * as GETBooks from '../requests/GETBooks.request';
import * as POSTBooks from '../requests/POSTBooks.request';

describe ('PUT Books',() => {
    it('Atualizar um livro', () => {
        GETBooks.todosLivros().then((resTodosLivros) => {
            PUTBooks.updateBook(resTodosLivros.body[0].ID).then((resUpdateLivros) => {
                expect(resUpdateLivros.status).to.eq(200);
                expect(resUpdateLivros.body).to.be.not.null;
                expect(resUpdateLivros.body.Title).to.eq('Livro atualizado');
            })
        })
    });
    
    it('Criar e altualizar um livro', () => {
        POSTBooks.addLivros().then((resAddBooks) => {
            PUTBooks.updateBook(resAddBooks.body[0].ID).then((resUpdateLivros) => {
                expect(resUpdateLivros.status).to.eq(200);
                expect(resUpdateLivros.body).to.be.not.null;
                expect(resUpdateLivros.body.Title).to.eq('Livro atualizado');
            })
        })
    });
});
