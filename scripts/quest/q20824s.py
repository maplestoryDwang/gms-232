# Start of Knight's Cavalier
KIMU = 1102004
FEATHERED_NOBLESSE_HAT = 1003769

sm.setSpeakerID(KIMU)
sm.removeEscapeButton()

sm.sendNext("#h0#，为了欢迎你来到圣地，我想送你一份小礼物。装备道具的方法很简单。请按#b#e快捷键I#k#n。那样你的背包窗就会打开。稍等一下，你的性子还挺急的嘛？请听我说完之后再试。因为帽子还在我的手中。用快捷键I打开背包窗后，双击帽子，即可把它装备到身上。你想现在试试吗？")

if not sm.canHold(FEATHERED_NOBLESSE_HAT):
	sm.sendSayOkay("Please free 1 equipment tab slot.")
	sm.dispose()

if not sm.hasItem(FEATHERED_NOBLESSE_HAT):
	sm.giveItem(FEATHERED_NOBLESSE_HAT)

sm.showEffect("Effect/OnUserEff.img/guideEffect/cygnusTutorial/5", 0, 0)

sm.startQuest(parentID)