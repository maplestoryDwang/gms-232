# Leafre: Station
# 240000110
# User enter script
# Removes the Mini Draco Morph from the player upon entry if it's currently applied.
# Also plays a *loud* boat whistle like contiMove_Whistle.

from net.swordie.ms.client.character.skills.temp import CharacterTemporaryStat

# ID 16 corresponds to the Mini Draco morph
if sm.getnOptionByCTS(CharacterTemporaryStat.Morph) == 16:
    sm.removeCTS(CharacterTemporaryStat.Morph)
sm.playSound("advStory/whistle")
