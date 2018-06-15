CREATE TABLE mhw.monster (
  monster_id INT NOT NULL AUTO_INCREMENT,
  monster_name VARCHAR(15) NOT NULL,
  element VARCHAR(1) NOT NULL,
  species VARCHAR(3) NOT NULL,
  location VARCHAR(2) NOT NULL,
  smallest VARCHAR(10) NULL,
  largest VARCHAR(10) NULL,
  PRIMARY KEY (monster_id),
  INDEX fk_monster_1_idx (element ASC),
  INDEX fk_monster_1_idx1 (location ASC),
  CONSTRAINT fk_monster_element
    FOREIGN KEY (element)
    REFERENCES mhw.element (element_id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_monster_location
    FOREIGN KEY (location)
    REFERENCES mhw.location (location_id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
