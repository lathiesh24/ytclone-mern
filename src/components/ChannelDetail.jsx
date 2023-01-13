import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material';
import {Videos,ChannelCard} from "./"
import { fetchFromAPI } from './../utils/fetchFromAPI';
import { useParams } from 'react-router-dom';


 const ChannelDetail = () => {
  
  const [channelDetail , setChannelDetail]=useState(null)
 
  const [videos , setVideos]=useState([])
 
  const {id} = useParams();

  console.log("channelDetail")
  
  useEffect(()=>{
     fetchFromAPI (`/channels?part="snippet" & id=${id}`).then((data)=>setChannelDetail(data?.items[0]))
     },[id]) ;


  return (
    <div>{id}</div>
  )
}

export default ChannelDetail