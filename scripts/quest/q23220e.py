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
    sm.sendNext("这种感觉……")
    sm.sendSay("感觉到了当军团长的时候没有感受到的全新的感情。")
    sm.sendSay("除了感情之外，感觉有股新的力量在喷涌而出。")
    sm.sendSay("是的，不过我不会忘记。我的过去，以及要做的事情！")
    sm.sendSay("为了不再让我这样的人出现，必须消除邪恶，改正我犯下的错误。")

    sm.completeQuest(parentID)
    sm.giveSkill(echo)
    sm.giveItem(medal)
else:
    sm.sendSayOkay("I should make some room in my Equip inventory.")