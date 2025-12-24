# Mysterious Portal
# 1033112
# Elluel (101050000)
# Warp from Elluel to Ellinia, Henesys, Perion, or Kerning City.

maps = [
    {"MapID": 101000000}, # Ellinia
    {"MapID": 100000000}, # Henesys
    {"MapID": 102000000}, # Perion
    {"MapID": 103000000}, # Kerning City
]

destString = ["(If you don't have any more buisness in Elluel, you can move to other towns through the Mysterious Portal.) #b\r\n"]
options = sm.selectionString("#L{i}##m{MapID}##l", maps)
destString.append(options)
destination = sm.sendNext(sm.join(destString))
sm.warp(maps[destination]["MapID"])