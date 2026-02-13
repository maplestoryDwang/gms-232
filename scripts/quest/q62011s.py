# [Shaolin Temple] Finding the Secret Library

CHENGXIN = 9310047
WISE_CHIEF_PRIEST = 9310053
SUTRA_5_6F = 701220300

sm.removeEscapeButton()
sm.setSpeakerID(CHENGXIN)
sm.setBoxChat()
sm.sendNext("呼，多亏了你，我们才能渡过难关。对了，我好像从没见过你嘛……你怎么会来到这么危险的地方？")

sm.flipBoxChat()
sm.flipBoxChatPlayerAsSpeaker()
sm.sendNext("(说出了这段时间发生的事情。)")

sm.setSpeakerID(CHENGXIN)
sm.setBoxChat()
sm.sendNext("#b老魔僧#k的书啊……你说的是#b#t4034637##k吧。#b老魔僧#k是一位非常有能力的高僧。与现在的#b#p9310053##k不同，他不喜欢钱财，是一个深受僧侣们崇敬的清廉之人。")

sm.flipBoxChat()
sm.flipBoxChatPlayerAsSpeaker()
sm.sendNext("(好像的确是这么回事，#b#p9310053##k的穿着非常华丽，不像个僧侣。大雄殿的祭坛也是富丽堂皇的。)")

sm.setSpeakerID(CHENGXIN)
sm.setBoxChat()
sm.sendNext("现在的首要任务是阻止妖怪肆虐，找书的事情我也会帮助你的！	")

sm.sendNext("#b#m701220300##k会把除妖怪以外的生物全部驱逐出地图。使用这个变身药水，可以暂时变成和那些妖怪相同的模样。")

sm.sendNext("#r#k暂时变成妖怪后，你需要避开妖怪的视线，对#b#p9310048##k所说的#m701220300#进行调查。")

response = sm.sendAskYesNo("现在立刻开始吗？")

if response:
    sm.sendNext("那些妖怪在#b#m701220300##k中放置了很多用于瞎捣蛋的物品，你在调查时最好小心。")
    sm.startQuest(parentID)
    sm.warpInstanceIn(701220310)
else:
    sm.sendSayOkay("配置文件不存在,请联系管理员。")