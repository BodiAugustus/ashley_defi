const KeyPoints = ({ points, link1, link2, link3, link4 }) => {
  return (
    <section>
      <div
        className="py-12 bg-black
        xxs:mx-2 xxs:pb-10 xxs:py-0
        xl:py-0 xl:pb-10
        "
      >
        <div
          className="max-w-7xl mx-auto px-4 bg-[#2b2b2b]
          xs:px-4 
          lg:px-8"
        >
          <div className="mt-10 ">
            <dl
              className="space-y-8 pt-4 last:only:pb-4
              md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 bg-[#2b2b2b]"
            >
              {/* {points.map((point, i) => {
                <div key={point} className="relative bg-black p-2 rounded-lg">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-600 text-sky-400">
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-white">
                      Daily Headline:
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-white">
                    <a href="">Point {i + 1}</a>
                  </dd>
                </div>;
              })} */}
              <div className="relative bg-black p-2 rounded-lg">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-600 text-sky-400">
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-white">
                    Daily Headline:
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-white">
                  <a href={link1} target="_blank" rel="noreferrer">
                    Point 1
                  </a>
                </dd>
              </div>
              <div className="relative bg-black p-2 rounded-lg">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-600 text-sky-400">
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-white">
                    Daily Headline:
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-white">
                  <a href={link2} target="_blank" rel="noreferrer">
                    Point 1
                  </a>
                </dd>
              </div>
              <div className="relative bg-black p-2 rounded-lg">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-600 text-sky-400">
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-white">
                    Daily Headline:
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-white">
                  <a href={link3} target="_blank" rel="noreferrer">
                    Point 1
                  </a>
                </dd>
              </div>
              <div className="relative bg-black p-2 rounded-lg">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-600 text-sky-400">
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-white">
                    Daily Headline:
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-white">
                  <a href={link4} target="_blank" rel="noreferrer">
                    Point 1
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyPoints;
