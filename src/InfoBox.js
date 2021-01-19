import React from 'react'
import {
    Card,
    CardContent,
    Typography
} from "@material-ui/core";
function InfoBox({ title, cases, total }) {
    return (
        <Card className="infoBox">
            <CardContent>
                {/*Title* i.e. corona cases*/}
                <Typography className="infoBox__title" color="textSecondary">
                    {title}
                </Typography>

                {/*recovered* i.e. corona cases*/}
                <h2 className="infoBox__cases">{cases}</h2>

                {/*Death* i.e. corona cases*/}
                <Typography className="infoBox__total" color="textSecondary">
                    {total}
                </Typography>

            </CardContent>
        </Card>
    )
}

export default InfoBox
