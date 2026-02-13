# id 17651 ([Commerci Republic] A Funny Kind of Peace), field 865000002
sm.setSpeakerID(9390203) # Gilberto Daniella
sm.sendNext("政治王国使节团到了，要让他们进来吗？")
sm.setParam(4)
sm.setInnerOverrideSpeakerTemplateID(9390217) # Tepes
res = sm.sendAskYesNo("你好吗。我是担负海本王国的使节任务而来的，我叫西温。")
sm.startQuest(parentID)
sm.setParam(36)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(9390207) # Zion
sm.sendNext("见到你很高兴。我是凯梅尔兹共和国的首领吉尔伯特·达尼尔拉。好吧，就请说说你有什么事情这么远道而来到凯梅尔兹吧。")
sm.setParam(32)
sm.sendSay("好吧，这次我们有一个提议想给凯梅尔兹。")
sm.setParam(36)
sm.sendSay("提议，请问是什么提议。")
sm.setParam(32)
sm.sendSay("我们两国虽然已经认识了很长时间，但是并没有正式的建交。我们国王陛下一致认为贵国和我们一衣带水，今天想在这里和贵国缔结真正意义上的和约。")
sm.setParam(36)
sm.sendSay("我当然也是不想与海本王国保持距离。但是说到条约的话，应该有什么必要条件吧。你能说说是怎样的条件吗？")
sm.setParam(32)
sm.sendSay("也差不多该来了吧。")
