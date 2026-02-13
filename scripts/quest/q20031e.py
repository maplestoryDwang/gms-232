# Manual Labor

# Constants
LIMBERT = 1106002
ITEM1 = 4033194
ITEM2 = 4033195

sm.setSpeakerID(LIMBERT)
selection1 = sm.sendNext("怎么这么慢？该不会是趁我不在的时候，在哪儿偷懒吧？让你去拿的东西呢？\r\n#b\r\n#L0# ……在这里……还有，我在阁楼里捡到了这封信。好像还没看过……好像是个叫库洛姆的人寄来的……#l")

if selection1 == 0:
    sm.sendNext("你说什么！！快给我！干嘛随便碰别人的东西？")
else:
    sm.dispose()

sm.consumeItem(ITEM1)
sm.consumeItem(ITEM2)
sm.giveItem(2001500, 10)
sm.giveItem(2001503, 10)
sm.completeQuestNoRewards(20031)
sm.addLevel(2)
sm.lockInGameUI(True)
sm.localEmotion(4, 2000, False)
sm.sendDelay(2000)

sm.removeEscapeButton()
sm.setPlayerAsSpeaker()
sm.sendNext("呜呜……今天又被骂了……")

sm.sendSay("嗯？那是什么？")

sm.showBalloonMsg("Effect/Direction7.img/effect/tuto/soul/0", 4000)
sm.sendDelay(5000)

sm.sendNext("哇！！刚才那是什么？我看见了……一道明亮的光……？")

sm.warp(913070002, 0)