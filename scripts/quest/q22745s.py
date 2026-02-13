# id 22745 (Know Your Own Strength), field 101020400
sm.setSpeakerType(3)
sm.setParam(37)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(1531004) # Three Moon
sm.sendNext("就算再怎么握紧双拳，流动的水依然会从手指尖流走。")
sm.sendSay("想要承载精神，就需要与之相匹配的容器。")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("你不会是要我真的拿个容器来吧？")
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(1531003) # Nero
res = sm.sendAskYesNo("#face0#我的意思是让你锻炼身体，具体的事情交给我就好！")
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(1531004) # Three Moon
sm.sendNext("你去和内罗谈谈吧。\r\n\r\n#b(在达到30级之前，留在这里修炼吧。)")
sm.startQuest(parentID)
