# Mark of the Squad(2083004) | Cave of Life, Entrance to Horntail's Cave
from net.swordie.ms.enums import BossCooldown


sm.sendNext("#e<Boss:Horntail>#n \r\n Horntail has resurrected. We must stop it before it erupts a volcano and turns all of Minar into hell on earth.#b\r\n \r\n"
        "#L0#Apply to enter <Boss:Horntail>.#l\r\n")
response = sm.sendNext("#e<Boss:Horntail>#n \r\n Select a mode. \r\n \r\n"
            "#L0#Easy(Level 130+) #l \r\n"
            "#L1#Normal (Level 130+) #l \r\n"
            "#L2#Chaos(Level 135+) #l \r\n")
if response == 0:
    if sm.getParty() is None:
        sm.sendSayOkay("Please create a party before going in.")
    elif not sm.isPartyLeader():
        sm.sendSayOkay("Please have your party leader enter if you wish to face Horntail.")
    elif sm.checkParty(BossCooldown.HorntailEasy, 130):
        sm.warpInstanceIn(240060002, 0, True)
        sm.setInstanceTime(30 * 60)
        sm.setBossCooldown(BossCooldown.HorntailEasy)
elif response == 1:
    if sm.getParty() is None:
        sm.sendSayOkay("Please create a party before going in.")
    elif not sm.isPartyLeader():
        sm.sendSayOkay("Please have your party leader enter if you wish to face Horntail.")
    elif sm.checkParty(BossCooldown.Horntail, 130):
        sm.warpInstanceIn(240060000, 0, True)
        sm.setInstanceTime(30 * 60)
        sm.setDeathCount(10)
        sm.setBossCooldown(BossCooldown.Horntail)
elif response == 2:
        if sm.getParty() is None:
            sm.sendSayOkay("Please create a party before going in.")
        elif not sm.isPartyLeader():
            sm.sendSayOkay("Please have your party leader enter if you wish to face Horntail.")
        elif sm.checkParty(BossCooldown.HorntailHard, 135):
            sm.warpInstanceIn(240060001, 0, True)
            sm.setInstanceTime(30 * 60)
            sm.setDeathCount(10)
            sm.setBossCooldown(BossCooldown.HorntailHard)
