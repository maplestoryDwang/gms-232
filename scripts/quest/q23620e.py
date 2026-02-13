# [Skill] A Warm(er) Welcome (23620)
# 23620
# Claudine (2151003)

echo = 30021005
lastOneHome = 1142579

claudine = 2151003
belle = 2151002
brighton = 2151001
elex = 2151000
checky = 2151004

if sm.canHold(lastOneHome):
    sm.setPlayerAsSpeaker()
    sm.sendNext("吉格蒙特，有什么事吗？")

    sm.setSpeakerID(claudine)
    sm.sendSay("刚才我也说过了，不是什么急事，请不要担心。其实……")

    sm.setSpeakerID(belle)
    sm.sendSay("#h0#之前你刚到埃德尔斯坦的时候，大家都手忙脚乱的。我怕你会觉得不舒服，这次叫你来，是想正式向你表示欢迎。")

    sm.setSpeakerID(brighton)
    sm.sendSay("虽说是欢迎，但没什么特别的东西。")

    sm.setSpeakerID(elex)
    sm.sendSay("真的只是想和你打个招呼，最好不要抱什么特别的期待。")

    sm.setSpeakerID(checky)
    sm.sendSay("这种事情不太合我的口味，我就不用参加了吧……")

    sm.setSpeakerID(belle)
    sm.sendSay("切奇！你在说什么啊！大家在一起才开心嘛！")

    sm.setSpeakerID(checky)
    sm.sendSay("嗯……但我又不是这里的新人……")

    sm.setSpeakerID(brighton)
    sm.sendSay("只是想让大家一起欢迎#h0#，只要高兴就行。")

    sm.setPlayerAsSpeaker()
    sm.sendSay("(嗯，奇怪？)")
    sm.sendSay("(感觉#r过去好像也发生过这样的事情#k……）")
    sm.sendSay("#h0#？有什么问题吗？干嘛在那里发愣？")

    sm.setSpeakerID(claudine)
    sm.sendSay("是吗？那我把礼物送给你。我们为你准备了礼物，还有新技能。希望能成为你新的力量。\r\n\r\n#fUI/UIWindow2.img/QuestIcon/4/0#\r\n#s30021005# #q30021005#\r\n#v1142579# #t1142579#")

    sm.setPlayerAsSpeaker()
    sm.sendSay("你安全回到了埃德尔斯坦。我对你的归来表示衷心的欢迎。")

    sm.setSpeakerID(claudine)
    sm.sendSay(sm.join(["All right. Well, we got you a little gift. I mean, sort of. "
    "It'll teach you a new skill. I hope you'll use this as your new source of power when things get dark. \r\n\r\n"
    "#fUI/UIWindow2.img/QuestIcon/4/0# \r\n\r\n"
    "#s", repr(echo), "# #q", repr(echo), "#\r\n",
    sm.formatInlineItem(lastOneHome)]))

    if sm.hasQuest(parentID):
        sm.completeQuest(parentID)
        sm.giveSkill(echo)
        sm.giveItem(lastOneHome)
    
    sm.sendPrev("Thank you for helping Edelstein. Everyone here is glad you're back.")
else:
    sm.setSpeakerID(claudine)
    sm.sendSayOkay("哈哈……原来如此……")