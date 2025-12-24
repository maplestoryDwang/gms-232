# Orbis Station Entrance 
# 200000100
# Functionally equivalent to Isa the Station Guide [2012006, npc/getAboard.py] for warping into the different Orbis stations.

maps = [
    {"MapID": 200000110}, # To Victoria Island
    {"MapID": 200000120}, # To Ludibrium
    {"MapID": 200000130}, # To Leafre
    {"MapID": 200000140}, # To Mu Lung
    {"MapID": 200000150}, # To Ariant
    {"MapID": 200000160}, # To Ereve
    {"MapID": 200000170}, # To Edelstein
]

sm.setSpeakerID(2012006)
destString = ["Hey, where would you like to go? #b\r\n"]
options = sm.selectionString("#L{i}##m{MapID}##l", maps)
destString.append(options)
destination = sm.sendNext(sm.join(destString))
sm.warp(maps[destination]["MapID"])
