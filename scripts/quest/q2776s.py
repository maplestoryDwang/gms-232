# Fanzy's Test 1
# 2776
# Fanzy (1000013)
# This isn't GMS dialogue, no one does this questline anywhere


powerful_evil_eyes=9100015
evil_eyes=2230100

sm.setSpeakerID(1000013)
sm.sendNext("That's the spirit! Myou're ready to meowve on, nyever looking back! Meow, it is hard to talk like a humnyan with this cat meowth. The teeth really get in the way. Wait a second, do myou smell fish?")
meowsponse = sm.sendAskYesNo("Meow! Back to business, I want myou stronger,tougher, myore of a meownster! Ahem, go out and fight some #r#o9100015#k. I can tell myou, they will be WAY stronger than the #o2230100"
"you fought before. I'd say about #r30#k of them should give myou a good work-meowt. I'll send myou there when myoure ready!")
if response:
    sm.startQuest(parentID)
    sm.sendnext("If myou want to get myout in the middle of the test, just talk to me. Good luck!")
    sm.warp(910100110)