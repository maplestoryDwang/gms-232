# [Theme Dungeon] Ellinel Fairy Academy

FANZY = 1040002 # NPC ID
FAIRYNAPPERS = 32101 # QUEST ID

sm.setSpeakerID(FANZY)
sm.sendNext("喵~ 你就是受邀前来解决妖精学院艾利涅里发生的骚乱的勇士吗，喵？")

sm.setPlayerAsSpeaker()
sm.sendSay("原……原来如此……不过你就是潘喜吗？")

sm.setSpeakerID(FANZY)
sm.sendNext("你看上去好像并没有想象中的那么强哦，喵。但既然是有名的勇士，我就相信你一次吧，喵。")

sm.startQuestNoCheck(FAIRYNAPPERS)
sm.completeQuest(parentID)
sm.dispose()