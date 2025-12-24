# Konpei
# 9120203
# Near the Hideout (Beautiful Sky) (801040101)
# Epilogue after defeating the Yakuza Boss.
# Konpei will also exchange a Yakuza Boss's Lantern for 100 Power Elixirs before going back to Showa Town.

boss_lantern = 4000141
power_elixir = 2000005

sm.sendNext("Wow, you really did it. Thinking about his singular obsession with controlling Showa Town, "
"I still get the creeps. I like to think this means things in town will finally be quiet, "
"but I've got a knot in my stomach that says otherwise. Anyways, for now let's celebrate the fact that the boss is gone.")
if sm.hasItem(boss_lantern):
    sm.sendSay("That's right! I'll hold onto the boss's lantern for safekeeping. "
    "Now that we know who he really was, I feel like more peaceful days may be ahead. "
    "I have to admit, discovering that he was a monster in disguise really caught me off guard.")
    if sm.canHold(power_elixir, 100):
        sm.consumeItem(boss_lantern)
        sm.giveItem(power_elixir, 100)
    else:
        sm.sendSayOkay("Make some room in your Use inventory first.")
        sm.dispose()
sm.sendSay("Well, cheers.")
sm.warp(801000000)
