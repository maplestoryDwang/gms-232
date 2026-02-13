# id 22712 (Check Yourself 2), field 331001000
sm.setSpeakerType(3)
sm.setParam(36)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(1531001) # Jay
sm.sendNext("我准备的可是你之前一直喜欢喝的饮料，这段时间难道你的喜好变了？")
res = sm.sendAskYesNo("所有一切都好像顺利启动了。")
sm.startQuest(parentID)
sm.setParam(37)
sm.sendNext("今天的测试做到这个地步应该可以了，最后我准备了爽口的运动饮料，一边喝一边休息一会吧，我会记录你体内身体疲劳物质正常化的过程的。")
sm.progressMessageFont(3, 20, 20, 0, "Open your inventory to use items.")
sm.avatarOriented("UI/tutorial.img/kinesis/3")
sm.playExclSoundWithDownBGM("Voice3.img/Kinesis/guide_07", 100)
