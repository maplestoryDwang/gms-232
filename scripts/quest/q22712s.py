# id 22712 (Check Yourself 2), field 331001000
sm.setSpeakerType(3)
sm.setParam(36)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(1531001) # Jay
sm.sendNext("Data looks good so far. Nicely done.")
res = sm.sendAskYesNo("Okay, that's enough for today. Have a drink and get some rest. We're still not clear on how much stress your powers put on your body.")
sm.startQuest(parentID)
sm.setParam(37)
sm.sendNext("The drink I gave you went to your inventory. Just like equipping gear, you can double-click that drink to, y'know, drink it. Now, get some rest. I want to check your physical indexes afterwards.")
sm.progressMessageFont(3, 20, 20, 0, "Open your inventory to use items.")
sm.avatarOriented("UI/tutorial.img/kinesis/3")
sm.playExclSoundWithDownBGM("Voice3.img/Kinesis/guide_07", 100)
