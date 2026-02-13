# id 34925 (Crystal Excavation), field 402000614
sm.setSpeakerType(3)
sm.setParam(36)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(3001508) # Zippy
sm.sendNext("#face0#嗯……那就只能找找看了……既然这样，最好组建一支探索队。")
sm.sendSay("#face0#成员是维依、巴克巴克……以及……")
sm.setInnerOverrideSpeakerTemplateID(3001510) # Ferret
sm.sendSay("#face3#哎呀，我不想跟那个家伙一起去，叽勒……叽勒楞……")
sm.setInnerOverrideSpeakerTemplateID(3001508) # Zippy
sm.sendSay("#face0#嗯……如果愿意的话，亚克，希望你也能加入探索队。")
sm.setInnerOverrideSpeakerTemplateID(3001500) # Ark
sm.sendSay("#face0#（在稍微远离避难处的地方找到了过去的记忆。如果继续找，说不定可以找到其他记忆。）")
sm.sendSay("#face0#我愿意加入探索队。")
sm.setInnerOverrideSpeakerTemplateID(3001508) # Zippy
sm.sendSay("#face0#好的，必须先做好探索的准备。我们回避难处去吧。啊，维依，你检查一下探测器。")
sm.startQuest(parentID)
sm.createQuestWithQRValue(34995, "00=h1;01=h1;10=h0;02=h1;11=h0;12=h0;04=h0;13=h0;05=h0;14=h0;23=h0;06=h0;15=h0;24=h0;07=h0;16=h0;17=h0;09=h0")
sm.warp(402000600)
