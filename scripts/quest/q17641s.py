# id 17641 ([Commerci Republic] Robed Adventures), field 865000000
sm.setSpeakerID(9390235) # Leon Daniella
sm.sendNext("搞什么。怎么这么迟才来。")
sm.setParam(2)
sm.sendSay("啊，对不起，出了点小事。")
sm.setParam(0)
res = sm.sendAskYesNo("小事儿？嗯，算了。赶紧上船吧。都准备好了吧？这次离开很长时间回不来的，需要的东西可都带齐了。")
sm.setParam(32)
sm.setColor(1)
sm.sendNext("好了，我作为船长有事要处理就先进去了。")
sm.startQuest(parentID)
sm.setParam(56)
sm.sendSay("没问题。去吧。")
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(9390204) # Robed Lady
sm.sendSay("喔啦啦，这真巧啊。")
sm.setParam(56)
sm.sendSay("............")
