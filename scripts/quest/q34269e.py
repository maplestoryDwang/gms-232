# id 34264 ([Morass] The Prince and the Princess 3), field 450006300

sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(3003406) # Jean
sm.sendSay("#face13##h0#！恢复意识了吗？")
sm.setParam(56)
sm.sendSay("呃……嗯。终于出来了。你的样子？")
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(3003406) # Jean
sm.sendSay("#face13#好像变成江了。没办法，谁叫我是艾尔达呢。")
sm.setParam(56)
sm.sendSay("可塔纳呢？")
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(3003406) # Jean
sm.sendSay("#face13#不知道。她好像是掉到别的地方了。")
sm.setParam(56)
sm.sendSay("糟了！必须说服塔纳才行……")
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(3003406) # Jean
sm.sendSay("#face13#这太冒险了。")
sm.setParam(56)
sm.sendSay("什么？")
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(3003406) # Jean
sm.sendSay("#face13#你还不知道她的目的吗？")
sm.sendSay("#face13#结束痛苦的唯一办法。就是……")
sm.setParam(56)
sm.sendSay("#face13#答对了。")
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(3003406) # Jean
sm.sendSay("#face12#我获得这副身体……不，更大的问题是……")
sm.setParam(56)
sm.sendSay("#face1#啊，快看。口袋里好像有……")
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(3003406) # Jean
sm.sendSay("#face10#如果他们的目标……是阻止黑魔法师，那真该现在就干掉……咳咳……")
sm.sendSay("世界毁灭？！！")
sm.setParam(56)
sm.sendSay("结果是徒劳一场。")
if sm.canHold(1712005):
    sm.giveItem(1712005)
    sm.completeQuest(parentID)
    sm.setParam(36)
    sm.setInnerOverrideSpeakerTemplateID(3003400) # Tana
    sm.sendSay("这不是神秘徽章嘛？")
    sm.sendSay("#face0#Hmmm....")
    sm.setParam(36)
    sm.setInnerOverrideSpeakerTemplateID(3003404) # Arkarium
    sm.sendSay("#face0#Not... yet...")
    sm.sendSay("#face0#I'm sure the Great One will appear soon. The Goddess Rhinne's power will allow him to travel to the past.")
    sm.sendSay("#face0#He will restore my power...")
    sm.completeQuest(parentID)
else:
    sm.sendSay("Hold on, I can't hold it. I don't have enough Equip inventory space.")
