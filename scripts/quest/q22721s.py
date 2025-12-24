# id 22721 (Vice President's Piece), field 331002000
sm.setSpeakerType(3)
sm.setParam(37)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(1531002) # Yuna
sm.sendNext("#face3##b#h0##k... You know your picture is all over the internet, right? You keep letting yourself get photographed!")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("Why are you whispering? Speak up.")
sm.setInnerOverrideSpeakerTemplateID(1531002) # Yuna
sm.sendSay("#face4#What if someone hears us? Ooh, we're trying so hard to keep this secret, and you're blowing it! What is your DEAL?")
sm.setInnerOverrideSpeakerTemplateID(1531001) # Jay
sm.sendSay("#face9##fs12#Yeah, she's right! What IS your deal? Heh heh.")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("Relax. Only the three of us know the truth.")
sm.setInnerOverrideSpeakerTemplateID(1531002) # Yuna
sm.sendSay("For now! But... Ugh, whatever. I need you to do something. I need 100 student signatures for the gymnasium renovation.")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("#face2#I'm sure our lovely Vice President has already taken care of it?")
sm.setInnerOverrideSpeakerTemplateID(1531002) # Yuna
res = sm.sendNext("I got 97 signatures. I need YOU to get the remaining 3, #b#h0##k.\r\n#b#L1#I guess I can do that.#l\r\n#L2#Ehh, sounds like too much work.#l")
sm.sendNext("Huh. Are you turning over a new leaf? I didn't think you'd agree so easily.")
res = sm.sendAskYesNo("Get three student signatures. That's it! You can do that, right?")
sm.sendNext("I'll be waiting here.")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("#b(You should go find 3 student signatures somewhere in the school.)#k")
sm.startQuest(parentID)
