import { TextField, Button, Typography, Box, Link } from "@mui/material";
import styles from "./account.module.scss"

function Account() {

    return (
        <div className={styles.AccountPage}>
            <Box className={styles.card}>
                <Typography className={styles.title}>LOG IN</Typography>

                <div className={styles.form}>
                    <TextField
                        label="Email Address"
                        variant="outlined"
                        fullWidth
                        size="medium"
                    />

                    <TextField
                        label="Password"
                        variant="outlined"
                        fullWidth
                        type="password"
                        size="medium"
                    />

                    <Link className={styles.forgot}>Forgot Password?</Link>

                    <Button
                        variant="contained"
                        fullWidth
                        className={styles.loginBtn}
                        disableElevation
                    >
                        LOG IN
                    </Button>
                </div>

                <div className={styles.divider} />

                <Typography className={styles.newText}>
                    New to Shoe All Brand?
                </Typography>

                <Button
                    variant="outlined"
                    fullWidth
                    className={styles.createBtn}
                >
                    CREATE ACCOUNT
                </Button>
            </Box>
        </div>
    )
}

export default Account