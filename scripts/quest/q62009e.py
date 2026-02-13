# [Shaolin Temple] Cleaning House

JANITOR_MONK = 9310048
SUTRA_3_4F = 701220200

sm.removeEscapeButton()
sm.setSpeakerID(JANITOR_MONK)
sm.setBoxChat()
sm.sendNext("现在妖怪们的气息好像减弱了不少，你赶快前往#r#m701220200##k吧！#r搭乘右上方的传送口，就可以移动至#r#m701220200##k。#k")
sm.completeQuest(parentID)
sm.giveExp(2020453)