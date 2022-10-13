import React, { useEffect, useState } from 'react'
import Card from './Card'


let API_key = "&api_key=e3a92895b0a6c5293e775e40825cf6cf";
let base_url = "https://api.themoviedb.org/3";
let url = base_url + "/discover/movie?sort_by=popularity.desc" + API_key;
let arr = ['Home', 'Top Rated', 'Drama', 'Comedy', 'Kids'];

export default function Home() {

  const [movieData, setData] = useState([]);
  const [url_set, setUrl]= useState(url);

  useEffect(() => {
    fetch(url_set)
    .then(res => res.json())
    .then(data => {
      // console.log(data.results)
      setData(data.results)
    })
  }, [url_set])

  const getData = (movieType) => {
    if(movieType === "Popular")
    {
      url = base_url + "/discover/movie?sort_by=popularity.desc" + API_key;
    }
    if (movieType=== "Top Rated") {
      url = base_url + "/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc" + API_key;
    }
    if (movieType=== "Drama") {
      url = base_url + "/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10" + API_key;
    }
    if (movieType=== "Comedy") {
      url = base_url + "/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc" + API_key;
    }
    if (movieType==="Kids") {
      url = base_url + "/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc" + API_key;
    }

    setUrl(url);
  }

  return (
    <>
      <div className='container'>
      {
            arr.map((value) => {
              return(
                <li><a href="#" name={value} onClick={(e) => {getData(e.target.name)}}>{value}</a></li>
              )
            })
          }
        {
          (movieData.length == 0)?<p className='notfound'>Not found</p>: movieData.map((res, pos) => {
            return(
              <Card info={res} key={pos} />
            )
          })
        }
      </div>
    </>
  )
}
