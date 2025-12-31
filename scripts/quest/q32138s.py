# id 32138 ([Theme Dungeon] Ellinel Fairy Academy ), field 270000000
sm.setSpeakerID(1052001) # Dark Lord
res = sm.sendAskAccept("Right on time. I've received some disturbing news...")
sm.sendNext("There's been an incident at the #bEllinel Fairy Academy#k. Unlike Ellinia, Ellinel has been a sacred place for fairies to live and learn uninterrupted by the outside world. However, a #rhuman Magician#k has trespassed on their territory.")
if sm.sendAskYesNo("Fanzy will take you into the land of the fairies. I can send you to him directly, if you'd like."):
    sm.warp(101030000)
    sm.startQuest(parentID)