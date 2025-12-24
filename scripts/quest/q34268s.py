# id 34268 ([Morass] The Prince and the Princess 3), field 450006300

sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(56)
if sm.sendAskYesNo("(#bYou must defeat Arkarium quickly!)"):
    sm.startQuest(parentID)
    sm.warpInstanceIn(940204070)
    sm.setInstanceTime(60, 450006440)
