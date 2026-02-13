# id 32109 ([Ellinel Fairy Academy] Cootie's Suggestion), field 101072000
sm.setSpeakerID(1500001) # Headmistress Ivana
res = sm.sendNext("呜呜……你们是来帮忙找孩子们吗？你们打算怎么帮忙？\r\n\r\n")
if res == 0:
    sm.sendNext("#L1##b想在湖中寻找。#l\r\n")
elif res == 1:
    sm.sendNext("#L2##b想用魔法来搜寻孩子们的行踪。#l\r\n")
elif res == 2:
    sm.sendNext("#L3##b想在孩子们生活过的地方寻找线索。#l\r\n")
    sm.completeQuest(parentID)
