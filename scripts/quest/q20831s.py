sm.setSpeakerID(1102102)
if sm.sendAskYesNo("饮料的味道还不错吧？不知道合不合你胃口。那是我们哔吆非常喜欢的果汁。\r\n好了，让我们重新开始训练吧？这次是复习！刚才学习的内容你还没忘记吧？\r\n你去消灭3个#o9300730#，搜集3个#t4000489#。"):
    sm.removeEscapeButton()
    sm.sendNext("普通攻击！按Ctrl键攻击怪物。嗯？怎么拾取羽毛？哎呀，我没告诉你吗？不好意思。按Z键，就可以把道具捡起来。")
    sm.startQuest(parentID)
    for i in range(3):
        sm.spawnMob(9300730, -364, -7, False)
    sm.playSound("Aran/balloon", 100)
else:
    sm.sendNext("What? Your failure is my failure as a teacher, and I never fail!")