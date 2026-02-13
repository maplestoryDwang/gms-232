# id 62005 ([Shaolin Temple] Demon B Gone), field 701220000
sm.setSpeakerType(3)
sm.setParam(37)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(9310046) # Zheung Guan
sm.sendNext("秘药有效吗？")
sm.setSpeakerType(4)
sm.setSpeakerID(9310046) # Zheung Guan
sm.setParam(57)
sm.sendSay("别说消灭妖怪了，那个药一下子引来了几十只妖怪！！")
sm.setSpeakerType(3)
sm.setParam(37)
sm.sendSay("啊，这个……我还以为这次能行呢。嗯……那要试试这个秘药吗……？？")
sm.setSpeakerType(4)
sm.setParam(57)
sm.sendSay("……(这不是驱散妖怪的秘药，而是聚集妖怪的秘药吧。回去找#b#p9310053##k吧。)")
sm.completeQuestNoCheck(parentID)
sm.playExclSoundWithDownBGM("Field.img/masteryBook/EnchantSuccess", 100)
