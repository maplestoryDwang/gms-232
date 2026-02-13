# id 35901 (Find Altar Key 2), field 910090302
sm.createQuestWithQRValue(63369, "chk=2;day=0")
sm.createQuestWithQRValue(63369, "chk=2;day=1")
sm.completeQuestNoCheck(63360)
sm.setSpeakerType(3)
sm.setParam(548)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(1013358) # Pathfinder
sm.sendNext("#face0##g“靠近时会让人受伤的善变的舞蹈家。”\r\n“跳着红色之舞，留下黑色的脚印。”#k")
sm.sendSay("#face1#啊哈，感觉像是某种暗语……下一句话是……")
sm.sendSay("#face0##b（解读箱子上写着的古代文字。\r\n虽然全都是暗语，但仔细斟酌一下，就能猜到大概的意思。）#k")
sm.completeQuestNoCheck(parentID)
sm.startQuest(11620)
