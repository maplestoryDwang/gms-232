# Arkarium entrance
from net.swordie.ms.constants import BossConstants
from net.swordie.ms.enums import BossCooldown
from net.swordie.ms.client.character.skills.temp import CharacterTemporaryStat

sm.setSpeakerID(2144017)
if sm.getFieldID() == BossConstants.ARKARIUM_EASY_FIELD or sm.getFieldID() == BossConstants.ARKARIUM_NORMAL_FIELD:
    if sm.sendAskYesNo("Would you like to leave the fight?"):
        sm.removeCTS(CharacterTemporaryStat.DeathMark)
        sm.warpInstanceOut(272020110, 0)
else:
    sm.sendNext("#e<Boss: Arkarium>#n \r\n Warriors! Are you ready to battle the Black Mage's evil commander?#b\r\n \r\n"
                                   "#L0#Request to enter <Boss: Arkarium>.#l\r\n")
    response = sm.sendNext("#e<Boss: Arkarium>#n \r\n Select a mode. \r\n \r\n"
                                                          "#L0#Easy(Level 150+) #l \r\n"
                                                          "#L1#Normal (Level 150+) #l \r\n")
    if response == 0:
        if sm.getParty() is None:
            sm.sendSayOkay("Please create a party before going in.")
        elif not sm.isPartyLeader():
            sm.sendSayOkay("Please have your party leader enter if you wish to face Arkarium.")
        elif sm.checkParty(BossCooldown.ArkariumEasy, 150):
            sm.warpInstanceIn(BossConstants.ARKARIUM_EASY_FIELD, 0, True)
            sm.setInstanceTime(30 * 60)
            sm.setDeathCount(10)
            sm.setBossCooldown(BossCooldown.ArkariumEasy)
        else:
            sm.chat("One of your party members has this boss on cooldown.")
    elif response == 1:
        if sm.getParty() is None:
            sm.sendSayOkay("Please create a party before going in.")
        elif not sm.isPartyLeader():
            sm.sendSayOkay("Please have your party leader enter if you wish to face Arkarium.")
        elif sm.checkParty(BossCooldown.Arkarium, 150):
            sm.warpInstanceIn(BossConstants.ARKARIUM_NORMAL_FIELD, 0, True)
            sm.setInstanceTime(30 * 60)
            sm.setDeathCount(10)
            sm.setBossCooldown(BossCooldown.Arkarium)
        else:
            sm.chat("One of your party members has this boss on cooldown.")