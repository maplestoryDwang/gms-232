#Flying Fish, Transporter from Lachelein to Chu Chu Island and Arcana
sm.setSpeakerID(3003300)
if sm.hasQuestCompleted(34330) and sm.hasQuest(34450):
    if sm.sendAskYesNo("Blub!#b(Do you want to ride the Flying Fish to Arcana now?)"):
        sm.warp(940200205)
elif sm.hasQuestCompleted(34450):
    sm.warp(450005010)
else:
    sm.sendNext("Blub#b(I can't be of service to you right now.)")