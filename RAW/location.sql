CREATE TABLE mhw.location (
  location_id VARCHAR(2) NOT NULL,
  location_name VARCHAR(20) NOT NULL,
  PRIMARY KEY (location_id));

insert into location
  values ("AF","Ancient Forest"),
  ("CH","Coral Highlands"),
  ("WW","Wildspire Waste"),
  ("RV","Rotten Vale"),
  ("ER","Elder's Recess");
