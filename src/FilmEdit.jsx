import dayjs from 'dayjs';

import {useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import { useNavigate, useParams , Link} from 'react-router-dom';
import './App.css';

const FilmEdit = (props) => {
    const {filmID}=useParams();
    const old_film=props.films.filter(film=>film.id==filmID).pop();
    const [title, setTitle] = useState(old_film.title);
    const [favorite, setFavorite] = useState(old_film.favorite);
    const [watchDate, setWatchDate] = useState(old_film.watchDate ? old_film.watchDate.format('YYYY-MM-DD') : dayjs().format('YYYY-MM-DD'));
    const [rating, setRating] = useState(old_film.rating);
    
    
    
    const navigate= useNavigate();
    const backToHome=(event) =>{
      navigate(`/`);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    
        // String.trim() method is used for removing leading and ending whitespaces from the title.
        const film = {"id": filmID, "title": title.trim(), "favorite": favorite, "rating": rating}
        if(watchDate){  // adding watchDate only if it is defined
          film.watchDate = dayjs(watchDate);
        }
        
        props.editFilm(film);
        navigate(`/`);
      }

    return (
        <Form className="block-example border border-primary rounded mb-0 form-padding " onSubmit={handleSubmit}>
          <h1> Edit Film </h1>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" required={true} value={title} onChange={event => setTitle(event.target.value)}/>
          </Form.Group>
    
          <Form.Group className="mb-3">
            <Form.Check type="checkbox" label="Favorite" name="favorite" checked={favorite} onChange={(event) => setFavorite(event.target.checked)} />
          </Form.Group>
    
          <Form.Group className="mb-3">
            <Form.Label>Watch Date</Form.Label>
            { /* watchDate is an optional parameter. It have to be properly rendered only if available. */ }
            <Form.Control type="date" value={watchDate} onChange={event => {event.target.value ? setWatchDate(dayjs(event.target.value).format('YYYY-MM-DD')) : setWatchDate("")}}/>
          </Form.Group>
    
          <Form.Group className="mb-3">
            <Form.Label>Rating</Form.Label>
            <Form.Control type="number" min={0} max={5} step={1} value={rating} onChange={event => setRating(/*parseInt*/(event.target.value))}/>
          </Form.Group>
    
          <Button className="mb-3" variant="primary" type="submit">Save</Button>
          &nbsp;
          <Button className="mb-3" variant="danger" onClick={backToHome}>Cancel</Button>

          
        </Form>
      )
        
        
}
  
  
  export default FilmEdit;