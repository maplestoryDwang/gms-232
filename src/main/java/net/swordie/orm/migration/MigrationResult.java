package net.swordie.orm.migration;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Created on 02/06/2021.
 *
 * @author Asura
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class MigrationResult {
    private boolean success;
    private int successfulExecutes;
    private String failureScript;
}
