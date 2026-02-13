# id 62034 (Collecting the Chief Priest Demon Orb), field 701220000
sm.setSpeakerType(3)
sm.setParam(37)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(9310597) # Zarak
sm.sendNext("你找到我之前说起过的妖怪宝珠了吗？")
sm.completeQuestNoCheck(parentID)
sm.setSpeakerType(4)
sm.setSpeakerID(9310597) # Zarak
sm.sendSay("哦哦，原来是小巧玲珑又散发着美丽光泽的宝珠啊。这应该会对研究很有帮助的。")
sm.playExclSoundWithDownBGM("Field.img/masteryBook/EnchantSuccess", 100)
