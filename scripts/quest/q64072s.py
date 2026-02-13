# id 64072 ([MONAD: The First Omen] Into the Forest), field 867201100
sm.setSpeakerType(3)
sm.setParam(57)
sm.setColor(1)
sm.sendNext("#b(托尔逊好像有话要说，先问问他吧。) ")
res = sm.sendNext("#b(士兵们好像有话要说，先问问他们吧。) ")
sm.startQuest(parentID)
sm.warp(867201050)
