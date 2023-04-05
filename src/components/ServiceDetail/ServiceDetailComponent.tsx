import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { serviceDetailMock } from '../../utils/mockData';
// import { fetchData } from '../../utils/API';
import './ServiceDetailComponent.scss';

interface ServiceDetailComponentProps {
}

const ServiceDetailComponent: React.FC<ServiceDetailComponentProps> = () => {
  const params = useParams();
  const [serviceDetail, setServiceDetail] = useState<any>([])

  const handleGetData = async() => {
    // const serviceDetail = await fetchData(`adminservice?ServiceID=${params.serviceId}`);
    setServiceDetail(serviceDetailMock[0]);
  };

  useEffect(() => {
    console.log('prams', params.serviceId);
    handleGetData();
  }, []);

  return (
    <section className='service-detail-container p-5'>
      <div className='landing-backdrop' />
      <div className='container'>
          <h2 className='text-center'>{serviceDetail.CategoryName}</h2>
          <div className='service-detail-blk d-flex p-4 my-3'>
            <div className='img-container'>
              <img src='/assets/images/icons/ic-service.png' alt='img' />
            </div>
            <div className='details-content ms-4'>
              <div className='d-flex justify-content-between align-items-center'>
                <h2>{serviceDetail.SubcategoryName}</h2>
                <span className='badge bg-secondary ms-3'>{serviceDetail.Duration}</span>
              </div>
              <p>{serviceDetail.Description}</p>
              <div className='d-flex justify-content-between'>
                <div className='d-flex align-items-center'>
                  <span className='fs-6 text-secondary'><s>Rs. {serviceDetail.ActualPrice}</s></span>
                  <span className='badge bg-success ms-3'>Offer Price</span>
                  <span className='fs-5 text-dark ms-3'>Rs. {serviceDetail.OfferedPrice}</span>
                </div>
                <button className='btn btn-outline-danger btn-lg'>Book Service</button>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
};

export default ServiceDetailComponent;
