# id 22729 (Are Black Cats Unlucky?), field 331000000
sm.setSpeakerType(3)
sm.setParam(37)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendNext("哎哟？这种地方居然有猫，喵喵啊，这里现在很危险的。")
sm.setInnerOverrideSpeakerTemplateID(1531003) # Nero
sm.sendSay("让我瞧瞧……你，还是小朋友啊。")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("哎哟呵？你现在这是在发火吗？你这个小不点，你是没了妈妈吗？")
sm.setInnerOverrideSpeakerTemplateID(1531003) # Nero
sm.sendSay("哈哈，不过你看上去还挺有韧性的嘛，我看你也无处可去了，跟我走吧？")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("#face4#……喵呜！")
sm.setInnerOverrideSpeakerTemplateID(1531003) # Nero
sm.sendSay("好吧，既然你是黑色的……内罗！内罗怎么样？")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("#face2#你说你特别喜欢？你也不想想这是谁起的，这是当然的咯。")
sm.setInnerOverrideSpeakerTemplateID(1531003) # Nero
sm.sendSay("#b(带回去吧？)#k")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("#b(赶紧回到杰那里。)#k")
sm.setInnerOverrideSpeakerTemplateID(1531003) # Nero
sm.sendSay("#face4#..")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("#face2#You like that? Of course you do. I came up with it.")
sm.setInnerOverrideSpeakerTemplateID(1531003) # Nero
sm.sendSay("#face4#Meow... ")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
res = sm.sendAskYesNo("#b(Take it with you? )#k")
sm.setInnerOverrideSpeakerTemplateID(1531003) # Nero
sm.sendSayOkay("#face4#Meow... ")
