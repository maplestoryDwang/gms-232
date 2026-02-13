# id 37171 ([Elodin] Music Teacher), field 101082000
sm.setSpeakerID(1501001) # Ruenna the Fairy
sm.setParam(4)
sm.setInnerOverrideSpeakerTemplateID(1501013) # Ruenna the Fairy
sm.sendNext("艾洛丁的鸟在哭……？嗯……一定是发生了什么事……")
sm.sendSay("总之，你说过会教它唱歌的！")
sm.sendSay("你必须把小鸟一起带走，对吧？")
res = sm.sendAskYesNo("那你们一起去就行了！")
sm.setParam(5)
sm.sendNext("再见！")
sm.createQuestWithQRValue(37150, "00=h0;01=h1;02=h0;03=h0;04=h1")
sm.setInnerOverrideSpeakerTemplateID(1501010) # Baby Bird
sm.sendSay("嘿嘿，真让人期待！你会比鲁安教得更好吗？那样我的歌声定能得到人们的认可！")
sm.setInnerOverrideSpeakerTemplateID(1501013) # Ruenna the Fairy
sm.sendSay("哼，小心我……")
sm.setParam(3)
sm.sendSay("哈哈……那就快出发吧。还有很长的路要走。")
sm.startQuest(parentID)
sm.warp(101084400)
