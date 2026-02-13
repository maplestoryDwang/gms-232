# [Root Abyss] World Tree Guardian

NEINHEART = 1404009
sm.setSpeakerID(NEINHEART)
sm.sendNext("冒险岛联盟决定尽全力救出世界树。")

sm.setPlayerAsSpeaker()
sm.sendNext("既然有冒险岛联盟出面，我就放心了。")

sm.setSpeakerID(NEINHEART)
sm.sendNext("世界树的生命力量，是足以和黑魔法师对抗的强大力量。过去要是没有世界树的帮助，我们也不可能把黑魔法师封印起来。但是因为那场战斗，世界树迅速地枯萎了。赫丽娜戴着世界树剩下的#b生命的根源#k，来到了金银岛。")

sm.sendNext("但是有一天生命的根源突然消失了，我们还担心会不会是被黑魔法师一伙抢走了，没想到她是在那种地方恢复力量……")

sm.sendNext("我们必须保护世界树。虽然不知道将世界树封印起来的人是谁，但他们一定是不怀好意。要是世界树的力量落入他们的手中，不知道会发生什么事。")

sm.setPlayerAsSpeaker()
sm.sendNext("不过守护世界树的封印的人好像都不是等闲之辈。")

sm.setSpeakerID(NEINHEART)
response = sm.sendAskYesNo("如果像你所说，他们都拥有强大的力量的话，一定会是非常艰苦的战斗。你能在这次的任务中助我们一臂之力吗？现在我们迫切需要人手。")

if response:
    sm.sendNext("我向你的勇气表示敬意。请你先去消灭封印守护者，解开世界树的封印。然后请你把世界树安全地带到圣地。")
else:
    sm.dispose()

sm.sendNext("冒险岛联盟已经公告了营救世界树的行动，动作快的人也许已经到达鲁塔比斯了。请你和他们一起，救出世界树。")
sm.startQuest(parentID)
sm.warp(105200000, 0) # Root Abyss  (Actual Map)
