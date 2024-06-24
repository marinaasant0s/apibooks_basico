import * as POSTBooks from '../requests/POSTBooks.request';

describe ('POST Books',() => {
    it('Adicionando livros', () => {
        POSTBooks.addLivros().then((response) =>{
            expect(response.status).to.eq(200)
        })
    });
});
