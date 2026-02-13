sm.setSpeakerID(1102102)
if sm.sendAskYesNo("我是负责战斗训练的奇赞。你叫#h0#，对吧？\r\n希望你能继续努力。你想现在开始吗？"):
    sm.removeEscapeButton()
    sm.sendNext("我先来教你最基本的攻击方法。最基本的攻击方法是#r使用Ctrl键的普通攻击#k。走到怪物附近，按Ctrl键，就可以发动攻击。不消耗血量和魔量。你去试试看吧。在演武场中#b消灭3个#o9300730##k。")
    sm.startQuest(parentID)
    for i in range(3):
        sm.spawnMob(9300730, -364, -7, False)
    sm.playSound("Aran/balloon", 100)
    sm.avatarOriented("UI/tutorial.img/4")
else:
    sm.sendNext("What, you too good to fight?!")