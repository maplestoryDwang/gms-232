# Damien entry NPC
from net.swordie.ms.constants import BossConstants
from net.swordie.ms.enums import BossCooldown

# mode, req level, map, death count
destinations = [
	["Normal", 210, 350160200, 10],
	["Hard", 235, 350160100, 10],
]

def is_party_eligible(reqlevel, party):
	# TODO: check prequest
	for member in party.getMembers():
		if member.getLevel() < reqlevel:
			return False

	return True

sm.flipSpeaker()
sm.flipDialoguePlayerAsSpeaker()
sm.setBoxChat()

dialog = "Do you want to head to 'Dark World Tree Summit' to fight Damien?\r\n"

for i in range(len(destinations)):
	dialog += "#L%d#Go to the Dark World Tree Summit (%s Mode). (Lv. %d+)#l\r\n" % (i, destinations[i][0], destinations[i][1])

dialog += "#L99#Never mind."
response = sm.sendSay(dialog)
cd = BossCooldown.Damien if response == 0 else BossCooldown.DamienHard

if sm.getParty() is None:
	sm.sendSayOkay("Please create a party before going in.")

elif not sm.isPartyLeader():
	sm.sendSayOkay("Please have your party leader talk to me if you wish to face Damien.")

elif sm.checkParty(cd) and response != 99:
	if is_party_eligible(destinations[response][1], sm.getParty()):
		sm.setBossCooldown(cd)
		sm.warpInstanceIn(destinations[response][2], 0, True)
		sm.setInstanceTime(BossConstants.DEMIAN_TIME)  # 30min
		sm.setDeathCount(destinations[response][3])

	else:
		sm.sendSayOkay("One or more party members are lacking the prerequisite entry quests, or are below level %d." % destinations[response][1])