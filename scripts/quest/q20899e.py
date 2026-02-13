# [Skill] (Lv.200) Cygnus Constellation

cygnusConstellationMedal = 1142597

if sm.canHold(cygnusConstellationMedal):
    sm.setSpeakerID(1101000)
    sm.sendNext("欢迎你，#b#h0##k。我一直在等你。\r\n你还记得最初来到#b圣地#k的时候吗？修炼教官奇库教你握剑时的情景，至今仍然记忆犹新，没想到一转眼你就变得这么强了。你现在已经足以和#b米哈尔#k、#b奥兹、伊莉娜、伊卡尔特，#k还有#b胡克#k比肩了。")
    sm.completeQuestNoRewards(parentID)
    sm.giveItem(cygnusConstellationMedal)
sm.dispose()
