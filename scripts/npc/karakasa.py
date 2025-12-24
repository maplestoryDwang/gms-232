# Karcasa 
# 2101013 
# Tent of the Entertainers (260010600)
# Randomly warps you to Henesys, Ellinia, Perion, or Kerning City for 10,000 mesos.

import random

victoriaIsland = [
    100000000, # Henesys
    101000000, # Ellinia
    102000000, # Perion
    103000000 # Kerning City
]

init = sm.sendAskYesNo("I don't know how you found out about this, but you came to the right place! "
"For those who wandered around Nihal Desert and are getting homesick, I am offering a flight straight to Victoria Island, non-stop! "
"Don't worry about the flying ship--it's only fallen once or twice! "
"Don't you feel claustrophobic being in a long flight on that small ship? What do you think? "
"Are you willing to take the offer on this direct flight?")
if init:
    confirm = sm.sendAskYesNo("Please remember two things. "
    "One, this line is actually for overseas shipping, so #rI cannot guarantee exactly which town you'll land.#k "
    "Two, since I am putting you in this special flight, it'll be a bit expensive. The service charge is #b#e10,000 mesos#k#n. "
    "There's a flight that's about to take off. Are you interested?")
    if confirm:
        sm.sendNext("Okay, ready for takeoff!")
        
        if sm.getMesos() >= 10000:
            destination = random.choice(victoriaIsland)
            sm.deductMesos(10000)
            sm.warp(destination)
        else:
            sm.sendSayOkay("Wait, you don't have enough mesos. Sorry, but I'll have to stop you from boarding the flight.")
    else:
        sm.sendSayOkay("You don't have the mesos to spare, do you?")
else:
    sm.sendSayOkay("You look skeptical. You don't believe me?")