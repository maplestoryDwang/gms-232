# Ardin's Sand Bandits
# 3933
# Ardin (2101003)

ardin = 2101003

sm.setSpeakerID(ardin)
sm.sendNext("I didn't think you'd be this strong. I feel like you have what it takes to become a member of the Sand Bandits. "
"The most important aspect of being a member is power, and I think you have that. "
"I also... want to test you one more time, just to make sure you're the right one. What do you think? Can you handle it?")
response = sm.sendAskAccept("To truly see your strength, I'll have to face you myself. "
"Don't worry, I'll summon my other self to face off against you. Are you ready?")
if response:
    sm.sendNext("Good. I like your confidence.")
    sm.startQuest(parentID)
    sm.warpInstanceIn(926000000, False)
else:
    sm.sendSayOkay("Remember, you can't become a member of the Sand Bandits without my approval. I'll be waiting.")