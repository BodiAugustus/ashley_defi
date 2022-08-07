import BaseLayout from '@components/ui/layout/baseLayout';
import Head from 'next/head';
import { getAllCourses } from '@content/monthlyPass/fetcher';
import { CourseHero, Curriculum, KeyPoints } from '@components/ui/course';
import { Message, Modal } from '@components/ui/common';
import { useAccount, useOwnedCourse } from '@components/hooks/web3';
import { useWeb3 } from '@components/providers';

// { course } comes from getStaticProps at page bottom
export default function Course({ course }) {
  const { account } = useAccount();
  const { ownedCourse } = useOwnedCourse(course, account.data);
  // console.log(ownedCourse);
  const memberState = ownedCourse?.data?.state;
  // const memberState = "deactivated"
  const { isLoading } = useWeb3();

  //For curriculum
  const isLocked =
    !memberState ||
    memberState === 'purchased' ||
    memberState === 'deactivated';

  return (
    <div>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, 
            initial-scale=1"
        />
      </Head>

      <div className="relative max-w-7xl mx-auto bg-black">
        <CourseHero // Hero for each individual product
          hasOwner={!!ownedCourse.data}
          title={course.title}
          description={course.description}
          image={course.coverImage}
        />
        {course && (
          <div
            className="
            xxs:w-[95vw]
            md:w-[80%]
            max-w-5xl mx-auto
           "
          >
            {memberState === 'purchased' && (
              <Message type="success">
                It&apos;s a lovely day at Ashley Capital & DeFi!
                <i className="block font-normal ">
                  Be sure to check in with one of our consultants if you have
                  any questions!
                </i>
              </Message>
            )}
            {memberState === 'activated' && (
              <Message type="success">
                It&apos;s a lovely day at Ashley Capital & DeFi!
                <i className="block font-normal">
                  Be sure to check in with one of our consultants if you have
                  any questions!
                </i>
              </Message>
            )}
            {memberState === 'deactivated' && (
              <Message type="danger">
                You should not be seeing this message!
                <i className="block font-normal">
                  If you are then you are hacking and that is very impolite my
                  kitty!
                </i>
              </Message>
            )}
          </div>
        )}
        <KeyPoints
          points={course.wsl}
          link1={course.link1}
          link2={course.link2}
          link3={course.link3}
          link4={course.link4}
        />

        <Curriculum
          isLoading={isLoading}
          locked={isLocked}
          memberState={memberState}
        />

        <Modal />
      </div>
    </div>
  );
}

Course.Layout = BaseLayout;

//getStaticProps tells how many pages for server to prerender
export function getStaticPaths() {
  const { data } = getAllCourses();
  return {
    // Maps over each course. For each course creates an object. That object has a key of object and a value of another object:      { params : {}}. Inside that second object is a key of slug and a value of course.slug  { params: {slug: course.slug}}. Returns 1 page per slug.
    paths: data.map(course => ({
      params: {
        slug: course.slug,
      },
    })),
    fallback: false, // Causes any paths not returned by getStaticPaths to result in 404 page
  };
}

export function getStaticProps({ params }) {
  // to fetch JSON data
  const { data } = getAllCourses();
  const course = data.filter(course => course.slug === params.slug)[0]; // So if what is in the address bar equals what is in the JSON file at the current position(index 0) at the slug property value, then that course is returned to the user as a new page.
  return {
    props: {
      course,
    },
  };
}
