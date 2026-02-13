# Blaster - The First Mission
CLAUDINE = 2151003
ELEX = 2151000
ELIMINATE_PATROL_ROBOT_UNLOCK = 23129

sm.setSpeakerID(CLAUDINE)
sm.sendNext("你来得正好，#h0#。我是负责反抗者对外任务的#p2151003#，能够在村庄之外的地方见到，还是有点尴尬呢。")
sm.sendSay("其实我应该是飞侠教官，但你也知道，反抗者是没法培养出飞侠的，所以我就负责了这项工作。")
sm.sendSay("总之，既然我是负责对外任务的，那以后，比起你的转职教官#p2151000#，你会更常碰到我，在将黑色之翼从这片土地上赶出去之前，我们就一同在任务上全心全力吧。")
sm.createQuestWithQRValue(ELIMINATE_PATROL_ROBOT_UNLOCK, "1")
sm.completeQuest(parentID)