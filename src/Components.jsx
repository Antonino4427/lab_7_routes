import 'bootstrap-icons/font/bootstrap-icons.css';
import 'dayjs';
import { useState } from 'react';
import { Table, Form, Button } from 'react-bootstrap/'
import FilmForm from './film_form';
import { useNavigate , useParams , Link } from 'react-router-dom';



function FilmList(props) {
    
    const [showForm,setShowForm]=useState(false);
    const [editablefilm,setEditableFilm]=useState();
   

    const navigate=useNavigate();

    const handleAdd=(event) =>{
      navigate(`/addFilm/`);
    }

    

   

    return (
      <>
        <Table striped>
        
          <tbody>
            { props.films.map((film) => <FilmRow id={film.id} film={film} key={film.id} setEditableFilm={setEditableFilm} setShowForm={setShowForm} setFilms={props.setFilms} DeleteFilm={props.DeleteFilm} changeFavorite={props.changeFavorite}/>) }
          </tbody>
        </Table>
        
        <Button variant="primary" size="lg" className="fixed-right-bottom" onClick={handleAdd}>&#43;</Button>
        {/*{showForm ? 
          <FilmForm key={editablefilm ? editablefilm.id : -1} 
          film={editablefilm}
          addFilm={(film) => {props.addNewFilm(film); setShowForm(false);}}
          editFilm={(film)=> {props.updateFilm(film); setShowForm(false);}}
          cancel={() => setShowForm(false)}/>
          // setEditableFilm() avoids that the add form would show the data of a past edited film  
          : 
        }*/}
      </>
    );
}



function FilmDetails(props) {

  
    return <>
        <h2> Films:</h2>
        <table className="table" id="filmtable">
            <thead >
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Text</th>
                <th scope="col">Author</th>
                <th scope="col">Score</th>
                
              </tr>
            </thead>
            <tbody>
             {props.films.map((f)=> <FilmRow key={f.id} film={f} />)}
            </tbody>
            <tfoot>

            </tfoot>
            
          </table>
    
    </>
}

function FilmRow(props) {

 

  const navigate=useNavigate();
  
  
    const formatWatchDate = (dayJsDate, format) => {
      return dayJsDate ? dayJsDate.format(format) : '';
    }
  
    return(
      <tr>
        <td> 
          <Link className="btn btn-primary" to={"/editfilm/" + props.id}>
            <i className="bi bi-pencil-square"></i>
            </Link>
          
        </td>
        <td>
          <Button variant="danger"  onClick={()=>{props.DeleteFilm(props.film)}} >
          <i className="bi bi-trash"></i>          
          </Button>
        </td>
        <td>
           <p className={props.film.favorite ? "favorite" : ""} >
            {props.film.title}
          </p>
        </td>
        <td>
        <Form.Group className="mb-3">
            <Form.Check type="checkbox" label="Favorite" name="favorite" checked={props.film.favorite} onChange={(event) => props.changeFavorite(props.film, event.target.checked)} />
          </Form.Group>
        </td>
        <td>
          {formatWatchDate(props.film.watchDate, 'MMMM D, YYYY')}
        </td>
        <td>
          <Rating rating={props.film.rating} maxStars={5}/>
        </td>
      </tr>
    );
}

function Rating(props) {
  return [...Array(props.maxStars)].map((el, index) =>
    <i key={index} className={(index < props.rating) ? "bi bi-star-fill" : "bi bi-star"} />
  )
}




export {FilmList};