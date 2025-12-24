package net.swordie.ms.enums.customscripts;

import net.swordie.ms.world.field.Portal;

import java.util.Arrays;

public enum CustomPortalScript {

    // NameOfScript(FieldId, PortalId)
    amoria_pq_stage2_exit(670010300, 8),
    chuchu_slurpy_tree_habitat_exit(450002250, 1),
    ;

    private final int fieldId;
    private final int portalId;

    CustomPortalScript(int fieldId, int portalId) {
        this.fieldId = fieldId;
        this.portalId = portalId;
    }

    public static void applyCustomScript(Portal portal, int fieldId, int portalId) {
        var customScript = Arrays.stream(values())
                .filter(cps -> cps.fieldId == fieldId && cps.portalId == portalId)
                .findFirst().orElse(null);

        if (customScript != null) {
            portal.setScript(customScript.name());
        }
    }
}
