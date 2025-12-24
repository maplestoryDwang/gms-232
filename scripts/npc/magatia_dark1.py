# Alcadno's Cabinet
# 2111010
# Dark Lab (926120000)
# Produces a Secret Document for [Magatia's Secret] An Incident, and the Missing Alchemist.

secretDocument = 4031708

# Player must be within 100 units on the cabinet's x-position to be considered "within reach"
currentPos = chr.getPosition()
xDistance = 100
if abs(sm.getPosition(objectID).getX() - (currentPos.getX())) < xDistance:
    if sm.canHold(secretDocument) and not sm.hasItem(secretDocument):
        sm.giveItem(secretDocument)
        sm.sendNext("(In the midst of darkness, you can feel a bookshelf on your finger tips... "
        "Looking closely, there appears to be a bundle of documents. This must be the document Bedin was talking about. "
        "Secure the document and head back to Bedin.)")
    elif sm.hasItem(secretDocument):
        sm.sendSayOkay("The bookshelf is now empty.")
    else:
        sm.sendNext("Unable to take the book due to your Etc. inventory being full.")
else:
    sm.sendSayOkay("You can't reach it. It's too far.")