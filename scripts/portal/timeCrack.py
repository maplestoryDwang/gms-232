# Crack in Time
# 272000000
# Warps to either Leafre in Flames 1 or Distorted Temple of Time 1.

optionList = [
    {"MapID": 272000100}, # Leafre in Flames 1
    {"MapID": 272020000}, # Distorted Temple of Time 1
]
statue = 2144018

sm.setSpeakerID(statue)
destString = ["Where would you like to go?\r\n"]
options = sm.selectionString("#L{i}##m{MapID}##l", optionList)
destString.append(options)
destIndex = sm.sendNext(sm.join(destString))
sm.warp(optionList[destIndex]["MapID"])