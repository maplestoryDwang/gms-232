# id 32106 ([Ellinel Fairy Academy] Ivana's Misunderstanding), field 101072000
sm.setSpeakerID(1500001) # Headmistress Ivana
sm.setParam(4)
sm.setSpeakerID(1500001) # Headmistress Ivana
sm.sendNext("你还没回去啊。还有什么要说的吗？")
sm.setInnerOverrideSpeakerTemplateID(1500002) # Faculty Head Kalayan
sm.sendSay("哼，显而易见。他的辩解实在是令人难以信服。异邦人的话不能相信，校长先生。")
sm.setPlayerAsSpeaker()
sm.sendSay("#b我也只是受人之托来化解误会的。因此，我得先掌握清楚互相之间正确的事实关系，不是吗？#k")
sm.setInnerOverrideSpeakerTemplateID(1500002) # Faculty Head Kalayan
sm.sendNext("哼，别废话了！我们5个孩子一下子消失了。这不是绑架是什么？")
sm.setPlayerAsSpeaker()
sm.sendNext("#b有证据能够证明是魔法师库迪犯下的罪行吗？#k")
sm.setInnerOverrideSpeakerTemplateID(1500002) # Faculty Head Kalayan
sm.sendNext("那个叫库迪的魔法师在我们森林附近出没也不是一两次了。虽然把他赶跑很多次，但他还是偷偷地干着什么奇怪的勾当。")
sm.sendNext("原来，为了干坏事，他已经事先考察过现场了吧。他想趁着放假，老师们全部去休假的空当，对孩子们下手。不过犯人总归会再次出现在现场。所以当他在这附近游荡的时候，被我抓了个正着。")
sm.setPlayerAsSpeaker()
sm.sendNext("#b(5个孩子消失，此事的确非同寻常。但果真是库迪所为吗？)#k")
sm.setInnerOverrideSpeakerTemplateID(1500001) # Headmistress Ivana
sm.sendNext("你说需要冷静思考问题，我也理解。但作为我们来讲，首先必须得对有嫌疑的人进行训问。")
sm.setPlayerAsSpeaker()
sm.sendNext("#b(他们因为担心孩子，现在正处于非常兴奋的状态。看来最好听听魔法师库迪本人的话。)#k")
sm.startQuest(parentID)