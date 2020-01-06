/* eslint-disable react/prop-types */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring';
import Tournament from './Tournament.jsx'


const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const Fade = React.forwardRef(function Fade(props, ref) {
    const { in: open, children, onEnter, onExited, ...other } = props;
    const style = useSpring({
        from: { opacity: 0 },
        to: { opacity: open ? 1 : 0 },
        onStart: () => {
            if (open && onEnter) {
                onEnter();
            }
        },
        onRest: () => {
            if (!open && onExited) {
                onExited();
            }
        },
    });

    return (
        <animated.div ref={ref} style={style} {...other}>
            {children}
        </animated.div>
    );
});

export default function SpringModal(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
        console.log("hola")
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <button
                onClick={handleOpen}>
                <Tournament
                    type="button"
                    name={props.name}
                    description={props.description}
                    contact_name={props.contact_name}
                    contact_number={props.contact_number}
                    date_tournament = {props.date_tournament}
                    sport= {props.sport}
                    img= {props.img}
                />
            </button>

            {/* < type="button" onClick={handleOpen}> */}

            {/* </button> */}
            <Modal
                aria-labelledby="spring-modal-title"
                aria-describedby="spring-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h2 id="spring-modal-title">{props.name}</h2>
                        <p id="spring-modal-description">{props.description}</p>
                        <p id="spring-modal-name_contact">Nombre de contacto: {props.contact_name}</p>
                        <p id="spring-modal-number_contact">Nùmero de contacto: {props.contact_number}</p>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}