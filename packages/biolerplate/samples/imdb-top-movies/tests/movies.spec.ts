import resolvers from '../graphql/resolvers/rootResolver';

test('Get All Movies', () => {
    expect(JSON.parse(JSON.stringify(resolvers.getMovies()))).toEqual(JSON.parse(`[
        {
            "id": 1,
            "title": "The Shawshank Redemption",
            "year": 1994,
            "duration": 142,
            "genre": "Drama",
            "imdbRate": 9.3,
            "director": "Frank Darabont"
        },
        {
            "id": 2,
            "title": "The Godfather",
            "year": 1972,
            "duration": 175,
            "genre": "Drama, Crime",
            "imdbRate": 9.2,
            "director": "Francis Ford Coppola"
        }, 
        {
            "id": 3,
            "title": "The Dark Knight",
            "year": 2008,
            "duration": 152,
            "genre": "Action, Crime, Drama",
            "imdbRate": 9.0
        },
        {
            "id": 4,
            "title": "The Godfather: Part II",
            "year": 1975,
            "duration": 202,
            "genre": "Crime, Drama",
            "imdbRate": 9.0
        },
        {
            "id": 5,
            "title": "The Lord of the Rings: The Return of the King",
            "year": 2003,
            "duration": 201,
            "genre": "Adventure, Drama, Fantasy",
            "imdbRate": 8.9,
            "director": "Peter Jackson"
        }
    ]`))
})

test('Get the best movie', () => {
    expect(JSON.parse(JSON.stringify(resolvers.bestMovie()))).toEqual(JSON.parse(`
    {
        "id": 1,
        "title": "The Shawshank Redemption",
        "year": 1994,
        "duration": 142,
        "genre": "Drama",
        "imdbRate": 9.3,
        "director": "Frank Darabont"
    }
    `))
})

test('Search movie #ID 1', () => {
    expect(JSON.parse(JSON.stringify(resolvers.searchMovie(1)))).toEqual(JSON.parse(`
    {
        "id": 1,
        "title": "The Shawshank Redemption",
        "year": 1994,
        "duration": 142,
        "genre": "Drama",
        "imdbRate": 9.3,
        "director": "Frank Darabont"
    }
    `))
})

test('Search movie #ID 3', () => {
    expect(JSON.parse(JSON.stringify(resolvers.searchMovie(3)))).toEqual(JSON.parse(`
    {
        "id": 3,
        "title": "The Dark Knight",
        "year": 2008,
        "duration": 152,
        "genre": "Action, Crime, Drama",
        "imdbRate": 9.0
    }
    `))
})