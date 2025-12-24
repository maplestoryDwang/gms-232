# id 450001340 (Hidden Street : Arma's Hideout), field 450001340
sm.progressMessageFont(3, 20, 8, 0, "Kao was hurt defending you from Arma. Defeat Arma and escape from this place.")
sm.spawnMob(8641010, 801, 177, False)
if not sm.hasQuest(34119) and not sm.hasQuestCompleted(34119) and sm.hasQuestCompleted(34118):
    sm.startQuestNoCheck(34119)