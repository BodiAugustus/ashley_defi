export const COURSE_STATES = {
  0: 'purchased',
  1: 'activated',
  2: 'deactivated',
};

//ownedCourse we get from the contract/blockchain
const normalizeOwnedCourse = web3 => (course, ownedCourse) => {
  return {
    ...course,

    ownedCourseId: ownedCourse.id, // this is created to prevent overwriting the ORIGINAL id in the json file
    proof: ownedCourse.proof,
    owned: ownedCourse.owner,
    price: web3.utils.fromWei(ownedCourse.price), //changed this from $30
    state: COURSE_STATES[ownedCourse.state],
  };
};
// we have original course which we destructurized then we added the new propeties shown above for the owned courses.

export default normalizeOwnedCourse;
