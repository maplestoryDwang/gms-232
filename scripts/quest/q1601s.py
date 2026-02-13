# [Silent Crusade] Chance? Or Fate?

STARLING = 9120221
BLACK_WING_HENCHMAN = 9300470

sm.setSpeakerID(STARLING)
sm.sendNext("他们马上就要发起攻击了！不只是我，你也会陷入危险之中的。请击退他们！！")

for i in range(7):
    sm.spawnMob(BLACK_WING_HENCHMAN, -391, 64, False)
sm.startQuest(parentID)