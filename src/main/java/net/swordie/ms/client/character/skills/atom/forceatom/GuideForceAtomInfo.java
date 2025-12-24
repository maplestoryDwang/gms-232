package net.swordie.ms.client.character.skills.atom.forceatom;

import net.swordie.ms.util.Rect;

/**
 * Created on 06/04/2021.
 *
 * @author Asura
 */
public class GuideForceAtomInfo {
    public int type;
    public int faKey, chrId;
    public int interactionObjId;
    public int mobId;

    // Type 2
    public int count;
    public boolean flip;

    // Typ 3
    public int path1, path2;

    // Default
    public Rect rect;
}
