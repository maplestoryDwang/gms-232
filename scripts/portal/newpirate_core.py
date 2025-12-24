# jett 4th job adv
if sm.hasQuest(53253) and chr.getJob() == 571:
    sm.setPlayerAsSpeaker()
    sm.sendNext("#b(WHA-AAAAAAAAAT?!)")
    sm.sendNext("(#b#p9270092##k was right! it's... the #bcore#k)")
    sm.setSpeakerID(2040050)
    sm.sendNext("Here, I'll give you the Jett's Core. Be careful not to lose it this time.")
    if sm.canHold(1352303):
        sm.giveItem(1352823)
        sm.jobAdvance(572)
        sm.completeQuest(53253)
    else:
        sm.sendNext("Please check fi you ahve at least 1 empty slot in the Equip tab.")