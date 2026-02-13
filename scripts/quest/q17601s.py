# [Commerci Republic] In the Name of the Empress

sm.setSpeakerID(1064023) # Cygnus
sm.sendNext("我正在等你。这么突然地把#e#b#h0##k#n\r\n叫来，我很抱歉。但是这件事非常重要。#h0#，你听说过叫凯梅尔兹的地方吗？")
if not sm.hasQuest(parentID):
    sm.startQuest(parentID)


sm.sendNext("从很久以前开始，凯梅尔兹就是个小渔村。只是偶尔和冒险岛世界有往来。但是，最近凯梅尔兹派出了大型的交易船在冒险岛世界各地进行交易，自称是[凯梅尔兹共和国]。凯梅尔兹的商船已经在明珠港等冒险岛世界各地进行来往。")

sm.sendNext("#face0#我作为冒险岛世界的女皇，不能不考虑这样迅速成长的凯梅尔兹对我们会产生什么影响。如果我们能和他们建立良好的关系，那我们就能获得一个一起建设冒险岛世界未来的可靠友军。但是，如果凯梅尔兹和冒险岛联盟敌对，站到黑魔法师的那边……虽然我不希望发生这种事，但这将成为我们的巨大威胁。")

response = sm.sendAskYesNo("#face0##h0#，我需要你的帮助。你是我最信任的勇士。而且，你比谁都更加珍惜冒险岛世界。请你去凯梅尔兹，向他们传达我的意思。冒险岛世界希望和凯梅尔兹结成友好的关系，并且希望今后能够一直进行合作……你能帮我吧？")

if response:
    sm.sendNext("#face2#谢谢你。我想你肯定会答应的。")
    sm.completeQuest(parentID)
else:
    sm.sendSayOkay("我已经拜托南哈特为你准备一切。希望你一切顺利。")
sm.dispose()
