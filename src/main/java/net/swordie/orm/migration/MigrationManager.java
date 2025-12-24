package net.swordie.orm.migration;

import net.swordie.ms.ServerConstants;
import net.swordie.ms.connection.db.DatabaseManager;
import net.swordie.ms.util.Util;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.io.File;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Created on 02/06/2021.
 * MigrationManager to automatically run scripts placed in sql\\migration\\
 *
 * @author Asura
 */
public class MigrationManager {
    private static final Logger log = LogManager.getLogger();

    private static final MigrationVersionDao migrationVersionDao = new MigrationVersionDao();

    private static final String SQL_MIGRATION_FOLDER_PATH = ServerConstants.DIR + "/sql/migration";
    public static final String MIGRATION_HISTORY_TABLE_NAME = "migration_history";
    private static final String FILE_VERSION_FORMAT = "V%d_";
    private static final int MAX_SKIPS = 5;

    private List<MigrationVersion> versions = new ArrayList<>();


    /**
     * Start Migration Function statically
     *
     * @return Migration was successful
     */
    public static boolean start() {
        return new MigrationManager().migrate();
    }

    /**
     * Updates database by checking for new Migration files in sql/migration folder.
     *
     * @return
     */
    private boolean migrate() {
        var startTime = Util.getCurrentTime(); // for Time

        var latestMigrationVersion = 0; // default latestMigrationVersion as 0.

        // If Database does have a migration_history table.
        populateMigrationVersions(); // Populate the version history into 'versions'
        latestMigrationVersion = getLatestVersion(); // Update the latestMigrationVersion

        var result = executeMigrationScripts(latestMigrationVersion); // Execute all migration scripts that are above the latestMigrationVersion.

        var success = result.isSuccess();
        var executedScripts = result.getSuccessfulExecutes();
        var failureScript = result.getFailureScript();

        if (success) {
            if (executedScripts > 0) {
                log.info(String.format("Migrated database in %dms", Util.getCurrentTime() - startTime));
                log.info(String.format("[Migration] Successfully migrated. Executed %d files.", executedScripts));
            } else {
                log.info("[Migration] Database is up-to-date.");
            }
        } else {
            log.error(String.format("[Migration] Failed to Migrate!"));
            log.error(String.format("[Migration] Ran %d Successful scripts. Failed at %s", executedScripts, failureScript));
        }

        return success;
    }

    /**
     * Runs all scripts to become up-to-date with the latest migration version. This is done by reading sql/migration files.
     * Checking what the latest migration file is. and working it's way up to it.
     *
     * @param latestMigrationVersion latest Migration Version the database is currently on.
     * @return
     */
    private MigrationResult executeMigrationScripts(int latestMigrationVersion) {
        var nextMigrationVersion = latestMigrationVersion + 1;

        var success = true;
        var successfullyExecutedScripts = 0;
        var failureScript = "";

        var curSkip = 0;
        for (var version = nextMigrationVersion; curSkip <= MAX_SKIPS; version++) { // If max_skips amount of skips are reached, break the loop and claim to be done.
            var files = findMigrationFileNames(version); // Find the files corresponding to the version

            if (files.isEmpty()) {
                curSkip++;
                continue;
            } else {
                curSkip = 0;
            }

            var scriptRunFailure = false;
            for (var file : files) {
                var filename = file.getName();

                // If script_name has already been executed, skip.
                if (getMigrationByVersion(version).stream().map(MigrationVersion::getScriptName).toList().contains(filename)) {
                    continue;
                }

                success = executeMigrationScript(version, file); // Execute the SQL file
                if (success) { // If succeeded, add 1 to the successfullyExecutedScripts counter.
                    successfullyExecutedScripts++;
                }

                // If Failed to execute. Break the loop as we do not want to continue with other script files.
                if (!success) {
                    log.error(String.format("[Migration] Failed to execute %s", filename)); // Print the errors
                    failureScript = filename;
                    scriptRunFailure = true;
                    break;
                }
            }

            if (scriptRunFailure) {
                break;
            }
        }

        return new MigrationResult(success, successfullyExecutedScripts, failureScript);
    }

    /**
     * Executes a File's queries and if successful, updates the Migration History table to show that this migration file has been run.
     *
     * @param version
     * @param file
     * @return
     */
    private boolean executeMigrationScript(int version, File file) {
        // log.info(String.format("[Migration] Executing %s", filename));

        var success = DatabaseManager.executeFile(file); // Execute the file on the DatabaseManager

        // If file was executed successfully, Add the migration file details into migration_history. So we know it has been successfully executed.
        if (success) {
            addMigrationHistory(version, file.getName());
        }

        return success;
    }

    /**
     * Add Migration File Details into the 'migration_history' table.
     * Allowing us to track which files have been executed on the database.
     *
     * @param version
     * @param filename
     */
    private void addMigrationHistory(int version, String filename) {
        var query = "INSERT INTO migration_history(version, script_name, executed_at) values (?, ?, ?);";
        DatabaseManager.executeQuery(query, version, filename, LocalDateTime.now());
    }

    /**
     * Find all the SQL files corresponding to the version given.
     *
     * @param version
     * @return
     */
    private List<File> findMigrationFileNames(int version) {
        var versionString = String.format(FILE_VERSION_FORMAT, version); // Assuming file name goes along V{number}_{description}.sql structure
        File dir = new File(SQL_MIGRATION_FOLDER_PATH);

        // Grab sql/migration folder
        File[] files = dir.listFiles();
        List<File> ret = new ArrayList<>();
        if (files != null) {
            // Loop through all files in the migration folder
            for (var file : files) {

                // if the filename starts with V{version}_ than it is the correct SQL file, thus add it to the File List
                if (file.getName().startsWith(versionString) && file.getName().endsWith(".sql")) {
                    ret.add(file);
                }
            }
        }

        return ret;
    }

    /**
     * Extract all the current migration_history data and place it into List<MigrationVersion> versions.
     *
     */
    private void populateMigrationVersions() {
        versions = migrationVersionDao.getMigrationVersions();
    }

    /**
     * Obtain all the Successfully Executed Migration File Details by version.
     *
     * @param version
     * @return
     */
    private List<MigrationVersion> getMigrationByVersion(int version) {
        return versions.stream().filter(mv -> mv.getVersion() == version).collect(Collectors.toList());
    }

    /**
     * Gets the Latest version according to the database.
     * Checks if there are more files in the sql/migration/ folder than have been executed.
     * If there are more. return previous version.
     *
     * @return
     */
    private int getLatestVersion() {
        var latestVersion = versions.stream().map(MigrationVersion::getVersion).max(Integer::compare).orElse(0);
        
        // Compare Successfully Executed Migration Files of the latest version  with  All Files of the latest version.
        if (findMigrationFileNames(latestVersion).size() > getMigrationByVersion(latestVersion).size()) {
            // If not ALL files have been successfully executed, we redo that version. Thus see the current MigrationVersion as latestVersion - 1.
            return latestVersion - 1;
        }

        return latestVersion;
    }
}
