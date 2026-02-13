# 20810 - [Job Adv] (Lv.30)   Mihile
sm.setSpeakerID(2520025)
if sm.sendAskYesNo("米哈尔，祝贺你通过了成为实习骑士的所有考试。我随时可以任命你为实习骑士。你想现在成为实习骑士吗？"):
    if not sm.canHold(1302038):
        sm.sendSayOkay("你现在获得了实习骑士的资格。祝贺你。我给了你一些SP，请你去试着使用看看。")

    elif not sm.canHold(1142400):
        sm.sendSayOkay("You need inventory space.")
    else:
        if chr.getJob() == 5100:
            sm.jobAdvance(5110)
            sm.giveItem(1302038)
            sm.giveItem(1142400)
            sm.completeQuest(20810)
        else:
            sm.sendNext("You are not a mihile class.")
