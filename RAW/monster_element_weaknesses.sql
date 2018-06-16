CREATE TABLE mhw.monster_element_weaknesses (
  mew_id INT NOT NULL AUTO_INCREMENT,
  monster_id INT NOT NULL,
  element_id VARCHAR(1) NOT NULL,
  wekness_level INT NOT NULL,
  PRIMARY KEY (mew_id),
  INDEX fk_monster_element_weaknesses_1_idx (monster_id ASC),
  INDEX fk_monster_element_weaknesses_2_idx (element_id ASC),
  CONSTRAINT fk_mew_monster
    FOREIGN KEY (monster_id)
    REFERENCES mhw.monster (monster_id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_mew_element
    FOREIGN KEY (element_id)
    REFERENCES mhw.element (element_id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
