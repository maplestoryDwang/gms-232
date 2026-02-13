# [Commerci Republic] Parbell, World's 'Greatest' Explorer

sm.setSpeakerID(9390200) # Parbell
sm.setPlayerAsSpeaker() # Has to be Player Avatar
sm.sendNext("请问你是探险家帕尔巴特吗？")

sm.setSpeakerID(9390200) # Parbell
sm.sendNext("你看见了我还不知道吗？冒险岛世界最伟大的探险家帕尔巴特在你面前你都认不出来，最近的年轻人真是……哎……！")

sm.setPlayerAsSpeaker() # Has to be Player Avatar
sm.sendNext("(……似乎是个性格很让人棘手的人啊。)")

sm.setSpeakerID(9390200) # Parbell
sm.sendNext("是的……没错……")

sm.setPlayerAsSpeaker() # Has to be Player Avatar
sm.sendNext("你打算怎么去呢？")

sm.setSpeakerID(9390200) # Parbell
sm.sendNext("啊……？那个……探险家您不是准备了船只……")

sm.setPlayerAsSpeaker() # Has to be Player Avatar
sm.sendNext("当然，我，伟大的帕尔巴特准备了船只。所以说，你打算怎么办呢？")

sm.setSpeakerID(9390200) # Parbell
sm.sendNext("难道不是您……带我去吗……？")

sm.setPlayerAsSpeaker() # Has to be Player Avatar
sm.sendNext("你这笨蛋，到底有没有耳朵啊！！！我的意思是，我把你带到凯梅尔兹，你会给我什么回报！\r\n因为那个老学究的委托，我准备了去凯梅尔兹的船，#e但是，你不应该详细地说一下你要做什么来作为代价吗？！#n")

sm.setSpeakerID(9390200) # Parbell
sm.sendNext("(……老学究说的是南哈特吗……如果我回到圣地，我一定要让女皇教训一下南哈特！！)")

sm.setPlayerAsSpeaker() # Has to be Player Avatar
sm.sendNext("这个嘛……抱歉啊，我现在没准备什么东西，但是我以后一定会好好地报答你的。赌上女皇的名誉。")

sm.sendNext("啧啧……所以说最近的年轻人都一样……你也和那个只是嘴上厉害的老学究没什么不一样！算了，你先坐上去吧。我会遵守约定，把你送到凯梅尔兹，你以后可别忘了回报哦！你得知道，我帕尔巴特亲自来给你驾船，一定会把你平安送到，这可是你的荣幸！\r\n#b(接受时立刻前往凯梅尔兹。)")

sm.setSpeakerID(9390200) # Parbell
sm.sendNext("你是要去凯梅尔兹吧？")

response = sm.sendAskYesNo("I'll be collectin' on that promise, 'fore long. "
            "When all's said 'n done, y'uns shold feel plum tickled that I, Parbell the Great, am showin' yuhs the way! "
            "\r\nReady to set sail?\r\n"
            "#b(You will be moved to Commerci if you accept.)")

if response:
    sm.warp(865010200, 0)
    sm.startQuest(parentID)
    sm.completeQuest(parentID)
    sm.startQuest(17608) # [Commerci Republic] After a Pleasant Voyage
else:
    sm.sendSayOkay("Dun't yer let a ol' man waiting!")
sm.dispose()
