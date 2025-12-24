# Aurora Prism
# 2430874
# Allows Luminous to warp to Harmony or Lania's Front Yard.

maps = [
    {"MapID": 101000200}, # Harmony
    {"MapID": 101000101}, # Lania's Front Yard
]

vieren = 1032209

currentMap = sm.getFieldID()
# Use list comprehension to remove Harmony/Lania's Front Yard if the user is already there
maps = [mapEntry for mapEntry in maps if mapEntry["MapID"] != currentMap]

sm.setSpeakerID(vieren)
destString = ["Where would you like to go? #b\r\n"]
options = sm.selectionString("#L{i}##m{MapID}##l", maps)
destString.append(options)
destination = sm.sendNext(sm.join(destString))

sm.setReturnField()
sm.warp(maps[destination]["MapID"])