# Stealing Queen's Order of Silk
# 3941
# Karcasa (2101013)

from net.swordie.ms.client.character.skills.temp import CharacterTemporaryStat

karcasa = 2101013
tigun = 2101004
isTigun = sm.getnOptionByCTS(CharacterTemporaryStat.Morph) == 6

sm.setSpeakerID(karcasa)
if isTigun:
    sm.sendNext("这不是#p2101004#大人吗？真是好久不见，这次好不容易拿到了王妃爱不释手的丝绸喔！当然…品质也是一流！可是…您怎么一直在流汗啊？\r\n#L0##b(伪装声音)没什么，只是太热了点...#l")
    sm.sendNext("阿里安特哪有没热过啊？不就一直都这样嘛~可是我还以为#p2101004#大人您都不会怕热呢！不对…您的脸...变得愈来愈红啰！真的没关系吗？\r\n#L0##b(伪装声音)没…没关系，不需要担心...#l")
    sm.sendNext("真的没关系吗？我之前就觉得#p2101004#大人体质虚弱，是不是需要吃点什么药啊？刚好我有在冰封雪域那边採买来的感冒药，您要不要买些回去吃啊？我会算您便宜点的...\r\n#L0##b我说没关系啦！#l")
    response = sm.sendAskAccept("真的吗？可是#p2101004#您的声音，和平常不太一样喔！是不是真的感冒啦？怎么看都不像是平时的#p2101004#大人喔！平常你都要我把#t4010007#算便宜一点给您…真是奇怪…您真的是#p2101004#大人吗？")
    if response:
        sm.sendNext("You don't act like you normally would. Normally, you'd be much more talkative than this... "
        "Is there something going on? Wait... how come your face is turning redder and redder?"
        "You must be enraged at something. I'm sorry, I'll bring the silk right now. Please wait.")
        sm.createQuestWithQRValue(3941, "1")
    else:
        sm.sendSayOkay("Hm. Come back when you're feeling better, alright?")
else:
    sm.sendSayOkay("What is it? You're looking for the Queen's silk? You know I can't just give that to some stranger, right?")