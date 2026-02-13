# [Commerci Republic] After a Pleasant Voyage

sm.setPlayerAsSpeaker() # Has to be Player Avatar
sm.sendNext("你好……请问，我能问你个问题吗？")

sm.setSpeakerID(9390201) # Mayor Berry
sm.sendNext("天啊！！你真是太狼狈了啊！你遇到暴风雨了吗？你能活下来，运气真是太好了！")

sm.setPlayerAsSpeaker() # Has to be Player Avatar
sm.sendNext("啊，是的……我为了去凯梅尔兹，坐上了船，但是遇到了暴风雨。老人家你能告诉我这里是哪里，怎么才能去凯梅尔兹吗？")

sm.setSpeakerID(9390201) # Mayor Berry
sm.sendNext("哎呀，你的运气真的很好啊！如果你是来找凯梅尔兹，那就找对了，你现在所在的地方就是凯梅尔兹。而且，这里是凯梅尔兹最适宜生活的贝里村。")

sm.setPlayerAsSpeaker() # Has to be Player Avatar
sm.sendNext("啊……是吗？能找到这里真是太好了。")

sm.setSpeakerID(9390201) # Mayor Berry
sm.sendNext("#b(虽然宣布成立了共和国，但还是个普通的渔村啊……果然，传闻和现实还是有很大的差距。)#k")

sm.setPlayerAsSpeaker() # Has to be Player Avatar
sm.sendNext("自我介绍下吧，我是这个村的村长贝里。我们家世世代代都生活在这里，都是这里的村长。所以我叫贝里，哈哈。既然你是来找凯梅尔兹的，那你就是我的客人了！你来凯梅尔兹有什么事吗？")

sm.setSpeakerID(9390201) # Mayor Berry
sm.sendNext("#face1##b(……为了避免这样的误会，我们必须非常慎重地接近他们。如果可以，在转达女皇大人的信息之前，最好能够先获得他们的信赖……)#k")

sm.setPlayerAsSpeaker() # Has to be Player Avatar
sm.sendNext("#b(按照南哈特所说，现在马上就说出我的身份似乎有些危险，我还是先获得他们的信任吧)#k")

sm.setSpeakerID(9390201) # Mayor Berry
sm.sendNext("……我是在冒险岛世界各地游历的冒险家。我听说了凯梅尔兹的故事，就想来看看，却在快要到达的时候遇到了风浪，差点就死了。幸好能够安全到达了凯梅尔兹……")

sm.setPlayerAsSpeaker() # Has to be Player Avatar
sm.sendNext("差点就出大事了啊。总之，只要来到凯梅尔兹的冒险家就是我们村子的客人。我能让你舒舒服服地休息一下。你经历了这么大的事故，身体肯定也很疲惫了，你就当这里是你自己家，好好休息吧。")
sm.completeQuest(parentID)
sm.dispose()
