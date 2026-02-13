# id 22712 (Check Yourself 2), field 331001000
sm.setSpeakerType(3)
sm.setParam(36)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(1531001) # Jay
sm.sendNext("好吧，那最后再检查一下身体状态。")
sm.sendSay("只是休息了片刻，这么快就恢复了，你的体力可真够好的啊。")
sm.sendSay("#face2#You can increase your #gbasic abilities#k and #gskill levels#k by leveling up. Don't wait to train if you want to get stronger.")
sm.sendSay("#face2#Since your brain controls all your powers, I would focus on improving your #gINT#k. You'll never be as smart as me, but you can use the Auto-Assign function to do it smartly.")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("Very funny, Jay. Sounds like you forgot about the last time I whupped you at chess.\r\n\r\n#b(Use all your AP to increase your stats before speaking to Jay again.)#k")
sm.progressMessageFont(3, 20, 20, 0, "Level up to increase your stats and skill levels.")
sm.openUI(2)
sm.playExclSoundWithDownBGM("Voice3.img/Kinesis/guide_03", 100)
