# [Stone Colusses] It Ain't Natural

CHIEF_TATOMO = 2081000
GUWARU = 2210011

sm.setSpeakerID(CHIEF_TATOMO)
sm.sendNext("米纳尔森林南部一直以来就以经常发生奇怪的事情而闻名。但是像这样奇怪的事还是第一次发生。石头山竟然活了，突然站了起来……")

sm.sendSay("乍一听，你也没办法理解是怎么回事吧？但是这种事情确实发生了。")

sm.sendSay("唯一能解释这种超自然现象的人，应该只有一个人。那就是大精灵古瓦洛……虽然他曾经被黑魔法师迷惑，成为了军团长，但现在已经不再是邪恶的人了。他正在某个地方休养生息。")

response = sm.sendAskYesNo("我们哈夫林代代都是天空、风和森林的朋友。使用部落代代相传的秘术，就能暂时和大精灵古瓦洛接触……你想现在见见他吗？")

if response:
    sm.sendNext("好的，请集中精神……听到他的声音了吗？")

    sm.setSpeakerID(GUWARU)
    sm.flipSpeaker()
    sm.sendSay("岩壁巨人……没想到造出了那种荒唐的东西。全都是我的错。\r\n#b(听到了古瓦洛的声音。)#k")

    sm.flipSpeaker()
    sm.sendSay("我也料到了可能会发生这种事。几百年前，我加入了黑魔法师的势力，后来被其中的某人背叛，被他吸收了力量……\r\n一切都是从那时候开始的。我在很长的时间里丧失了对精灵们的支配力，所以导致了奇怪事件的发生。")

    sm.flipSpeaker()
    sm.sendSay("这是我的错误造成的，我本应该负起责任。但是我现在失去了力量……请到米纳尔森林南部去调查一个叫岩壁巨人的巨人。")

    sm.flipSpeaker()
    sm.sendSay("用普通的方法是无法和岩壁巨人对话的。不过我刚才已经把我的一部分力量分给了你，你现在应可以和岩壁巨人对话了。如果我的推测没错的话……\r\n#b(古瓦洛的神秘力量渗透进了身体。)#k")

    sm.flipSpeaker()
    sm.sendSay("好的，再见。需要的时候，我会再找你的。")
    sm.startQuest(parentID)
else:
    sm.sendSayOkay("Wot? You don't want to contact a higher being?")