# id 22703 (More Space 1), field 331001000
sm.setSpeakerType(3)
sm.setParam(4)
sm.setInnerOverrideSpeakerTemplateID(1531001) # Jay
sm.sendNext("凯内西斯，为了纪念完成第一次升级，我准备了点东西。")
res = sm.sendAskYesNo("日后你要随身携带的物品会越来越多，我来帮你扩展你的道具栏。")
sm.startQuest(parentID)
sm.completeQuestNoCheck(parentID)
sm.sendSayOkay("那么，日后也要期待你的大展身手了。")
