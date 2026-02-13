# 23221 - 4th job Demon quest
ds = chr.getJob() == 3111
newSec = 1099004 if ds else 1099009
newJob = 3112 if ds else 3122

sm.setSpeakerID(2450017)
sm.sendNext("#h0#，你回来啦！！状态怎么样？")
sm.setPlayerAsSpeaker()
sm.sendNext("没想到我的愤怒竟然这么强。要控制住愤怒真的很不容易。")
sm.setSpeakerID(2450017)
if sm.sendAskYesNo("但是你成功了。我知道你一定会成功的。祝贺的话以后再说，为了不忘记现在的状态，需要我帮你刻印吗？"):
    if sm.canHold(1142344):
        sm.giveItem(1142344)
        item = chr.getEquippedInventory().getItemBySlot(10) # Secondary
        if item is not None:
            chr.consumeItem(item)
        sm.giveNewSecondary(newSec) # New secondary
        sm.setJob(newJob)
        sm.addSP(5)
        sm.completeQuest(parentID)
        sm.sendSayOkay("#h0#，现在你终于可以控制住内心的愤怒了。从现在开始就要靠你自己努力修炼了。我也想尽快变回过去的样子。")
    else:
        sm.sendSayOkay("Please make space in your Equip inventory.")
