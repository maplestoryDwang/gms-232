sm.setPlayerAsSpeaker()
sm.sendNext("There's no question that I... have been erased from everyone's memories. But if it's just me, then they must have holes in their memories. They would know that at least SOMEONE was there.")
if sm.sendAskYesNo("if it's not just that my existence is being wiped from their memories... Then perhaps there are other possibilities. Should i head out now? \r\n#r(You will be moved directly to the map if you accept.)"):
    sm.warp(211060000)
    sm.startQuest(parentID)