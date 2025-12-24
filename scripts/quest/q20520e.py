# Knight's Dignity
# 20520
# Neinhart (1101002)
# Lv50 mount quest for cygnus knight

sm.sendNext("Wow, you have already reached Level 50, yet why are you still walking around like that? I mean, you've reached Level 50, but you are still walking around with your own feet. That's an unusual behavior for a Knight like you.")
if sm.sendAskYesNo("Well, I suppose it's up to you, but by doing that, you also risk marring the pride and honor of the Empress. This is why I am here to give you a helpful pointer. It's called #bMonster Riding#k. Of course you're interested in this, right?"):
    sm.sendSayOkay("There's a special mount that only the Cygnus Knights can enjoy. If you are interested, come visit me at #bEreve.#k")

sm.completeQuest(20520)