# 21200 - [Job Adv] (Lv.30)   Aran
sm.setSpeakerID(1510009)
if sm.sendAskYesNo("修炼进展得如何？哟，等级升得这么高了？难怪人们都说济州岛是养马的天堂，金银岛是升级的天堂……对了，现在还不是说闲话的时候。能否麻烦你回岛上来一趟？"):
    sm.startQuest(parentID)
    sm.sendNext("#b保管在#m140000000##k的你的#b#p1201001##k突然出现了奇怪的反应。据说长矛在呼唤自己主人的时候才会发出那样的反应。#b也许有什么事情要转达给你？#k请速回岛上一趟吧。")
    sm.dispose()
else:
    sm.dispose()