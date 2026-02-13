#Alcaster's crystal | Lionheart Castle Questline
sm.setSpeakerID(2020005)
if sm.sendAskYesNo("#b#p2161004##k的信已经交给了他的家人。希望你能帮我一个忙……"):
    sm.sendNext("现在#p2161004#的灵魂之所以会受到寒气的折磨，是因为狮子王向#p2161004#下了诅咒。要想解开那个诅咒，必须切断狮子王和#p2161004#之间的诅咒的力量……")
    sm.sendNext("你带着这个水晶过去。这个水晶里含有我的魔法的力量。在#p2161004#所在的地方使用水晶，狮子王施加在#p2161004#身上的诅咒就会解开。")
    if sm.canHold(2430159):
        sm.startQuest(parentID)
        sm.giveItem(2430159)
        sm.warp(211060000)
    else:
        sm.sendSayOkay("这个水晶我就送给你，但是如果你弄丢了，重新制作就需要#r1000万金币#k。一定要记住。我会把你送到狮子王之城入口处，你快去找莫特吧。")