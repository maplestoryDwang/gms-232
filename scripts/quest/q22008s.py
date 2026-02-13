# 22008 |   Chasing away the foxes (Evan intro)
sm.setSpeakerID(1013101)
if sm.sendAskYesNo("你不觉得奇怪吗？最近的鸡怎么和以前不一样了？以前它们会下很多#t4032451#，但现在越来越少了。是不是因为狐狸增多了呢？那样的话，必须赶紧想办法才行。你说对不对？"):
    sm.startQuest(parentID)
    sm.sendNext("好吧，让我们去消灭狐狸吧。你先去#b#m100030103##k消灭#r10只#o9300385##k。我会负责剩下的事情的。好了，你快到#m100030103#去吧～")
    sm.dispose()
else:
    sm.dispose()
