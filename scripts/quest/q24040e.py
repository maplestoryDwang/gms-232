# Awakening
# 24040
# No NPC

# A Hero, No More (Merc) is already awarded when auto-advancing to Merc's 1st job, so it won't be rewarded here
sm.flipDialoguePlayerAsSpeaker()
sm.sendNext("等等……好像有点奇怪？我的等级是多少？")
sm.sendSay("……到底是怎么回事？我的等级……怎么这么低？！只有10级？10级？不是100级，是10级？我还在做梦吗？掐一下自己的话，会醒来吗？啊！")

sm.giveExp(500)
sm.completeQuest(parentID)

sm.localEmotion(5, 5000, False)