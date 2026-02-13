# [Theme Dungeon] Ellinel Fairy Academy

response = sm.sendAskYesNo("#h0#，我知道你忙着参加反抗者活动，但你能稍微给我一点时间吗？我从外部收到了求助信息，觉得你是最合适的人选。\r\n\r\n#b（※ #r妖精学院艾利涅#b是特殊主题副本。提供#r59级#b以下和勇士等级对应的怪物和任务。）")

if response:
    sm.sendNext("其实，#b妖精学院艾利涅#k里发生了某种骚乱。妖精学院艾利涅原本就位于人类不能进入的魔法密林附近，可最近，有一个人类魔法师却进到那里，引起了麻烦。")
else:
    sm.dispose();

sm.sendNext("虽然这是过去的事情，不过与当初拒绝帮助埃德尔斯坦的冒险骑士团不同，我们反抗者不能眼睁睁看着别人陷入危险。因此，请你前往那里，化解这场矛盾吧。")

response = sm.sendAskYesNo("好吧！那你现在就立刻去找#b魔法密林的潘喜#k吧。也许可以通过潘喜，进入妖精森林。。")

if response:
    sm.startQuestNoCheck(32151)
    sm.warp(101030000)
    sm.dispose()
else:
    sm.startQuestNoCheck(32151)
    sm.dispose()
