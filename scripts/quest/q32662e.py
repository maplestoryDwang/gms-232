# [Grand Athenaeum] Visit the Grand Athenaeum
LIBRARIAN = 2500002

sm.setSpeakerID(LIBRARIAN)
sm.sendNext("欢迎你。我是管理这里的#b#p2500002##k。你不会因为我是猴子就吓到了吧？")
sm.sendSay("你问这里是什么地方吗？这里是 #b次元图书馆#k。\r\n\r\n这里是汇聚世上所有知识和记录的地方。虽然很多人都不知道这个地方，但即便没有专人来书写记录，冒险岛的故事也会自动汇集到这里来，形成书籍。")
sm.sendSay("呵呵呵，你觉得我在说谎吗？甚至连你也可以成为#b实际存在过的人物#k，进到故事里去呢。要不要亲自去确认一下啊？")
sm.sendSay("我这里刚好有#b#p2500000##k叼来的书。讲述的都是冒险岛世界实际发生过的事。")
if sm.sendAskAccept("让我看看……五个全部完成好像太多了。只要你能#b完成三个#k，我就#b送你一份相当不错的礼物#k……好了，你想挑战吗？\r\n\r\n - 吊坠额外栏#e#b（21天期限制）#k#n\r\n\r\n - #i1122263#   #b#t1122263##k"):
    sm.completeQuest(parentID)
    sm.startQuest(32663)# [Grand Athenaeum] Read The White Mage
    sm.startQuest(32664)# [Grand Athenaeum] Read Empress In Training
    sm.startQuest(32665)# [Grand Athenaeum] Read The Black Witch
    #sm.startQuest(32698)# Book for higher version
    #sm.startQuest(32990)# Book for higher version
    sm.startQuest(32666)# [Grand Athenaeum] Food for the Soul
    sm.sendSayOkay("包含着不同故事的书，可以按任意顺序阅读。你去和#b#p2500000##k谈谈吧。")
else:
    sm.sendNext("Busy? You're always welcome here.")