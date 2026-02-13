MONKEY = 1096003

sm.setSpeakerID(MONKEY)
sm.sendNext("吱吱吱吱吱！吱！吱！")

sm.setPlayerAsSpeaker()
sm.sendSay("肚子吃饱了，但精神还是不清醒……到底是怎么回事？一睁开眼睛看到的是猴子，不知道这是什么地方……船怎么样了呢？你知道怎么回事吗？")


sm.setSpeakerID(MONKEY)
if sm.sendAskAccept("吱吱，吱吱！(猴子点着头。它真的知道情况吗？仔细问问猴子吧！)"):
    sm.startQuest(parentID)
else:
    sm.sendNext("Ook! Ook! (The monkey looks very dissatisfied.)")
    sm.dispose()