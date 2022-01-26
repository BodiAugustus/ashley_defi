
import courses from "./index.json"

export const getAllCourse = () => {

    return {
        data: courses,
        courseMap: courses.reduce((accu, data, i) => {
            accu[data.id] = data
            accu[data.id].index = i
            return accu
        }, {})
    }
}