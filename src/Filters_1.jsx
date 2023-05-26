import {ListGroup, Row, Col} from 'react-bootstrap/';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FilmList } from './Components';


function FilmFilterPage(props) {
  const filterID=useParams();
  const [key, filter_label]=Object.entries(filterID).pop();


  return <><Row className="vh-100">
    <Col md={4} xl={3} className="below-nav" id="left-sidebar">
      <Filters items={props.items} selected={props.selected} onSelect={props.onSelect}/>
      </Col>
    <Col md={8} xl={9} className='below-nav'>
      <h1>Filter : <span> {filter_label}</span></h1>
      <FilmList  films={props.Films.filter(props.items[filter_label].filterFunction)} addNewFilm={props.addNewFilm} updateFilm={props.updateFilm} DeleteFilm={props.DeleteFilm} changeFavorite={props.changeFavorite}/> 
    </Col>
    
  </Row>
  
  </>
}

const Filters = (props) => {
    const {items, selected, onSelect} = props;
    const navigate=useNavigate();
  
    // Converting the object into an array to use map method
    const filterArray = Object.entries(items);
  
    return (
      <ListGroup as="ul" variant="flush">
          {
            filterArray.map(([filterName, { label }]) => {
              return (
                  /*<ListGroup.Item as="li" key={filterName} href={'#' + filterName}
              action active={selected === filterName ? true : false} >*/
                      <Link key={filterName} as="li" to={"/filter/"+filterName}>{label}</Link>
                  
              );
            })
          }
      </ListGroup>
    )
  }
  
  export  {Filters, FilmFilterPage};