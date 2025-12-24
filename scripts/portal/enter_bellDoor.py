answer = sm.sendSay("Where would you like to go to? \r\n#L0#Velderoth's Sitting Room#l\r\n#L1#Continue to Magnus#l\r\n#L2#Nevermind#l")

if answer == 0:
    if sm.getParty() is None:
        sm.sendSay("Please create a party before going in.")
    elif not sm.isPartyLeader():
        sm.sendSay("Please have your party leader enter if you wish to face Velderoth.")
    elif sm.checkParty():
        sm.warpInstanceIn(401053100, 0, True)
elif answer == 1:
    sm.warp(401060000)
