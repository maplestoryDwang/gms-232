# id 62015 ([Shaolin Temple] Nine-Tailed Fox's One True Love), field 701220350
sm.setSpeakerType(3)
sm.setParam(37)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(9310579) # Nine-Tailed Fox
sm.sendNext("你把信交给他了？他说了些什么？")
sm.setSpeakerType(4)
sm.setSpeakerID(9310579) # Nine-Tailed Fox
sm.setParam(57)
sm.sendSay(" (嗯……怎么办呢？如果实话实说，她肯定会受到不小的打击……)")
sm.sendSay("他……他暂时无法摆脱别人对他的监视，所以他说暂时不能和你相见。他说#b#p9310579##k你现在也很危险，所以你#r决不能#k去找他！")
sm.setSpeakerType(3)
sm.setParam(37)
sm.sendSay("果然，会担心我的人只有他了。下次遇见他，#r我一定要从后面紧紧抱住他！#k")
sm.setSpeakerType(4)
sm.setParam(57)
sm.sendSay(" (.........)")
sm.completeQuestNoCheck(parentID)
sm.playExclSoundWithDownBGM("Field.img/masteryBook/EnchantSuccess", 100)
