# Regular Cab in Victoria
# 1012000
# Warps between Victoria Island's main towns.

maps = [
    {"MapID": 104000000}, # Lith Harbor
    {"MapID": 100000000}, # Henesys
    {"MapID": 103000000}, # Kerning City
    {"MapID": 101000000}, # Ellinia
    {"MapID": 102000000}, # Perion
    {"MapID": 120000100}, # Nautilus
    {"MapID": 105000000}, # Sleepywood
]

currentMap = sm.getFieldID()
# Use list comprehension to remove the current town
maps = [mapEntry for mapEntry in maps if mapEntry["MapID"] != currentMap]

destString = ["Where would you like to go?\r\n"]
options = sm.selectionString("#L{i}##m{MapID}##l", maps)
destString.append(options)
destination = sm.sendNext(sm.join(destString))
sm.warp(maps[destination]["MapID"])