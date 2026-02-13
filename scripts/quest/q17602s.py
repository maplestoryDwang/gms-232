# [Commerci Republic] Neinheart's Request

sm.setSpeakerID(1064026) # Neinheart
sm.sendNext("根据情报，凯梅尔兹的人们非常讨厌被其他国家的影响力所左右。所以才会自成一家，宣布建立“共和国”。女皇大人的意图虽然不是那样，但凯梅尔兹共和国可能会以为我们是在要求和他们成为从属关系。那么我们和凯梅尔兹共和国的关系就可能变得非常糟糕，我们必须避免这样的事情。")


sm.sendNext("为了避免这样的误会，我们必须非常慎重地接近他们。如果可以，在转达女皇大人的信息之前，最好能够先获得他们的信赖。女皇大人应该也是由于这个原因才会选择了你而不是单纯的信使。希望你一定不要辜负女皇大人的期待。")

response = sm.sendAskYesNo("我已经准备了前往凯梅尔兹的船只。请你去明珠港，找到叫做“帕尔巴特”的探险家。他会带你去凯梅尔兹的。如果你准备好了，就请去明珠港吧。\r\n#b(接受时立刻前往明珠港。)")

if response:
    sm.warp(104000000, 0)
    sm.startQuest(parentID)
else:
    sm.sendSayOkay("Let me know once you are ready to depart.")
sm.dispose()
