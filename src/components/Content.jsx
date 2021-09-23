import React, { useContext, useEffect } from 'react';
import { clientContext } from '../contexts/ClientContext';
import MediaCard from './Card';
import Pagination from './Pagination';
import Forward5Icon from '@material-ui/icons/Forward5';


const Content = () => {
    const { products, getProducts, currentPosts } = useContext(clientContext)

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <>
            {
                products ? (
                    <div className="content">
                        <div className="content-block">
                            {
                                currentPosts.map(item => (
                                    <MediaCard item={item} key={item.id} />
                                ))
                            }
                        </div>
                        <Pagination />
                    </div>
                ) : (
                    // <h2>Loading...</h2>
                    <div className="iconContent">

                        <Forward5Icon />
                    </div>
                )
            }
        </>
    );
};

export default Content;