# 140090300
PURUN = 1202004

sm.setSpeakerID(PURUN)
if sm.sendAskYesNo("嗯……看你的表情就知道你啥都没想起来。不过不用担心。说不定这反倒更好。来，这里有一些药水，加油吧！\r\n\r\n#fUI/UIWindow2.img/QuestIcon/4/0# \r\n#i2000022# #t2000022# 10个 \r\n#i2000023# #t2000023# 10个 \r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 57 exp"):
    sm.giveItem(2000022, 10)
    sm.giveItem(2000023, 10)
    sm.giveExp(57)
    sm.completeQuest(parentID)

    sm.setPlayerAsSpeaker()
    sm.sendNext("#b（就算我真的是英雄……一个什么能力都没有的英雄又能有什么用呢？）#k")
else:
    sm.sendNext("What? You don't want the potion?")
    sm.dispose()