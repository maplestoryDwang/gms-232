# 140000000
LILIN = 1201000

sm.setSpeakerID(LILIN)
sm.flipSpeaker()
sm.sendNext("#b(我们的英雄，你这是怎么了？)#k")
sm.sendSay("现在，身体筋骨差不多舒展开了吧？这种时候还要进一步加强训练强度才能保证锻炼出过硬的基础体力。来吧，继续基础体力的锻炼吧。")

sm.setPlayerAsSpeaker()
sm.sendSay("这次去#b#m140020200##k消灭#r#o0100133##k试试看。大概消灭#r20只#k就行，将会对你的体力增长大有帮助。快去快去……咦？你有什么话要说吗？")

sm.setSpeakerID(LILIN)
sm.flipSpeaker()
sm.sendSay("……为什么消灭的怪兽数量越来越多了？")

sm.setPlayerAsSpeaker()
sm.sendSay("是要越来越多。难道说20只还不够吗？要不消灭100只试试？哦，这还不够，索性不如像林中之城那样，一口气消灭999只怪兽试试……")

sm.setSpeakerID(LILIN)
if sm.sendAskAccept("不，不用了，这样就够了。"):
    sm.startQuest(parentID)

    sm.setPlayerAsSpeaker()
    sm.sendNext("哎呦哎呦，用不着这么谦虚。我充★分★理解英雄大人渴望赶紧变得厉害起来的心情。真不愧是英雄大人……")

    sm.setSpeakerID(LILIN)
    sm.flipSpeaker()
    sm.sendSay("#b(再这么说下去，搞不好真得让我去消灭999这怪兽了，赶紧接任务得了。)#k")
else:
    sm.setPlayerAsSpeaker()
    sm.sendNext("那就拜托你消灭20只#o0100133#。")
    sm.dispose()