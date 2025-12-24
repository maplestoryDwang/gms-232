# Love Lost, but not Forgotten 
# 23220
# No NPC

from net.swordie.ms.constants import JobConstants

echo = 30011005

# DS or DA?
if JobConstants.isDemonSlayer(chr.getJob()):
    # Give Vengeance Incarnate
    medal = 1142345
else:
    # Give Ultimate Avenger
    medal = 1142557

sm.flipDialoguePlayerAsSpeaker()
if sm.canHold(medal):
    sm.sendNext("What is this feeling...?")
    sm.sendSay("I've never felt this way when I was a commander.")
    sm.sendSay("It feels like I've also gained a new power.")
    sm.sendSay("I'll never forget my past and mission.")
    sm.sendSay("I'll vanquish the Black Mage and atone for my sins so that no one else needs to walk down my path.")

    sm.completeQuest(parentID)
    sm.giveSkill(echo)
    sm.giveItem(medal)
else:
    sm.sendSayOkay("I should make some room in my Equip inventory.")