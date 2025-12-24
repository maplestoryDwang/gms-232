# Konpei
# 9120202
# Nightmare's End (801040100)
# Warp from Nightmare's End to Near the Hideout (Beautiful Sky) if Yakuza Boss's Lantern is in your inventory.
# You will be sent back to the normal Near the Hideout map otherwise.

if sm.hasItem(4000141):
    sm.sendNext("Th-that lantern! You really defeated the boss...? You...! "
    "Wow, I don't know what to say... Let's just get the heck out of here!")
    sm.warpInstanceOut(801040101)
else:
    exit = sm.sendAskYesNo("What? Do you really want to leave now?")
    if exit:
        sm.warpInstanceOut(801040000)
