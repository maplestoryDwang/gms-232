# [Shaolin Temple] Cleaning House

JANITOR_MONK = 9310048
WISE_CHIEF_PRIEST = 9310053
MINI_BRONZE_MARTIAL_ARTIST = 9480025
BRONZE_STAFFMAN = 9480028
SUTRA_1_2F = 701220100
SUTRA_3_4F = 701220200
SUTRA_5_6F = 701220300


sm.removeEscapeButton()
sm.setSpeakerID(JANITOR_MONK)
sm.setBoxChat()
sm.sendNext("好像，好像真的变回我原来的样子了！大眼睛！坚挺的鼻子！！多亏了你啊！")

sm.flipBoxChat()
sm.flipBoxChatPlayerAsSpeaker()
sm.sendNext("(好像之前的样子更好一点……)总之，真是太好了。")

sm.setSpeakerID(JANITOR_MONK)
sm.setBoxChat()
sm.sendNext("你刚刚说要找的是本什么#b书#k啊？这里到处都是书，所以你要找那本#b书#k，就好比大海捞针啊。需要我帮忙吧？")

sm.sendNext("很久以前，有一位叫做#b老魔僧#k的大师在此地进行有关妖怪的研究……你是否知道此人？")

sm.sendNext("#b老魔僧#k……！！！我虽然没见过他本人，但听说过很多有关他的事情。没有人比他更了解妖怪了。这么看来，他就任#r这里的方丈大师#k时，妖怪还没有现在这么多。")

response = sm.sendAskYesNo("他出去修行后，至今没有回来……而如今的少林寺是由#b#p9310053##k大师接管的。")

if response:
    sm.sendNext("#b不过，由于妖怪们再次出现，很多人都纷纷来到少林寺，并献上财物进行祈祷。这么看来，少林寺也因为妖怪而人气高涨了。#k")
    sm.startQuest(62009)
else:
    sm.sendSayOkay("我听说#b老魔僧#k在这藏经阁里弄了一个秘密书库。\r\n啊，对了，上次我打扫#r#m701220300#的时候，发现了一个奇特的地方，你要不去调查一下那个地方吧？#k")