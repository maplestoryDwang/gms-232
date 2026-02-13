# id 16880 ([Tutorial] Learn about the Return Scroll - Nearest Town), field 402000001
sm.setSpeakerID(9010000)
sm.sendNext("你好，#b#e#h0##n#k！\r\n我想为来自#e#b冒险岛世界#k#n的勇士提供一些帮助！")
sm.sendSay("你知道#i2030059##e#b[回城卷轴]#k#n吗？")
sm.sendSay("#e#b[回城卷轴]#k#n\r\n是可以从你当前所在位置移动到#r#e最近的村庄#k#n的道具。\r\n在狩猎的过程中想要回到村庄时使用，可以节约走路的时间，因此是非常有用的道具。")
sm.sendSay("#e#r使用之后会立即移动#k#n到村庄，并消耗#e#r一个#k#n回城卷轴。\r\n此外，在部分#e#r无法传送的地区#k#n无法使用回城卷轴。希望你能记住这些。")
sm.sendSay("最后，#b[回城卷轴]#k#n可以在附近村庄的#b#e杂货商人#n#k那里购买。")
res = sm.sendAskYesNo("现在我可以送你一些#b[回城卷轴]#k。\r\n你想现在领取#i2030059##e#b10个[回城卷轴]#k#n吗？")
if res:
    if sm.canHold(2030000, 10):
        sm.giveItem(2030000, 10)
        sm.sendSayOkay("#i2030059##e#b10个[回城卷轴]#k#n已经送给你了\r\n\r\n#e#b#h0##k#n，希望在冒险的时候能对你有用！")
        sm.completeQuestNoCheck(16880)
    else:
        sm.sendNext("You don't have enough space for these scrolls!")
