# id 35910 (Helping Hand 3), field 100051000
sm.setSpeakerType(3)
sm.setParam(36)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(1013350) # Brie
sm.sendNext("#face2#嘻嘻,毒毒花叶子搜集到啦。那我就收下了。\r\n毒毒花叶子也可以用秘方做成制作灵药的材料。")
sm.setParam(548)
sm.setInnerOverrideSpeakerTemplateID(1013358) # Pathfinder
sm.sendSay("#face0##b(这些材料好像没什么特别的嘛。\r\n用这些东西制作传说中的灵药？到底是什么秘方呢？)#k")
sm.sendSay("#face0#秘方？")
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(1013350) # Brie
sm.sendSay("#face0#啊,在村子旁边有个用石头做成的石臼。\r\n那是历代村长代代相传的宝物。只要用它把材料捣碎,就能变成灵药。")
sm.sendSay("#face2#现在节日的准备全部完成了。\r\n我要最后再确认一下是否有遗漏。请稍等一下。")
sm.completeQuestNoCheck(parentID)
sm.startQuest(11620)
