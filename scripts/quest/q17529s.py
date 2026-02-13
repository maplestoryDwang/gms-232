# id 17529 ([Gollux] The Smart Way), field 863010000
sm.setSpeakerID(9390120) # Heart Tree Guardian
sm.sendNext("就像我之前说的那样，如果能让贝勒德的头瘫痪，就能打倒他。")
sm.sendSay("还有，如果能破坏掉3个主要部位，即双肩和肚脐部位的主要的核，就能很容易地制服贝勒德。")
res = sm.sendAskYesNo("我要交给你一个任务。你能去破坏掉贝勒德的3个主要部位，然后让他的头瘫痪吗？怎么样？你想试试看吗？")
sm.startQuest(parentID)
sm.createQuestWithQRValue(17533, "ing=1")
sm.createQuestWithQRValue(17533, "ing=1;1=0")
sm.sendNext("很好。请你去破坏掉贝勒德的所有部位，然后会来找我。")
