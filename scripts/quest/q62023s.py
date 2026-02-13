# id 62023 (Demon Orb Introduction), field 701220000
sm.setSpeakerType(3)
sm.setParam(37)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(9310597) # Zarak
sm.sendNext("陌生的游客啊。你有时间吗？")
res = sm.sendAskYesNo("其实，我从刚才开始就一直在关注你。如果是你的话，说不定就能为我的秘密研究提供帮助呢。")
sm.sendNext("研究……？")
sm.setSpeakerType(4)
sm.setSpeakerID(9310597) # Zarak
sm.setParam(57)
sm.sendSay("我正在研究入侵这里的妖怪。像你这么有实力的人，应该能够找到有助于我研究的#b妖怪宝珠#k吧。")
sm.setSpeakerType(3)
sm.setParam(37)
sm.sendSay("如果你打算为我的研究提供帮助，就再次和我对话吧。要是你能找到#b妖怪宝珠#k，我就会用珍贵的物品和你交换。")
sm.sendSay("Speak to me again if you're interested. I promise to make it worth your while.")
sm.completeQuestNoCheck(parentID)
sm.playExclSoundWithDownBGM("Field.img/masteryBook/EnchantSuccess", 100)
