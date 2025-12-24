# portal to krexel

def is_party_eligible(party):
    # TODO: check prequest
    for member in party.getMembers():
        if not sm.hasQuestCompleted(4529):
            return False

    return True

if sm.getParty() is None:
    sm.sendSayOkay("Please create a party before going in.")

if not sm.isPartyLeader():
    sm.sendSayOkay("Please have your party leader go through this portal.")

if is_party_eligible(sm.getParty()):
    sm.warpInstanceIn(541020800, 0, True)
else:
    sm.sendSayOkay("One of the party members hasn't finished the prequests.")

