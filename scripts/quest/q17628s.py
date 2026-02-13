# [Commerci Republic] Delfino Deleter 3

sm.setSpeakerID(9390256) # Leon Daniella
response = sm.sendAskYesNo("这里到处都是#e#b#o9390809##k#n！好，我们这次也努力各自击退#b#e30只#k#n吧！")

if response:
    sm.setPlayerAsSpeaker() # Has to be Player Avatar
    sm.sendNext("#b(不知为何，我有种不祥的预感……)")
    sm.startQuest(parentID)
else:
    sm.sendNext("Alright, let me know when you are ready!")
sm.dispose()
