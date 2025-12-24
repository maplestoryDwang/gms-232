# id 3003165 (Muto), field 993017200
if sm.hasQuestCompleted(34218) and chr.getLevel() >= 220 and not sm.hasQuestCompleted(34300):
    sm.setSpeakerType(3)
    sm.setParam(4)
    sm.setInnerOverrideSpeakerTemplateID(3003165) # Muto
    res = sm.sendAskYesNo("#bMuto#k... Full now... #bMove#k?\r\n\r\n(You can follow the Arcane River to its next stop when Muto moves.)")
    sm.warp(450003700)
elif sm.hasQuestCompleted(34300) or sm.hasQuest(34300):
    sm.warp(450003000)
else:
    sm.chat("You need to have reached level 220 and finished the Chu Chu questline before you can continue to Lachelein.")