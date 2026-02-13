# id 34931 (Distorted Signal), field 402000622
sm.setSpeakerType(3)
sm.setParam(36)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(3001510) # Ferret
sm.sendNext("#face1#啊，还好终于又捕捉到了电波。趁这个空档，我们快走吧，叽勒。大家跟我来。")
sm.setInnerOverrideSpeakerTemplateID(3001509) # Salvo
sm.sendSay("#face3#哦！哦！有妨碍者挡住了去路！完了！\r\n哦！哦！我们是勇敢的猎人！我们做到了！耶～")
sm.createQuestWithQRValue(34995, "00=h1;01=h0;10=h0;02=h0;11=h0;12=h0;04=h0;13=h0;05=h0;14=h0;23=h0;06=h0;15=h0;24=h0;07=h0;16=h0;17=h0;09=h0")
sm.completeQuestNoCheck(parentID)
sm.startQuest(11620)
sm.createQuestWithQRValue(15710, "lasttime=19/02/21/12/54")
sm.createQuestWithQRValue(parentID, "exp=1")
sm.createQuestWithQRValue(34995, "00=h1;01=h0;10=h0;02=h0;11=h1;12=h0;04=h0;13=h0;05=h0;14=h0;23=h0;06=h0;15=h0;24=h0;07=h0;16=h0;17=h0;09=h0")
sm.warp(402090005)
