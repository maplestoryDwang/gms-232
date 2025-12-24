# Used by most transport NPCs going to, or from Orbis across Victoria Island and Ossyria.

maps = {
    1032008 : [200000100, "Orbis"], # Cherry (Victoria Island)
    2012001 : [104020110, "Victoria Island"], # Rini (Orbis)
    2012021 : [240000100, "Leafre"], # Ramini (Orbis)
    2012025 : [260000100, "Ariant"], # Geras (Orbis)
    2041000 : [200000100, "Orbis"], # Tian (Ludi)
    2082001 : [200000100, "Orbis"], # Tommie (Leafre)
    2102000 : [200000100, "Orbis"] # Asesson (Ariant)
}

if parentID in maps:
    vals = maps[parentID]
    if sm.sendAskYesNo("Would you like to go to " + vals[1] + "?"):
        sm.warp(vals[0], 0)
else:
    sm.sendSayOkay("Not coded :(")
