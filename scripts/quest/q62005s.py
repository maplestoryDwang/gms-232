# [Shaolin Temple] Demon B Gone

ZHEUNG_GUAN = 9310046
DEMON_B_GONE = 2434568
PATH_OF_STONE = 701210160

sm.removeEscapeButton()
sm.setSpeakerID(ZHEUNG_GUAN)
sm.setBoxChat()
sm.sendNext("你就是我的新弟子？嗯，虽然看上去有点弱，不过也没得选了！")

sm.sendNext("我可是熬了好几个夜晚才制作出了#i2434568#  #t2434568#，你能帮我进行一下测试吗？由于还没到完成阶段，因此需要进行很多测试才行。")

if not sm.canHold(DEMON_B_GONE):
    sm.sendSayOkay("你到没人去的#b#m701210160##k那边试试吧。")
    sm.dispose()

sm.sendNext("#b#m701210160##k是人们进行祭祀的神圣之地，而现在却成了一个灵魂乐园。你前往#b#m701210160##k，在那些怪物身上使用秘药吧。顺利的话，它们就会化作一缕青烟，消失殆尽。你能做到吧？")

response = sm.sendAskYesNo("这个……应该不会有副作用吧？")

if response:
    sm.flipBoxChat()
    sm.flipBoxChatPlayerAsSpeaker()
    sm.sendNext("这个嘛……我倒还没想过呢。好了，你快去吧，没时间磨蹭了！")

    sm.setSpeakerID(ZHEUNG_GUAN)
    sm.setBoxChat()
    sm.sendNext("We won't know until you try it out. Now get going!")

    sm.giveItem(2434568)
    sm.startQuest(parentID)