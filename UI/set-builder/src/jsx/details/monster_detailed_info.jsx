import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import MM from '../monster_material.jsx'
import MAW from '../monster_ailment_weakness.jsx'
import MEW from '../monster_element_weakness.jsx'
import MBP from '../monster_breakable_part.jsx'
import monster from '../../json/monster.json'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class MonsterDetailedInfo extends React.Component {
render(){
const { classes } = this.props;
return(
<React.Fragment>
    <Paper className={classes.paper} style={{backgroundColor: 'rgba(96, 70, 70, 0.7)'}}>
    <Paper className={classes.paper} style={{backgroundColor: 'rgba(176, 133, 133, 0.5)'}}>
        <Grid container spacing={8} alignItems="stretch">
            <Grid item md={4}>
                <Card>
                    <CardHeader title="Ailment Weakness" />
                    <CardContent>
                        <Table>
                            <TableBody>
                                <MAW
                                  monster_id={monster[6].monster_id}
                                />
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item md={4}>
                <Card>
                    <CardHeader title="Element Weakness" />
                    <CardContent>
                        <Table>
                            <TableBody>
                                <MEW
                                  monster_id={monster[6].monster_id}
                                />
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item md={4}>
                <Card>
                    <CardHeader title="Breakable Parts"/>
                    <CardContent>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell>
                                        <Typography variant='subheading'>Sever</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant='subheading'>Blunt</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant='subheading'>Ammo</Typography>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <MBP
                                  monster_id={monster[6].monster_id}
                                />
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item md={12}>
                <Card>
                    <CardHeader title="Monster Materials" />
                    <CardContent>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>
                                        <Typography variant='subheading'>Material</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant='subheading'>Rarity</Typography>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <MM
                                    monster_id={monster[6].monster_id}
                                />
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </Paper>
</Paper>
</React.Fragment>
);}
}

MonsterDetailedInfo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MonsterDetailedInfo);
