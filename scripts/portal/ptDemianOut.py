# Damien leave NPC
from net.swordie.ms.client.character.skills.temp import CharacterTemporaryStat

WORLD_TREE_SUMMIT = 105300303

sm.flipSpeaker()
sm.flipDialoguePlayerAsSpeaker()
sm.setBoxChat()

dialog = str()

if sm.hasMobsInField():
	dialog = "Are you sure you want to leave the battlefield and abandon your party members?"

else:
	dialog = "You have defeated Damien. Do you want to leave?"

if sm.sendAskYesNo(dialog):
	sm.warpInstanceOut(WORLD_TREE_SUMMIT)
	sm.removeCTS(CharacterTemporaryStat.Stigma)
