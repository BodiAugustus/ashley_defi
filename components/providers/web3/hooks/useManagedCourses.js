//this file is for getting the subscribed members to the managed admin page
// we use contract bc through contract we will be calling the functions

import useSWR from 'swr';
import normalizeOwnedCourse from 'utils/normalize';

export const handler = (web3, contract) => account => {
  const swrRes = useSWR(
    () =>
      web3 && contract && account.data && account.isAdmin
        ? `web3/managedCourses/${account.data}`
        : null,
    async () => {
      const courses = [];
      const courseCount = await contract.methods.getCourseCount().call();

      //loop returns last item first
      for (let i = Number(courseCount) - 1; i >= 0; i--) {
        const courseHash = await contract.methods
          .getCourseHashAtIndex(i)
          .call();
        const course = await contract.methods
          .getCourseByHash(courseHash)
          .call();

        if (course) {
          const normalized = normalizeOwnedCourse(web3)(
            { hash: courseHash },
            course
          );
          //returns the course to the courses array in normalized form
          courses.push(normalized);
        }
      }

      return courses;
    }
  );

  return swrRes;
};
