import * as GETBooks from '../requests/GETBooks.request';

describe ('GET Books',() => {
    it('Listando todos os livros', () => {
        GETBooks.todosLivros().then((response) =>{
            expect(response.status).to.eq(200)
        })
    });
});