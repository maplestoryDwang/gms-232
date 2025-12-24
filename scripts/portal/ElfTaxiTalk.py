# Elluel 
# 101050000
# Functionally equivalent to Mysterious Portal [1033112, npc/ElfTaxi.py] for Elluel taxi service.

maps = [
    {"MapID": 101000000}, # Ellinia
    {"MapID": 100000000}, # Henesys
    {"MapID": 102000000}, # Perion
    {"MapID": 103000000}, # Kerning City
]

sm.setSpeakerID(1033112)
destString = ["(If you don't have any more buisness in Elluel, you can move to other towns through the Mysterious Portal.) #b\r\n"]
options = sm.selectionString("#L{i}##m{MapID}##l", maps)
destString.append(options)
destination = sm.sendNext(sm.join(destString))
sm.warp(maps[destination]["MapID"])