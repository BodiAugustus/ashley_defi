//This is used to fetch the data from the json file

import course from './index.json';

export const getAllCourses = () => {
  //gets data

  //courseMap could be used if I add more objects to the JSON data but currently it is not used. It creats two new properties, an id which points to the entire monthly pass, and an index included with each object.
  return {
    data: course,
    courseMap: course.reduce((accu, mp, i) => {
      accu[mp.id] = mp;
      accu[mp.id].index = i;
      return accu;
    }, {}),
  };
};
