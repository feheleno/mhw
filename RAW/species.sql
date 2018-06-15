CREATE TABLE mhw.species (
  species_id VARCHAR(3) NOT NULL,
  species_name VARCHAR(10) NOT NULL,
  PRIMARY KEY (species_id));

insert into species
  values ("bir","Bird"),
  ("bru","Brute"),
  ("fan","Fanged"),
  ("fly","Flying"),
  ("pis","Piscine"),
  ("eld","Elder");
