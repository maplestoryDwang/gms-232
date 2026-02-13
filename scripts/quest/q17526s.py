# id 17526 ([Gollux] The Left Shoulder), field 863010000
sm.setSpeakerID(9390120) # Heart Tree Guardian
sm.sendNext("如果能最终让贝勒德的头部瘫痪，就能让他的力量减半。")
sm.sendSay("不过那并不容易。他的四肢在保护他，要躲开四肢，让头部瘫痪并不容易。")
sm.sendSay("如果能让他的左肩瘫痪，他就会变弱很多。肩膀瘫痪之后，保护他的灵气就会变弱，体力就会减半。和头部战斗的时候各种状态异常效果的发生次数也会大大减少。")
res = sm.sendAskYesNo("怎么样？你想试试看吗？")
sm.startQuest(parentID)
sm.sendNext("如果能先让他的左肩瘫痪，就能向着制服贝勒德迈出一大步。")
