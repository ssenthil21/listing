"use client";

import { FormEvent, useState } from "react";
import { BsStarFill } from "react-icons/bs";

import type { Review, VendorProfile } from "../../types/models";

interface ReviewsSectionProps {
  vendor: VendorProfile;
}

const ReviewsSection = ({ vendor }: ReviewsSectionProps) => {
  const [reviews, setReviews] = useState<Review[]>(vendor.reviews);
  const [formValues, setFormValues] = useState({ author: "", rating: "5", comment: "" });
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formValues.author.trim() || !formValues.comment.trim()) {
      setFeedback("Please provide your name and review before submitting.");
      return;
    }

    const newReview: Review = {
      id: `review-${Date.now()}`,
      author: formValues.author,
      rating: Number(formValues.rating),
      date: new Date().toISOString().split("T")[0],
      comment: formValues.comment,
    };

    setReviews((previous) => [newReview, ...previous]);
    setFormValues({ author: "", rating: "5", comment: "" });
    setFeedback("Thank you! Your review has been added.");
  };

  return (
    <section className="py-5 bg-white" id="reviews">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-7">
            <h2 className="fw-bold">Customer reviews</h2>
            <div className="d-flex flex-column gap-3 mt-4">
              {reviews.map((review) => (
                <div key={review.id} className="border rounded-4 p-4">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h6 className="mb-0">{review.author}</h6>
                    <span className="badge bg-light text-dark">{review.date}</span>
                  </div>
                  <div className="text-warning mb-2">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <BsStarFill key={index} className={index < review.rating ? "" : "opacity-25"} />
                    ))}
                  </div>
                  <p className="mb-0 text-secondary">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-5">
            <div className="bg-light rounded-4 p-4 h-100">
              <h3 className="fw-semibold">Write a review</h3>
              <p className="text-secondary">
                Share your experience to help others discover trustworthy businesses.
              </p>
              <form className="d-flex flex-column gap-3" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="review-author" className="form-label fw-semibold">
                    Name
                  </label>
                  <input
                    id="review-author"
                    className="form-control"
                    value={formValues.author}
                    onChange={(event) => setFormValues((previous) => ({ ...previous, author: event.target.value }))}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="review-rating" className="form-label fw-semibold">
                    Rating
                  </label>
                  <select
                    id="review-rating"
                    className="form-select"
                    value={formValues.rating}
                    onChange={(event) => setFormValues((previous) => ({ ...previous, rating: event.target.value }))}
                  >
                    {[5, 4, 3, 2, 1].map((value) => (
                      <option key={value} value={value}>
                        {value} star{value > 1 ? "s" : ""}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="review-comment" className="form-label fw-semibold">
                    Review
                  </label>
                  <textarea
                    id="review-comment"
                    className="form-control"
                    rows={4}
                    value={formValues.comment}
                    onChange={(event) => setFormValues((previous) => ({ ...previous, comment: event.target.value }))}
                    placeholder="Describe your experience"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit review
                </button>
                {feedback && <div className="alert alert-info mb-0">{feedback}</div>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
