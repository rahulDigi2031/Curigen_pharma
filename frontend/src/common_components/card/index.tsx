import {Card as MuiCard , CardActions, CardContent, Typography} from "@mui/material"
import { CardTypes } from "./types"

const Card: React.FC<CardTypes> = ({
    title,
    content,
    actions,
    children,
    sx,
    variant = 'elevation'
  }) => {
    return (
      <MuiCard sx={sx} variant={variant}>
        {title && (
          <CardContent>
            <Typography variant="h6" gutterBottom>
              {title}
            </Typography>
            {content}
            {children}
          </CardContent>
        )}
  
        {!title && content && (
          <CardContent>
            {content}
          </CardContent>
        )}
  
        {actions && (
          <CardActions>
            {actions}
          </CardActions>
        )}
      </MuiCard>
    )
  }
  
  export default Card