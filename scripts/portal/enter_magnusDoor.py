from net.swordie.ms.constants import BossConstants
from net.swordie.ms.enums import BossCooldown

sm.setSpeakerID(3001000) # Edea

EASY_MAGNUS_QUEST = 31851

levels = [155, 175]
fields = [BossConstants.NORMAL_MAGNUS_MAPID, BossConstants.HARD_MAGNUS_MAPID]
cds = [BossCooldown.Magnus, BossCooldown.MagnusHard]

fieldId = sm.getFieldID()
if fieldId == 401060399:
    response = sm.sendAskYesNo("Would you like to fight easy magnus?")
    if response:
        if not sm.hasQuestCompleted(EASY_MAGNUS_QUEST):
            sm.sendSayOkay("Please talk to Piston to know more about the Magnus simulator.")
        elif sm.getParty() is None:
            sm.sendSayOkay("Please create a party before going in.")
        elif not sm.isPartyLeader():
            sm.sendSayOkay("Please have your party leader enter if you wish to face Magnus.")
        elif sm.checkParty(BossCooldown.MagnusEasy):
            sm.setDeathCount(BossConstants.MAGNUS_DEATHCOUNT)
            sm.warpInstanceIn(BossConstants.EASY_MAGNUS_MAPID, 0, True)
            sm.setBossCooldown(BossCooldown.MagnusEasy)

else:
    response = sm.sendNext("Would you like to fight Magnus? \r\n #b#L0#Normal Mode (Level 155+)#l \r\n #r#L1#Hard Mode (Level 175+)#l")
    cd = cds[response]

    if sm.getParty() is None:
        sm.sendSayOkay("Please create a party before going in.")
    elif not sm.isPartyLeader():
        sm.sendSayOkay("Please have your party leader enter if you wish to face Magnus.")
    elif sm.checkParty(cd, levels[response]):
        sm.warpInstanceIn(fields[response], 0, True)
        sm.setDeathCount(BossConstants.MAGNUS_DEATHCOUNT)
        sm.setBossCooldown(cd)
        sm.setInstanceTime(20 * 60)
