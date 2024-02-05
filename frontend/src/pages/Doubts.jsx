import React, { useEffect, useState } from 'react'
import DoubtCard from '../components/DoubtCArd';
import { DOUBT_GET } from '../utils/constants';

const Doubts = () => {
    const [data, setData] = useState({})
    const [doubts, setDoubts] = useState([]);
    const fetchData = async () => {
        const receivedData = await fetch(DOUBT_GET);
        const parsedData = await receivedData.json();
        setData({
            statusCode: parsedData.statusCode,
            message: parsedData.message,
        });
        setDoubts(parsedData.data);
    }
    useEffect(() =>{
        fetchData();
    },[doubts]);

  return (
    <div>
        {
            doubts?.map((doubt) =>{
                return <DoubtCard key={doubt._id} title={doubt.title} doubtImg={doubt.doubtImg} categories={doubt.category} doubtId={doubt._id} />
            })
        }
    </div>
  )
}

export default Doubts;