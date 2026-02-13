# 1401 - Warriors of Perion

sm.setSpeakerID(10202) # Dances with Balrog
response = sm.sendAskYesNo("很高兴能在这里见到你……我来把你变成战士吧。做好心理准备了吗？临阵退缩的人，不配成为战士。")

if response:
    if sm.canHold(1302182):
        sm.jobAdvance(100)
        sm.setSTR(4)
        sm.setINT(4)
        sm.setDEX(4)
        sm.setLUK(4)
        sm.setAP(4 + chr.getLevel() * 5)
        sm.sendSayOkay("成为战士之后，你变得更强了。现在你拥有了战士可以使用的新技能，快去试一下新的力量吧。")
        sm.giveItem(1302182)
        sm.completeQuest(parentID)
    else:
        sm.sendSayOkay("另外, 你的能力值也得进行适当修改, 以便更加适合战士的特点。显然对于战士而言, STR才是核心属性, 而DEX为补助属性。若不清楚的话, 不妨使用#b自动分配#k也好。")
