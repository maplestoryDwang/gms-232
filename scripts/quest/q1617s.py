# [Silent Crusade] The Silent Crusade

BASTILLE = 9073003
time = 5 *60

sm.setSpeakerID(BASTILLE)
response = sm.sendAskYesNo("对于这突然的建议感到吃惊吧。不好意思，能不能先确认下您有没有资格和我们一起共事呢？因为我们不能对没有资格的人随便说话的。没关系吧？")

if response:
    sm.sendNext("好的。那么请协助我做一些简单的测试吧。在规定时间内击败我的小狗哈比的话就行了。那么开始吧。")

    sm.warpInstanceIn(931050510)
    sm.setInstanceTime(time, 931050500)
    sm.startQuest(parentID)

else:
    sm.sendSayOkay("No?...")