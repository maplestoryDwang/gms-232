selection = sm.sendNext("Hello and welcome to goo island! \r\n\r\n#L0#I want to explore the ruins.#l\r\n\r\n#L1#What do you have to sell?#l")

if selection == 0:
    if sm.checkParty(None, 100):
        if sm.getPartySize() == 4:
            if sm.isPartyLeader():
                canEnter = True
                for partyMember in sm.getParty().getMembers():
                    character = partyMember.getChr()
                    if not chr.canHold(2633346, 1):
                        sm.invokeForParty("chat", str(chr.getName()) + " Doesn't have enough USE inventory space to start the PQ")
                        canEnter = False
                if canEnter:
                    sm.warpInstanceIn(867155900,0, True)
                    sm.setInstanceTime(15 * 60, 867155800)
                    sm.setDeathCount(3)
            else:
                sm.sendNext("Only the party leader can start the ruin exploration.")
        else:
            sm.sendNext("Your party needs to have exactly 4 party members")
elif selection == 1:
    sm.sendNext("My shop used Goo Coins, so if you have any, please spend them!")
    sm.openShop(9401408)