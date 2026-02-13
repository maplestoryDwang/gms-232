# [Silent Crusade] Special Delivery

STARLING = 9120221
HIDEOUT = 931050500

sm.setPlayerAsSpeaker()
sm.sendNext("(有封不知从哪里来的信到了我的手里。)这是什么？看上面的十字图案，好像是十字猎人寄来的……打开看看吧。")

sm.setSpeakerID(STARLING)
sm.sendSay("你好，如果你看到这封信，就请尽快到我们的据点来吧。之前你成功地完成了任务，令人嘉赏，现在我们需要你的帮忙。详细的内容见面后再说吧。\r\n\r\n - 谢丽尔 -")

sm.sendSay("附言: 信里放了一张能移动到据点的移动券，你来的时候用它会很方便。得带好了，要是弄丢了，可就得自己想办法过来了。")

sm.startQuest(parentID)
sm.showFieldEffect("Map/Effect.img/crossHunter/chapter/start3")
if not sm.getFieldID() == HIDEOUT:
    sm.warp(HIDEOUT)