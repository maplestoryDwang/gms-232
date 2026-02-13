# id 35921 (The Wait for Daybreak), field 100051030
sm.setSpeakerType(3)
sm.setParam(36)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(1013351) # Gorgonz
sm.sendNext("#face0#喂,回来啦。找齐所有罗盘碎片还是太难了吧……\r\n什么？全部找到啦！真厉害……")
sm.setParam(548)
sm.setInnerOverrideSpeakerTemplateID(1013358) # Pathfinder
sm.sendSay("#face0#好了,快去启动罗盘吧。")
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(1013351) # Gorgonz
sm.sendSay("#face0#呼呼……知道了。别催我。\r\n反正这个罗盘必须在阳光的充分照射下才能启动。")
sm.sendSay("#face0#现在离正午还早得很呢……\r\n在这之前修好不就行了,呼噜。")
sm.setSpeakerType(4)
sm.setSpeakerID(1013311) # Gorgonz
res = sm.sendAskAccept("#face0#我来把罗盘碎片拼好,你们先休息一下。\r\n到时候我叫你们。")
sm.startQuest(parentID)
sm.setSpeakerType(3)
sm.sendNext("#face0#哦～把四分五裂的罗盘拼好 ?\r\n哦哦～在阳光洒满山坡之前 ?")
