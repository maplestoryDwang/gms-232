# End of Knight's Cavalier
KIMU = 1102004
FEATHERED_NOBLESSE_HAT = 1003769

sm.setSpeakerID(KIMU)

if not sm.isEquipped(FEATHERED_NOBLESSE_HAT):
	sm.sendSayOkay(
		"看起来你还没有戴上你的帽子呢……"
		"按下 #b快捷键 I#k 打开物品栏，#r然后双击装备#k。\r\n"
		"你可以按 #b快捷键 E#k 查看当前已装备的物品。"
	)
	sm.dispose()

sm.sendNext("穿戴装备的方法很简单吧？\r\n#h0#，你的力量越强大，就越需要与之相匹配的武器和衣服，装备会让你变得更加强大。\r\n")
sm.sendNext("奇努来了呢，他会向你说明你所必须知道的内容的，虽然会有些无聊，不过还请你一定要认真听。")


sm.completeQuest(parentID)