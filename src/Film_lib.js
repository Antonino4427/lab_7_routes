'use strict' ;

import dayjs from 'dayjs';

function Film (id, title,favourite, date,rating) {
    this.id=id;
    this.title=title;
    this.favourite=favourite;
    this.date=dayjs(date);
    this.rating=rating;
}

function FilmLibrary () {
    this.films=[];

    this.addNewFilm=function(film) {this.films.push(film);}

    this.print=function() {
        this.films.forEach(f=> {
            console.log(`id: ${f.id}`);
            console.log(`title: ${f.title}`);
            console.log(`rating: ${f.rating}`);
            console.log(`favourite: ${f.favourite}`);
            if (f.date!=undefined)
                console.log(f.date.toDate());
        }
    )};

    this.SortByDate= () => {
        const filmcopy=[...this.films];
        filmcopy.sort((a,b) => b.date-a.date);
        return filmcopy;
    };

    this.delete = (id) => {
        const film1=this.films.filter((a)=> (a.id==id));
        let film2=film1.pop();
        let index =this.films.indexOf(film2,0);
        this.films.splice(index,1);
    }

    this.resetWatchedFilm = () => {
        this.films.forEach (f=> {
            if(f.date!=undefined){
                f.date=undefined;
            }
        }
        )          
    };

    this.getScore= () => {
        const f_score=[];
       this.films.forEach(f=> {
            if(f.rating!=undefined){
                f_score.push(f);
            }
        }) 
        f_score.sort((a,b)=> b.rating-a.rating);
        return f_score;   
        
        
    }
}

/*const fl=new FilmLibrary();
fl.addNewFilm(new Film(1,'sharknado 1',true, dayjs('2019-8-30'), 5));
fl.addNewFilm(new Film(2, 'Pulp Fiction', true, dayjs('2023-3-10') , undefined));
fl.addNewFilm(new Film(3, '21 grams', false, dayjs('2023-3-17') , undefined));
fl.addNewFilm(new Film(4, 'star wars', true, dayjs('2010-6-12') , 4));
fl.addNewFilm(new Film(5, 'shrek', true, dayjs('2009-1-6') , 3));
fl.addNewFilm(new Film(6, 'inception', false, undefined, 2));
*/
//const f2=fl.SortByDate();


export {Film, FilmLibrary}
