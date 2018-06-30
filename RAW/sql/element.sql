CREATE TABLE mhw.element (
  element_id VARCHAR(2) NOT NULL,
  element_name VARCHAR(10) NOT NULL,
  PRIMARY KEY (element_id));

insert into element
  values ("F","Fire"),
  ("W","Water"),
  ("T","Thunder"),
  ("D","Dragon"),
  ("I","Ice"),
  ("NE", "No Element");
