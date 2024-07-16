import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../StyleCatalogo/MyRicercaperCategoria.css'; 

const GameCatalog = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState({ name: 'Tutti i Giochi', id: '' });
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const pageSize = 9; 

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await fetch('https://api.rawg.io/api/genres?key=f511273fe9734983b1d420685c9477f5');
        const data = await response.json();
        setGenres([{ name: 'Tutti i Giochi', id: '' }, ...data.results]); 
      } catch (error) {
        console.error('Error fetching genres:', error);
      }
    };

    fetchGenres();
  }, []);

  useEffect(() => {
    const fetchGames = async () => {
      setLoading(true);
      let allGames = [];
      try {
        if (selectedGenre.id === '') { 
          for (let page = 1; page <= 3; page++) { 
            const response = await fetch(`https://api.rawg.io/api/games?key=f511273fe9734983b1d420685c9477f5&page=${page}&page_size=${pageSize}`);
            const data = await response.json();
            allGames = [...allGames, ...data.results]; 
          }
        } else { 
          const response = await fetch(`https://api.rawg.io/api/games?key=f511273fe9734983b1d420685c9477f5&genres=${selectedGenre.id}&page_size=${pageSize * 3}`); 
          const data = await response.json();
          allGames = data.results; 
        }
        setGames(allGames);
        setTotalPages(Math.ceil(allGames.length / pageSize));
      } catch (error) {
        console.error('Error fetching games:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, [selectedGenre]);

  const handleGenreChange = (genre) => {
    setSelectedGenre(genre);
    setCurrentPage(1); 
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const displayedGames = games.slice((currentPage - 1) * pageSize, currentPage * pageSize); 

  return (
    <div className="d-flex flex-wrap">
      <div className="col-lg-3 col-md-4 col-sm-6 p-3 border-right sidebar">
        <h4>Aggiungi un Filtro Personalizzato</h4>
        <ul className="list-group">
          {genres.map((genre) => (
            <li
              key={genre.id}
              className={`list-group-item ${selectedGenre.id === genre.id ? 'active' : ''}`}
              onClick={() => handleGenreChange(genre)}
              style={{ cursor: 'pointer' }}
            >
              {genre.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="col-lg-9 col-md-8 col-sm-6 p-3">
        <h2 className='text-center mb-4'>Catalogo di Giochi</h2>
        {loading ? (
          <div className="text-center">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        ) : (
          <>
            <div className="row">
              {displayedGames.map((game) => (
                <div className="col-lg-4 col-md-6 col-sm-12 mb-3" key={game.id}>
                  <div className="card game-card">
                    <img src={game.background_image} alt={game.name} className="card-img-top" />
                    <div className="card-body">
                      <h5 className="card-title">{game.name}</h5>
               
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {totalPages > 1 && (
              <div className="pagination ">
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index + 1}
                    className={`btn btn-outline-secondary mx-1 ${currentPage === index + 1 ? 'active' : ''}`}
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default GameCatalog;
