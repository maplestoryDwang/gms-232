# id 35905 (Investigation), field 100051010
sm.setSpeakerID(1013306) # Mascarpo
sm.setParam(36)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(1013353) # Mascarpo
res = sm.sendAskAccept("#face1#呼,呼……终于得,得救了。\r\n真是谢谢……谢谢你……")
sm.setSpeakerType(3)
sm.setParam(548)
sm.setInnerOverrideSpeakerTemplateID(1013358) # Pathfinder
sm.sendNext("#face1#呼……虽然还有点没缓过劲来,不过……\r\n我会遵守约定,满足你的一个请求。快告诉我吧。")
sm.setSpeakerType(4)
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(1013353) # Mascarpo
res = sm.sendNext("#face0#把你知道的关于这一带的情况都告诉我。")
sm.setSpeakerType(3)
sm.sendNext("#face0#有什么问题,请尽管问。\r\n只要是我马斯卡波知道的,我会一五一十地全部告诉你。\r\n\r\n#b#L0# 关于遗迹 #l")
sm.sendSay("#face1#遗,遗迹……难道是说那个废墟？\r\n据说那是受到古代人崇拜的地方,可以让受伤的人痊愈……")
sm.sendSay("#face1#但是随着时间的流逝,那里逐渐变得人迹罕至,\r\n并开始散发出阴森的气息。")
sm.setSpeakerType(4)
res = sm.sendNext("#face1#年复一年,那种气息变得越来越强。\r\n现在变成了谁都不愿涉足的废墟,咕咕……")
sm.setSpeakerType(3)
sm.sendNext("#face0#有什么问题,请尽管问。\r\n只要是我马斯卡波知道的,我会一五一十地全部告诉你。\r\n\r\n#b#L0# 关于遗物 #l")
sm.sendSay("#face0#这片森林中经常可以发现原本埋藏在废墟中的东西。\r\n都是些奇奇怪怪的东西,连我们卡鲁帕都会觉得害怕。")
sm.sendSay("#face0#虽然有些家伙喜欢收集废墟中发现的东西……\r\n不过对我们卡鲁帕来说,和废墟有关的东西都是不祥之物。")
sm.setParam(548)
sm.setInnerOverrideSpeakerTemplateID(1013358) # Pathfinder
sm.sendSay("#face1#难道……你对废墟里的东西感兴趣？")
sm.setSpeakerType(4)
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(1013353) # Mascarpo
res = sm.sendNext("#face0##b(遗物多有价值啊。真是帮没有眼光的家伙。\r\n不过看来是不方便询问有关遗物的事情了……)#k")
sm.setSpeakerType(3)
sm.sendNext("#face0#有什么问题,请尽管问。\r\n只要是我马斯卡波知道的,我会一五一十地全部告诉你。\r\n\r\n#b#L0# 关于村庄 #l")
sm.sendSay("#face0#你对卡鲁帕的村庄感兴趣吗？")
sm.sendSay("#face0#啊,卡鲁帕是指代代生活在卡鲁帕的村民。\r\n我也是其中之一。")
sm.setParam(548)
sm.setInnerOverrideSpeakerTemplateID(1013358) # Pathfinder
sm.sendSay("#face0#我们大都很胆小,不喜欢到外面去。\r\n除了偶尔来访的冒险家之外,很少和外面交流。")
sm.sendSay("#face0##b(虽然是这里的土著居民,但却很害怕遗迹。\r\n看来关于遗迹入口的事情,也是很难问出来了。)#k")
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(1013353) # Mascarpo
sm.sendSay("#face6##b(再问下去,可能也只是在浪费时间。\r\n不如到其他地方去打听一下。)#k")
sm.sendSay("#face0#冒险家,看来你好像对这一带很感兴趣。\r\n嗯……如果可以,你能到村里去一趟吗？")
sm.sendSay("#face0#今天刚好是村里的节日……\r\n名字叫做卡鲁帕灵药节！")
sm.setParam(548)
sm.setInnerOverrideSpeakerTemplateID(1013358) # Pathfinder
sm.sendSay("#face0#传说喝了那种灵药之后,可以净化一切邪恶,\r\n并且能让人延年益寿……")
sm.sendSay("#face3##b(哦,可以净化邪恶的传说中的灵药……\r\n听上去还挺让人心动的嘛。说不定跟诅咒有什么关系。)#k")
sm.completeQuestNoCheck(parentID)
sm.startQuest(11620)
