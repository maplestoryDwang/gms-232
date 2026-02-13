# [Stone Colossus] Rolling with Kupo

from net.swordie.ms.client.character.skills.temp import CharacterTemporaryStat

KUPO = 2210002
KUPOS_RIDE = 1932165

sm.setSpeakerID(KUPO)
sm.sendNext("怎么？你是我的粉丝吗？看来我骑士卡布的名声终于在冒险岛世界中传扬开来了。我要事先申明，我的签名可是很贵的，大概1亿金币？")

sm.sendSay("真是个没有幽默感的朋友。\r\n我来自我介绍一下。我叫卡布！注意发音。如果说成是“卡普”或“卡波”的话，小心屁股被我踢，哈哈哈！")

sm.sendSay("哎呀，长话短说，直奔主题？我喜欢像你这样的人。人生中最重要的是速度。\r\n到岩壁巨人那里去的路很高、很遥远，也很险峻，靠自己的两条腿是没办法过去的。不过有我卡布的骑宠的话，就另说了！当然，如果你能好好当我的助手的话。")

response = sm.sendAskYesNo("很简单。往前走的事情交给我！你只要坐在助手座位上负责其他事情就行。百闻不如一见。要试试看吗，朋友？")

if response:
    sm.sendNext("我就喜欢你这样的人，朋友！那我们出发吧！")
    sm.startQuest(parentID)
    sm.warpInstanceIn(240090800) # Kupo's Ride  The Road Up
    sm.rideVehicle(KUPOS_RIDE)
    sm.lockInGameUI(True, False)

    sm.sendDelay(10000)
    sm.sendNext("So...\r\n"
                "What's your favourite hobby?\r\n\r\n"
                "Mine is driving!")

    sm.sendDelay(10000)
    sm.sendNext("You don't like talking?..\r\nAlright..")

    sm.sendDelay(5000)
    sm.sendNext("#fs 18##eALRIGHT I GUESS IF YOU'RE NOT GONNA TALK TO ME I'LL JUST TURN THIS SHIT AROUND!!!")

    sm.sendDelay(2000)
    sm.warpInstanceOut(240090000)
    sm.removeCTS(CharacterTemporaryStat.RideVehicle)
    sm.lockInGameUI(False)
    sm.sendSayOkay("..Maybe I was a bit too harsh on you.. I'm sorry\r\n"
                   "I would give you a ride to the other side, but my car is out of fuel!")
else:
    sm.sendSayOkay("No?..")