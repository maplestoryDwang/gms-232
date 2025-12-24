# Lotus entry NPC
from net.swordie.ms.constants import BossConstants
from net.swordie.ms.enums import BossCooldown

# mode, req level, map, death count
destinations = [
	["Normal", 210, 350060700, BossConstants.LOTUS_NORMAL_DEATHCOUNT],  # p2 350060800 | p3 350060900
	["Hard", 235, 350060400, BossConstants.LOTUS_HARD_DEATHCOUNT],  # p2 350060500 | p3 350060600
]

TIME = BossConstants.LOTUS_TIMER  # 30 minutes


def is_party_eligible(reqlevel, party):
	# TODO: check prequest
	for member in party.getMembers():
		if member.getLevel() < reqlevel:
			return False

	return True


sm.flipSpeaker()
sm.flipDialoguePlayerAsSpeaker()
sm.setBoxChat()

dialog = "Do you want to head to Black Heaven Core to fight Lotus?\r\n"

for i in range(len(destinations)):
	dialog += "#L%d#Go to the Black Heaven Core (%s Mode). (Lv. %d+)#l\r\n" % (i, destinations[i][0], destinations[i][1])

dialog += "#L99#Never mind."
response = sm.sendSay(dialog)

cd = BossCooldown.Lotus if response == 0 else BossCooldown.LotusHard

if sm.getParty() is None:
	sm.sendSayOkay("Please create a party before going in.")

elif not sm.isPartyLeader():
	sm.sendSayOkay("Please have your party leader talk to me if you wish to face Lotus.")

elif sm.checkParty(cd) and response != 99:
	if is_party_eligible(destinations[response][1], sm.getParty()):
		sm.warpInstanceIn(destinations[response][2], 0, True)
		sm.setDeathCount(destinations[response][3])
		sm.setInstanceTime(TIME)
		sm.setBossCooldown(cd)

	else:
		sm.sendSayOkay("One or more party members are lacking the prerequisite entry quests, or are below level %d." % destinations[response][1])