import React, { useEffect, useState } from 'react'
import Card from './Card'


let API_key = "&api_key=e3a92895b0a6c5293e775e40825cf6cf";
let base_url = "https://api.themoviedb.org/3";
let url = base_url + "/discover/movie?sort_by=popularity.desc" + API_key;

export default function Home() {

  const [movieData, setData] = useState([]);
  const [url_set, setUrl]= useState(url);

  useEffect(() => {
    fetch(url_set)
    .then(res => res.json())
    .then(data => {
      console.log(data.results)
    })
  }, [url_set])

  return (
    <>
      <div className='container'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  )
}
