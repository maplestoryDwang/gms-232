# The Path of a Blaze Wizard - Completion

sm.setSpeakerID(1101004) # Oz
if sm.canHold(1382000):
    sm.jobAdvance(1200) # Blaze Wizard 1st Job
    sm.addSP(5)
    sm.setSTR(4)
    sm.setINT(4)
    sm.setDEX(4)
    sm.setLUK(4)
    sm.setAP(4 + chr.getLevel() * 5)
    sm.completeQuest(parentID)
    sm.giveItem(1382000) # Wooden Staff
    sm.sendSayOkay("你已经做好选择了吗？选择之后是不能反悔的。请一定要慎重考虑……你真的要选择炎术士之路吗？")
else:
    sm.sendSayOkay("从现在开始，你就是一名炎术士了。啊，真让人高兴！我又有了新同伴……对了，我得先分配一些能力给你。")