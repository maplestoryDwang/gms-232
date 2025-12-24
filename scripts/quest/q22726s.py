# id 22726 (Codebreaker Jay 1), field 331001000
sm.setSpeakerType(3)
sm.setParam(37)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(1531001) # Jay
sm.sendNext("#face1#My money is on this being a trap. I'd advise against you going.")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("If I don't go, how am I supposed to stop the big bad dropping monsters on everyone?")
sm.setInnerOverrideSpeakerTemplateID(1531001) # Jay
sm.sendSay("You could always come up with a plan instead of winging it and hoping for the best. What's it going to be?")
res = sm.sendNext("All signs point to the school, and soon. Are you going?\r\n#b#L1#Wing it and hope for the best. Time to go back to school.#l\r\n#b#L2#Tell me more of these 'plans'.#l")
