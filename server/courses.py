# courses.py
# Joel Anyanti | 08/09/2019

#               imports             #
import json, csv, string
import cmu_course_api

#             functions             #
'''
    format_data : collects desired information from course dictionary
                  writes result to output file
    @course: python dictionary containing information about course

'''
def format_data(courses, format):
    res = []
    for course_id in courses:
        course = dict()
        course['course_id'] = course_id.strip()
        course['name'] = courses[course_id]['name'].strip()
        course['department'] = courses[course_id]['department'].strip()
        if not (courses[course_id]['units'] == None):
            course['units'] = int(courses[course_id]['units'])
        if 'units' in course:
            res.append(course)

    if (format == 'json'):
        with open('course_dump.json', 'w+') as fp_json:
            for course in res:
                json.dump(course, fp_json)
                fp_json.write('\n')

    elif (format == 'csv'):
        with open('course_dump.csv', 'w+') as fp_csv:
            fieldnames = ['course_id', 'name', 'department', 'units']
            writer = csv.DictWriter(fp_csv, fieldnames=fieldnames)
            writer.writeheader()
            writer.writerows(res)
    else:
        print('[Error][Incorrect format params]')

    return res

'''
    get_courses :  retrieves course information using an api call
                  performs formatting to shrink data
    @semester: semester for which the course information should originate
    @format: dumps output in desired format (json or csv)

'''
def get_courses(semester, format):
    data = cmu_course_api.get_course_data(semester) # Get fall courses
    print(type(data))
    formatted_courses = format_data(data['courses'], format)
    print(formatted_courses, len(formatted_courses))

def main():
    get_courses('F','csv') # default to fall semester

#                main               #
if __name__ == '__main__':
    main()
