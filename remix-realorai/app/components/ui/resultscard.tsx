export default function ResultsCard() {
    return (
      <div className="overflow-hidden rounded-lg bg-white shadow">
        <div className="px-4 py-5 sm:p-6">{/* Content goes here */
        <div className="flex flex-col">


            <button>
                Share your results
            </button>
{/* Found on the eccomerce templates tailwind */}
            <div>
                <h3 className="sr-only">Reviews</h3>
                Might be useful for the score card
                {/* <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        reviews.average > rating ? 'text-yellow-400' : 'text-gray-300',
                        'h-5 w-5 flex-shrink-0'
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div> */}
                <p className="sr-only">{reviews.average} out of 5 stars</p>
              </div>
            </div>
        }</div>
      </div>
    )
  }
  