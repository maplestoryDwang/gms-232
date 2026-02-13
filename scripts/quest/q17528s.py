# id 17528 ([Gollux] The Head), field 863010000
sm.setSpeakerID(9390120) # Heart Tree Guardian
sm.sendNext("如果能最终让贝勒德的头部瘫痪，就能让他的力量减半。")
sm.sendSay("怎么样？你想试试看吗？")
sm.sendSay("如果能先让他的头部瘫痪，就能向着制服贝勒德迈出一大步。")
res = sm.sendAskYesNo("What do you think? Do you want to give it a try?")
sm.startQuest(parentID)
sm.sendNext("If you stun the head, we might be able to revert Gollux back to its original form.")
