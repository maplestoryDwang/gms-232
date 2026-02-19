# The Path of a Night Walker - Completion

sm.setSpeakerID(1101006) # Eckhart
if (sm.sendAskYesNo("你真的决定了吗？……世上是没有后悔药的。希望你慎重考虑。你要选择夜行者之路吗？")):
    if sm.canHold(1472000) and sm.canHold(2070000, 2000):
        sm.jobAdvance(1400) # Night Walker 1st Job
        sm.sendSay("从现在开始，你就是夜行者了。为了纪念你成为我们的同伴，我会给你分配一些能力。")

        sm.giveSkill(10000258, 0, -1)
        sm.giveSkill(10001245, 1, 1)
        sm.giveSkill(10000249, 1, 1)
        sm.addSP(5)
        sm.setSTR(4)
        sm.setINT(4)
        sm.setDEX(4)
        sm.setLUK(4)
        sm.setAP(4 + chr.getLevel() * 5)
        sm.completeQuest(parentID)

        sm.giveItem(1472000,1)
        sm.giveItem(2070015,500)
        sm.giveItem(2070015,500)
        sm.giveItem(2070015,500)
        sm.giveItem(2070015,500)

        sm.sendSay("现在你已经是夜行者了。如果你想变得更强，可以在属性窗(S键)中提升相应的属性。如果觉得太难，可以使用#b自动分配#k……如果你不相信自动分配，可以自己亲自动手。")
        sm.sendSay("还有, 我给了你一些#bSP#k, 你可以打开#b技能菜单#k, 学习技能.这样打猎起来才会容易.啊, 当然, 有些技能必须在学会其他技能后, 才能学习.一开始先别去碰它.")
        sm.sendSay("和初心者时期不同，成为夜行者之后如果死亡，会损失之前积累的部分经验值。所以要懂得如何照顾自己。")
        sm.sendSay("好了……作为冒险骑士团的骑士，去探索谁都无法到达的黑暗吧。")


    else:
        sm.sendSayOkay("检查你的背包是否足够")
else:
    sm.sendSayOkay("请谨慎选择，这条路并不轻松（重新选择请放弃任务）")

