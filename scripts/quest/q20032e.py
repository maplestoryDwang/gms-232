# Manual Labor

# Constants
LIMBERT = 1106002
ITEM1 = 4033194
ITEM2 = 4033195

sm.setSpeakerID(LIMBERT)
sm.sendNext("怎么这么慢？磨磨蹭蹭的～打扫完了吗？现在好像稍微好一点了。看什么看？打扫完了的话，快来帮我整理东西！")
    
sm.sendNext("What?! Who told you you could touch that?!")

sm.completeQuestNoRewards(20032)
sm.giveItem(2001500, 20)
sm.giveItem(2001503, 20)
sm.addLevel(2)
sm.warpInstanceIn(913070003, 0)
sm.dispose()      