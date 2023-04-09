import React, { useEffect, useState } from 'react';
// import { service } from '../../utils/mockData';
import './ServiceComponent.scss';
import { Link } from 'react-router-dom';
import { fetchData } from '../../utils/API';

interface ServiceComponentProps {
}

const ServiceComponent: React.FC<ServiceComponentProps> = () => {
  const [allService, setAllService] = useState<any>([]);

  const getServiceList = async() => {
    const service: any = await fetchData('adminservice')
    // console.log(service, service.length);
    const groupByCategory = service?.reduce((group: any, product: any) => {
      const { Category_Type } = product;
      group[Category_Type] = group[Category_Type] ?? [];
      group[Category_Type].push(product);
      return group;
    }, {});
    // console.log(groupByCategory);
    setAllService(groupByCategory)
  };

  useEffect(() => {
    getServiceList();
  }, []);

  return (
    <div className='service-container'>
      <div className='container'>
        <h1 className='text-center'>Our Services</h1>
        <section className='my-5'>
          <h2>Car service Available</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          {Object.keys(allService).map(key => (
            <>
              <h2 className='text-center'>{key}</h2>
              <div className='service-blk d-flex flex-wrap justify-content-center align-items-center'>
                {allService[key].map((item: any, index: number) => (
                  <Link to={`/service/${item.ServiceID}`}>
                    <div className='service-item d-flex flex-column justify-content-center align-items-center' key={index}>
                      <img src='/assets/images/icons/ic-service.png' width='150' alt='img' />
                      <span>{item.SubcategoryName}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          ))}
        </section>
      </div>
    </div>
  );
};

export default ServiceComponent;
