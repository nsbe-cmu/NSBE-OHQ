# courses.py
# Joel Anyanti | 08/09/2019

#               imports             #
import json, csv
import xml.etree.ElementTree as ET
import requests

#             Constants             #

buildings = {
    'BH' : 'Baker Hall',
    'CFA'	: 'College of Fine Arts',
    'CIC'	: 'Collaborative Innovation Center',
    'CYH'	: 'Cyert Hall',
    'DH'	: 'Doherty Hall',
    'EDS'	: 'Elliot Dunlap Smith Hall',
    'GES'	: 'Gesling Stadium',
    'GHC'	: 'Gates and Hillman Centers',
    'GYM'	: 'Weigand Gymnasium',
    'HBH'	: 'Hamburg Hall',
    'HH'	: 'Hamerschlag Hall',
    'HL'	: 'Hunt Library',
    'HOA'	: 'Hall of the Arts',
    'INI'	: 'Information Networking Institute',
    'MI'	: 'Mellon Institute',
    'MM'	: 'Margaret Morrison Carnegie Hall',
    'NSH'	: 'Newell-Simon Hall',
    'OFF'	: 'Off Campus',
    'PCA'	: 'Purnell Center for the Arts',
    'PH'	: 'Porter Hall',
    'POS'	: 'Posner Hall',
    'PTC'	: 'Pittsburgh Technology Center - 2nd Avenue',
    'REH'	: 'Roberts Engineering Hall',
    'TEP'	: 'Tepper Quad',
    '3SC'	: '300 South Craig Street',
    '4SC'	: '407 South Craig Street',
    'SEI'	: 'Software Engineering Institute',
    'SH'	: 'Scaife Hall',
    'CUC'	: 'Cohon University Center',
    'WH'	: 'Warner Hall',
    'WEH'	: 'Wean Hall'
}

kCompLab = 'COMPUTER LAB - '
kCUC = 'CUC-'
kHunt = 'HUNT'

#             functions             #
'''
    split_location : Splits a location string into building, room, building_id
    @string: string to perform splitting on

'''
def split_location(string):
    global buildings
    split_string = string.split()
    assert(len(split_string) > 1)
    building_id = split_string.pop(0)
    building = buildings[building_id]
    room = ' '.join(split_string)
    return building_id, building, room

'''
    format_data : Parses XML data to retrieve building and room information;
                  exports to given format.
    @format: dumps output in desired format (json or csv)

'''
def format_data(data,format):
    res = []
    for child in data:
        location = dict()
        location_string = child[1].text
        if (kCompLab in location_string):
            if (kHunt in location_string): continue
            location_string = location_string[len(kCompLab):]
            # location['description'] = kCompLab[:13]
        if (kCUC in location_string):
            location_string = 'CUC ' + location_string[len(kCUC):]
        building_id, building, room = split_location(location_string)
        location['building_id'] = building_id
        location['building'] = building
        location['room'] = room
        res.append(location)

    if (format == 'json'):
        with open('location_dump.json', 'w+') as fp_json:
            for course in res:
                json.dump(course, fp_json)
                fp_json.write('\n')
    
    elif (format == 'csv'):
        with open('location_dump.csv', 'w+') as fp_csv:
            fieldnames = ['building_id', 'building', 'room']
            writer = csv.DictWriter(fp_csv, fieldnames=fieldnames)
            writer.writeheader()
            writer.writerows(res)
    else:
        print('[Error][Incorrect format params]')

    return res


'''
    get_locations : Retrieves location/buidling information from CMU website
                    performs formatting to shrink data
    @format: dumps output in desired format (json or csv)

'''
def get_locations(format):
    url = 'https://25live.collegenet.com/25live/data/cmu/run/spaces.xml'

    querystring = {'ML_FLS':'C','caller':'c-S25SpaceSearch-construct','min_capacity':'1','max_capacity':'1000','scope':'list', 'category_id':'76'}

    payload = ''
    headers = {
        'accept': '*/*',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-US,en;q=0.9',
        'content-type': 'text/xml',
        'cookie': 'WSSESSIONID=939AFC7A4AC79377E41D80EB92C27DA9; _shibsession_32356c6976652d636d7568747470733a2f2f636f72702e636f6c6c6567656e65742e636f6d2f73686962626f6c6574682d73702f=_28c938250e3341c7ed65ab9452d01b7a; adviseShibForcedAuthn=true; Blaze=XVRqIIfA@44PTxeNTRblVAAAAAU; BIGipServerp-java.25live-web.collegenet.com=185206538.36895.0000; BIGipServerp-web.25live-web.collegenet.com=185861898.20480.0000; __utma=85289690.2037084381.1565813283.1565813283.1565813283.1; __utmc=85289690; __utmz=85289690.1565813283.1.1.utmcsr=login.cmu.edu|utmccn=(referral)|utmcmd=referral|utmcct=/idp/profile/SAML2/Redirect/SSO; __utmt=1; __utmb=85289690.1.10.1565813283; 25LiveASVCluster=1029; 25LiveASVHost=25live-asv-6.collegenet.com; JSESSIONID=3872A2A24B18C2071E3234ED62B5D3BC',
        'cache-control': 'no-cache',
        'Postman-Token': 'cab4bebf-baf2-4f74-a91f-ad4d597bf20e'
        }

    response = requests.request('GET', url, data=payload, headers=headers, params=querystring)

   
    if (response.ok):
        data = ET.fromstring(response.text)
        formatted_locations = format_data(data,format)
        print(formatted_locations, len(formatted_locations))

        
def main():
    get_locations('json')

#                main               #
if __name__ == '__main__':
    main()