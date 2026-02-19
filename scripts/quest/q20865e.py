# The Path of a Night Walker - Completion

sm.setSpeakerID(1101007) # Eckhart
if (sm.sendAskYesNo("你真的选好了吗？出于谨慎，我必须告诉你，选择之后是不能后悔的。请慎重决定。你真的要选择奇袭者之路吗？")):
    if sm.canHold(1472000):
        sm.jobAdvance(1500) # Night Walker 1st Job
        sm.sendSay("从现在开始，你就是奇袭者了！呀呼！闪电骑士团又增加了新成员！对了，我都忘了，得先给你分配一些能力。")

        sm.giveSkill(10000259, 0, -1)
        sm.giveSkill(10001245, 1, 1)
        sm.giveSkill(10000246, 1, 1)
        sm.addSP(5)
        sm.setSTR(4)
        sm.setINT(4)
        sm.setDEX(4)
        sm.setLUK(4)
        sm.setAP(4 + chr.getLevel() * 5)
        sm.completeQuest(parentID)
        sm.giveItem(1482014, 1)
        sm.giveItem(1142066, 1)

        sm.sendSay("现在你已经是奇袭者了。如果你想变得更强，可以在属性窗(S键)中提升相应的属性。如果觉得太难，还可以使用#b自动分配#k☆")
        sm.sendSay("还有！作为奇袭者需要的东西可不少呢，我帮你增加了装备和其他道具的保管箱数量！是不是很棒？")
        sm.sendSay("还有, 我给了你一些#bSP#k, 你可以打开#b技能菜单#k, 学习技能.这样打猎起来才会容易.啊, 当然, 有些技能必须在学会其他技能后, 才能学习.一开始先别去碰它.")
        sm.sendSay("和初心者时期不同，成为奇袭者之后如果死亡，会损失之前积累的部分经验值。所以别光顾着打猎而忘了危险。知道了吗？")
        sm.sendSay("好了……作为冒险骑士团的骑士，希望你找到心中的ONE PIECE！")


    else:
        sm.sendSayOkay("检查你的背包是否足够")
else:
    sm.sendSayOkay("请谨慎选择，这条路并不轻松（重新选择请放弃任务）")

