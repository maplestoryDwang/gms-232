# [Silent Crusade] Arkarium, the Guardian of Time

CROW = 9073002
BASTILLE = 9073003

sm.setSpeakerID(CROW)
sm.sendNext("阿卡伊勒好像回来了！我在时间神殿看到他了。但是不知道他现在去了哪里……")

sm.setPlayerAsSpeaker()
sm.sendSay("阿卡伊勒？他到底是谁？")

sm.setSpeakerID(BASTILLE)
sm.sendSay("阿卡伊勒……他是黑魔法师军团长的一员，黑魔法师被封印后，他就躲藏起来了。")

sm.setPlayerAsSpeaker()
sm.sendSay("军团长？那么他的出现不就意味着黑魔法师回来了吗？")

sm.setSpeakerID(BASTILLE)
sm.sendSay("那个还不太清楚。总之现在正在发生一些奇怪的事情。重现的阿卡伊勒和时空门……这之间肯定有什么联系。阿卡伊勒曾做过黑魔法师的谋士，时空门的目的应该不单纯是想让冒险岛世界陷入混乱。")

sm.completeQuest(parentID)
sm.showFieldEffect("Map/Effect.img/crossHunter/chapter/end2")
