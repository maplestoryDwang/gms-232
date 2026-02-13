# [Commerci Republic] Ciao, Untril Next Time
sm.setSpeakerID(9390202) # Leon Daniella
sm.sendNext("啊，#e#b#h0##k#n……刚见面就要分开有点可惜，但是，我得出发去进行贸易了。我只是暂时来这贝里买粮食和鱼的。")


sm.setPlayerAsSpeaker() # Has to be Player Avatar
sm.sendNext("很遗憾。我还有很多事情想问你呢。")

sm.setSpeakerID(9390202) # Leon Daniella
sm.sendNext("嗯！你想去#b桑凯梅尔兹#k吗？你不是说你是作为和平使者来到这里的嘛。如果你们想和凯梅尔兹达成和平协议的话，你是不是应该见见我的父亲？")

sm.setPlayerAsSpeaker() # Has to be Player Avatar
sm.sendNext("嗯。我也打算最近去桑凯梅尔兹一趟。贝里村长说那里很大，充满了朝气。")

sm.setSpeakerID(9390202) # Leon Daniella
response = sm.sendAskYesNo("那是当然！桑凯梅尔兹是充满朝气的地方！我还有点交易要做，得现在其他的地方。如果没关系的话，你愿意先到桑凯梅尔兹等着我吗？")

if response:
    sm.sendSayOkay("未完成")
    sm.startQuest(parentID)
    sm.warpInstanceOut(865010200, 0)
else:
    sm.sendSayOkay("好的。出了贝里村往东，沿着海岸一直走~ 就能到达桑凯梅尔兹了。只有一条路，我想你是不会迷路的，但那路上有很多强盗，你要小心。\r\n 那我们到#e#b桑凯梅尔兹#k#n再见吧！")
sm.dispose()
