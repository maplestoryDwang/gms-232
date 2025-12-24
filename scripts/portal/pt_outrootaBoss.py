# Root abyss out
from net.swordie.ms.client.character.skills.temp import CharacterTemporaryStat

response = sm.sendAskYesNo("Would you like to leave?")

if response:
    sm.removeBuff(CharacterTemporaryStat.CapDebuff)
    sm.warpInstanceOut(105200000)
