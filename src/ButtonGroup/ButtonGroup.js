import { Container } from "@mui/system"
import { Button, Typography, Grid } from "@mui/material";
import { useState } from "react";


const ButtonGroup = () => {
    const [button, setButton] = useState([]);
    const [buttonNumber, setButtonNumber] = useState(0)
    const [buttonStatus, setButtonStatus] = useState(false)

    const addButton = () => {
        setButton([...button, 0])
        
    }
    const buttonPusher=(num)=>{
        setButtonNumber(num)
        setButtonStatus(true)
    }

    return (
        <Container
            m={2}
            sx={{
                display: 'flex',
                bgcolor: ' #2a2c33',
                justifyItems: 'center',
                textAlign: 'center',
                flexDirection: 'column'
            }}>
            <Typography
                variant='h3'
                component='div'
                sx={{ mt: 2, mb: 2,color:'#FFFFFF' }}>
                Welcome to Button App
            </Typography>
            <Container>
                <Button variant="contained"
                    onClick={addButton}
                    margin={2}>
                    Add Button
                </Button>
                {buttonStatus ?
                    <Typography
                        variant='h6'
                        component='div'
                        sx={{ m: 0.5, color:'#FFFFFF' }}>
                        last Clicked= <b>{buttonNumber}</b>
                    </Typography> :
                    <></>
                }


            </Container>
            <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                sx={{ mt: 2 }}
                justifyContent="center">
                {button.map((button_1, index) => {
                    return (<Button
                        key={index}
                        variant="contained"
                        size="small"
                        xs={3}
                        sx={{ m: 0.5 }}
                        value={index + 1}
                        onClick={(e) =>
                         (buttonPusher(e.target.value))} >
                        {index + 1}
                    </Button>)
                })}
            </Grid>

        </Container>
    )
}

export default ButtonGroup