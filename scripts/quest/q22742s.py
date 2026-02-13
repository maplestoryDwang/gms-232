# id 22742 (Enjoying the Wait 2), field 101020400
sm.setSpeakerType(3)
sm.setParam(37)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(1531003) # Nero
sm.sendNext("#face1#是10个鸟蛋！没错，辛苦你了。")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("那现在就算结束了吧，内罗？")
sm.setInnerOverrideSpeakerTemplateID(1531003) # Nero
sm.sendSay("#face2##fs25##r我说了我的名字并不是内罗……！")
sm.sendSay("#face3#哈，你随便叫好了。\r\n汉斯还没有来，我们也需要烧菜用的柴火。")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("柴火？还得去砍树吗？")
sm.setInnerOverrideSpeakerTemplateID(1531003) # Nero
sm.sendSay("#face0#嗯……我们并不是砍树获取柴火的，而是通过打猎怪物获取的，不过也差不多啦。")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("怪物？那又得干一架咯。\r\n看来这个世界主要是靠这种方式获取材料的吧？")
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(1531003) # Nero
res = sm.sendAskYesNo("#face0#没错，捕猎#b斧木妖#k，只要收集15个就可以了。\r\n集齐后就拿去给#b亚乌#k。")
sm.setParam(37)
sm.sendSayOkay("#face1#从右边出去吧喵。\r\n一想到可以烤鸟蛋吃，口水就流不停了喵。\r\n#b斧木妖#k在 #b日出之地、林语之地#k大量盘踞喵")
