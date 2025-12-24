# Three Doors
# 270000000
# Warps to the different maps across the Gate to the Past once Path to the Past has been completed.

pastList = [
    {"MapID": 270010000}, # Past of the Verdure
    {"MapID": 270020000}, # Frozen Past
    {"MapID": 270030000}, # Burning Past
    {"MapID": 270040000}, # Broken Corridor
]

johanna = 2140004

if sm.hasQuestCompleted(3500):
    sm.setSpeakerID(johanna)
    destString = ["I can instantly warp those with the proper permissions around the Temple. Where would you like to go? #b\r\n"]
    options = sm.selectionString("#L{i}##m{MapID}##l", pastList)
    destString.append(options)
    destIndex = sm.sendNext(sm.join(destString))
    sm.warp(pastList[destIndex]["MapID"])
else:
    sm.chat("You do not have the Goddess' permission to enter through the Door to the Past.")