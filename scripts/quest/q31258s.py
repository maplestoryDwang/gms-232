# id 31258 ([Crimsonheart] Outside the Castle), field 301000000
sm.setSpeakerType(3)
sm.setParam(16)
sm.sendNext("(我把从里德利那里听说的事情全都告诉了汉斯。)")
sm.setParam(5)
sm.setInnerOverrideSpeakerTemplateID(1032001) # Grendel the Really Old
sm.sendSay("……原来如此。照你的话来看，虽然绯红里发生的大战破坏了一切，但实际上被卷入战乱的魔族人们却不知道战争的确切原因？")
sm.setParam(4)
res = sm.sendAskYesNo("你能不能到克林逊森林城堡外面去看看？我指的是绯红的其他地区。要想搜集更多信息的话，只有这个办法。")
sm.startQuest(parentID)
sm.setParam(5)
sm.sendNext("那就拜托你了。\r\n(到城堡外面去吧。通过右下方的门可以出去。)")
