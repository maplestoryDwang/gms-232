# [Temple of Time] Seeking Lost Memories [Cadena]
# 34665
# No NPC

recoveredMemory = 7081

gen = 3001200

sm.setPlayerAsSpeaker()
sm.sendNext("Hey, hey. Branch Leader, can you hear me? Hey, hey. Branch Leader, do you copy?")

sm.setSpeakerID(gen)
sm.sendSay("...Loud and clear. You don't need to keep calling. And why are you calling me all of a sudden? "
"You must be busy training in the new world.")

sm.setPlayerAsSpeaker()
sm.sendSay("...M-Memories.")

sm.setSpeakerID(gen)
sm.sendSay("What?")

sm.setPlayerAsSpeaker()
sm.sendSay("...Memories. It feels like my life began again after meeting you, Leader.")
sm.sendSay("You saved me when I lost consciousness, and helped me train. "
"You even accepted me into the Shadowdealers...")

sm.setSpeakerID(gen)
sm.sendSay("You seem to have a few screws loose from your travels... "
"Well, I suppose you've learned how to be grateful now, huh?")
sm.sendSay("Memories... When the Nova General brought you into our hideout, you were covered in wounds.")
sm.sendSay("You took medicine when you were at death's door, but it left you comatose until you woke up recently.")
sm.sendSay("We only realized that your heart had bigger scars than your body after you got up...")
sm.sendSay("Ugh, I don't even want think about your past self. It was such a pain to bring you back to your senses.")

sm.setPlayerAsSpeaker()
sm.sendSay("Heh, but now I've grown up nicely. Don't you feel a little proud?")

sm.setSpeakerID(gen)
sm.sendSay("You arrogant rascal, I hope you repay me with everything you have later. "
"I'm a bit busy, so I'm signing off now.")
sm.sendSay("...Stop by any time you're feeling homesick. I'll be waiting for you, rookie.")

sm.startQuest(parentID)
sm.completeQuest(parentID)
sm.startQuest(recoveredMemory)
sm.setQRValue(recoveredMemory, "1", False)