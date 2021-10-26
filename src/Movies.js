import movie1 from './movieLionheart.webp';
import movie2 from './movieRoadtoYesetday.webp';
import playButton from './playButton.svg';


function Movies() {
  return (
    <div className="sectionSpacing headerSpacing">
      <h1 className="headerSpacing">
        Movies
      </h1>
      <div className="twoColumns">
        <div>
          <img src={movie1} alt="Still from Lionheart 2018" className="movieStill"></img>
          <img src={playButton} alt="Play Button" className="playButton"></img>
            <p>Lionheart (2018)</p>
        </div>
        <div>
          <img src={movie2} alt="Still from Road to Yesterday 2015" className="movieStill"></img>
          <img src={playButton} alt="Play Button" className="playButton"></img>
            <p>Road to Yesterday (2015)</p>
        </div>
      </div>
    </div>
  )
}
export default Movies;
