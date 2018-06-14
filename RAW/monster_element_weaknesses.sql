CREATE TABLE mhw.monster_element_weaknesses (
  id INT NOT NULL AUTO_INCREMENT,
  monster_id INT NOT NULL,
  element_id INT NOT NULL,
  weakness_level INT NOT NULL,
  PRIMARY KEY (id));
