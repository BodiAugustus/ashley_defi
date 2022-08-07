import BaseLayout from '@components/ui/layout/baseLayout';
import Banner from '@components/ui/order/banner/Banner';
import { getAllCourses } from '@content/monthlyPass/fetcher';
import { Conclude, Intro } from '@components/ui/services';
import { Setup } from '@components/ui/services';
import { Body1 } from '@components/ui/services';

export default function Info({ courses }) {
  return (
    <div>
      <div className="relative bg-black overflow-hidden text-white">
        <div className="relative max-w-7xl mx-auto ">
          <div className="fit">
            <Banner />
            <Intro />
            <Setup />
            <Body1 />
            <Conclude />
          </div>
        </div>
      </div>
    </div>
  );
}

export function getStaticProps() {
  // to fetch data
  const { data } = getAllCourses();
  return {
    props: {
      courses: data,
    },
  };
}

Info.Layout = BaseLayout;
