sm.removeEscapeButton()

sm.setSpeakerID(1102102)
sm.sendNext("现在试着用技能去攻击怪物吧。把技能添加到快捷栏中，使用起来会更加方便。只要把想要使用的技能用鼠标拖放到快捷栏里就行。")
sm.sendSay("你去用#r元素斩#消灭#b5个#o9300731##k吧。")

sm.startQuest(parentID)
for i in range(5):
    sm.spawnMob(9300731, -364, -6, False)
sm.avatarOriented("UI/tutorial.img/8")