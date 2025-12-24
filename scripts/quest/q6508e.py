# Teary Expression
# 6508
# Camilla (1012108)

from net.swordie.ms.enums import Stat

camilla = 1012108

rubble = 4000022
ouch = 5160024

# Grab current fame for quest-induced defame later
fame = chr.getStat(Stat.pop)

sm.setSpeakerID(camilla)
sm.sendNext(sm.join(["Hello. Is there something I can... Eeek! "
"Is that #t", repr(rubble), "#? Is there a Golem nearby?! I'm scared! WAAAAAAH! \r\n\r\n"
"#fUI/UIWindow2.img/QuestIcon/4/0# \r\n",
sm.formatInlineItem(ouch), " x 1 \r\n"
"#fUI/UIWindow2.img/QuestIcon/6/0# -1"]))

sm.giveItem(ouch)
chr.setStatAndSendPacket(Stat.pop, fame-1)
sm.completeQuest(parentID)

sm.setPlayerAsSpeaker()
sm.sendNext("#b(You learned the Teary Expression from Camilla. "
"However, your Fame went down as a result...)")