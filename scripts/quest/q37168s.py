# id 37168 ([Elodin] Shimmer Songbird), field 101084400
sm.createQuestWithQRValue(37150, "00=h0;01=h1;02=h0;03=h2;04=h1")
sm.setSpeakerID(1501004) # Shimmer Songbird
sm.setParam(4)
sm.setInnerOverrideSpeakerTemplateID(1501015) # Shimmer Songbird
sm.sendNext("好久没有异邦人到艾洛丁来了。\r\n异邦人，你到这里来干什么？")
sm.setParam(2)
sm.sendSay("是妖精鲁安让我来的。")
sm.setParam(4)
sm.sendSay("魯安…可爱的小姑娘。和其他妖精不同，她真的很喜欢艾洛丁。")
sm.sendSay("以前她有时会来这里找我，但是最近却完全没了消息……")
sm.setParam(2)
sm.sendSay("因为出了点事情……")
sm.setParam(4)
sm.sendSay("哈哈……我也有所耳闻。听说她最近遇到了一点麻烦。虽然不知道到底是怎么回事，但大家好像都对鲁安有点不满。")
sm.startQuest(parentID)
sm.completeQuestNoCheck(parentID)
