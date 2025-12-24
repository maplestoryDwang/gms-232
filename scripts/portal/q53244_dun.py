# jett 4th job adv
sm.setPlayerAsSpeaker()
if sm.hasQuest(53244) and not sm.hasQuest(53248) and chr.getJob() == 571:
    sm.sendNext("If the #bMatter Disassembler#k really works on the core, I could be in for some trouble. \r\nI oughtta just toss this thing out here in the desert rather than risk it falling in the wrong hands.")
    sm.sendNext("I  should be able to do my job advancement now....")
    sm.warpInstanceIn(552000070)