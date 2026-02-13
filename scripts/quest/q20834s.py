
sm.removeEscapeButton()

sm.setSpeakerID(1102106)
sm.sendNext("你好。是想成为骑士的人啊。")

sm.setPlayerAsSpeaker()
sm.sendSay("是的，我叫#h0#。我还是第一次到这个庭院来。圣地有很多美丽的地方。")

sm.setSpeakerID(1102106)
sm.sendSay("圣地是个和平而美丽的地方。训练难吗？")

sm.setPlayerAsSpeaker()
sm.sendSay("是的，虽然还有很多不足，不过我一定会克服各种困难！成为一名优秀的骑士！我想用自己的双手，守护冒险岛世界的和平。")


sm.sendSay("(露出微笑)不管是多么艰难的路，我们都必须勇往直前。这种时候更加需要大家齐心协力。")


sm.sendSay("但是，你是谁？从穿着看，好像不是冒险骑士团的成员……")


sm.sendSay("是的，我是……")

sm.startQuest(parentID)