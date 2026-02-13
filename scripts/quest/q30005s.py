# [Root Abyss] The World Girl

MYSTERIOUS_GIRL = 1064001 # npc Id
sm.setPlayerAsSpeaker()
sm.sendNext("你是怎么到这种地方来的？这里不是你这种小孩子该来的地方。")

sm.setSpeakerID(MYSTERIOUS_GIRL)
sm.sendNext("鲁塔比斯是我很久以前创造的地方。")

sm.setPlayerAsSpeaker()
sm.sendNext("你创造了这里？你在说什么啊？")

sm.setSpeakerID(MYSTERIOUS_GIRL)
sm.sendNext("我是为了恢复力量，才在大陆的中心住了下来。但是现在这里充满了黑暗的气息，我再也受不了了。")

sm.setPlayerAsSpeaker()
sm.sendNext("听不懂你在说些什么。你到底是谁？")

sm.setSpeakerID(MYSTERIOUS_GIRL)
sm.sendNext("我叫阿丽莎，人们都叫我#r世界树#k。")

sm.setPlayerAsSpeaker()
sm.sendNext("世界树？你就是世界树？拥有生命力量的世界树？听说世界树在很久以前就消失了啊？")

sm.setSpeakerID(MYSTERIOUS_GIRL)
sm.sendNext("嗯，和黑魔法师战斗之后，我的力量变得很弱。为了恢复力量，我在这里沉睡。这里是大陆的中心，充满了生命的气息。")

sm.setPlayerAsSpeaker()
sm.sendNext("这么说，几百年来你一直在这里恢复力量？实在太让人吃惊了，让人有点不敢相信。我该不会是在做梦吧？")

sm.startQuest(parentID)
sm.dispose()
