# id 35908 (Helping Hand 1), field 100051000
sm.setSpeakerType(3)
sm.setParam(36)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(1013350) # Brie
sm.sendNext("#face0#嘿嘿,你就是救了马斯卡波的勇士吗？\r\n刚才看你们在那里聊天,我稍微偷听了一下。")
sm.sendSay("#face2#……果然就跟传闻中一样,有种阴森的感觉。\r\n但不知道为什么,我不觉得你是个坏人,嘻嘻。")
sm.sendSay("#face1#因,因为我喜欢勇敢的人。虽然我很笨,也很胆小……")
sm.setParam(548)
sm.setInnerOverrideSpeakerTemplateID(1013358) # Pathfinder
sm.sendSay("#face0##b(小孩突然低下了头,看上去非常沮丧。\r\n但好像很快就恢复了过来,露出了坚定的表情。)#k")
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(1013350) # Brie
sm.sendSay("#face0#啊,对了,忘了自我介绍了。我叫布里,嘿嘿。\r\n正在负责为节日做准备。")
sm.sendSay("#face0#因为是为了祈求村子平安而举行的祭典,所以感觉压力很大。\r\n唉……希望今年那种怪声能够消失。")
sm.sendSay("#face0#啊,看我这记性。你是来帮我为节日做准备的吧？\r\n刚才好像扯得太远了。我马上把需要的材料告诉你。")
sm.completeQuestNoCheck(parentID)
sm.startQuest(11620)
