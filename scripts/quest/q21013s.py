# 140090400
PUTZKI = 1202005

sm.setSpeakerID(PUTZKI)
answer = sm.sendSay("英、英雄大人……我一直都很想见你。\r\n#b#L0#（做腼腆状。）#l")
if answer == 0:
    if sm.sendAskAccept("我从很久以前就想送英雄大人一件礼物……既然今天遇见了英雄，不知英雄能否赏脸收下我这份薄礼？"):
        sm.removeEscapeButton()
        sm.startQuest(parentID)
        sm.sendNext("制作礼物的材料放在这附近的箱子里了。劳烦英雄大人找到这个箱子，把#b#t4032309##k和#b#t4032310##k带来给我。然后我就能立刻把礼物做好。")
        sm.tutorAutomatedMsg(18)
    else:
        sm.sendNext("I'm sure it will come in handy during your journey. Please, don't decline my offer.")
        sm.dispose()