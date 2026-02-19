
sm.flipDialogue()
sm.flipDialoguePlayerAsSpeaker()
sm.sendNext("赫丽娜所说的可疑的弓箭手，#b提斯#k……。是和我一起坐船而来的？虽然我记不起来了，不过反正没什么事情可做，去找找他吧。")
response = sm.sendAskYesNo("先去#b六岔路口#k看看吧？因为那里是金银岛的中心地。先去那里看看，然后再决定要去哪里吧。\r\n\r\n#r(接受后，立即移动到地图。)#k")

if response:
    sm.startQuest(parentID)
    sm.warp(910400200, 0) # Pirate Test Site
    sm.dispose()
else:
    sm.sendSayOkay("准备好再对话吧")

