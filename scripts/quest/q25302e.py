# The Taste of Luxury
# 25302
# Bedin (2111008)
# You buy phantom's lv100 mount from this guy for 10mil mesos

rolls_cost = 10000000
royce = 20031160

sm.setSpeakerID(2111008)
if sm.getMesos() >= rolls_cost:
    dialogue1 = "You got the 10 million Mesos? Thank goodness! I already made you a new engine. If you didn't bring that money, I would've been up to my neck in debt! But I guess you're ready to get on the road..."
    if sm.sendAskYesNo(dialogue1):
        sm.completeQuest(parentID)
        sm.deductMesos(10000000)
        sm.giveSkill(royce)
        sm.sendNext("获得了老爷车骑宠技能！")
        sm.sendSayOkay(
            "获得了<老爷车骑宠>技能。")
