# [Commerci Republic] Berry Concerned 1

sm.setSpeakerID(9390201) # Mayor Berry
sm.sendNext("村长，你有什么苦恼吗？")

sm.setPlayerAsSpeaker() # Has to be Player Avatar
sm.sendNext("啊…… 是你啊。最近有件事让我很头痛。")

sm.setSpeakerID(9390201) # Mayor Berry
sm.sendNext("是什么事？如果我能帮到你的话，我很愿意帮忙。")

sm.setPlayerAsSpeaker() # Has to be Player Avatar
sm.sendNext("是真的吗？你愿意…… 帮帮我们的村子吗？")

sm.setSpeakerID(9390201) # Mayor Berry
response = sm.sendAskYesNo("不久前，这附近的小偷猫聚集在一起，开始抢夺旅客的东西。")

if response == 1:
    sm.sendNext("但是，随着这些家伙的势力逐渐壮大，它们现在开始袭击村子的储鱼仓库。虽然目前还没造成很大的损失，但继续这样下去的话，损害会逐渐变大的。")
    sm.startQuest(parentID)
else:
    sm.sendSayOkay("请帮我抓住#b#o9390807##k。就先试着抓个100只吧。")
sm.dispose()
