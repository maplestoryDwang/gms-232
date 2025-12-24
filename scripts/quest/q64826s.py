# [NLC] Savior of the City
# 64826
# Icebyrd Slimm (9201050)

icebyrd = 9201050

krakianChaser = 1143190
nlcCoin = 4310277

sm.removeEscapeButton()
sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(icebyrd)
if sm.canHold(krakianChaser) and sm.canHold(nlcCoin, 5):
    sm.sendNext("Haha! Thanks to you, many of the issues that had been plaguing NLC have been resolved! "
    "You have my personal thanks for helping NLC to keep running smoothly.")

    sm.setParam(57)
    sm.sendNext("Always glad to help out.")

    sm.setParam(37)
    sm.setInnerOverrideSpeakerTemplateID(icebyrd)
    sm.sendNext("And a great help you were indeed! "
    "I don't want to help to think about how things would've gone if you hadn't been here, #h #. "
    "I'm looking forward to working with you more in the future, tackling whatever issues face NLC and Masteria.")

    sm.startQuest(parentID)

    sm.giveExp(5457600)
    sm.giveItem(nlcCoin, 5)
    sm.giveItem(krakianChaser)

    sm.completeQuest(parentID)
else:
    sm.sendSayOkay("I'd like to reward you for all of your help around the city. Can you check if you have space in your Equip and Etc. inventories?")