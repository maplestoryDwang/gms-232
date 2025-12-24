# Normal Ark out portal
from net.swordie.ms.client.character.skills.temp import CharacterTemporaryStat

sm.setSpeakerID(2144017)
if sm.sendAskYesNo("Would you like to leave the boss fight?"):
    sm.removeCTS(CharacterTemporaryStat.DeathMark)
    sm.warpInstanceOut(272020110, 0)