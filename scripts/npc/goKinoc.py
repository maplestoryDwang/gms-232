# Perry
# 9110000
# Warps between the Victoria Tree Platform and Zipangu's four towns.

maps = [
    {"MapID": 104020100}, # Victoria Tree Platform
    {"MapID": 800000000}, # Mushroom Shrine
    {"MapID": 800040000}, # Outside Ninja Castle
    {"MapID": 801000000}, # Showa Town
    {"MapID": 807000000}, # Momijigaoka
]
currentMap = sm.getFieldID()
# Use list comprehension to remove the current town
maps = [mapEntry for mapEntry in maps if mapEntry["MapID"] != currentMap]

destString = ["Welcome! Where to? \r\n"]
options = sm.selectionString("#L{i}##m{MapID}##l", maps)
destString.append(options)
destination = sm.sendNext(sm.join(destString))
sm.warp(maps[destination]["MapID"])