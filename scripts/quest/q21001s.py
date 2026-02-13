# 914000300
LOST_KID = 1209006

sm.setSpeakerID(LOST_KID)
if sm.sendAskAccept("呃呃……吓死我了……快，快带到赫丽娜那边去！"):
    sm.startQuest(parentID)
    sm.warp(914000500, 1)
else:
    sm.sendNext("*Sob* Aran has declined my request!")
    sm.dispose()