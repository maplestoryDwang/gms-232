# Outpost
# 450009050
# Warps to Ereve's Sky Ferry or Moonbridge's White Spear Deck 1.

maps = [
    {"MapID": 130000210}, # Sky Ferry
    {"MapID": 450009100}, # Whie Spear Deck 1
]

sm.flipDialoguePlayerAsSpeaker()
destString = ["Where would you like to go? #b\r\n"]
options = sm.selectionString("#L{i}##m{MapID}##l", maps)
destString.append(options)
destIndex = sm.sendNext(sm.join(destString))
sm.warp(maps[destIndex]["MapID"])