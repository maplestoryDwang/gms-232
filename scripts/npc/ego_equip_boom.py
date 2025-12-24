from net.swordie.ms.client.character.items import BodyPart
from net.swordie.ms.constants import JobConstants

# Zero Weapon UI  |  Whilst AEEing, Zero Weapon Boomed

LAPIS = 2400009
LAZULI = 2400010
ALPHA = 2400005
BETA = 2400006

if not JobConstants.isZero(chr.getJob()):
    sm.dispose()

# Get Current Rank
oldLapis = chr.getEquippedItemByBodyPart(BodyPart.Weapon)
oldLazuli = chr.getEquippedItemByBodyPart(BodyPart.Shield)

# Reset Chuc (Stars)
oldLapis.setChuc(0)
oldLazuli.setChuc(0)

# Update
oldLapis.updateToChar(chr)
oldLazuli.updateToChar(chr)

# curRank = oldLapis.getItemId() - 1572000

# Create new Weapons
# newLapis = ItemData.getEquipDeepCopy(1572000 + curRank, False)
# newLazuli = ItemData.getEquipDeepCopy(1562000 + curRank, False)

# Get BodyPart
# bodyPartLapis = ItemConstants.getBodyPartFromItem(newLapis.getItemId(), chr.getAvatarData().getAvatarLook().getGender())
# bodyPartLazuli = ItemConstants.getBodyPartFromItem(newLazuli.getItemId(), chr.getAvatarData().getAvatarLook().getGender())

# Unequip & Remove Old Weapons
# chr.unequip(oldLapis)
# chr.unequip(oldLazuli)
# oldLapis.setBagIndex(0)
# oldLazuli.setBagIndex(0)
# chr.getEquipInventory().removeItem(oldLapis, True)
# chr.getEquipInventory().removeItem(oldLazuli, True)

# Equip new Weapons
# newLapis.setBagIndex(bodyPartLapis)
# newLazuli.setBagIndex(bodyPartLazuli)
# chr.equip(newLapis, 0, bodyPartLapis)
# chr.equip(newLazuli, 0, bodyPartLazuli)
# newLapis.updateToChar(chr)
# newLazuli.updateToChar(chr)


# Conversation:
sm.removeEscapeButton()
sm.setBoxChat(False)

sm.setSpeakerID(LAPIS)
sm.sendNext("#face2#It totally crumbled to #bdust#k! What have you done?! What am I going to do now?! Game over, man, #rGAME OVER#k! Put her in charge! I'm done for! Peace out!")

sm.sendNext("I'm sorry, I don't wanna hurt your feelings, you know? I mean, just because I'm awesome doesn't mean I'm totally insensitive.")

sm.sendNext("That weapon is just a vessel for my amazing power, and we can fix it, as long as me and Lazuli stay safe. Let's just get a little Time Power in here, and we'll be good as new.")

sm.sendNext("BOOM! Look at what I have done. It's perfect again! Ready to rain destruction! But don't think you can just go back to enhancing it all willy-nilly.")

sm.setSpeakerID(LAZULI)
sm.sendNext("#face2#We're supposed to break our enemies. NOT the other way around. How am I supposed to cut faces when I'm snapped in half?")

sm.setSpeakerID(LAPIS)
sm.sendNext("The psycho's right. Even if you repair us, we'll lose our #b#eBonus Stats and Potential#k#n after we break. So be careful with the goods, all right?")