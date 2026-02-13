# id 34937 (A Close Call), field 402000644
sm.setSpeakerType(3)
sm.setParam(36)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(3001500) # Ark
sm.sendNext("#face5#（想起来了。在避难处边界上看到的那个东西……用于提取某种力量的装置……）")
sm.sendSay("#face5#（不久前开始不断与幽灵军队遭遇……他们想要的东西还在这里。）")
sm.sendSay("#face8#（……避难处的人有危险。必须马上离开这里。）")
sm.setInnerOverrideSpeakerTemplateID(3001510) # Ferret
sm.sendSay("#face2#等一下……电波中好像捕捉到了什么东西，叽勒。不知道为什么，我有种不祥的预感，叽勒。")
sm.sendSay("#face2#哎呀，怪物……正在涌来。目的地是……避难处，叽勒……")
sm.sendSay("#face2#从电波来看，数量应该相当惊人。在这种情况下遭到袭击的话……动力源什么的就都完了……")
sm.setInnerOverrideSpeakerTemplateID(3001512) # Digs
sm.sendSay("#face0#那，那样的话，一切就都成了泡影……")
sm.setInnerOverrideSpeakerTemplateID(3001509) # Salvo
sm.sendSay("#face2#呃，只要在怪物之前回到避难处，不就行了？")
sm.sendSay("#face3#把动力源插到水晶上↗ 我们商队就能飞上天↗")
sm.setInnerOverrideSpeakerTemplateID(3001513) # Grit
sm.sendSay("#face0#没，没错，我们快点离开这里！")
sm.setInnerOverrideSpeakerTemplateID(3001500) # Ark
sm.sendSay("#face5#……那是不可能的。要想启动水晶，需要一定的准备时间。这样一来，可行的办法……我要好好想想。")
sm.setSpeakerType(4)
sm.setSpeakerID(3001417) # Ferret
sm.setInnerOverrideSpeakerTemplateID(3001510) # Ferret
res = sm.sendAskAccept("#face0#叽，叽勒……那我在这里等着。准备好之后，你再跟我说话。")
sm.setSpeakerType(3)
sm.setInnerOverrideSpeakerTemplateID(3001500) # Ark
sm.sendNext("#face0#（在脑海中勾勒出大致的作战计划。把构想好的计划告诉大家吧。）")
sm.startQuest(parentID)
