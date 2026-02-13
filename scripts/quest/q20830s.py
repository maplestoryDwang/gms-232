sm.setSpeakerID(1102101)
if sm.sendAskYesNo("看到你努力训练的样子，我感到很欣慰。你应该很快就能成为修炼骑士了。训练了这么长时间，是不是有点累了？这里有凉爽的饮料，你先喝一点，休息一下。来，拿着。"):
    sm.startQuest(parentID)
    sm.giveItem(2001555, 1)
    sm.removeEscapeButton()
    sm.sendNext("按快捷键I打开道具背包窗之后，用鼠标双击饮料，即可使用凉爽的饮料。")
    sm.playSound("Aran/balloon", 100)
    sm.avatarOriented("UI/tutorial.img/3")
else:
    sm.sendNext("I said, DRINK IT!")