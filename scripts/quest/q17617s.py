# [Commerci Republic] Missing Goods

MAESTRA_FIAMETTA = 9390220

sm.setSpeakerID(MAESTRA_FIAMETTA)
sm.sendNext("啊，现在想来，是有点奇怪的地方。")


sm.setPlayerAsSpeaker()
response = sm.sendAskYesNo("(他说的奇怪的地方是什么呢，先听他说说吧？)")

if response:
    sm.setPlayerAsSpeaker()
    sm.sendNext(" 奇怪的地方？")

    sm.setSpeakerID(MAESTRA_FIAMETTA)
    sm.sendNext(" 嗯，分明是海上贸易品，量也很多，迪巴斯却自己用拉货的车全部运走了。我觉得这个有点奇怪。正如你所见到的，交易所就在港口前面，一般海上贸易品都是直接装船的。")

    sm.setPlayerAsSpeaker()
    sm.sendNext("你看见他是往什么方向走的了吗？")

    sm.setSpeakerID(MAESTRA_FIAMETTA)
    sm.sendNext("这个么…交易所那个时候很忙，我记不清了，但是当时从贝里来的拉鱼车翻倒，他拉货的车是不可能往贝里方向的西边的路走的。那时整条路上全是鱼，鱼腥味很重的。")

    sm.setSpeakerID(MAESTRA_FIAMETTA)
    sm.sendNext("桑凯梅尔兹除了通往贝里的西边的路，就只剩下通往运河的东边的路了，那现在只有一种可能了吧？")

    sm.setPlayerAsSpeaker()
    sm.sendNext("嗯。这个信息非常重要。谢谢你。")

    sm.setSpeakerID(MAESTRA_FIAMETTA)
    sm.sendNext("桑凯梅尔兹居然发生了交易品被盗的事件，真是难以想象。希望你能尽快抓到犯人。")
    sm.startQuest(parentID)
    #sm.completeQuest(parentID)
    #sm.chatScript("Return the stolen goods to Tepes in San Commerci")
    #sm.chatScript("You found the impostor at the eastern canals, when confronted, a Robed Lady appeared. But she fled.")
    #sm.startQuest(17619) # [Commerci Republic] Come Back Here!