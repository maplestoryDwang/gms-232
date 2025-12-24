# The Ticket Gate (1052007)  |  Kerning City Subway : Subway Ticketing Booth
from net.swordie.ms.client.character.skills.temp import CharacterTemporaryStat
selection = sm.sendNext("Where do you want to go?\r\n\r\n#L0#Subway Construction Site#l \r\n#L1#Attempt jumpquest #l")

if selection == 0:
    sm.warpInstanceIn(931050400)
elif selection == 1:
    selection = sm.sendNext("What jumpquest would you like to attempt? \r\n\r\n #L0# Construction Site 1 #l \r\n #L1# Construction Site 2 #l \r\n #L2# Construction Site 3 #l \r\n")
    sm.removeBuff(CharacterTemporaryStat.DarkSight)
    if selection == 0:
        sm.warp(910360000)
    elif selection == 1:
        sm.warp(910360100)
    elif selection == 2:
        sm.warp(910360200)