#450012200
from net.swordie.ms.constants import BossConstants
from net.swordie.ms.enums import BossCooldown

# mode, req level, map, death count
destinations = [
    # actual map is -50, with some direction stuff
    ["Normal", 255, BossConstants.DARKNELL_FIELD, 10],
    ["Hard", 255, BossConstants.DARKNELL_HARD_FIELD, 10],
]
TIME = 30 * 60 # 30 minutes

def is_party_eligible(reqlevel, party):
    # TODO: check prequest
    for member in party.getMembers():
        if member.getLevel() < reqlevel:
            return False

    return True

sm.flipSpeaker()
sm.flipDialoguePlayerAsSpeaker()
sm.setBoxChat()

dialog = "Are you ready to head to the #Final Horizonl#k to fight Darknell\r\n"

for i in range(len(destinations)):
    dialog += "#L%d#Go to the #Darknell (%s Mode).#k (Lv. %d or above)#l\r\n" % (i, destinations[i][0], destinations[i][1])

dialog += "#L99#Never mind."
response = sm.sendSay(dialog)

normalDunkel = response == 0
cd = BossCooldown.Darknell if normalDunkel else BossCooldown.DarknellHard

if sm.getParty() is None:
    sm.createSoloParty()

if not sm.isPartyLeader():
    sm.sendSayOkay("Please have your party leader talk to me if you wish to face Darknell.")

elif sm.checkParty(cd) and response != 99:
    if is_party_eligible(destinations[response][1], sm.getParty()):
        sm.warpInstanceIn(destinations[response][2], 0, True)
        sm.setDeathCount(destinations[response][3])
        sm.setInstanceTime(TIME)
        sm.setBossCooldown(cd)

    else:
        sm.sendSayOkay("One or more party members are lacking the prerequisite entry quests, or are below level %d." % destinations[response][1])
