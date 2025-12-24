# Ardin
# 2101003
# The Town of Ariant (260000200)
# Warps to Ariant Back Street to fight Adin again for Ardin's Sand Bandits.

ardinSandBandits = 3933
backStreet = 926000000

if sm.hasQuest(ardinSandBandits):
    response = sm.sendAskYesNo("Are you ready to fight my other self?")
    if response:
        sm.sendNext("Good. I like your confidence.")
        sm.warpInstanceIn(backStreet, False)
    else:
        sm.sendSayOkay("Remember, you can't become a member of the Sand Bandits without my approval. I'll be waiting.")
else:
    sm.sendSayOkay("I don't have the time to talk to you... In fact, I am not as free as you think.")