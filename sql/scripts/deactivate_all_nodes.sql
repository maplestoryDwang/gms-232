DELETE FROM skills WHERE skillid between 400000000 and 400070000;  # Delete all V skills
UPDATE matrix_records SET position = -1;  # Move them to 'inactive'