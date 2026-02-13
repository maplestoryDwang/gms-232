# [Shaolin Temple] But Everyone Else Has Nice Shoes

BLUE_DEMON = 9310577
KID_SHOES = 4034657
PATH_OF_STONE_3 = 701210180

sm.removeEscapeButton()
sm.setSpeakerID(BLUE_DEMON)
sm.setBoxChat()
sm.sendNext("人类世界确实有很多漂亮的东西呢。尤其是#r童鞋#k，看到如此可爱玲珑的鞋子，我就忍不住想要得到一双！")

sm.flipBoxChat()
sm.flipBoxChatPlayerAsSpeaker()
sm.sendNext("所以，你才偷童鞋？")

sm.setSpeakerID(BLUE_DEMON)
sm.setBoxChat()
sm.sendNext("居……居然说我偷！我只不过是在孩子们睡着的时候稍微借来穿穿，然后想在天亮之前还回去。")

sm.sendNext("不过……正当我兴高采烈地穿着鞋到处走时，鞋子却不知不觉给丢了！")

sm.sendNext("希望你能帮我找到#r童鞋#k，并归还给主人。我估计鞋子应该落在我去过的地方了。")

response = sm.sendAskYesNo("你能做到的吧？")

if response:
    sm.sendNext("#b童鞋#k应该落在#r#m701210180##k的石塔附近。")
    sm.startQuest(parentID)

else:
    sm.sendSayOkay("找到鞋子后，请你帮我还给#r#m701210000##k的#p9310580#。")