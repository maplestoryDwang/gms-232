sm.setPlayerAsSpeaker()
isCorrectPhantom = chr.getJob() == 2410 and chr.getLevel() >= 60
if not sm.hasHadQuest(25111):
    sm.startQuest(25111)
if sm.getQRValue(25111) != "spawn":
    sm.sendNext("The lock is broken!")
    sm.setQRValue(25111, "spawn")
    amount = 1
    start = -290
    end = 500
    delta = (start - end) // amount
    for i in range(amount):
        sm.spawnMob(9001046, start + delta * i, 182)
elif not sm.hasMobsInField():
    if chr.getJob() == 2410:
        sm.warp(915020101, 1)
    else:
        sm.sendNext("I think I've done around digging around in there.")
else:
    sm.chat("Kill the Dust Dwarve!")
