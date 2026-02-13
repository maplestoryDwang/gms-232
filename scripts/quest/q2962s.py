# id 2962 ([Gold Beach] Submarine Dreams), field 120041100
sm.setSpeakerID(1082203) # Tofu
res = sm.sendAskYesNo("找我有什么事吗？你想问黑水灵为什么会突然在金海滩出现？我看到了什么东西，但我也不知道那是什么。你想知道我看到了什么吗?")
sm.sendNext("我得回想一下那天的事情，请稍等一下。那天晚上月亮非常明亮，为了抒发思乡之情，我正在演奏乐器。就在那时，我突然看到有什么东西在动。")
sm.startQuest(parentID)
sm.showFieldEffect("goldBeach/submarine", 0)
sm.warp(120041200)
