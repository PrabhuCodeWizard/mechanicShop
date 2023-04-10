import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchData } from '../../utils/API';
import './FeedBackComponent.scss';

const FeedBackComponent: React.FC = () => {
  const [feedBackList, setFeedBackList]  = useState<any>([]);

  const getFeedbackList = async() => {
    const feedResponse: any = await fetchData('feedbackservices')
    console.log('servce', feedResponse);
    setFeedBackList(feedResponse)
  };

  useEffect(() => {
    getFeedbackList();
  }, []);

  return (
    <section id='feedback'>
      <div className='container'>
        <div className='d-flex'>
          <Link to="/ourservice" className="btn btn-primary"> Go back</Link>
        </div>
        <div className='row'>
          {feedBackList?.map((item: any, index: number) => (
            <div className='col-12 feedback-blk p-3' key={index}>
              <p>{item.Comments}</p>
              <span>{item.Rating}</span>
            </div>
          ))
          }
        </div>
      </div>
    </section>
  );
};

export default FeedBackComponent;
