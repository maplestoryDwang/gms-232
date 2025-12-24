# id 55234 ([Alishan] Spirit's Whisper), field 800000202
sm.setSpeakerID(9330458) # ?????
sm.setParam(16)
res = sm.sendAskAccept("Hmm, I thought I heard something... Maybe I should pay more attention.")
if res:
    sm.setParam(36)
    sm.setColor(1)
    sm.setInnerOverrideSpeakerTemplateID(9330458) # ?????
    sm.sendNext("Hello... anyone there? Please, someone answer.")
    sm.setParam(56)
    sm.sendSay("H-hello? Spooky voice?")
    sm.setParam(36)
    sm.sendSay("Yes? Can you hear me?")
    sm.setParam(56)
    sm.sendSay("Yes, but where are you? This is creepy.")
    sm.setParam(36)
    sm.sendSay("Oh, thank goodness! I need your help. Shao...")
    sm.setParam(56)
    sm.sendSay("Okay, but please don't telep-")
    sm.startQuest(parentID)
    sm.warp(749080900)