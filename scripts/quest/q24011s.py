sm.setSpeakerID(1033210) # Great Spirit
response = sm.sendAskYesNo("……奇怪。在你身上感觉不到国王的力量……那种力量应该不会因为过了几百年而消失啊……到底是怎么回事？在你身上，只能感受到非常不祥的黑暗气息……")

if response:
    sm.startQuest(parentID)
sm.dispose()
