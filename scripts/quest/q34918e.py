# id 34918 (Demolitions Expert Salvo), field 402000600
sm.setSpeakerType(3)
sm.setParam(36)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(3001500) # Ark
sm.sendNext("#face0#（说决定帮避难处做事，有什么需要就尽管说。）")
sm.setInnerOverrideSpeakerTemplateID(3001510) # Ferret
sm.sendSay("#face3#哦哦，怀疑你是我的错觉。现在你也是我的")
sm.sendSay("。\r\n哦哦，现在你也明白了避难处的现实。")
sm.sendSay("#face0#（从巴克巴克那里了解到了避难处的窘迫情况。他唱着说出来，听着很吃力。）")
sm.sendSay("#face0#（简单来说，本来情况就很窘迫，又有怪物入侵，所以变得更加困难了。）")
sm.completeQuestNoCheck(parentID)
sm.startQuest(11620)
sm.createQuestWithQRValue(15710, "lasttime=19/02/21/12/37")
sm.createQuestWithQRValue(parentID, "exp=1")
