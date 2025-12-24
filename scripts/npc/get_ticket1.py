# Sunny
# 2012013
# Station<Ludibrium> (200000121)
# Warps to Ludibrium. Also allows entry to Abandoned Station - Ludibrium Bound if Rage Expression is active.

ludi = 220000100
abandonedStation = 200000123

rageExpression = 6512
crog = 8150000

def goToLudi():
    if sm.sendAskYesNo("Would you like to go to Ludibrium?"):
        sm.warp(ludi)

if sm.hasQuest(rageExpression):
    selection = sm.sendNext("If you have an airplane, you can fly to stations all over the world. "
    "Would you rather take an airplane than wait for a ship? It'll cost you 5,000 mesos to use the station. #b\r\n\r\n"
    "#L0# Board a ship. #l\r\n"
    "#L1# Ask about events related to #o" + repr(crog) + "#.#l")
    if selection == 0:
        goToLudi()
    else:
        sm.sendNext("Crimson Balrog has been hanging around the station, and it's becoming a real problem. "
        "It's so bad, we had to shut the station down! Plus, a while ago, he got my gloves... Ugh! "
        "I should've evacuated when I had the chance. Now what am I going to do?")

        sm.setPlayerAsSpeaker()
        sm.sendSay("Would you like help finding your gloves?")

        sm.setSpeakerID(parentID)
        response = sm.sendAskYesNo("Really?! Oh! That would be such a big help! "
        "#bCrimson Balrog#k usually appears at the #eAbandoned Station#n. "
        "Would you mind heading over there?")
        if response:
            sm.chat("Going to the Abandoned Station.")
            sm.warpInstanceIn(abandonedStation, False)
        else:
            sm.sendSayOkay("Come back if you change your mind later. My precious gloves...")
else:
    goToLudi()