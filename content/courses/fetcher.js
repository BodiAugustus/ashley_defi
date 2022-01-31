
import courses from "./index.json"

export const getAllCourses = () => { //gets data 

    return {
        data: courses,
        courseMap: courses.reduce((accu, data, i) => {
            accu[data.id] = data
            accu[data.id].index = i
            return accu
        }, {})
    }
}