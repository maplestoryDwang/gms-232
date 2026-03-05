# Cutie - Dangerous Hide-and-Seek : Neglected Rocky Mountain (931000001)
if "exp3=1" not in sm.getQRValue(23007):
    sm.sendNext("哎呀，被发现了！哇……你好像很会找嘛。真厉害！\r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0#\r\n3exp")
    sm.giveExp(3)
    sm.addQRValue(23007, "exp3=1")
else:
    sm.sendNext("Hehehe... I should have hidden somewhere else.")
