import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';


const NewsSummaryCard = ({ news }) => {

    const { _id, title, author, details, image_url, total_view, rating } = news

    return (
        <Card className='mb-4'>
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className='d-flex'>
                    <Image src={author?.img} className="me-2" roundedCircle style={{ height: '60px' }} />
                    <div>
                        <p className='mb-0'>{author?.name}</p>
                        <p className='mb-0'>{author?.published_date}</p>
                    </div>
                </div>
                <div>
                    <FaRegBookmark className='me-2' />
                    <FaShareAlt />
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {
                        details.length > 200
                        &&
                        <p>{details.slice(0, 200) + "..."} <Link to={`/news/${_id}`}>See More</Link></p>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between align-items-center">
                <div>
                    <FaStar className='text-warning me-2' />
                    <span>{rating?.number}</span>
                </div>
                <div>
                    <span className='me-2'>{total_view}</span>
                    <FaEye />
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsSummaryCard;