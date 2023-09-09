import React from 'react'
import { Badge, ButtonBase, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

const Img = styled('img')({
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    // borderRadius: '16px',
});

const CartProductDisplayGrids = () => {
    return (
        <>
            {
                Array.from(Array(6)).map((_, index) => (
                    <Grid container key={index}
                        direction="row"
                        display={'flex'}
                        justifyContent={"center"}
                        sx={{
                            mx: 'auto',
                            mt: 6,
                        }}>
                        <Grid xs={3} md={3} item
                            display='flex'
                            justifyContent='center'
                            alignItems="center"
                            sx={{
                                mx: 'auto',
                            }}
                        >
                            <ButtonBase sx={{ width: 'auto', height: 80 }}>
                                <Img alt="complex" src="https://cdn.togetherv.com/yellow-white-floral-haldi-setup-decor-main_1665040175.webp" />
                            </ButtonBase>
                        </Grid>
                        <Grid xs={5} md={7} item container
                            display='flex'
                            direction="column"
                            justifyContent='center'
                            alignItems="center"
                            sx={{
                                mx: 'auto'
                            }}>
                            <Typography
                                variant="body2"
                                gutterBottom
                                sx={{
                                    mx: 2,
                                    textAlign: 'center'
                                }}

                            >
                                Full resolution 1920x1080 • JPEG
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                ID: 1030114
                            </Typography>
                        </Grid>
                        <Grid xs={3} md={1} item
                            sx={{
                                mx: 'auto'

                            }}>
                            <IconButton size="large" color="inherit" sx={{
                                mt: -1,
                                mx: 3,
                            }}>
                                <Badge color="error">
                                    <DeleteIcon sx={{ fontSize: 35 }} />
                                </Badge>
                            </IconButton>
                        </Grid>
                    </Grid>


                ))

            }
        </>
    )
}

export default CartProductDisplayGrids
