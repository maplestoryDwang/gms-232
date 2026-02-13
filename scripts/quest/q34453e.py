# id 34453 ([Arcana] The Song of the Forest), field 450005015
sm.lockInGameUI(True, False)
sm.setSpeakerType(3)
sm.setParam(37)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(3003301) # Small Spirit
sm.sendNext("#face7#我觉得要是能救活自然生物，精灵之树也许能复苏，所以一直以来都在为此努力，可是……")
sm.sendSay("#face4#……并不太顺利，呜呜……")
sm.sendSay("#face4#……很，很抱歉我既是个胆小鬼又是个爱哭鬼，呜呜……")
sm.setInnerOverrideSpeakerTemplateID(3003302) # Wind Spirit
sm.sendSay("#face1#就算听不见也看不见，还是能感受到的吧~额，某些东西~？")
sm.sendSay("#face2#友情、爱情、温暖的心意~")
sm.sendSay("#face2#很好，你们的故事很是有趣~这么吸引人的事情，怎么能缺了我风精灵~")
sm.setInnerOverrideSpeakerTemplateID(3003301) # Small Spirit
sm.sendSay("#face7#啊，风精灵！呜呜，他就是风精灵。嗯，这家伙可真叫人捉摸不透。")
sm.setInnerOverrideSpeakerTemplateID(3003302) # Wind Spirit
sm.sendSay("#face1#还有刚刚那首歌是我的自创曲目~就是想让你知道一下~")
sm.setParam(57)
sm.sendSay("我们要重拾歌谣，复活精灵之树。你愿意帮助我们修复森林的自然环境吗？")
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(3003301) # Small Spirit
sm.sendSay("#face1#风精灵啊，精灵之树也许能复活，你就帮帮我们吧。")
sm.setInnerOverrideSpeakerTemplateID(3003302) # Wind Spirit
sm.sendSay("#face2#哎哟，尽管开口吧~我已经被俘获了~我是说我的心已经被攻占了~真不知道要如何是好呢~")
sm.sendSay("#face1#扑。通。扑。通。小。鹿。乱。撞。的这种心情~耶~")
sm.completeQuest(parentID)
sm.sendDelay(500)
sm.lockInGameUI(False, True)
