/* eslint-disable react/prop-types */
import { useState } from 'react'
import './Reviews.css'
import {AiFillStar,AiOutlineStar} from 'react-icons/ai'
import { review } from './ReviewsData'

const Reviews = () => {
    const [reviewStars,setReviewStars] = useState(4)
  return (
    <div className="reviews-wrapper">
        <div className="reviews-container item-cat-container">
            <div className="reviews-top ic-header">
                <div className="item-cat-title">Customer Reviews</div>
                <div className="seemore-btn">See more &#8250; </div>
            </div>
            <div className="reviews-main">
                <div className="reviews-main-left">
                    <div className="review-summary">
                        <div className='review-summary-rating'>4.5/5</div>
                        <div className='stars-wrapper'>
                            <div className="star-container">
                                {
                                    reviewStars>0?
                                    <AiFillStar style={{color:"#FFB41F",fontSize:"1.5rem"}}/>:
                                    <AiOutlineStar style={{color:"#FFB41F",fontSize:"1.5rem"}}/>
                                }
                            </div>
                            <div className="star-container">
                                {
                                    reviewStars>1?
                                    <AiFillStar style={{color:"#FFB41F",fontSize:"1.5rem"}}/>:
                                    <AiOutlineStar style={{color:"#FFB41F",fontSize:"1.5rem"}}/>
                                }
                            </div>
                            <div className="star-container">
                                {
                                    reviewStars>2?
                                    <AiFillStar style={{color:"#FFB41F",fontSize:"1.5rem"}}/>:
                                    <AiOutlineStar style={{color:"#FFB41F",fontSize:"1.5rem"}}/>
                                }
                            </div>
                            <div className="star-container">
                                {
                                    reviewStars>3?
                                    <AiFillStar style={{color:"#FFB41F",fontSize:"1.5rem"}}/>:
                                    <AiOutlineStar style={{color:"#FFB41F",fontSize:"1.5rem"}}/>
                                }
                            </div>
                            <div className="star-container">
                                {
                                    reviewStars>4?
                                    <AiFillStar style={{color:"#FFB41F",fontSize:"1.5rem"}}/>:
                                    <AiOutlineStar style={{color:"#FFB41F",fontSize:"1.5rem"}}/>
                                }
                            </div>
                        </div>
                        <div className='rs-num'>{review && review.length > 0?review.length:"0"} reviews</div>
                    </div>
                </div>
                <div className="reviews-main-right">
                    {
                        review && review.length > 0 ?
                        review.map((rev,id) => {
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
    const {heading,content,stars,user,date} = data
    // const [reviewStars,setReviewStars] = useState(4)

    return(
        <div className="single-review-wrapper">
            <div className="single-review-top">
                <div className='stars-wrapper'>
                            <div className="star-container">
                                {
                                    stars>0?
                                    <AiFillStar style={{color:"#FFB41F",fontSize:"1.5rem"}}/>:
                                    <AiOutlineStar style={{color:"#FFB41F",fontSize:"1.5rem"}}/>
                                }
                            </div>
                            <div className="star-container">
                                {
                                    stars>1?
                                    <AiFillStar style={{color:"#FFB41F",fontSize:"1.5rem"}}/>:
                                    <AiOutlineStar style={{color:"#FFB41F",fontSize:"1.5rem"}}/>
                                }
                            </div>
                            <div className="star-container">
                                {
                                    stars>2?
                                    <AiFillStar style={{color:"#FFB41F",fontSize:"1.5rem"}}/>:
                                    <AiOutlineStar style={{color:"#FFB41F",fontSize:"1.5rem"}}/>
                                }
                            </div>
                            <div className="star-container">
                                {
                                    stars>3?
                                    <AiFillStar style={{color:"#FFB41F",fontSize:"1.5rem"}}/>:
                                    <AiOutlineStar style={{color:"#FFB41F",fontSize:"1.5rem"}}/>
                                }
                            </div>
                            <div className="star-container">
                                {
                                    stars>4?
                                    <AiFillStar style={{color:"#FFB41F",fontSize:"1.5rem"}}/>:
                                    <AiOutlineStar style={{color:"#FFB41F",fontSize:"1.5rem"}}/>
                                }
                            </div>
                </div>

                <div className="single-review-heading">
                    {heading}
                </div>

                <div className="single-review-content">
                    {content}
                </div>

                <div className="single-review-user">
                    Posted on {date} by {user}
                </div>
            </div>
        </div>
    )
}

export default Reviews