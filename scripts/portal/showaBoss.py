# Armory
# 801040004
# Entrance portal to Yakuza Boss. Must have Yakuza Underboss's Comb in inventory.

comb = 4000138

sm.setSpeakerID(9120201)

if sm.getParty() is None:
    sm.sendSayOkay("You must be in a party of one or more to enter.")
elif not sm.isPartyLeader():
    sm.sendSayOkay("Please have your party leader talk to me.")
elif sm.checkParty() and sm.hasItem(comb):
        sm.sendNext("#e<Boss: Yakuza Boss>#n \r\n"
        "Hey! Is that the #t" + repr(comb) + "# in your hand?! I knew you could do it! "
        "Maybe you can take down the Big Boss. Will you be able to break into his inner sanctum? #b\r\n\r\n"
        "#L0#Enter <Boss: Yakuza Boss>.#l")
        sm.warpInstanceIn(801040100, True)
        sm.setInstanceTime(20*60) # 20 Minute fight
else: 
    sm.sendSayOkay("It's too dangerous for you to go any further without #b" + sm.formatInlineItem(comb) + "#k!")