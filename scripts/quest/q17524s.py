# id 17524 ([Gollux] The Cleansing), field 863010000
sm.setSpeakerID(9390120) # Heart Tree Guardian
sm.sendNext("这里是贝勒德还是心树的时候，由他的心脏构成的空间。")
sm.sendSay("为了不忘记他，我用我的力量创造出了这里，等待有一天他能回来。但是堕落持续了太长的时间，我怀疑他还能不能回来。")
sm.sendSay("贝勒德是个巨大的巨人。如果能破坏掉头部，应该就能把他打倒。不过那并不容易。因为他的手和脚一定会对你造成阻碍。")
sm.sendSay("先把贝勒德的腿脚破坏掉，也是方法之一。如果能破坏掉贝勒德的四肢，应该就能更容易地打倒他。当然，也可以直接攻击头部，不过那并不容易。")
res = sm.sendAskYesNo("你能帮帮我吗？")
sm.startQuest(parentID)
sm.sendNext("谢谢。那就拜托了。")
