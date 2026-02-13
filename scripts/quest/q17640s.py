# id 17640 ([Commerci Republic] Pack Up, and Set Sail 3), field 865000002
sm.setSpeakerID(9390262) # Leon Daniella
sm.sendNext("啊，来啦。我拜托的东西呢？")
sm.setParam(2)
sm.sendSay("嗯，可是我在杂货店听说可以送货的呀。")
sm.setParam(0)
res = sm.sendAskYesNo("嗯，可以那样的啊。船员们和佣兵们都已经到齐了。好像可以出发了。如何？")
sm.startQuest(parentID)
sm.setParam(2)
sm.sendNext("(这家伙竟调转话题。) 嗯，我也准备好了。")
sm.setParam(0)
sm.sendSay("好的，那就在码头见吧。")
