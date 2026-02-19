# The Path of a Dawn Warrior - Completion

sm.setSpeakerID(1101003) # Eckhart
if (sm.sendAskYesNo("你已经做好选择了吗？选择之后是不能反悔的，所以务必慎重。你真的要选择魂骑士之路吗？")):
    if sm.canHold(1402001):
        sm.jobAdvance(1100) # Night Walker 1st Job
        sm.sendSay("我会将你的身体改造成适合魂骑士的身体。之后如果你想变得更强，可以在属性窗(S键)中提升相应的属性。如果觉得太难，可以使用#b自动分配#k。")

        sm.giveSkill(10000255, 0, -1)
        sm.giveSkill(10001245, 1, 1)
        sm.giveSkill(10000246, 1, 1)
        sm.addSP(5)
        sm.setSTR(4)
        sm.setINT(4)
        sm.setDEX(4)
        sm.setLUK(4)
        sm.setAP(4 + chr.getLevel() * 5)
        sm.completeQuest(parentID)
        sm.completeQuest(29906)

        sm.giveItem(1302077,1)
        sm.giveItem(1142066,1)

        sm.sendSay("我帮你增加了装备和其他道具的保管箱数量。多装点骑士的必需品吧。")
        sm.sendSay("还有, 我给了你一些#bSP#k, 你可以打开#b技能菜单#k, 学习技能.这样打猎起来才会容易.啊, 当然, 有些技能必须在学会其他技能后, 才能学习.一开始先别去碰它.")
        sm.sendSay("你要记住，和初心者的时候不同，成为魂骑士之后如果死亡，会损失之前积累的部分经验值。")
        sm.sendSay("好了……作为冒险骑士团的骑士，请为自己的荣誉而努力吧。")


    else:
        sm.sendSayOkay("检查你的背包是否足够")
else:
    sm.sendSayOkay("请谨慎选择，这条路并不轻松（重新选择请放弃任务）")


