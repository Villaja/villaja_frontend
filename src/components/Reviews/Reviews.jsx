/* eslint-disable react/prop-types */
import { useState } from 'react'
import './Reviews.css'
import {AiFillStar,AiOutlineStar} from 'react-icons/ai'
import { review } from './ReviewsData'
import { useNavigate } from 'react-router-dom'

const Reviews = ({ratings,reviews,id}) => {
    const [reviewStars,setReviewStars] = useState(4)
    const navigate = useNavigate()
  return (
    <div className="reviews-wrapper">
        <div className="reviews-container item-cat-container">
            <div className="reviews-top ic-header">
                <div className="item-cat-title">Customer Reviews</div>
                <div className="seemore-btn" onClick={() => navigate(`/reviews/${id}`)}>See more &#8250; </div>
            </div>
            <div className="reviews-main">
                <div className="reviews-main-left">
                    <div className="review-summary">
                        <div className='review-summary-rating'>{ratings?ratings:"0"}/5</div>
                        <div className='stars-wrapper'>
                            <div className="star-container">
                                {
                                    ratings>0?
                                    <AiFillStar style={{color:"#FFB41F",fontSize:"1.5rem"}}/>:
                                    <AiOutlineStar style={{color:"#FFB41F",fontSize:"1.5rem"}}/>
                                }
                            </div>
                            <div className="star-container">
                                {
                                    ratings>1?
                                    <AiFillStar style={{color:"#FFB41F",fontSize:"1.5rem"}}/>:
                                    <AiOutlineStar style={{color:"#FFB41F",fontSize:"1.5rem"}}/>
                                }
                            </div>
                            <div className="star-container">
                                {
                                    ratings>2?
                                    <AiFillStar style={{color:"#FFB41F",fontSize:"1.5rem"}}/>:
                                    <AiOutlineStar style={{color:"#FFB41F",fontSize:"1.5rem"}}/>
                                }
                            </div>
                            <div className="star-container">
                                {
                                    ratings>3?
                                    <AiFillStar style={{color:"#FFB41F",fontSize:"1.5rem"}}/>:
                                    <AiOutlineStar style={{color:"#FFB41F",fontSize:"1.5rem"}}/>
                                }
                            </div>
                            <div className="star-container">
                                {
                                    ratings>4?
                                    <AiFillStar style={{color:"#FFB41F",fontSize:"1.5rem"}}/>:
                                    <AiOutlineStar style={{color:"#FFB41F",fontSize:"1.5rem"}}/>
                                }
                            </div>
                        </div>
                        <div className='rs-num'>{reviews && reviews.length > 0?reviews.length === 1?"1 review":reviews.length+" reviews":""}</div>
                    </div>
                </div>
                <div className="reviews-main-right">
                    {
                        reviews && reviews.length > 0 ?
                        reviews.map((rev,id) => {
                            return <SingleReview data={rev} key={id}/>
                        })
                        : 
                        "No reviews"
                    }
                </div>
            </div>
        </div>
    </div>
  )
}


const SingleReview = ({data}) => {
    const {heading,comment,rating,user,createdAt} = data
    // const [reviewStars,setReviewStars] = useState(4)

    return(
        <div className="single-review-wrapper">
            <div className="single-review-top">
                <div className='stars-wrapper'>
                            <div className="star-container">
                                {
                                    rating>0?
                                    <AiFillStar style={{color:"#FFB41F",fontSize:"1.5rem"}}/>:
                                    <AiOutlineStar style={{color:"#FFB41F",fontSize:"1.5rem"}}/>
                                }
                            </div>
                            <div className="star-container">
                                {
                                    rating>1?
                                    <AiFillStar style={{color:"#FFB41F",fontSize:"1.5rem"}}/>:
                                    <AiOutlineStar style={{color:"#FFB41F",fontSize:"1.5rem"}}/>
                                }
                            </div>
                            <div className="star-container">
                                {
                                    rating>2?
                                    <AiFillStar style={{color:"#FFB41F",fontSize:"1.5rem"}}/>:
                                    <AiOutlineStar style={{color:"#FFB41F",fontSize:"1.5rem"}}/>
                                }
                            </div>
                            <div className="star-container">
                                {
                                    rating>3?
                                    <AiFillStar style={{color:"#FFB41F",fontSize:"1.5rem"}}/>:
                                    <AiOutlineStar style={{color:"#FFB41F",fontSize:"1.5rem"}}/>
                                }
                            </div>
                            <div className="star-container">
                                {
                                    rating>4?
                                    <AiFillStar style={{color:"#FFB41F",fontSize:"1.5rem"}}/>:
                                    <AiOutlineStar style={{color:"#FFB41F",fontSize:"1.5rem"}}/>
                                }
                            </div>
                </div>

                <div className="single-review-heading">
                    {heading}
                </div>

                <div className="single-review-content">
                    {comment}
                </div>

                <div className="single-review-user">
                    Posted on {createdAt.split("T")[0]} by {user.firstname}
                </div>
            </div>
        </div>
    )
}

export default Reviews