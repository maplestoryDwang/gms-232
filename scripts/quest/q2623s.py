LADY_SYL = 1056000

sm.setSpeakerID(LADY_SYL)
sm.sendNext("想要使用双刀，就必须满足2种条件。第一，你要达到20级以上，第二，你要找到那个传说中只有有资格的主人才能得到的#b慧眼#k。")
sm.sendSay("慧眼是可以让人拥有洞察力的宝物，他会自己挑选主人。我把你送到#b飞花院深处, 珠房#k吧，你去珠房#b击打珠子#k并打下来，珠子就会变得浑浊。")

if sm.sendAskAccept("#b双击打碎浑浊的珠子就能获得慧眼#k，当然，这得是你有资格当慧眼的主人才行。那不是轻易就能得到的的东西，你要多加努力才行。知道了吗？你接受了我就把你送到珠房。"):
    sm.startQuest(parentID)
    sm.warp(910350000, 0)
else:
    sm.sendNext("Find me when you're ready. Do not keep me waiting.")