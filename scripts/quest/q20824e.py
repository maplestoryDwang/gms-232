# End of Knight's Cavalier
KIMU = 1102004
FEATHERED_NOBLESSE_HAT = 1003769

sm.setSpeakerID(KIMU)

if not sm.isEquipped(FEATHERED_NOBLESSE_HAT):
	sm.sendSayOkay("穿戴装备的方法很简单吧？\r\n#h0#，你的力量越强大，就越需要与之相匹配的武器和衣服，装备会让你变得更加强大。\r\n")
	sm.dispose()

sm.sendNext("奇努来了呢，他会向你说明你所必须知道的内容的，虽然会有些无聊，不过还请你一定要认真听。")

sm.sendSay("I found Kinu in a pile of books. "
"He might tell you what you need to know, or he might just put you to sleep. Or both.")

sm.completeQuest(parentID)