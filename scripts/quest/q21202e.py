# 21202 - [Job Adv] (Lv.30)   Aran
sm.setSpeakerID(1203000)
sm.sendNext("哎呦～#t4032311#都取回来了？你……比我想象的还要厉害一些嘛。不过，对于随时都可能伤到自己的危险武器，你那种毫不畏惧的爽朗豪放的心态实在是……好吧，#p1201001#就给你了。")
sm.sendNext("#b（过了好一会儿，#p1203000#才郑重地将裹在布里的#p1201001#交给我。）#k")
if sm.sendAskYesNo("这就是专门为你而做的长矛，名叫#p1201002#……以后就拜托了。"):
    # todo: show effect
    sm.warpInstanceOut(140030000)
    sm.completeQuest(parentID)
    sm.consumeItem(4032311, 30)
