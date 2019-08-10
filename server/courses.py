# courses.py
# Joel Anyanti | 08/09/2019

#               imports             #
import json, cmu_course_api

#             functions             #
'''
    format_data : collects desired information from course dictionary
                  writes result to output file
    @course: python dictionary containing information about course

'''
def format_data(courses):
    res = []
    for course_id in courses:
        course = dict()
        course['course_id'] = course_id
        course['name'] = courses[course_id]['name']
        course['department'] = courses[course_id]['department']
        course['units'] = courses[course_id]['units']
        res.append(course)

    with open('course_dump.json', 'w') as fp:
        json.dump(res, fp)

    return res

'''
    get_course :  retrieves course information using an api call
                  performs formatting to shrink data
    @semester: semester for which the course information should originate

'''
def get_courses(semester):
    data = cmu_course_api.get_course_data(semester) # Get fall courses
    print(type(data))
    formatted_courses = format_data(data['courses'])

def main():
    get_courses('F') # default to fall semester

#                main               #
if __name__ == '__main__':
    main()
