# Lana's Dream
# 6517
# Lana (1052121)

lana = 1052121

panicky = 5160020
ouch = 5160024
googoo = 5160028

sm.setSpeakerID(lana)
response = sm.sendNext(sm.join(["Okay, show me...the depth of your love! \r\n"
"#L0##i", repr(googoo), "##l\r\n"
"#L1##i", repr(ouch), "##l\r\n"
"#L2##i", repr(panicky), "##l\r\n"]))
if response == 0:
    sm.giveItem(googoo)
    sm.completeQuest(parentID)
    
    sm.sendNext("Wow...I didn't want to tell you this, but I can't keep this to myself any longer. "
    "Remember what I said when I first saw you? That you could be a big star? Well, I take it back...")
    sm.sendSay("You're just too good! That Charm, those acting skills...you have no flaws! "
    "You're too much of a big shot for a company like Big Hit Records to represent. "
    "We're...we're not good enough for you.")
    sm.sendSay("So, we're giving up on you. Maybe you'll be a celebrity someday, with that Charm of yours... "
    "Then we will meet again.")
else:
    sm.sendSayOkay("Hm...that didn't actually look as if you fell in love, did it? How about we try that again?")